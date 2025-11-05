"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  citations?: string[]
  streaming?: boolean
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isSending, setIsSending] = useState(false)
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages])

  async function fileToBase64(f: File): Promise<string> {
    const arrayBuffer = await f.arrayBuffer()
    // @ts-ignore
    const bytes = new Uint8Array(arrayBuffer)
    let binary = ""
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: input }
    setMessages((prev) => [...prev, userMsg])

    const assistantId = crypto.randomUUID()
    setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "", streaming: true }])
    setIsSending(true)

    try {
      let filePayload: any = undefined
      if (file) {
        filePayload = {
          data: await fileToBase64(file),
          mediaType: file.type || "application/pdf",
          filename: file.name || "document.pdf",
        }
      }

      const res = await fetch("https://rulemine-backend.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input, file: filePayload }),
      })

      if (!res.ok || !res.body) {
        throw new Error("Network error")
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        full += chunk

        const citationIndex = full.lastIndexOf("CITATIONS:")
        let displayText = full
        if (citationIndex !== -1) {
          displayText = full.slice(0, citationIndex).trimEnd()
        }

        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, content: displayText, streaming: true } : m)),
        )
      }

      let finalText = full
      let citations: string[] | undefined
      const match = full.match(/CITATIONS:\s*(\[[\s\S]*\])\s*$/)
      if (match) {
        finalText = full.slice(0, match.index).trimEnd()
        try {
          citations = JSON.parse(match[1])
        } catch {
          citations = undefined
        }
      }

      setMessages((prev) =>
        prev.map((m) => (m.id === assistantId ? { ...m, content: finalText, citations, streaming: false } : m)),
      )
      setInput("")
      setFile(null)
    } catch (err) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, content: "Sorry, something went wrong.", streaming: false } : m,
        ),
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="bg-accent/40 border-b border-border text-xs text-muted-foreground px-4 sm:px-6 py-2">
        Anonymous. No data stored. Not legal advice.
      </div>

      <main className="flex-1 mx-auto w-full max-w-3xl px-4 sm:px-6 py-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex">
              <div
                className={
                  msg.role === "user"
                    ? "ml-auto max-w-[80%] rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm shadow"
                    : "mr-auto max-w-[85%] rounded-md bg-secondary text-secondary-foreground px-3 py-2 text-sm shadow"
                }
              >
                <div className="whitespace-pre-wrap">{msg.content || (msg.streaming ? "..." : "")}</div>

                {msg.role === "assistant" && msg.citations && msg.citations.length > 0 && (
                  <details className="mt-2 text-xs">
                    <summary className="cursor-pointer select-none underline underline-offset-2">Citations</summary>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {msg.citations.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>
      </main>

      <form
        onSubmit={onSubmit}
        className="sticky bottom-0 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      >
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-3 flex items-center gap-2">
          <label className="sr-only" htmlFor="message">
            Your question
          </label>
          <input
            id="message"
            name="message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about MMDR, MCDR, DGMS..."
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            disabled={isSending}
            autoComplete="off"
          />

          {/* Hidden file input */}
          <input
            id="file"
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />

          <label
            htmlFor="file"
            title="Upload mining plan (PDF)"
            className="inline-flex cursor-pointer items-center justify-center rounded-md h-9 w-9 border hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="sr-only">Upload PDF</span>
            {/* Paperclip icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                d="M21.44 11.05 12 20.5a6 6 0 0 1-8.49-8.49l10-10A4.24 4.24 0 0 1 19.5 8.5L9.06 18"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md h-9 w-9 bg-primary text-primary-foreground hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            disabled={isSending}
            title="Send"
            aria-label="Send"
          >
            {isSending ? (
              // simple spinner using CSS border
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-transparent" />
            ) : (
              // Send icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            )}
          </button>
        </div>
        {file && (
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 pb-3 text-xs text-muted-foreground">
            Attached: {file.name}
          </div>
        )}
      </form>
    </div>
  )
}
