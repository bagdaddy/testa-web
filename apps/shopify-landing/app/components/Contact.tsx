"use client";

import { useState } from "react";

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
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
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
        className="h-[48px] bg-[rgba(249,248,255,0.1)] rounded-[4px] px-3 text-[14px] text-[#f9f8ff] placeholder:text-[#93919d] outline-none focus:ring-1 focus:ring-[#f9f8ff]/30"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      />
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    hasDeveloper: "yes",
    monthlyRevenue: "+300K",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend connection will be added later
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[#f9f8ff] px-5 py-12">
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <InputField
                  label="Enter your name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, name: value }))
                  }
                />
                <InputField
                  label="Enter your business email"
                  placeholder="testa@example.com"
                  type="email"
                  value={formData.email}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, email: value }))
                  }
                />
                <InputField
                  label="Website to optimize"
                  placeholder="www.example.com"
                  value={formData.website}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, website: value }))
                  }
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

              <button
                type="submit"
                className="w-full h-[56px] bg-[#f9f8ff] text-[#221f38] font-bold text-[20px] rounded-full hover:bg-[#e8e7f0] transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Let&apos;s Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
