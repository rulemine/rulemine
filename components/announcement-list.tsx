"use client"

import useSWR from "swr"
import Link from "next/link"
import { cn } from "@/lib/utils"

type UpdateItem = {
  id: string
  source: "MoM" | "DGMS" | "IBM" | "PRS"
  title: string
  url: string
  date: string // YYYY-MM-DD
  tag?: "Act" | "Rule" | "Gazette" | "Circular" | "News"
}

type ApiResponse = {
  updates: UpdateItem[]
  lastRefreshed: string // ISO
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

function formatISTTime(iso?: string) {
  if (!iso) return ""
  const d = new Date(iso)
  return d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  })
}

function SourceBadge({ source }: { source: UpdateItem["source"] }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
        "text-muted-foreground",
      )}
      aria-label={`Source: ${source}`}
    >
      {source}
    </span>
  )
}

function TinyTag({ tag }: { tag: UpdateItem["tag"] }) {
  if (!tag) return null
  return (
    <span className="ml-2 inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] text-muted-foreground">
      {tag}
    </span>
  )
}

function SkeletonRow() {
  return (
    <div className="flex items-center justify-between py-3 animate-pulse">
      <div className="flex items-center gap-3 min-w-0">
        <span className="h-5 w-10 rounded-full bg-muted" />
        <span className="h-4 w-48 rounded bg-muted" />
      </div>
      <span className="h-4 w-20 rounded bg-muted" />
    </div>
  )
}

export function AnnouncementList({ limit }: { limit?: number }) {
  const { data, isLoading } = useSWR<ApiResponse>("/api/whats-new", fetcher)

  const updates = limit ? (data?.updates || []).slice(0, limit) : data?.updates || []

  return (
    <section aria-labelledby="announcements-heading" className="mt-8">
      <div className="flex items-end justify-between">
        <h2 id="announcements-heading" className="text-base font-semibold">
          Announcements
        </h2>
        <Link
          href="/updates"
          className="text-sm text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
        >
          View all updates
        </Link>
      </div>

      <div className="mt-3 divide-y divide-border">
        {isLoading ? (
          <>
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
          </>
        ) : (
          updates.map((u) => (
            <div
              key={u.id}
              className="flex items-center justify-between py-3 hover:bg-accent/40 focus-within:bg-accent/40 rounded-md"
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <SourceBadge source={u.source} />
                <Link
                  href={u.url}
                  target="_blank"
                  rel="noreferrer"
                  className="truncate hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                  title={u.title}
                >
                  {u.title}
                </Link>
                <TinyTag tag={u.tag} />
              </div>
              <time className="text-xs text-muted-foreground tabular-nums shrink-0" dateTime={u.date}>
                {u.date}
              </time>
            </div>
          ))
        )}
      </div>

      <p className="mt-2 text-xs text-muted-foreground">Last refreshed at {formatISTTime(data?.lastRefreshed)} IST</p>
    </section>
  )
}
