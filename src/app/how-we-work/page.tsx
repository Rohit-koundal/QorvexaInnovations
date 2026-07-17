import type { Metadata } from "next";

import { ProcessPageView } from "@/components/pages/ProcessPageView";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Qorvexa's collaborative delivery process from discovery through launch and continued growth.",
  alternates: { canonical: "/process" },
};

export default function HowWeWorkPage() {
  return <ProcessPageView />;
}
