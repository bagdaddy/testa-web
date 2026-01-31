"use client";

import { cn } from "@testa/utils";

export interface ArticleContentProps {
  content: string;
  className?: string;
}

/**
 * Renders article content with basic markdown-like styling
 * For production, consider using a proper markdown renderer like react-markdown
 */
export function ArticleContent({ content, className }: ArticleContentProps) {
  return (
    <article
      className={cn(
        "prose prose-lg dark:prose-invert max-w-none",
        "prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-gray-100",
        "prose-p:text-gray-600 dark:prose-p:text-gray-400",
        "prose-a:text-blue-600 dark:prose-a:text-blue-400",
        "prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded",
        className
      )}
    >
      {/* Basic rendering - replace with proper markdown parser in production */}
      <div dangerouslySetInnerHTML={{ __html: parseBasicMarkdown(content) }} />
    </article>
  );
}

/**
 * Very basic markdown parser for demo purposes
 * In production, use a proper library like react-markdown or marked
 */
function parseBasicMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Code
    .replace(/`(.*?)`/g, "<code>$1</code>")
    // Line breaks
    .replace(/\n/g, "<br />");
}
