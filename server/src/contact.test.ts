import { describe, expect, it } from "vitest";
import { stripControlChars, validateContactPayload } from "./contact.js";

describe("validateContactPayload", () => {
  it("accepts a valid payload", () => {
    const result = validateContactPayload({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello there",
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data).toEqual({
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Hello there",
      });
    }
  });

  it("rejects a missing name", () => {
    const result = validateContactPayload({
      name: "",
      email: "jane@example.com",
      message: "Hello there",
    });

    expect(result).toEqual({ ok: false, error: "Missing name" });
  });

  it("rejects a name that is only whitespace", () => {
    const result = validateContactPayload({
      name: "   ",
      email: "jane@example.com",
      message: "Hello there",
    });

    expect(result).toEqual({ ok: false, error: "Missing name" });
  });

  it("rejects an invalid email", () => {
    const result = validateContactPayload({
      name: "Jane Doe",
      email: "not-an-email",
      message: "Hello there",
    });

    expect(result).toEqual({ ok: false, error: "Invalid email" });
  });

  it("rejects a missing message", () => {
    const result = validateContactPayload({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "",
    });

    expect(result).toEqual({ ok: false, error: "Missing message" });
  });

  it("rejects a missing body", () => {
    const result = validateContactPayload(undefined);

    expect(result).toEqual({ ok: false, error: "Missing name" });
  });

  it("rejects non-string fields", () => {
    const result = validateContactPayload({
      name: 123,
      email: "jane@example.com",
      message: "Hello there",
    });

    expect(result).toEqual({ ok: false, error: "Missing name" });
  });
});

describe("stripControlChars", () => {
  it("collapses newlines into spaces and trims", () => {
    expect(stripControlChars("  Jane\r\nDoe  ")).toBe("Jane Doe");
  });

  it("strips header-injection attempts", () => {
    expect(stripControlChars("Jane\nBcc: evil@example.com")).toBe(
      "Jane Bcc: evil@example.com",
    );
  });

  it("leaves a clean string untouched", () => {
    expect(stripControlChars("Jane Doe")).toBe("Jane Doe");
  });
});
