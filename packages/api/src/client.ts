import createClient, { type Client } from "openapi-fetch";
// Import generated types when available
// import type { paths } from "./generated/api";

/**
 * Placeholder paths type - replace with generated types
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type PlaceholderPaths = {};

/**
 * API Client Configuration
 */
export interface ApiClientConfig {
  baseUrl: string;
  headers?: Record<string, string>;
}

/**
 * API Client instance type
 * Replace 'PlaceholderPaths' with 'paths' once you generate types from your OpenAPI spec
 */
export type ApiClient = Client<PlaceholderPaths>;

/**
 * Create a type-safe API client
 *
 * Usage:
 * 1. Generate types: `pnpm --filter @testa/api generate:local` (with local openapi.yaml)
 *    or `OPENAPI_SPEC_URL=https://api.example.com/openapi.json pnpm --filter @testa/api generate`
 *
 * 2. Update this file to import the generated types:
 *    import type { paths } from "./generated/api";
 *    export type ApiClient = Client<paths>;
 *
 * 3. Use the client:
 *    const api = createApiClient({ baseUrl: "https://api.example.com" });
 *    const { data, error } = await api.POST("/auth/signup", {
 *      body: { email: "user@example.com", password: "..." }
 *    });
 */
export function createApiClient(config: ApiClientConfig): ApiClient {
  return createClient({
    baseUrl: config.baseUrl,
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
    },
  });
}
