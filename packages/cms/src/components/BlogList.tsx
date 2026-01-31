"use client";

import { cn } from "@testa/utils";
import type { BlogPost } from "@testa/utils";
import { BlogCard } from "./BlogCard";

export interface BlogListProps {
  posts: BlogPost[];
  className?: string;
  getHref?: (post: BlogPost) => string;
}

export function BlogList({ posts, className, getHref }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <p className="text-gray-500 dark:text-gray-400">No posts found.</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
          href={getHref?.(post)}
        />
      ))}
    </div>
  );
}
