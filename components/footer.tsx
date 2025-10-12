export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border mt-12 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-3 sm:grid-cols-2 items-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} RuleMine. For information only; not legal advice.
        </p>
        <ul className="text-sm flex flex-wrap gap-4 sm:justify-end">
          <li>
            <a
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
              href="#disclaimer"
            >
              Disclaimer
            </a>
          </li>
          <li>
            <a
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
              href="#sources"
            >
              Sources
            </a>
          </li>
          <li>
            <a
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
              href="#privacy"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
