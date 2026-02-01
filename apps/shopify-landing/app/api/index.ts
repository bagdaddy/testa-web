import { Marketing } from "./Marketing";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://test.testa-soft.tech/api";

export const marketingApi = new Marketing({
  baseUrl: API_BASE_URL,
});

export * from "./data-contracts";
