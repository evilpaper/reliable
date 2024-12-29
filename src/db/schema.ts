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

export const purchaseTable = pgTable("purchase_table", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id").notNull(),
  courseId: uuid("course_id").notNull(),
  amount: integer("amount").notNull(),
  currency: text("currency").notNull(),
  activationId: text("activation_id").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type Course = typeof coursesTable.$inferSelect;
export type Purchase = typeof purchaseTable.$inferSelect;
