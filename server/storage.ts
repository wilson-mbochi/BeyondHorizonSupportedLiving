import { db } from "./db.js";
import {
  contactMessages,
  jobApplications,
  type InsertContactMessage,
  type InsertJobApplication,
} from "../shared/schema.js";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<void>;
  createJobApplication(application: InsertJobApplication): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<void> {
    await db.insert(contactMessages).values(message);
  }

  async createJobApplication(application: InsertJobApplication): Promise<void> {
    await db.insert(jobApplications).values(application);
  }
}

export const storage = new DatabaseStorage();
