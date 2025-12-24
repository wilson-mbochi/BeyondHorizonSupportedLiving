import { db } from "./db";
import {
  contactMessages,
  jobApplications,
  testimonials,
  type InsertContactMessage,
  type InsertJobApplication,
  type InsertTestimonial,
  type Testimonial
} from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<void>;
  createJobApplication(application: InsertJobApplication): Promise<void>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<void> {
    await db.insert(contactMessages).values(message);
  }

  async createJobApplication(application: InsertJobApplication): Promise<void> {
    await db.insert(jobApplications).values(application);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [created] = await db.insert(testimonials).values(testimonial).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
