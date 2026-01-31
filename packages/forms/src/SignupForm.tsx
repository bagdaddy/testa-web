"use client";

import { useState } from "react";
import { cn } from "@testa/utils";
import type { Lead } from "@testa/utils";

export interface SignupFormProps {
  source: Lead["source"];
  onSuccess?: (lead: Omit<Lead, "id" | "createdAt">) => void;
  onError?: (error: Error) => void;
  className?: string;
  submitLabel?: string;
  showCompanyField?: boolean;
}

export function SignupForm({
  source,
  onSuccess,
  onError,
  className,
  submitLabel = "Get Started",
  showCompanyField = false,
}: SignupFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const lead: Omit<Lead, "id" | "createdAt"> = {
        email,
        name: name || undefined,
        company: showCompanyField ? company || undefined : undefined,
        source,
      };

      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onSuccess?.(lead);
      setEmail("");
      setName("");
      setCompany("");
    } catch (error) {
      onError?.(error instanceof Error ? error : new Error("Signup failed"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-4 w-full max-w-md", className)}
    >
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
      />
      {showCompanyField && (
        <input
          type="text"
          placeholder="Company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
        />
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Signing up..." : submitLabel}
      </button>
    </form>
  );
}
