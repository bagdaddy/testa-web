/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## (manually trimmed to include only Marketing types)        ##
 * ---------------------------------------------------------------
 */

export interface CreateMarketingLeadPayload {
  /**
   * Lead's full name.
   * @example "John Doe"
   */
  name?: string;
  /**
   * Lead's email address.
   * @format email
   * @example "john@example.com"
   */
  email: string;
  /**
   * Lead's website URL.
   * @format url
   * @example "https://example.com"
   */
  website?: string;
  /**
   * Client type: shopify or native integration.
   * @example "shopify"
   */
  type: "shopify" | "native";
  /** Additional custom fields. */
  fields?: {
    /** @example "50k-100k" */
    revenue?: string;
    /** @example true */
    has_developer?: boolean;
  };
  /**
   * Honeypot field. Must be empty.
   * @example ""
   */
  _hp?: string;
}

export interface CreateMarketingLeadResponse {
  /** @example true */
  success?: boolean;
}

export interface ValidationErrorResponse {
  /** @example "The email field is required." */
  message?: string;
  errors?: {
    [key: string]: string[];
  };
}

export interface RateLimitErrorResponse {
  /** @example "Too Many Attempts." */
  message?: string;
}
