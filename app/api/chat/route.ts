import { streamText } from "ai"

export const maxDuration = 30

type FilePayload = {
  data: string // base64
  mediaType?: string
  filename?: string
}

export async function POST(req: Request) {
  const { query, file }: { query: string; file?: FilePayload } = await req.json()

  const system = `You are RuleMine, an Indian mining law compliance assistant.
- Be concise and practical.
- Cite Indian mining legal sources (e.g., MMDR Act, MCDR 2017, DGMS circulars, IBM notices).
- If unsure, say so briefly.
- Output plain text. At the very end, append a line:
CITATIONS: ["MMDR Act, Section 10A", "MCDR 2017, Rule 45"] 
with 1-5 succinct citation strings relevant to your answer.
Do not include any personal data or store anything.`

  const userParts: Array<
    { type: "text"; text: string } | { type: "file"; data: string; mediaType?: string; filename?: string }
  > = [{ type: "text", text: query }]

  if (file?.data) {
    userParts.push({
      type: "file",
      data: file.data,
      mediaType: file.mediaType || "application/pdf",
      filename: file.filename || "document.pdf",
    })
  }

  const result = streamText({
    model: "openai/gpt-5-mini",
    messages: [
      { role: "system", content: [{ type: "text", text: system }] },
      { role: "user", content: userParts },
    ],
    maxOutputTokens: 800,
    temperature: 0.2,
    abortSignal: req.signal,
  })

  // Stream plain text to the client (the model will include the CITATIONS line at the end)
  return result.toTextStreamResponse()
}
