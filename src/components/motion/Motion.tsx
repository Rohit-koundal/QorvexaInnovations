"use client";

import type { ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.56, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "shown"}
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: 0.065 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : {
        hidden: { opacity: 0, y: 20 },
        shown: { opacity: 1, y: 0, transition: { duration: .48, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function TiltStage({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 130, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 130, damping: 24 });
  const rotateY = useTransform(smoothX, [0, 1], [-3.5, 3.5]);
  const rotateX = useTransform(smoothY, [0, 1], [2.4, -2.4]);
  const translateX = useTransform(smoothX, [0, 1], [-8, 8]);

  return (
    <motion.div
      className={cn("[perspective:1200px]", className)}
      style={reduceMotion ? undefined : { rotateX, rotateY, x: translateX, transformStyle: "preserve-3d" }}
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width);
        pointerY.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        pointerX.set(.5);
        pointerY.set(.5);
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionButtonIcon({ children }: { children: ReactNode }) {
  return (
    <motion.span whileHover={{ x: 3 }} transition={{ duration: .18 }} aria-hidden="true">
      {children}
    </motion.span>
  );
}
