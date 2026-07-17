import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TeamCard } from "@/components/shared/TeamCard";
import { team } from "@/data/team";

export function TeamPreview() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading
            eyebrow="Leadership"
            title="The People Behind Qorvexa"
            description="A focused founding team bringing product strategy, engineering, design, and practical business thinking together."
          />
          <Button href="/team" variant="secondary" showArrow className="w-full sm:w-fit">
            Meet Our Team
          </Button>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
