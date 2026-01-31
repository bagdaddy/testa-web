import type { BlogPost, Author, HelpArticle, FAQItem } from "@testa/utils";

/**
 * CMS Client Configuration
 */
export interface CMSConfig {
  apiUrl: string;
  apiKey?: string;
  preview?: boolean;
}

/**
 * Abstract CMS Client
 * Can be extended for specific CMS providers (Contentful, Sanity, etc.)
 */
export class CMSClient {
  protected config: CMSConfig;

  constructor(config: CMSConfig) {
    this.config = config;
  }

  /**
   * Fetch all blog posts
   */
  async getBlogPosts(): Promise<BlogPost[]> {
    // TODO: Implement actual CMS integration
    return this.getMockBlogPosts();
  }

  /**
   * Fetch a single blog post by slug
   */
  async getBlogPost(slug: string): Promise<BlogPost | null> {
    const posts = await this.getBlogPosts();
    return posts.find((post) => post.slug === slug) ?? null;
  }

  /**
   * Fetch all help articles
   */
  async getHelpArticles(): Promise<HelpArticle[]> {
    // TODO: Implement actual CMS integration
    return this.getMockHelpArticles();
  }

  /**
   * Fetch a single help article by slug
   */
  async getHelpArticle(slug: string): Promise<HelpArticle | null> {
    const articles = await this.getHelpArticles();
    return articles.find((article) => article.slug === slug) ?? null;
  }

  /**
   * Fetch FAQ items
   */
  async getFAQItems(): Promise<FAQItem[]> {
    // TODO: Implement actual CMS integration
    return this.getMockFAQItems();
  }

  /**
   * Mock blog posts for development
   */
  private getMockBlogPosts(): BlogPost[] {
    const author: Author = {
      id: "1",
      name: "Testa Team",
      avatar: "/images/team-avatar.png",
      bio: "The Testa product team shares insights on automation and testing.",
    };

    return [
      {
        id: "1",
        slug: "getting-started-with-testa",
        title: "Getting Started with Testa",
        excerpt:
          "Learn how to set up Testa and start automating your quality assurance workflow.",
        content:
          "# Getting Started with Testa\n\nWelcome to Testa! This guide will help you get started...",
        author,
        publishedAt: new Date("2024-01-15"),
        tags: ["tutorial", "getting-started"],
        coverImage: "/images/blog/getting-started.png",
      },
      {
        id: "2",
        slug: "best-practices-qa-automation",
        title: "Best Practices for QA Automation",
        excerpt:
          "Discover the best practices for implementing effective QA automation in your team.",
        content:
          "# Best Practices for QA Automation\n\nAutomation is key to efficient testing...",
        author,
        publishedAt: new Date("2024-01-22"),
        tags: ["best-practices", "automation"],
        coverImage: "/images/blog/best-practices.png",
      },
    ];
  }

  /**
   * Mock help articles for development
   */
  private getMockHelpArticles(): HelpArticle[] {
    return [
      {
        id: "1",
        slug: "how-to-create-test-cases",
        title: "How to Create Test Cases",
        content: "# How to Create Test Cases\n\nCreating test cases in Testa is simple...",
        category: "Getting Started",
        tags: ["test-cases", "tutorial"],
        updatedAt: new Date("2024-01-20"),
      },
      {
        id: "2",
        slug: "integrating-with-ci-cd",
        title: "Integrating with CI/CD",
        content: "# Integrating with CI/CD\n\nTesta integrates seamlessly with popular CI/CD platforms...",
        category: "Integrations",
        tags: ["ci-cd", "integration", "devops"],
        updatedAt: new Date("2024-01-18"),
      },
    ];
  }

  /**
   * Mock FAQ items for development
   */
  private getMockFAQItems(): FAQItem[] {
    return [
      {
        id: "1",
        question: "What is Testa?",
        answer:
          "Testa is a comprehensive QA automation platform that helps teams streamline their testing workflow.",
        category: "General",
        order: 1,
      },
      {
        id: "2",
        question: "How do I get started?",
        answer:
          "Sign up for a free account, install our SDK, and follow our getting started guide to create your first test.",
        category: "Getting Started",
        order: 2,
      },
      {
        id: "3",
        question: "What integrations are supported?",
        answer:
          "Testa integrates with popular tools like GitHub, GitLab, Jira, Slack, and all major CI/CD platforms.",
        category: "Integrations",
        order: 3,
      },
    ];
  }
}

/**
 * Create a CMS client instance
 */
export function createCMSClient(config: CMSConfig): CMSClient {
  return new CMSClient(config);
}
