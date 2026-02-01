# Testa Marketing Web

A monorepo containing the Testa marketing websites, built with [Next.js](https://nextjs.org) and [Turborepo](https://turbo.build/repo).

## Project Structure

```
apps/
  shopify-landing/    # Shopify landing page (port 3000)
  native-landing/     # Native landing page (port 3001)
```

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm 9.x

### Installation

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

- Shopify landing: [http://localhost:3000](http://localhost:3000)
- Native landing: [http://localhost:3001](http://localhost:3001)

### Build

```bash
pnpm build
```

### Other Commands

```bash
pnpm lint        # Run linting
pnpm type-check  # Run TypeScript type checking
pnpm clean       # Clean build artifacts and node_modules
pnpm format      # Format code with Prettier
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
