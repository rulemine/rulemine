import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border mt-12 bg-[#09396C] text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-white hover:opacity-90 transition-opacity">
              RuleMine
            </Link>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed max-w-xs">
              AI-powered Indian mining law compliance assistant. Get instant guidance on MMDR, MCDR, DGMS regulations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-300 hover:text-white hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                  href="/#about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                  href="/updates"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                  href="/chat"
                >
                  Chat
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                  href="/#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-300 hover:text-white hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                  href="/#disclaimer"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <span className="text-gray-300 px-1">
                  No data stored
                </span>
              </li>
              <li>
                <span className="text-gray-300 px-1">
                  Not legal advice
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} RuleMine. For information only; not legal advice.
          </p>
          <p className="text-xs text-gray-500">
            Data sourced from MoM, DGMS, IBM & PRS
          </p>
        </div>
      </div>
    </footer>
  )
}
