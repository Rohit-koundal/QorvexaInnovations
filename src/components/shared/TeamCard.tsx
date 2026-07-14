import { Check } from "lucide-react";

import { Card } from "@/components/shared/Card";
import type { TeamMember } from "@/types/team";

export function TeamCard({
  member,
  showResponsibilities = false,
}: {
  member: TeamMember;
  showResponsibilities?: boolean;
}) {
  return (
    <Card className="h-full p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <div
          className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#312e81,#4f46e5_55%,#06b6d4)] text-lg font-extrabold text-white shadow-lg shadow-indigo-950/15"
          aria-hidden="true"
        >
          {member.initials}
        </div>
        <div>
          <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-bold text-indigo-600">{member.role}</p>
        </div>
      </div>
      <p className="mt-6 leading-7 text-slate-600">{member.description}</p>
      {showResponsibilities ? (
        <ul className="mt-6 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">
          {member.responsibilities.map((responsibility) => (
            <li
              className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              key={responsibility}
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                <Check className="size-3" aria-hidden="true" />
              </span>
              {responsibility}
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
