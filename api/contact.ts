import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;

  await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `# @everyone NEW MESSAGE\n**Name: ${name}**\n**Email: (${email})**:\n\n${message}`
    })
  });

  res.status(200).json({ success: true });
}