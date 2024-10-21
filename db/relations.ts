import { relations } from "drizzle-orm/relations";
import {
  roles,
  users,
  lesson_types,
  lessons,
  lesson_assignments,
  reservations,
  holidays,
  subscriptions,
  subscriptions_sold,
} from "@/db/schema";

export const usersRelations = relations(users, ({ many, one }) => ({
  reservations: many(reservations), 
  lessons: many(lessons), 
  subscriptions_sold:many(subscriptions_sold),
  roles:one(roles)
}));


export const lessonsRelations = relations(lessons, ({ one, many }) => ({
  teacher: one(users), 
  reservations: many(reservations),
  lessonType: one(lesson_types), 
}));


export const lessonAssignmentsRelations = relations(lesson_assignments,({ one }) => ({
    teacher: one(users), 
    lessonType: one(lesson_types), 
  })
);


export const reservationsRelations = relations(reservations, ({ one }) => ({
  user: one(users), 
  lesson: one(lessons), 
}));

export const subscriptionRelations = relations(subscriptions, ({ many }) => ({
  subscriptions_sold: many(subscriptions_sold),
  
}));

export const subscriptionsSoldRelations = relations(subscriptions_sold, ({ one }) => ({
  user: one(users), 
  subscription: one(subscriptions), 
}));

