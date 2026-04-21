import { describe, expect, it } from "vitest";
import nodemailer from "nodemailer";

describe("Gmail SMTP credentials", () => {
  it("should connect to Gmail SMTP with provided credentials", async () => {
    const GMAIL_USER = process.env.GMAIL_USER || "";
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || "";

    expect(GMAIL_USER).toBeTruthy();
    expect(GMAIL_APP_PASSWORD).toBeTruthy();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Verify the connection (does not send email)
    await expect(transporter.verify()).resolves.toBe(true);
  }, 15000);
});
