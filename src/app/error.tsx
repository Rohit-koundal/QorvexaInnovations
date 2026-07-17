"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw } from "lucide-react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="warm-grid min-h-[70vh] py-20">
      <div className="site-shell flex min-h-[55vh] flex-col items-center justify-center text-center">
        <p className="eyebrow">Something Went Wrong</p>
        <h1 className="section-title mx-auto mt-5">This page could not be displayed correctly.</h1>
        <p className="body-lead mx-auto mt-5">Try the page again. If the problem continues, return home and use the contact page to let Qorvexa know.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="primary-button" onClick={reset}><RefreshCw className="size-4" aria-hidden="true" />Try Again</button>
          <Link href="/" className="secondary-button">Return Home <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
