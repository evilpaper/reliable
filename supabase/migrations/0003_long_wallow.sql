-- This migration is no longer needed since the column is already named "price"
-- ALTER TABLE courses_table RENAME COLUMN price_in_sek TO price;
ALTER TABLE "courses_table" ALTER COLUMN "price" SET DATA TYPE numeric;--> statement-breakpoint
-- This migration is no longer needed since the column "currency" already exist
-- ALTER TABLE "courses_table" ADD COLUMN "currency" varchar NOT NULL;