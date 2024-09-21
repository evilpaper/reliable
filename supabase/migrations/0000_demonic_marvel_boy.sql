CREATE TABLE IF NOT EXISTS "courses_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"available_for_purchase" boolean NOT NULL,
	"price_in_sek" integer NOT NULL,
	"image_path" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
