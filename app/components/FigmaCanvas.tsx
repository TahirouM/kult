"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { CANVAS } from "../lib/scale";

/**
 * Reproduces the Figma frame 1:1. Children are positioned in raw Figma pixel
 * coordinates via <FBox>; a ResizeObserver measures the available width and
 * scales the fixed-pixel canvas so it fills the viewport (capped at the
 * reference width), preserving every proportion exactly as designed.
 */
export function FigmaCanvas({
  height,
  children,
}: {
  height: number;
  children: ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      setScale(w / CANVAS);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-full overflow-hidden"
      style={{
        maxWidth: `${CANVAS}px`,
        height: `${height * scale}px`,
      }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: `${CANVAS}px`,
          height: `${height}px`,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Absolutely positioned box using raw Figma pixel coordinates. */
export function FBox({
  x,
  y,
  w,
  h,
  className = "",
  style,
  children,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        left: x,
        top: y,
        width: w,
        height: h,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
