import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/footer"
import { AnnouncementList } from "@/components/announcement-list"

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14 flex-1">
        {/* Hero */}
        <section className="max-w-3xl">
          <h1 className="text-balance text-3xl sm:text-4xl font-semibold leading-tight">
            RuleMine: Indian Mining Law Compliance Bot
          </h1>
          <p className="mt-4 text-pretty text-base text-muted-foreground">
            Get quick, practical guidance on India’s mining regulations from sources like the MMDR Act, MCDR 2017, DGMS
            circulars, and more. Built for clarity and compliance workflows.
          </p>
          <ul className="mt-5 text-base list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Summarizes Acts, Rules, and recent circulars into plain language</li>
            <li>Answers compliance questions with citations you can verify</li>
            <li>Keeps you updated with the latest regulatory changes</li>
          </ul>
          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/chat"
              className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Check Now
            </Link>
            <Link
              href="/updates"
              className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium border hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              What’s New
            </Link>
          </div>
        </section>

        {/* Keep announcements list as-is */}
        <AnnouncementList limit={6} />

        {/* Anchor targets for About/Contact (simple placeholders to satisfy nav) */}
        <section id="about" className="sr-only" aria-hidden="true">
          About RuleMine
        </section>
        <section id="contact" className="sr-only" aria-hidden="true">
          Contact
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
