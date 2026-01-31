/**
 * Shared types across all apps and packages
 */

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
}

export interface Lead {
  id: string;
  email: string;
  name?: string;
  company?: string;
  source: "shopify" | "native" | "direct";
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  coverImage?: string;
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
}

export interface HelpArticle {
  id: string;
  slug: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  updatedAt: Date;
}
