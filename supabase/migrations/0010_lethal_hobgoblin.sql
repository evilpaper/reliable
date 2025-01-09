ALTER TABLE "purchase_table" RENAME COLUMN "user_id" TO "purchaser_email";--> statement-breakpoint
ALTER TABLE "courses_table" ALTER COLUMN "price" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "purchase_table" ALTER COLUMN "purchaser_email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "purchase_table" ALTER COLUMN "amount" SET DATA TYPE integer;