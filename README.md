# Helpful Co-op OS

This monorepo hosts the MVP for Helpful's cooperative operating system. It is organized with pnpm workspaces and includes a Next.js web app along with shared packages for API, database, and UI code.

## Repository Structure

- **apps/web** – Next.js 14 application using the App Router
- **packages/api** – tRPC router and API route handlers
- **packages/db** – Prisma schema and database utilities
- **packages/ui** – Shared React components

## Development

### Prerequisites

- Node.js 18+
- pnpm 8+
- PostgreSQL (for Prisma database)

### Install and Run

```bash
pnpm install
pnpm dev
```

The `dev` script runs the web application from `apps/web`.

## Vercel Deployment

1. Push this repository to GitHub or your preferred Git provider.
2. In the [Vercel dashboard](https://vercel.com), create a new project and import the repository.
3. When asked for the project settings:
   - **Root Directory**: `apps/web`
   - **Install Command**: `pnpm install`
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
4. Configure the required environment variables under *Settings → Environment Variables*:
   - `DATABASE_URL` – PostgreSQL connection string
   - `NEXTAUTH_SECRET` – secret for NextAuth
   - `STRIPE_SECRET_KEY` – Stripe API key (test mode)
   - `S3_ENDPOINT`, `REDIS_URL`, and any other integration keys as needed
5. Click **Deploy**. Vercel will build the Next.js application and provide a preview URL. Promote the build to production when ready.

## Testing

Run the test script:

```bash
pnpm test
```

(At present this outputs a placeholder message until tests are added.)

## License

MIT
