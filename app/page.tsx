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

        {/* Announcements */}
        <section className="py-10 px-20 max-sm:px-5">
          <AnnouncementList limit={6} />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-20 max-sm:px-5 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-[#09396C]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#09396C]">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <span className="text-[#09396C] text-sm font-semibold tracking-wide uppercase">About RuleMine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Making Indian Mining Law Accessible
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  RuleMine is an AI-powered compliance assistant built specifically for the Indian mining industry. 
                  It helps mine operators, compliance officers, legal professionals, and regulators navigate the 
                  complex web of mining regulations in India.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our system ingests and understands key regulatory documents including the 
                  <strong> Mines and Minerals (Development and Regulation) Act, 1957</strong>, the 
                  <strong> Mineral Conservation and Development Rules (MCDR), 2017</strong>, 
                  <strong> DGMS circulars and technical standards</strong>, and more — translating 
                  dense legal language into clear, actionable guidance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you need to check compliance requirements for a new mine plan, understand 
                  recent amendments, or verify safety obligations — RuleMine provides instant answers 
                  backed by verifiable citations.
                </p>
              </div>
              <div className="space-y-5">
                {/* Feature cards */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                        <path d="M14 2v6h6" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                        <path d="M10 9H8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Comprehensive Coverage</h3>
                      <p className="text-gray-500 text-sm mt-1">Covers MMDR Act, MCDR 2017, Coal Mines Regulations, DGMS circulars, IBM guidelines, and gazette notifications.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-amber-50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Citation Backed</h3>
                      <p className="text-gray-500 text-sm mt-1">Every answer comes with references to specific sections, rules, and circulars so you can verify and present evidence.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Real-time Updates</h3>
                      <p className="text-gray-500 text-sm mt-1">Stay current with the latest regulatory changes, amendments, and circulars from MoM, DGMS, IBM, and PRS.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-purple-50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M21.44 11.05 12 20.5a6 6 0 0 1-8.49-8.49l10-10A4.24 4.24 0 0 1 19.5 8.5L9.06 18" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">PDF Upload Support</h3>
                      <p className="text-gray-500 text-sm mt-1">Upload your mining plans and documents for AI-assisted review against regulatory requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sources */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Regulatory Sources We Cover</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-lg bg-white border border-gray-200 p-4 text-center hover:shadow-sm transition-shadow">
                  <div className="text-xs font-bold text-blue-700 bg-blue-50 rounded-full px-3 py-1 inline-block mb-2">MoM</div>
                  <p className="text-xs text-gray-600">Ministry of Mines — Acts, Gazette Notifications, Policy Documents</p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-4 text-center hover:shadow-sm transition-shadow">
                  <div className="text-xs font-bold text-amber-700 bg-amber-50 rounded-full px-3 py-1 inline-block mb-2">DGMS</div>
                  <p className="text-xs text-gray-600">Directorate General of Mines Safety — Circulars, Technical Standards</p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-4 text-center hover:shadow-sm transition-shadow">
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 rounded-full px-3 py-1 inline-block mb-2">IBM</div>
                  <p className="text-xs text-gray-600">Indian Bureau of Mines — MCDR Guidelines, Mining Plan Standards</p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-4 text-center hover:shadow-sm transition-shadow">
                  <div className="text-xs font-bold text-purple-700 bg-purple-50 rounded-full px-3 py-1 inline-block mb-2">PRS</div>
                  <p className="text-xs text-gray-600">PRS Legislative Research — Bill Summaries, Committee Reports</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-20 max-sm:px-5 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-[#09396C]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#09396C]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-[#09396C] text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Have questions, feedback, or need support? We&apos;d love to hear from you. 
              Reach out through any of the channels below.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Email */}
              <div className="group rounded-xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-sm text-gray-500 mb-3">Send us a message anytime</p>
                <a href="mailto:support@rulemine.in" className="text-sm font-medium text-[#09396C] hover:underline underline-offset-2">
                  support@rulemine.in
                </a>
              </div>

              {/* GitHub / Open Source */}
              <div className="group rounded-xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
                <p className="text-sm text-gray-500 mb-3">Report issues or contribute</p>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm font-medium text-[#09396C] hover:underline underline-offset-2">
                  View Repository →
                </a>
              </div>

              {/* General Inquiries */}
              <div className="group rounded-xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                <p className="text-sm text-gray-500 mb-3">Ask RuleMine directly</p>
                <Link href="/chat" className="text-sm font-medium text-[#09396C] hover:underline underline-offset-2">
                  Open Chat →
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div id="disclaimer" className="mt-12 rounded-xl bg-amber-50 border border-amber-200 p-6">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 mt-0.5 shrink-0">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Disclaimer</h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    RuleMine is an AI-powered informational tool and does <strong>not</strong> provide legal advice. 
                    The information provided should not be considered a substitute for professional legal counsel. 
                    Always consult with a qualified legal professional for specific compliance matters. 
                    No data is stored — all conversations are anonymous and ephemeral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
