import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Serve the built client from `dist/public`, which is where Vite writes
  // its production bundle (see `vite.config.ts`).
  const distPublicPath = path.resolve(process.cwd(), "dist/public");

  if (!fs.existsSync(distPublicPath)) {
    throw new Error(
      `Could not find the build directory: ${distPublicPath}, make sure to build the client first`,
    );
  }

  // Serve all static assets (JS, CSS, images, etc.)
  app.use(express.static(distPublicPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPublicPath, "index.html"));
  });
}
