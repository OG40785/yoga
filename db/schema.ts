import {
  serial,
  text,
  timestamp,
  pgTable,
  integer,
  date,
  varchar,
  time,
  doublePrecision,
  numeric,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { float, unique } from "drizzle-orm/mysql-core";

export const roles = pgTable("roles", {
  id: serial("id").primaryKey(),
  timestamp: timestamp("timestamp").defaultNow(),
  name: text("name", { enum: ["admin", "client", "teacher"] }).notNull(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 8 }).unique(),
  timestamp: timestamp("timestamp").defaultNow(),
  name: text("name").notNull(),
  first_surname: text("first_surname").notNull(),
  second_surname: text("second_surname"),
  role_id: integer("role_id")
    .references(() => roles.id)
    .notNull(),
  birthday: date("birthday"),
});

export const lesson_types = pgTable("lesson_types", {
  id: serial("id").primaryKey(),
  lesson_name: text("name").notNull().unique(),
  lesson_description: text("description").notNull(),
  lesson_duration: integer("duration").notNull(), //duration in  minutes
});

export const lessons = pgTable("lessons", {
  id: serial("id").primaryKey(),
  teacher_id: integer("teacher_id")
    .notNull()
    .references(() => users.id),
  available_places: integer("available_places").notNull(),
  reserved_places: integer("reserved_places").notNull().default(0),
  start_time: timestamp("start_time").notNull(),
  lesson_type_id: integer("lesson_type_id")
    .notNull()
    .references(() => lesson_types.id),
});

export const lesson_assignments = pgTable("lesson_assignments", {
  id: serial("id").primaryKey(),
  teacher_id: integer("teacher_id")
    .notNull()
    .references(() => users.id),
  lesson_type_id: integer("lesson_type_id")
    .notNull()
    .references(() => lesson_types.id),
});

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .notNull()
    .references(() => users.id),
  lesson_id: integer("lesson_id")
    .notNull()
    .references(() => lessons.id),
});

export const holidays = pgTable("holidays", {
  id: serial("id").primaryKey(),
  holiday_date: timestamp("holiday_date").notNull(),
  holiday_name: text("holiday_name").notNull(),
});

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  days_duration: integer("days_duration").notNull(),
  lessons_number: integer("lessons_number"),
  price: numeric("price").notNull(),
});

export const subscriptions_sold = pgTable("subscriptions_sold", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .notNull()
    .references(() => users.id),
  subscription_id: integer("subscription_id")
    .notNull()
    .references(() => subscriptions.id),
  start_date: timestamp("start_date").notNull(),
});

export const schema = {
  roles,
  users,
  lesson_types,
  lessons,
  lesson_assignments,
  reservations,
  holidays,
  subscriptions,
  subscriptions_sold,
};
