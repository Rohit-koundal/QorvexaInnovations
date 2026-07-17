"use client";

import { useCallback, useRef } from "react";

import { useHeroIntroAnimation } from "@/hooks/useHeroIntroAnimation";

export function HeroIntroController() {
  const rootRef = useRef<HTMLElement | null>(null);
  const setMarker = useCallback((node: HTMLSpanElement | null) => {
    rootRef.current = node?.closest<HTMLElement>("[data-cinematic='true']") ?? null;
  }, []);

  useHeroIntroAnimation(rootRef, true);

  return <span ref={setMarker} className="sr-only" aria-hidden="true" />;
}
