"use client";

import { useState, useRef } from "react";
import { marketingApi, CreateMarketingLeadPayload } from "../api";

// Rate limiting: 2 requests per 5 minutes
const RATE_LIMIT_MAX = 2;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

function getRateLimitState(): { count: number; resetTime: number } {
  if (typeof window === "undefined") return { count: 0, resetTime: 0 };

  const stored = localStorage.getItem("contact_rate_limit");
  if (!stored) return { count: 0, resetTime: 0 };

  try {
    const state = JSON.parse(stored);
    // Reset if window has passed
    if (Date.now() > state.resetTime) {
      return { count: 0, resetTime: 0 };
    }
    return state;
  } catch {
    return { count: 0, resetTime: 0 };
  }
}

function incrementRateLimit(): boolean {
  const state = getRateLimitState();

  // If we're at the limit and window hasn't passed, deny
  if (state.count >= RATE_LIMIT_MAX && Date.now() < state.resetTime) {
    return false;
  }

  // Reset window if needed
  const newState = {
    count: state.resetTime > Date.now() ? state.count + 1 : 1,
    resetTime: state.resetTime > Date.now() ? state.resetTime : Date.now() + RATE_LIMIT_WINDOW_MS,
  };

  localStorage.setItem("contact_rate_limit", JSON.stringify(newState));
  return true;
}

type RadioOption = {
  value: string;
  label: string;
};

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex gap-8 items-center">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className="flex gap-[6px] items-center"
        >
          {value === option.value ? (
            <img
              src="/contact/radio-selected.svg"
              alt=""
              className="w-[23px] h-[23px]"
            />
          ) : (
            <div className="w-[23px] h-[23px] rounded-full border-2 border-[#f9f8ff]" />
          )}
          <span
            className={`text-[12px] text-[#f9f8ff] ${
              value === option.value ? "font-bold" : "font-normal"
            }`}
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {option.label}
          </span>
        </button>
      ))}
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        className="text-[16px] font-semibold text-[#f9f8ff] pl-3"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-[48px] bg-[rgba(249,248,255,0.1)] rounded-[4px] px-3 text-[14px] text-[#f9f8ff] placeholder:text-[#93919d] outline-none focus:ring-1 focus:ring-[#f9f8ff]/30 ${
          error ? "ring-1 ring-red-400" : ""
        }`}
        style={{ fontFamily: "var(--font-dm-sans)" }}
      />
      {error && (
        <p className="text-red-400 text-[12px] pl-3">{error}</p>
      )}
    </div>
  );
}

type FormStatus = "idle" | "submitting" | "success" | "error" | "rate_limited";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    hasDeveloper: "yes",
    monthlyRevenue: "+300K",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Honeypot field - should remain empty
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot - if filled, silently "succeed" (bot detected)
    if (honeypotRef.current && honeypotRef.current.value) {
      setStatus("success");
      return;
    }

    // Check client-side rate limit
    if (!incrementRateLimit()) {
      setStatus("rate_limited");
      setErrorMessage("Too many requests. Please try again in a few minutes.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors({});

    const payload: CreateMarketingLeadPayload = {
      name: formData.name || undefined,
      email: formData.email,
      website: formData.website || undefined,
      type: "shopify",
      fields: {
        revenue: formData.monthlyRevenue,
        has_developer: formData.hasDeveloper === "yes",
      },
      _hp: honeypotRef.current?.value || "",
    };

    try {
      const response = await marketingApi.createMarketingLead(payload);

      if (response.ok) {
        setStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          website: "",
          hasDeveloper: "yes",
          monthlyRevenue: "+300K",
        });
      } else {
        const errorData = response.data as { message?: string; errors?: Record<string, string[]> };

        if (response.status === 429) {
          setStatus("rate_limited");
          setErrorMessage("Too many requests. Please try again later.");
        } else if (response.status === 422 && errorData.errors) {
          setStatus("error");
          setErrorMessage(errorData.message || "Please check the form for errors.");
          // Map field errors
          const errors: Record<string, string> = {};
          for (const [field, messages] of Object.entries(errorData.errors)) {
            errors[field] = messages[0];
          }
          setFieldErrors(errors);
        } else {
          setStatus("error");
          setErrorMessage(errorData.message || "Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="bg-[#f9f8ff] px-5 py-12">
      <div
        className="max-w-[1400px] mx-auto rounded-[24px] px-6 py-12 xl:px-[180px] xl:py-[96px] overflow-hidden"
        style={{
          background: `
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 1400 719' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.63'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(44.313 -0.34 0.22179 28.577 956.87 602.39)'><stop stop-color='rgba(138,146,255,1)' offset='0'/><stop stop-color='rgba(138,146,255,0)' offset='1'/></radialGradient></defs></svg>"),
            linear-gradient(168deg, rgb(17, 11, 54) 50%, rgb(22, 0, 158) 102%)
          `,
        }}
      >
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-6">
          {/* Left side - Heading */}
          <div className="flex flex-col gap-4 xl:w-[504px]">
            <h2
              className="text-[32px] xl:text-[44px] font-medium leading-[40px] xl:leading-[50px] text-[#f9f8ff]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <em className="font-normal italic">Let&apos;s talk about </em>
              growth, profit, and anything on your mind
            </h2>
            <p
              className="text-[16px] xl:text-[18px] leading-normal text-[#f9f8ff]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Discuss growth, profit, and any goals you want to explore
            </p>
          </div>

          {/* Right side - Form */}
          <div className="xl:w-[504px]">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#f9f8ff] flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="#110b36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[24px] font-bold text-[#f9f8ff]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Thank you!
                </h3>
                <p className="text-[16px] text-[#f9f8ff]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Honeypot field - hidden from users, visible to bots */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="_hp"
                  autoComplete="off"
                  tabIndex={-1}
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                    height: 0,
                    width: 0,
                  }}
                />

                <div className="flex flex-col gap-6">
                  <InputField
                    label="Enter your name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, name: value }))
                    }
                    error={fieldErrors.name}
                  />
                  <InputField
                    label="Enter your business email"
                    placeholder="testa@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, email: value }))
                    }
                    error={fieldErrors.email}
                  />
                  <InputField
                    label="Website to optimize"
                    placeholder="www.example.com"
                    value={formData.website}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, website: value }))
                    }
                    error={fieldErrors.website}
                  />

                  {/* Developer question */}
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      className="text-[16px] font-semibold text-[#f9f8ff] pl-3"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Do you have a developer that helps you with &quot;website
                      stuff&quot;?
                    </label>
                    <div className="pl-3">
                      <RadioGroup
                        name="hasDeveloper"
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                        ]}
                        value={formData.hasDeveloper}
                        onChange={(value) =>
                          setFormData((prev) => ({ ...prev, hasDeveloper: value }))
                        }
                      />
                    </div>
                  </div>

                  {/* Monthly revenue */}
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      className="text-[16px] font-semibold text-[#f9f8ff] pl-3"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Monthly revenue
                    </label>
                    <div className="pl-3">
                      <RadioGroup
                        name="monthlyRevenue"
                        options={[
                          { value: "+300K", label: "+300K" },
                          { value: "+1MM", label: "+1MM" },
                          { value: "+5MM", label: "+5MM" },
                        ]}
                        value={formData.monthlyRevenue}
                        onChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            monthlyRevenue: value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Error message */}
                {(status === "error" || status === "rate_limited") && errorMessage && (
                  <p className="text-red-400 text-[14px] text-center">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full h-[56px] bg-[#f9f8ff] text-[#221f38] font-bold text-[20px] rounded-full hover:bg-[#e8e7f0] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {status === "submitting" ? "Sending..." : "Let's Talk"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
