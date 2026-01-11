import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") return res.status(405).end();

    const { name, contact, message } = req.body;

    const discordPayload = {
        content: "<@219639423577358336>",
        embeds: [
            {
                title: "📬 New Portfolio Contact",
                color: 0x3b82f6,
                fields: [
                    {
                        name: "👤 Name",
                        value: name || "Not provided",
                        inline: true,
                    },
                    {
                        name: "📧 Contact Info",
                        value: contact || "Not provided",
                        inline: true,
                    },
                    {
                        name: "💬 Message",
                        value: message || "No message content.",
                    },
                ],
                timestamp: new Date().toISOString(),
                footer: {
                    text: "Portfolio Bot",
                },
            },
        ],
    };

    await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
    });

    res.status(200).json({ success: true });
}