// pages/api/event-registration-count.ts
import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "von9yh08",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { eventId } = req.query;
  if (!eventId) {
    return res.status(400).json({ error: "缺少 eventId" });
  }
  try {
    const count = await client.fetch(
      `count(*[_type == "registration" && event._ref == $eventId])`,
      { eventId }
    );
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ error: (err as any).message || err });
  }
}
