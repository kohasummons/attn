import { NextResponse } from "next/server";
import { emailPattern, normalize, sendStudioEmail } from "@/lib/studio-mail";

// Order and labels of the film brief questions, as they appear in the email.
const fields: { key: string; label: string; required: boolean }[] = [
  { key: "name", label: "Name", required: true },
  { key: "email", label: "Email", required: true },
  { key: "brand", label: "Brand or business", required: true },
  { key: "website", label: "Website or social link", required: false },
  { key: "filmType", label: "Kind of film", required: true },
  { key: "story", label: "The story or idea", required: true },
  { key: "audience", label: "Who it is for", required: true },
  { key: "message", label: "What viewers should feel, remember or do", required: true },
  { key: "platforms", label: "Where it will be shown", required: true },
  { key: "format", label: "Format", required: true },
  { key: "length", label: "Length", required: true },
  { key: "look", label: "Look, mood and references", required: true },
  { key: "cast", label: "Characters, products and places", required: false },
  { key: "sound", label: "Voice, dialogue, music and language", required: false },
  { key: "assets", label: "Brand assets link", required: false },
  { key: "deadline", label: "Deadline", required: true },
  { key: "budget", label: "Budget", required: true },
  { key: "extra", label: "Anything else", required: false },
];

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Checkbox questions arrive as arrays.
  const answers = Object.fromEntries(
    fields.map(({ key }) => {
      const value = payload[key];
      return [
        key,
        Array.isArray(value) ? value.map(normalize).filter(Boolean).join(", ") : normalize(value),
      ];
    }),
  );
  answers.email = answers.email.toLowerCase();

  if (
    fields.some(({ key, required }) => required && !answers[key]) ||
    fields.some(({ key }) => answers[key].length > 4000) ||
    !emailPattern.test(answers.email)
  ) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const result = await sendStudioEmail({
    replyTo: answers.email,
    subject: `Film brief: ${answers.brand} (${answers.filmType})`,
    text: fields
      .map(({ key, label }) => `${label}:\n${answers[key] || "Not provided"}`)
      .join("\n\n"),
  });

  if (result === "not-configured") {
    return NextResponse.json(
      { error: "Brief email is not configured" },
      { status: 503 },
    );
  }
  if (result === "failed") {
    return NextResponse.json(
      { error: "Could not send brief email" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
