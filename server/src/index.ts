import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 10_000,
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function stripControlChars(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ ok: false, error: "Missing name" });
  }
  if (typeof email !== "string" || !EMAIL_PATTERN.test(email.trim())) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }
  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ ok: false, error: "Missing message" });
  }

  const cleanName = stripControlChars(name);
  const cleanEmail = stripControlChars(email);

  try {
    await transporter.sendMail({
      from: `"${cleanName}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: cleanEmail,
      subject: `New message from ${cleanName} via CV site`,
      text: `${message}\n\nFrom: ${cleanName} <${cleanEmail}>`,
    });
    res.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});