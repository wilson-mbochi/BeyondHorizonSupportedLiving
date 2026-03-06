import type { Express } from "express";
import type { Server } from "http";
import { pool } from "./db.js";
import { storage } from "./storage.js";
import { api } from "../shared/routes.js";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Health check so you can see DB status: GET /api/health
  app.get("/api/health", async (_req, res) => {
    try {
      await pool.query("SELECT 1");
      res.json({ ok: true, db: "connected" });
    } catch (err: any) {
      res.status(503).json({
        ok: false,
        db: "error",
        message: err?.message || String(err),
      });
    }
  });

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

  return httpServer;
}
