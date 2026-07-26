# Development Workflow

## Local setup

1. Install dependencies with pnpm.
2. Copy `.env.example` to `.env`.
3. Start infrastructure using Docker Compose.
4. Run development services.

## Package strategy

Reusable domain logic belongs in `packages/`.
Applications belong in `apps/`.
