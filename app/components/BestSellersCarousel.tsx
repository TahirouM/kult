"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { bestSellers } from "../lib/content";

/**
 * Horizontal best-seller carousel.
 * - Scrollable by hand (trackpad, wheel, touch/swipe, drag).
 * - Also auto-scrolls slowly; the auto-scroll pauses while the user interacts
 *   (hover, pointer down, or active scrolling) and resumes shortly after.
 * - The list is duplicated so the auto-scroll loops seamlessly (wraps at 50%).
 */
export default function BestSellersCarousel({
  cardSize = 303,
  gap = 46,
  speed = 40, // px per second for the auto-scroll
}: {
  cardSize?: number;
  gap?: number;
  speed?: number;
}) {
  const loop = [...bestSellers, ...bestSellers];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (now >= pausedUntil.current && !dragging.current) {
        const half = el.scrollWidth / 2; // one full list
        let next = el.scrollLeft + (speed * dt) / 1000;
        if (half > 0 && next >= half) next -= half; // seamless wrap
        el.scrollLeft = next;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // pause auto-scroll for a moment after any manual interaction
    const pause = () => {
      pausedUntil.current = performance.now() + 2000;
    };
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("touchmove", pause, { passive: true });
    el.addEventListener("scroll", pause, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("touchmove", pause);
      el.removeEventListener("scroll", pause);
    };
  }, [speed]);

  // click-and-drag to scroll (desktop)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragging.current = true;
    const startX = e.clientX;
    const startScroll = el.scrollLeft;
    el.setPointerCapture(e.pointerId);

    const move = (ev: PointerEvent) => {
      el.scrollLeft = startScroll - (ev.clientX - startX);
    };
    const up = () => {
      dragging.current = false;
      pausedUntil.current = performance.now() + 2000;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div
      className="w-full bg-kult-pink-soft py-10"
      onMouseEnter={() => (pausedUntil.current = Number.MAX_SAFE_INTEGER)}
      onMouseLeave={() => (pausedUntil.current = performance.now() + 800)}
    >
      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        className="no-scrollbar flex cursor-grab overflow-x-auto active:cursor-grabbing"
        style={{ gap, scrollbarWidth: "none" }}
      >
        {loop.map((p, i) => (
          <Link
            key={i}
            href={`/produit/${p.slug}`}
            aria-hidden={i >= bestSellers.length}
            tabIndex={i >= bestSellers.length ? -1 : undefined}
            draggable={false}
            onClick={(e) => {
              // ignore the click if it was a drag
              if (dragging.current) e.preventDefault();
            }}
            className="group flex shrink-0 flex-col select-none"
            style={{ width: cardSize }}
          >
            <div className="relative overflow-hidden bg-white" style={{ width: cardSize, height: cardSize }}>
              <Image
                src={p.img}
                alt={p.name}
                fill
                draggable={false}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={`${cardSize}px`}
              />
            </div>
            <h3 className="font-display mt-4 text-[18px] font-bold leading-tight text-black md:text-[22px]">
              {p.name}
            </h3>
            <p className="font-display mt-1 text-[16px] font-medium text-black md:text-[20px]">
              {p.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
