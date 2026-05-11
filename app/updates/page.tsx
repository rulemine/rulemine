"use client"

import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/footer"
import Link from "next/link"
import useSWR from "swr"
import { cn } from "@/lib/utils"
import { useState } from "react"

type UpdateItem = {
  id: string
  source: "MoM" | "DGMS" | "IBM" | "PRS"
  title: string
  url: string
  date: string
  tag?: "Act" | "Rule" | "Gazette" | "Circular" | "News"
}

type ApiResponse = {
  updates: UpdateItem[]
  lastRefreshed: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const sourceColors: Record<string, string> = {
  MoM: "bg-blue-100 text-blue-800 border-blue-200",
  DGMS: "bg-amber-100 text-amber-800 border-amber-200",
  IBM: "bg-emerald-100 text-emerald-800 border-emerald-200",
  PRS: "bg-purple-100 text-purple-800 border-purple-200",
}

const tagColors: Record<string, string> = {
  Act: "bg-red-50 text-red-700 border-red-200",
  Rule: "bg-sky-50 text-sky-700 border-sky-200",
  Gazette: "bg-orange-50 text-orange-700 border-orange-200",
  Circular: "bg-teal-50 text-teal-700 border-teal-200",
  News: "bg-violet-50 text-violet-700 border-violet-200",
}

const sourceFullNames: Record<string, string> = {
  MoM: "Ministry of Mines",
  DGMS: "Directorate General of Mines Safety",
  IBM: "Indian Bureau of Mines",
  PRS: "PRS Legislative Research",
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function formatISTTime(iso?: string) {
  if (!iso) return ""
  const d = new Date(iso)
  return d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  })
}

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 animate-pulse">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-5 w-12 rounded-full bg-gray-200" />
        <span className="h-5 w-16 rounded-full bg-gray-200" />
      </div>
      <div className="h-4 w-full rounded bg-gray-200 mb-2" />
      <div className="h-4 w-3/4 rounded bg-gray-200 mb-4" />
      <div className="h-3 w-20 rounded bg-gray-200" />
    </div>
  )
}

export default function UpdatesPage() {
  const { data, isLoading } = useSWR<ApiResponse>("/api/whats-new", fetcher)
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [activeSourceFilter, setActiveSourceFilter] = useState<string>("All")

  const updates = data?.updates || []

  const filteredUpdates = updates.filter((u) => {
    const tagMatch = activeFilter === "All" || u.tag === activeFilter
    const sourceMatch = activeSourceFilter === "All" || u.source === activeSourceFilter
    return tagMatch && sourceMatch
  })

  const tags = ["All", "Act", "Rule", "Gazette", "Circular", "News"]
  const sources = ["All", "MoM", "DGMS", "IBM", "PRS"]

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-[#09396C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWNTBoNnYtNmg2djZoNnYtNmg2VjM0aC02di02aC02djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </div>
            <span className="text-yellow-300/80 text-sm font-medium tracking-wide uppercase">Regulatory Updates</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Latest Mining Regulatory Updates
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
            Stay informed with the latest amendments, circulars, and notifications from MoM, DGMS, IBM, and PRS.
            Click any title to view the official source document.
          </p>
          {data?.lastRefreshed && (
            <p className="mt-4 text-xs text-gray-400 flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Last refreshed at {formatISTTime(data.lastRefreshed)} IST
            </p>
          )}
        </div>
      </div>

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-8 flex-1">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Source filters */}
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Source</span>
            <div className="flex flex-wrap gap-2">
              {sources.map((source) => (
                <button
                  key={source}
                  onClick={() => setActiveSourceFilter(source)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
                    activeSourceFilter === source
                      ? "bg-[#09396C] text-white border-[#09396C] shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  )}
                  title={source !== "All" ? sourceFullNames[source] : undefined}
                >
                  {source}
                </button>
              ))}
            </div>
          </div>

          {/* Tag filters */}
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Type</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
                    activeFilter === tag
                      ? "bg-[#09396C] text-white border-[#09396C] shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        {!isLoading && (
          <p className="text-sm text-gray-500 mb-4">
            Showing <span className="font-semibold text-gray-700">{filteredUpdates.length}</span> update{filteredUpdates.length !== 1 ? "s" : ""}
            {(activeFilter !== "All" || activeSourceFilter !== "All") && (
              <button
                onClick={() => { setActiveFilter("All"); setActiveSourceFilter("All") }}
                className="ml-2 text-blue-600 hover:text-blue-800 underline underline-offset-2 text-xs"
              >
                Clear filters
              </button>
            )}
          </p>
        )}

        {/* Updates Grid */}
        <div className="grid gap-4">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : filteredUpdates.length === 0 ? (
            <div className="text-center py-16">
              <div className="h-16 w-16 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <p className="text-gray-500 font-medium">No updates found</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your filters</p>
            </div>
          ) : (
            filteredUpdates.map((u, i) => (
              <Link
                key={u.id}
                href={u.url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-xl border border-gray-200 bg-white p-5 hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                      sourceColors[u.source] || "bg-gray-100 text-gray-700"
                    )}
                    title={sourceFullNames[u.source]}
                  >
                    {u.source}
                  </span>
                  {u.tag && (
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
                        tagColors[u.tag] || "bg-gray-50 text-gray-600"
                      )}
                    >
                      {u.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-[15px] font-medium text-gray-900 group-hover:text-[#09396C] transition-colors leading-relaxed mb-3">
                  {u.title}
                </h3>

                <div className="flex items-center justify-between">
                  <time className="text-xs text-gray-400 tabular-nums" dateTime={u.date}>
                    {formatDate(u.date)}
                  </time>
                  <span className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                    View source
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* CTA */}
        {!isLoading && filteredUpdates.length > 0 && (
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl bg-blue-50 border border-blue-100 px-5 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <p className="text-sm text-blue-700">
                Have a question about any of these updates?{" "}
                <Link href="/chat" className="font-semibold underline underline-offset-2 hover:text-blue-900">
                  Ask RuleMine →
                </Link>
              </p>
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
