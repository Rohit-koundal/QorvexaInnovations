export function TechnologyBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex min-h-10 items-center rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-bold text-slate-700 shadow-sm">
      {name}
    </span>
  );
}
