import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
  uuid,
} from "drizzle-orm/pg-core";

export const coursesTable = pgTable("courses_table", {
  id: serial("id").primaryKey(),
  courseId: uuid("course_id").defaultRandom().notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  availableForPurchase: boolean("available_for_purchase").notNull(),
  priceInSEK: integer("price_in_sek").notNull(),
  imagePath: text("image_path"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});
