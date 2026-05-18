// Vercel serverless function — handles contact form submissions
// Sends two emails via Resend: notification to Evan, confirmation to user

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, inquiryType, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required" });
  }

  try {
    // Notify Evan of new submission
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "boodoosinghevan@gmail.com",
      subject: `New ${inquiryType} inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff2d78;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Type</td><td style="padding: 8px 0; text-transform: capitalize;">${inquiryType}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="color: #666; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: "Evan Boodoosingh <onboarding@resend.dev>",
      to: email,
      subject: "Got your message — I'll be in touch soon",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff2d78;">Hey ${name}, thanks for reaching out!</h2>
          <p style="color: #444; line-height: 1.6;">
            I received your message and will get back to you as soon as possible.
            In the meantime feel free to check out my work at
            <a href="https://evanboodoosingh.vercel.app" style="color: #ff2d78;">evanboodoosingh.vercel.app</a>.
          </p>
          <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="color: #666; margin: 0 0 8px; font-size: 13px;">Your message:</p>
            <p style="margin: 0; font-size: 13px; color: #444;">${message}</p>
          </div>
          <p style="margin-top: 24px; color: #666; font-size: 13px;">
            — Evan Boodoosingh<br/>
            Software Engineer
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
