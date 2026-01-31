"use client";

import { useState } from "react";
import { cn } from "@testa/utils";
import type { FAQItem } from "@testa/utils";

export interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  return (
    <div className={cn("w-full max-w-3xl", className)}>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {sortedItems.map((item) => (
          <FAQItemComponent
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface FAQItemComponentProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
  return (
    <div className="py-4">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {item.question}
        </span>
        <span
          className={cn(
            "ml-4 flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        >
          <ChevronIcon />
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "mt-3 max-h-96" : "max-h-0"
        )}
      >
        <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
      </div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
