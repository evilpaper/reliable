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

# Influential functional requirements

- Customers can browse the app without being authenticated.
- Customers can add course to a shopping cart (with or without authentication).
- Customers can try a lesson of a course without being authenticated.
- Customers can be invited to a course via email.
- Customers can complete a course with only the email, without being authenticated.
- After purchase customers can decide who the course is for via email.
- The course content can be consumed in any language. Written or spoken.

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

When making changes in the schema run `pnpm db:generate` to generate migration. Then run `pnpm db:migrate` to apply the migration.

## Components

shadcn/ui is used for basic UI components. Each shadcn/ui components go into the `/components/ui` folder.
Custom components, usually made up of shadcn/ui components, lives directly under the `/components` folder.

# Environment variables

The environment variables are stored in the `.env.local` file. `.env.local` is automatically loaded when running `pnpm dev`. It overrides the `.env` file. `.env` is aimed to be used for production. For now it's only placeholders.

# Stripe

The project uses Stripe for payment processing.

Stripe has a server part and a client part.
In the server part we set up a payment intent. Basically saying "Hey, I intent to purchase something a specific amount".

We do this by:

SERVER SIDE
1 - Importing Stripe in the server part (src/app/checkout/page.tsx)
2 - Create a Stripe object with the secret key
3 - Create a payment intent with the Stripe object.
4 - Return the client secret to the client part. The client secret is like an id for the payment intent.
5 - Create a client component with a form that run on the client with the ´use client´ direction that will use the client secret to confirm the payment intent.

CLIENT SIDE
1 - Create a stripe object with the public key
2 - Create a payment element with the stripe object
3 - Create a form with a submit button
4 - In the submit function, create a payment intent with the stripe object and the amount from the form.
5 - Confirm the payment intent with the client secret.

