import { NextResponse } from "next/server";

const recipient = "hello@attentionfactory.io";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  topic?: unknown;
  message?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = normalize(payload.name);
  const email = normalize(payload.email).toLowerCase();
  const company = normalize(payload.company);
  const topic = normalize(payload.topic);
  const message = normalize(payload.message);

  if (
    !name ||
    !emailPattern.test(email) ||
    !topic ||
    !message ||
    name.length > 120 ||
    email.length > 254 ||
    company.length > 180 ||
    topic.length > 120 ||
    message.length > 10_000
  ) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = "Attention Factory Website <hello@attentionfactory.io>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Contact email is not configured" },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: email,
      subject: `Website contact: ${topic}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company or organization: ${company || "Not provided"}`,
        `Topic: ${topic}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Could not send contact email" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
