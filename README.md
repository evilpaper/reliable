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
- Customers can add course to a shopping cart, with or without authentication.
- Customers can try a lesson without being purchase the course.
- A course can be completed without authentication. Like when you access tickets with email. And maybe a code.
- A purchased, not started, course can be shared with one email address.
- Authentication should be possible with only email (magic link, like Claude).
- The course content can be consumed in any language. Written or spoken.
- It should be possible to buy a curse with Swedish Swish

# Event storming

## Events - describe what happened

- Customer bought course
- Customer shared course
- Attendee started course
- Attendee completed course
- Customer get notification that attendee completed course

## Commands - actions that cause an event

- Buy course
- Share course

## Actors - Who is making these actions?

- Customer = Person in need of course
- Attendee - The person who undergoe the course

## Systems - Internal or external that react to or trigger events.

- Send email?

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

- Importing Stripe in the server part (src/app/checkout/page.tsx).
- Create a Stripe object with the secret key (from the environmental variables). We get the secret key from our Stripe account.
- Create a payment intent with the Stripe object including the products in the checkout.
- Return the client secret to the client part. The client secret is like an id for the payment intent.
- Create a client component with a form that run on the client with the ´use client´ direction that will use the client secret to confirm the payment intent.

CLIENT SIDE

- Create a stripe promise (object) with the public key (from the environmental variables).
- Create a payment element from the Stripe SDK an pass in the stripe promise.
- Send a POST to our stripe backend create-payment-intent, pass in price and currency, get back activationId and clientSecret, store in state
- Create a form with a submit button.
- In the submit function, use stripe.confirmPayment method, send in elements (from previous steps) and return url with activationId.
- Create a page for the url in previous step to show the purchase status to user.

Stripe suggest to don't attempt to handle order fulfillment on the client side because user can leave the page. Thus Stripe suggest we use the webhook approach.
