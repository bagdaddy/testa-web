"use client";

import { cn } from "@testa/utils";
import type { BlogPost } from "@testa/utils";

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
  href?: string;
}

export function BlogCard({ post, className, href }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(post.publishedAt);

  const Card = href ? "a" : "div";

  return (
    <Card
      href={href}
      className={cn(
        "block rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow",
        className
      )}
    >
      {post.coverImage && (
        <div className="aspect-video bg-gray-100 dark:bg-gray-700">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3">
          {post.author.avatar && (
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
          )}
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {post.author.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
