// Everyone who gets Attention Studio enquiries and film briefs.
export const studioRecipients = [
  "studios@attentionfactory.io",
  "hello@attentionfactory.io",
  "mercythaddeus234@gmail.com",
  "omobolathejoshua@gmail.com",
];

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function sendStudioEmail({
  replyTo,
  subject,
  text,
}: {
  replyTo: string;
  subject: string;
  text: string;
}): Promise<"sent" | "not-configured" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "not-configured";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Attention Studio <hello@hermes.attentionfactory.io>",
      to: studioRecipients,
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  return response.ok ? "sent" : "failed";
}
