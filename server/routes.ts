import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express) {
  // Serve static assets
  app.get("/1000059416.jpg", (req, res) => {
    const imagePath = path.join(__dirname, "../attached_assets/1000059416.jpg");
    res.sendFile(imagePath);
  });

  // Serve the resume PDF file
  app.get("/MdAftabAlamresume.pdf", (req, res) => {
    const resumePath = path.join(__dirname, "../attached_assets/MdAftabAlamresume.pdf");
    res.sendFile(resumePath);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      const result = await storage.createContact(contact);
      res.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  return createServer(app);
}