import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createContactMessage(input);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post(api.careers.submit.path, async (req, res) => {
    try {
      const input = api.careers.submit.input.parse(req.body);
      await storage.createJobApplication(input);
      res.status(201).json({ success: true, message: "Application submitted successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const list = await storage.getTestimonials();
    res.json(list);
  });

  // Seed data if needed
  const existingTestimonials = await storage.getTestimonials();
  if (existingTestimonials.length === 0) {
    await storage.createTestimonial({
      name: "Sarah Jenkins",
      role: "Family Member",
      content: "Beyond Horizon has given my brother a new lease on life. The staff are incredibly supportive and truly care about his independence."
    });
    await storage.createTestimonial({
      name: "Michael Chen",
      role: "Resident",
      content: "I feel heard and respected here. It's not just about care, it's about living my life the way I want to."
    });
    await storage.createTestimonial({
      name: "Dr. Emily Thompson",
      role: "Community Partner",
      content: "A model for supported living services. Their commitment to community integration is outstanding."
    });
  }

  return httpServer;
}
