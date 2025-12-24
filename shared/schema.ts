import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  position: text("position").notNull(),
  coverLetter: text("cover_letter").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
});

export const insertContactSchema = createInsertSchema(contactMessages).omit({ 
  id: true, 
  createdAt: true 
});

export const insertJobApplicationSchema = createInsertSchema(jobApplications).omit({ 
  id: true, 
  createdAt: true 
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ 
  id: true 
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactSchema>;

export type JobApplication = typeof jobApplications.$inferSelect;
export type InsertJobApplication = z.infer<typeof insertJobApplicationSchema>;

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
