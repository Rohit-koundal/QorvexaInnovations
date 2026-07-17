import type { Metadata } from "next";

import { TermsContent } from "@/components/pages/TermsContent";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms that apply when using the Qorvexa Innovations public website.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return <TermsContent />;
}
