import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Use the project root `public` directory so this works both
  // in local/Node environments and on platforms like Vercel
  // where `public/**` is the canonical static assets location.
  const publicPath = path.resolve(process.cwd(), "public");

  if (!fs.existsSync(publicPath)) {
    throw new Error(
      `Could not find the build directory: ${publicPath}, make sure to build the client first`,
    );
  }

  // This may be ignored on some hosting providers (like Vercel),
  // but it's still useful for local / traditional Node hosting.
  app.use(express.static(publicPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(publicPath, "index.html"));
  });
}
