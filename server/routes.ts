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
  app.get("/campaign-image.jpg", (req, res) => {
    const imagePath = path.join(__dirname, "../attached_assets/IMG-20201004-WA0019_1741772758477.jpg");
    res.sendFile(imagePath);
  });

  app.get("/chalava.jpg", (req, res) => {
    const imagePath = path.join(__dirname, "../attached_assets/chalava.avif");
    res.sendFile(imagePath);
  });

  app.get("/jatin-lalit.jpg", (req, res) => {
    const imagePath = path.join(__dirname, "../attached_assets/86399237_2683874218360812_3368111596881575936_n.jpg");
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