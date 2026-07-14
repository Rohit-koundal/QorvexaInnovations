import { Compass } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <section className="grid min-h-[68vh] place-items-center bg-[linear-gradient(135deg,#f8fafc,#eef2ff)] py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-600/20">
            <Compass className="size-8" aria-hidden="true" />
          </div>
          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-indigo-600">
            Error 404
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            This page is not on the map.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The address may have changed, or the page may no longer exist. Let&apos;s get you
            back to something useful.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/" showArrow>
              Return Home
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
