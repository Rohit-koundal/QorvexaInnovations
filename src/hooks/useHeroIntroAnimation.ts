"use client";

import type { RefObject } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const HERO_INTRO_SESSION_KEY = "qorvexa:hero-intro:v1";

export function useHeroIntroAnimation(
  rootRef: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  useLayoutEffect(() => {
    if (!enabled || !rootRef.current) return;

    const root = rootRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    let introSeen = false;
    let timeline: gsap.core.Timeline | undefined;

    try {
      introSeen = window.sessionStorage.getItem(HERO_INTRO_SESSION_KEY) === "seen";
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }

    const context = gsap.context(() => {
        const background = root.querySelectorAll<HTMLElement>("[data-hero-background]");
        const orbs = root.querySelectorAll<HTMLElement>("[data-hero-orb]");
        const eyebrow = root.querySelectorAll<HTMLElement>("[data-hero-eyebrow]");
        const heading = root.querySelectorAll<HTMLElement>("[data-hero-heading]");
        const paragraph = root.querySelectorAll<HTMLElement>("[data-hero-paragraph]");
        const actions = root.querySelectorAll<HTMLElement>("[data-hero-actions]");
        const laptop = root.querySelectorAll<HTMLElement>("[data-hero-laptop]");
        const phone = root.querySelectorAll<HTMLElement>("[data-hero-phone]");
        const phoneShadow = root.querySelectorAll<HTMLElement>("[data-hero-phone-shadow]");
        const serviceCards = root.querySelectorAll<HTMLElement>("[data-hero-service-card]");
        const allTargets = [
          ...background,
          ...orbs,
          ...eyebrow,
          ...heading,
          ...paragraph,
          ...actions,
          ...laptop,
          ...phone,
          ...phoneShadow,
          ...serviceCards,
        ];

        const motionTargets = [...eyebrow, ...heading, ...paragraph, ...actions, ...laptop, ...phone, ...phoneShadow, ...serviceCards];

        root.dataset.heroIntro = "running";
        gsap.set(motionTargets, { willChange: "transform, opacity" });

        timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            gsap.set(allTargets, { clearProps: "willChange,transform,opacity,visibility" });
            root.dataset.heroIntro = "complete";
            root.dispatchEvent(new Event("qorvexa:hero-runtime"));
            if (!introSeen) {
              try {
                window.sessionStorage.setItem(HERO_INTRO_SESSION_KEY, "seen");
              } catch {
                // The animation remains functional when storage is unavailable.
              }
            }
          },
        });

        if (reducedMotion) {
          timeline.fromTo(
            allTargets,
            { opacity: 0, y: 4 },
            { opacity: 1, y: 0, duration: 0.24, ease: "power2.out" },
          );
          return;
        }

        if (introSeen) {
          timeline
            .fromTo(background, { opacity: 0 }, { opacity: 1, duration: 0.48 }, 0)
            .fromTo(orbs, { opacity: 0 }, { opacity: 1, duration: 0.42, stagger: 0.06 }, 0.08)
            .fromTo(
              [...eyebrow, ...heading, ...paragraph, ...actions],
              { opacity: 0, y: 12 },
              { opacity: 1, y: 0, duration: 0.46, stagger: 0.045 },
              0.06,
            )
            .fromTo(
              laptop,
              { opacity: 0, x: mobile ? 28 : 45, y: 16, scale: 0.97 },
              { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.62 },
              0.08,
            )
            .fromTo(
              phone,
              { opacity: 0, x: mobile ? 46 : 70, y: 24, scale: 0.9, rotationZ: 4 },
              { opacity: 1, x: 0, y: 0, scale: 1, rotationZ: 0, duration: 0.7, ease: "power4.out" },
              0.14,
            )
            .fromTo(
              phoneShadow,
              { opacity: 0, y: 8, scaleX: 0.68, scaleY: 0.8 },
              { opacity: 1, y: 0, scaleX: 1, scaleY: 1, duration: 0.62, ease: "power3.out" },
              0.2,
            )
            .fromTo(
              serviceCards,
              { opacity: 0, y: 10, scale: 0.96 },
              { opacity: 1, y: 0, scale: 1, duration: 0.42, stagger: 0.055 },
              0.36,
            );
          return;
        }

        const phoneEntry = {
          x: mobile ? 92 : 188,
          y: mobile ? 54 : 88,
          scale: mobile ? 0.84 : 0.78,
          rotationZ: mobile ? 6 : 8,
        };

        timeline
          .fromTo(background, { opacity: 0 }, { opacity: 1, duration: 0.82, ease: "power2.out" }, 0)
          .fromTo(orbs, { opacity: 0 }, { opacity: 1, duration: 0.7, stagger: 0.08 }, 0.08)
          .fromTo(eyebrow, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.52 }, 0.16)
          .fromTo(
            heading,
            { opacity: 0, y: 34 },
            { opacity: 1, y: 0, duration: 0.78, ease: "power4.out" },
            0.2,
          )
          .fromTo(
            laptop,
            { opacity: 0, x: mobile ? 52 : 105, y: 34, scale: 0.92 },
            { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.96, ease: "power4.out" },
            0.27,
          )
          .fromTo(
            phone,
            { opacity: 0, ...phoneEntry },
            { opacity: 1, x: -5, y: -6, scale: 1.02, rotationZ: -0.8, duration: 0.82, ease: "power4.out" },
            0.42,
          )
          .fromTo(
            phoneShadow,
            { opacity: 0, y: 12, scaleX: 0.5, scaleY: 0.68 },
            { opacity: 1, y: 0, scaleX: 1.04, scaleY: 1, duration: 0.82, ease: "power4.out" },
            0.5,
          )
          .to(
            phone,
            { x: 0, y: 0, scale: 1, rotationZ: 0, duration: 0.34, ease: "power2.out" },
            1.24,
          )
          .to(phoneShadow, { scaleX: 1, duration: 0.3, ease: "power2.out" }, 1.32)
          .fromTo(paragraph, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.58 }, 0.86)
          .fromTo(actions, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.52 }, 1.08)
          .fromTo(
            serviceCards,
            { opacity: 0, y: 20, scale: 0.92 },
            { opacity: 1, y: 0, scale: 1, duration: 0.52, stagger: 0.1, ease: "power3.out" },
            1.08,
          );
      }, root);

    let inViewport = true;
    const updateActivity = () => {
      const active = inViewport && document.visibilityState === "visible";
      root.dataset.heroPaused = active ? "false" : "true";
      if (active) timeline?.resume();
      else timeline?.pause();
      root.dispatchEvent(new Event("qorvexa:hero-runtime"));
    };

    const initialRect = root.getBoundingClientRect();
    inViewport = initialRect.bottom >= -120 && initialRect.top <= window.innerHeight + 120;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry?.isIntersecting ?? true;
        updateActivity();
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );
    observer.observe(root);
    document.addEventListener("visibilitychange", updateActivity, { passive: true });
    updateActivity();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateActivity);
      context.revert();
    };
  }, [enabled, rootRef]);
}
