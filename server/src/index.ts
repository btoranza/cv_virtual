import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { Resend } from "resend";
import { validateContactPayload } from "./contact.js";

dotenv.config();

const allowedOrigins = ["https://berenice-toranza.dev", "http://localhost:5173"];

const app = express();
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

const resend = new Resend(process.env.RESEND_API_KEY);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "Too many requests, please try again later" },
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/contact", contactLimiter, async (req, res) => {
  const result = validateContactPayload(req.body);

  if (!result.ok) {
    return res.status(400).json({ ok: false, error: result.error });
  }

  const { name, email, message } = result.data;

  const { error } = await resend.emails.send({
    from: "CV Website <onboarding@resend.dev>",
    to: process.env.GMAIL_USER!,
    replyTo: email,
    subject: `New message from ${name} via CV site`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
  });

  if (error) {
    console.error("Failed to send contact email:", error);
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }

  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});