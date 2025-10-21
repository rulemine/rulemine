"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header className="w-full border-b border-border sticky top-0 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            <Image
              src="/rm-logo.png"
              alt="RuleMine logo"
              width={44}
              height={24}
              className="rounded"
              priority={false}
            />
            <span className="font-semibold tracking-tight">RuleMine</span>
          </Link>
          <span className="text-sm text-muted-foreground ml-2 hidden sm:inline">Indian Mining Law Compliance Bot</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="text-sm font-semibold px-2 py-1 rounded hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-sm font-semibold px-2 py-1 rounded hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-semibold px-2 py-1 rounded hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact
          </Link>
          <Link
            href="/chat"
            className={cn(
              "ml-32 -mr-10 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium",
              "bg-primary text-primary-foreground hover:opacity-95",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            Open Chat
          </Link>
        </div>
      </nav>
    </header>
  )
}
