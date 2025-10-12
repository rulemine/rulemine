import { NextResponse } from "next/server"

export async function GET() {
  const updates = [
    {
      id: "1",
      source: "MoM",
      title: "Draft amendment to MMDR Rules regarding exploration norms",
      url: "https://mines.gov.in/",
      date: "2025-09-15",
      tag: "Rule",
    },
    {
      id: "2",
      source: "DGMS",
      title: "Safety Circular on methane monitoring in underground mines",
      url: "https://dgms.gov.in/",
      date: "2025-08-28",
      tag: "Circular",
    },
    {
      id: "3",
      source: "IBM",
      title: "MCDR 2017 reporting updates for Form F-1",
      url: "https://ibm.gov.in/",
      date: "2025-08-10",
      tag: "Rule",
    },
    {
      id: "4",
      source: "PRS",
      title: "Parliamentary brief on mineral auctions regime",
      url: "https://prsindia.org/",
      date: "2025-07-22",
      tag: "News",
    },
    {
      id: "5",
      source: "MoM",
      title: "Gazette notification on minor minerals classification",
      url: "https://egazette.gov.in/",
      date: "2025-07-01",
      tag: "Gazette",
    },
    {
      id: "6",
      source: "DGMS",
      title: "Advisory on slope stability monitoring – opencast mines",
      url: "https://dgms.gov.in/",
      date: "2025-06-18",
      tag: "Circular",
    },
  ] as const

  return NextResponse.json({
    updates,
    lastRefreshed: new Date().toISOString(),
  })
}
