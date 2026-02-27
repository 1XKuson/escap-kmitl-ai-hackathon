import { redirect } from "next/navigation"

export default function RootPage() {
  // Use server redirect during build/dev
  // Note: For pure static export, Next.js requires additional configuration 
  // or a meta-refresh if hosted on simple static servers.
  redirect("/en")
}
