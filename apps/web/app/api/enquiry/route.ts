import { NextResponse } from "next/server";

const recipient = "sales@attentionfactory.io";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EnquiryPayload = {
  name?: unknown;
  projectName?: unknown;
  email?: unknown;
  description?: unknown;
};

export async function POST(request: Request) {
  let payload: EnquiryPayload;

  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = normalize(payload.name);
  const projectName = normalize(payload.projectName);
  const email = normalize(payload.email).toLowerCase();
  const description = normalize(payload.description);

  if (
    !name ||
    !projectName ||
    !emailPattern.test(email) ||
    !description ||
    name.length > 120 ||
    projectName.length > 160 ||
    email.length > 254 ||
    description.length > 3000
  ) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = "Attention Factory Website <hello@hermes.attentionfactory.io>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Enquiry email is not configured" },
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
      subject: `Studio enquiry: ${projectName}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project: ${projectName}`,
        "",
        description,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Could not send enquiry email" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
