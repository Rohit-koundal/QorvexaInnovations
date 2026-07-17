import type { Metadata } from "next";

import { LegalPage } from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How information may be handled when you visit or contact the Qorvexa Innovations website.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  { id: "scope", title: "Scope", paragraphs: ["This policy applies to the public Qorvexa Innovations website and enquiries submitted through it. Separate Qorvexa products, customer implementations, and third-party services may require their own privacy notices."] },
  { id: "information", title: "Information you provide", paragraphs: ["When you contact Qorvexa, you may provide your name, email address, phone number, company, project context, budget preference, timeline, and message. Please do not submit passwords, access credentials, payment information, confidential customer data, or other sensitive material through the public form."], bullets: ["Contact and identity details you choose to provide", "Business and project context", "Consent and communication preferences"] },
  { id: "technical-data", title: "Technical information", paragraphs: ["Website hosting, security, and analytics services may process limited technical information such as browser type, device information, requested pages, approximate network location, timestamps, and security logs when those services are configured."] },
  { id: "use", title: "How information may be used", paragraphs: ["Information may be used to respond to enquiries, understand a requested service or product, operate and protect the website, diagnose problems, and meet applicable legal obligations. Qorvexa does not claim that every listed processing activity or integration is currently enabled."], bullets: ["Respond to a message or project enquiry", "Maintain website reliability and security", "Keep appropriate business records", "Comply with lawful requests and obligations"] },
  { id: "sharing", title: "Service providers and sharing", paragraphs: ["Information may be processed by approved providers that support website hosting, email delivery, security, analytics, or other configured functions. Information may also be disclosed when required by law, to protect rights and safety, or as part of an authorized business transaction. Qorvexa does not sell personal information through this website."] },
  { id: "retention", title: "Retention and security", paragraphs: ["Information should be retained only as long as reasonably needed for the purpose for which it was collected, operational records, dispute management, or legal obligations. Reasonable safeguards may reduce risk, but no internet transmission or storage system can be guaranteed completely secure."] },
  { id: "choices", title: "Your choices", paragraphs: ["Depending on applicable law and the context, you may ask about the information associated with your enquiry, request a correction, or request deletion where Qorvexa is not required to retain it. Identity verification may be necessary before completing a request."] },
  { id: "contact", title: "Contact", paragraphs: ["For a privacy question about this public website or a submitted enquiry, email hello@qorvexainnovations.com."] },
] as const;

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" description="This policy explains the information that may be handled through the Qorvexa Innovations website, why it may be used, and the choices available to you." updated="July 17, 2026" sections={sections} />;
}
