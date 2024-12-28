CREATE TABLE IF NOT EXISTS "purchase_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"course_id" uuid NOT NULL,
	"amount" numeric NOT NULL,
	"currency" text NOT NULL,
	"activation_id" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
-- This migration is no longer needed since the column "currency" is already NOT NULL
-- ALTER TABLE "courses_table" ALTER COLUMN "currency" SET NOT NULL;