import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(20),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { name, email, company, message } = parsed.data;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "b.holmes@datasightuk.com";
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // In dev without a key — log and succeed silently
    console.log("[Contact form]", { name, email, company, message });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: "DATASIGHT Website <noreply@datasightuk.com>",
    to: [toEmail],
    reply_to: email,
    subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? "—"}\n\n${message}`,
  });

  // Auto-reply to sender
  await resend.emails.send({
    from: "DATASIGHT LTD <noreply@datasightuk.com>",
    to: [email],
    subject: "Thanks for your message — DATASIGHT LTD",
    text: `Hi ${name},\n\nThanks for reaching out. We've received your message and will come back to you within one business day.\n\nBest,\nDATASIGHT LTD\nb.holmes@datasightuk.com\ndatasightuk.com`,
  });

  return NextResponse.json({ ok: true });
}
