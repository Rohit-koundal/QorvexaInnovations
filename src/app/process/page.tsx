import type { Metadata } from "next";

import { ProcessPageView } from "@/components/pages/ProcessPageView";

export const metadata: Metadata = {
  title: "Our Product Delivery Process",
  description: "A clear delivery process connecting discovery, strategy, UX/UI design, development, testing, deployment, support, and growth.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return <ProcessPageView />;
}
