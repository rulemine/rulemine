import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/footer"
import { AnnouncementList } from "@/components/announcement-list"

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="w-full ">
        {/* Hero */}
        <section className="p-10 px-20 max-sm:p-5 flex  bg-[#09396C]">
          <div className="mt-10 flex flex-col gap-5">
          <h1 className="text-balance text-white text-3xl sm:text-4xl font-semibold leading-tight">
            RuleMine: Indian Mining Law Compliance Bot
          </h1>
          <p className="w-3xl mt-4 text-pretty text-gray-300 text-base ">
            Get quick, practical guidance on India&apos;s mining regulations from sources like the MMDR Act, MCDR 2017, DGMS
            circulars, and more. Built for clarity and compliance workflows.
          </p>
          <ul className="mt-5 text-base list-disc pl-5 space-y-2 text-gray-300 ">
            <li>Summarizes Acts, Rules, and recent circulars into plain language</li>
            <li>Answers compliance questions with citations you can verify</li>
            <li>Keeps you updated with the latest regulatory changes</li>
          </ul>
          
          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/chat"
              className="bg-yellow-300 text-black hover:bg-yellow-300/90 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium  hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Check Now
            </Link>
            <Link
              href="/updates"
              className="text-white inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium border hover:border-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              What&apos;s New
            </Link>
          </div>
          </div>
          <div>
            <Image
              src="/rm-logo.png"
              alt="RuleMine Hero Image"
              width={400}
              height={100}
              className="ml-20"
            />
          </div>
        </section>
        <section className="py-10 px-20">
        <AnnouncementList limit={6} />
        </section>

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
