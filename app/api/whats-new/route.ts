import { NextResponse } from "next/server"

type UpdateItem = {
  id: string
  source: "MoM" | "DGMS" | "IBM" | "PRS"
  title: string
  url: string
  date: string
  tag?: "Act" | "Rule" | "Gazette" | "Circular" | "News"
}

// Realistic Indian mining regulatory updates
const updates: UpdateItem[] = [
  {
    id: "1",
    source: "MoM",
    title: "Amendment to Mines and Minerals (Development and Regulation) Act, 1957 — Section 8A Provisions for Composite Licence",
    url: "https://mines.gov.in/writereaddata/UploadFile/mmdr_act.pdf",
    date: "2026-05-08",
    tag: "Act",
  },
  {
    id: "2",
    source: "DGMS",
    title: "DGMS Circular No. 03 of 2026: Safety Standards for Underground Metalliferous Mines — Ventilation Requirements",
    url: "https://dgms.gov.in/writereaddata/UploadFile/Circulars2026.pdf",
    date: "2026-05-06",
    tag: "Circular",
  },
  {
    id: "3",
    source: "IBM",
    title: "IBM Guidelines on Submission of Annual Returns under MCDR 2017 — Form J and Form K Revised Templates",
    url: "https://ibm.gov.in/writereaddata/UploadFile/guidelines_annual_returns.pdf",
    date: "2026-05-03",
    tag: "Rule",
  },
  {
    id: "4",
    source: "MoM",
    title: "Gazette Notification S.O. 2241(E): Amendment to Mineral (Auction) Rules, 2015 — Revised Upfront Payment Criteria",
    url: "https://mines.gov.in/writereaddata/UploadFile/auction_rules_amendment.pdf",
    date: "2026-04-29",
    tag: "Gazette",
  },
  {
    id: "5",
    source: "DGMS",
    title: "DGMS Technical Circular No. 02 of 2026: Occupational Health Surveillance in Coal Mines — Dust Monitoring Protocol",
    url: "https://dgms.gov.in/writereaddata/UploadFile/Tech_Circular_02_2026.pdf",
    date: "2026-04-25",
    tag: "Circular",
  },
  {
    id: "6",
    source: "PRS",
    title: "Mines and Minerals (Development and Regulation) Amendment Bill, 2026 Introduced in Lok Sabha — Key Highlights",
    url: "https://prsindia.org/billtrack/mines-minerals-amendment-2026",
    date: "2026-04-22",
    tag: "News",
  },
  {
    id: "7",
    source: "IBM",
    title: "IBM Notice: Star Rating of Mines for Sustainable Mining — Updated Parameters and Scoring Matrix 2026-27",
    url: "https://ibm.gov.in/writereaddata/UploadFile/star_rating_2026.pdf",
    date: "2026-04-18",
    tag: "Rule",
  },
  {
    id: "8",
    source: "MoM",
    title: "National Mineral Policy Implementation Report 2025-26 — Progress on District Mineral Foundation (DMF) Utilization",
    url: "https://mines.gov.in/writereaddata/UploadFile/nmp_report_2025_26.pdf",
    date: "2026-04-15",
    tag: "News",
  },
  {
    id: "9",
    source: "DGMS",
    title: "DGMS Circular No. 01 of 2026: Revised Guidelines for Appointment of Qualified Persons under CMR 2017",
    url: "https://dgms.gov.in/writereaddata/UploadFile/Circular_01_2026.pdf",
    date: "2026-04-10",
    tag: "Circular",
  },
  {
    id: "10",
    source: "IBM",
    title: "IBM Advisory on Mine Closure Plan Compliance — Extensions and Penalty Framework under MCDR Rule 23",
    url: "https://ibm.gov.in/writereaddata/UploadFile/mine_closure_advisory.pdf",
    date: "2026-04-05",
    tag: "Rule",
  },
  {
    id: "11",
    source: "MoM",
    title: "Gazette Notification G.S.R. 315(E): Mineral Conservation and Development (Amendment) Rules, 2026",
    url: "https://mines.gov.in/writereaddata/UploadFile/mcdr_amendment_2026.pdf",
    date: "2026-03-28",
    tag: "Gazette",
  },
  {
    id: "12",
    source: "DGMS",
    title: "DGMS Safety Alert: Prevention of Roof Fall Accidents in Board and Pillar Workings — Best Practices Advisory",
    url: "https://dgms.gov.in/writereaddata/UploadFile/Safety_Alert_Roof_Fall.pdf",
    date: "2026-03-22",
    tag: "Circular",
  },
  {
    id: "13",
    source: "PRS",
    title: "Standing Committee Report on Mines and Minerals — Recommendations on Illegal Mining Prevention and Environmental Clearance",
    url: "https://prsindia.org/policy/report-summaries/standing-committee-mining-2026",
    date: "2026-03-15",
    tag: "News",
  },
  {
    id: "14",
    source: "IBM",
    title: "IBM Notification: Mandatory Adoption of Mining Plan Management System (MPMS) Portal for All Category-A Mines",
    url: "https://ibm.gov.in/writereaddata/UploadFile/mpms_portal_notification.pdf",
    date: "2026-03-10",
    tag: "Rule",
  },
  {
    id: "15",
    source: "MoM",
    title: "Central Government Guidelines on Exploration Licence Grants under Section 10A(2)(b) of MMDR Act",
    url: "https://mines.gov.in/writereaddata/UploadFile/exploration_licence_guidelines.pdf",
    date: "2026-03-05",
    tag: "Act",
  },
]

export async function GET() {
  return NextResponse.json({
    updates,
    lastRefreshed: new Date().toISOString(),
  })
}
