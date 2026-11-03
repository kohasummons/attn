import { NextResponse } from "next/server";
import { emailPattern, normalize, sendStudioEmail } from "@/lib/studio-mail";

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

  const result = await sendStudioEmail({
    replyTo: email,
    subject: `Studio enquiry: ${projectName}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project: ${projectName}`,
      "",
      description,
    ].join("\n"),
  });

  if (result === "not-configured") {
    return NextResponse.json(
      { error: "Enquiry email is not configured" },
      { status: 503 },
    );
  }
  if (result === "failed") {
    return NextResponse.json(
      { error: "Could not send enquiry email" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
