import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/footer"
import { AnnouncementList } from "@/components/announcement-list"

export default function UpdatesPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar variant="home" />
      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-8 flex-1">
        <h1 className="text-xl font-semibold">All Updates</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Simple list of regulatory updates. Click a title to view the source.
        </p>
        <AnnouncementList />
      </main>
      <SiteFooter />
    </div>
  )
}
