ALTER TABLE "courses_table" RENAME COLUMN "price_in_sek" TO "price";--> statement-breakpoint
ALTER TABLE "courses_table" ALTER COLUMN "price" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "courses_table" ADD COLUMN "currency" varchar NOT NULL;