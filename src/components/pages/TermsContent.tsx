import { LegalPage } from "@/components/pages/LegalPage";

const sections = [
  { id: "acceptance", title: "Acceptance and scope", paragraphs: ["By accessing this public website, you agree to these Terms and Conditions. If you do not agree, please stop using the website. A Qorvexa product, proposal, customer engagement, partnership, or paid service may be governed by separate terms or agreements."] },
  { id: "information", title: "Website information", paragraphs: ["Website content is provided for general company, service, and product information. Product concepts, availability, technologies, timelines, results, and other details may change or require direct confirmation. The website is not a binding offer or professional advice."] },
  { id: "acceptable-use", title: "Acceptable use", paragraphs: ["You may use the website for lawful informational and enquiry purposes. You must not disrupt the website, attempt unauthorized access, submit malicious material, misuse automated systems, impersonate another person, or use the content in a way that infringes rights or violates law."] },
  { id: "intellectual-property", title: "Intellectual property", paragraphs: ["The Qorvexa name, website design, original text, software, graphics, and other original materials may be protected by intellectual-property laws. Product names and third-party marks remain the property of their respective owners. No ownership rights are transferred by viewing the website."] },
  { id: "third-parties", title: "Third-party services and links", paragraphs: ["The website may link to or rely on third-party services. Qorvexa does not control their availability, content, security, or privacy practices. Review the applicable third-party terms before using those services."] },
  { id: "disclaimer", title: "Disclaimer", paragraphs: ["The public website is provided on an “as available” basis. Qorvexa does not warrant uninterrupted access or that every page will always be complete, current, or error-free. Product and service commitments exist only in applicable written agreements."] },
  { id: "liability", title: "Limitation of liability", paragraphs: ["To the maximum extent permitted by applicable law, Qorvexa Innovations will not be responsible for indirect, incidental, special, or consequential loss arising solely from use of this public website or a third-party link. Nothing in these terms excludes liability that cannot lawfully be excluded."] },
  { id: "changes", title: "Changes and contact", paragraphs: ["These terms may be revised to reflect changes to the website, operations, or legal requirements. The updated version will be posted here with a revised date. Questions may be sent to hello@qorvexainnovations.com."] },
] as const;

export function TermsContent() {
  return <LegalPage title="Terms and Conditions" description="These terms set out the basic rules for using the Qorvexa Innovations public website and its information." updated="July 17, 2026" sections={sections} />;
}
