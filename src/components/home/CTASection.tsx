import { CTASection as SharedCTASection } from "@/components/shared/CTASection";

export function CTASection() {
  return (
    <SharedCTASection
      title="Have a Problem Worth Solving?"
      description="Whether you have a product idea, business challenge, partnership opportunity, or collaboration proposal, we would love to hear from you."
      primaryLabel="Start a Conversation"
      primaryHref="/contact"
      secondaryLabel="Explore Our Products"
      secondaryHref="/products"
    />
  );
}
