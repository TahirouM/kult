"use client";

import { useEffect, useState } from "react";

const GIF_DURATION = 3300; // ms — one full play of loader.gif (~3.29s)
const FADE = 700; // ms — fade-out duration

/**
 * First-load intro: plays the KULT loading GIF once in a full-screen overlay,
 * then fades out. Shown only once per browser session (sessionStorage), and
 * never for users who prefer reduced motion.
 */
export default function Loader() {
  // start hidden; decide on mount to avoid SSR/first-paint flash
  const [show, setShow] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("kult-intro-seen");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) return;

    setShow(true);
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFading(true), GIF_DURATION);
    const doneTimer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("kult-intro-seen", "1");
    }, GIF_DURATION + FADE);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#93b89a] transition-opacity ease-out"
      style={{ opacity: fading ? 0 : 1, transitionDuration: `${FADE}ms` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/loader.gif"
        alt="KULT Collection"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
