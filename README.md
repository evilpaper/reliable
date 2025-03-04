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

# Influencial functional requirements

- Anyone can browse the app without being authenticated.
- Customers can add one or more courses to a shopping cart, with or without authentication.
- Customers can shared bought courses that has not been started with other (most likely employees) with email address or phone number.
- Anyone can try a lesson without purchase the course.
- Courses be completed without authentication using only shared address and an activation code.
- Access to a bought course require only only email (magic link, like Claude).
- The course content can be consumed in any language. Written or spoken.
- The course content can be read, watched or listen too.
- Purchase in Sweden can be made with Swish

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

# Domain Model

## Entities

- Course
- Lesson
- Customer
- Attendee
- ShoppingCart
- CourseShare
- CourseCompletion
- Language
- ContentFormat

## Attributes and Operations

### Course

- id: string
- name: string
- description: string
- version: number
- price: number
- availableForPurchase: boolean
- languages: Language[]
- contentFormats: ContentFormat[]
- durationMinutes: number
- region: string[]
- certificationValidityDays: number
- trialLessonId: string
- isActive: boolean

### Lesson

- id: string
- courseId: string
- name: string
- order: number
- contentUrl: string
- contentType: ContentFormat
- durationMinutes: number
- isTrial: boolean

### Customer

- id: string
- name: string
- email: string
- phone: string
- organization: string
- region: string
- preferredLanguage: string
- purchasedCourses: string[] // Course IDs

### Attendee

- id: string
- name: string
- email: string
- phone: string
- sharedCourses: string[] // Course IDs
- completedCourses: string[] // Course IDs
- activationCode: string
- preferredLanguage: string
- preferredContentFormat: ContentFormat

### CourseShare

- id: string
- courseId: string
- customerId: string
- attendeeEmail: string
- attendeePhone: string
- activationCode: string
- expiresAt: Date
- isActivated: boolean

### CourseCompletion

- id: string
- courseId: string
- attendeeId: string
- completedAt: Date
- score: number
- certificateUrl: string
- validUntil: Date

### ShoppingCart

- id: string
- customerId: string
- items: CartItem[]
- createdAt: Date
- updatedAt: Date

### CartItem

- courseId: string
- quantity: number
- unitPrice: number

### Language

- code: string
- name: string
- isActive: boolean

### ContentFormat

- id: string
- type: "TEXT" | "VIDEO" | "AUDIO"
- isActive: boolean

# Modules

Follow the routes. Keep in mind. Not all entities are modules. Part science, part art.

## Routes

- reliable.com
- reliable.com/course/:id
- reliabe.com/course/:id/lesson/:id
- reliable.com/checkout
- reliabe.com/my-courses

* cart

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
- On this page

Stripe suggest we don't attempt to handle order fulfillment on the client side because user can leave the page. Thus Stripe suggest we use the webhook approach.

Once we run the Stripe CLI it will output our webhook signing secret. Remember to paste that into the .env file.

## Testing Payments

To test Stripe payments, use the following test card details:

- Card Number: 4242 4242 4242 4242
- Expiration: Any future date
- CVC: Any 3-digit number
