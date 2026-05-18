"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  scrollHeight?: string;
  overlayColor?: string;
  maxOverlay?: number;
  children: ReactNode;
};

export default function ParallaxChapter({
  src,
  alt,
  scrollHeight = "260vh",
  overlayColor = "35,60,54",
  maxOverlay = 0.9,
  children,
}: Props) {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(rect.height - vh, 1);
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Overlay ramps in across the first 60% of scroll
  const overlayOpacity = Math.min(maxOverlay, (progress / 0.6) * maxOverlay);
  // Text fades in between 25% and 60% of scroll
  const textOpacity = Math.min(1, Math.max(0, (progress - 0.25) / 0.35));
  const textTranslate = (1 - textOpacity) * 24; // px

  return (
    <section ref={wrapRef} style={{ height: scrollHeight, position: "relative", background: "#000" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${1 + progress * 0.06})`,
            transformOrigin: "center",
            willChange: "transform",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `rgba(${overlayColor}, ${overlayOpacity})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // Push content below the nav+ribbon stack (140px) plus breathing room
            padding: "calc(140px + 80px) 1.5rem 2rem",
            opacity: textOpacity,
            transform: `translateY(${textTranslate}px)`,
            willChange: "opacity, transform",
            overflowY: "auto",
          }}
        >
          <div style={{ maxWidth: "780px", width: "100%" }}>{children}</div>
        </div>
      </div>
    </section>
  );
}
