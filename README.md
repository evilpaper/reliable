# Reliable

Reliable is an online training provider offering tailor made industry specific workplace compliance courses for workers on the fly.

# Tech stack

- Next.js
- React (obvious)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Drizzle
- Supabase
- Playwright

# Local setup

### 1. Install dependencies

Use pnpm to install dependencies.

```
pnpm install
```

# Run in development

```
pnpm dev
```

# Database

The project use Drizzle as ORM.

When making changes in the schema run `npm db:generate` to generate migration. Then run `npm db:migrate` to apply the migration.

# Structure

## Components

shadcn/ui is used for basic UI components. Each shadcn/ui components go into the `/components/ui` folder.
Custom components, usually made up of shadcn/ui components, lives directly under the `/components` folder.
