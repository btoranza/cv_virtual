const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

export function stripControlChars(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function validateContactPayload(body: unknown): ValidationResult {
  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return { ok: false, error: "Missing name" };
  }
  if (typeof email !== "string" || !EMAIL_PATTERN.test(email.trim())) {
    return { ok: false, error: "Invalid email" };
  }
  if (typeof message !== "string" || !message.trim()) {
    return { ok: false, error: "Missing message" };
  }

  return {
    ok: true,
    data: {
      name: stripControlChars(name),
      email: stripControlChars(email),
      message,
    },
  };
}
