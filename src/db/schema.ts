import {
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
  uuid,
  integer,
} from "drizzle-orm/pg-core";

export const coursesTable = pgTable("courses_table", {
  id: serial("id").primaryKey(),
  courseId: uuid("course_id").defaultRandom().notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  availableForPurchase: boolean("available_for_purchase").notNull(),
  price: integer("price").notNull(),
  currency: text("currency").notNull(),
  imagePath: text("image_path"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type Course = typeof coursesTable.$inferSelect;
