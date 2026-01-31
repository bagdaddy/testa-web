"use client";

import { useState } from "react";
import { cn } from "@testa/utils";

export interface NewsletterFormProps {
  onSuccess?: (email: string) => void;
  onError?: (error: Error) => void;
  className?: string;
  placeholder?: string;
  submitLabel?: string;
}

export function NewsletterForm({
  onSuccess,
  onError,
  className,
  placeholder = "Enter your email",
  submitLabel = "Subscribe",
}: NewsletterFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onSuccess?.(email);
      setEmail("");
    } catch (error) {
      onError?.(error instanceof Error ? error : new Error("Subscription failed"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col sm:flex-row gap-3 w-full max-w-md", className)}
    >
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
      >
        {isLoading ? "..." : submitLabel}
      </button>
    </form>
  );
}
