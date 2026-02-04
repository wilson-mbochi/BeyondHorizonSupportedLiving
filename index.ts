import express from "express";

// Import the existing Express server setup. This file serves as the
// entrypoint for platforms like Vercel that look for an `index.ts`
// which imports `express`. The actual server logic (routes, static
// file handling, and `httpServer.listen`) lives in `server/index.ts`.
import "./server/index";

// The imported module starts the HTTP server; we don't need to do
// anything else here. The `express` import above ensures this file
// is detected as an Express entrypoint by hosting providers.
