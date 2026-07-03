import Image from "next/image";
import Link from "next/link";
import { bestSellers } from "../lib/content";

/**
 * Infinite horizontal marquee of best-seller products.
 * The list is rendered twice back-to-back; the track translates by -50%
 * (exactly one full list) in a linear loop, so it scrolls seamlessly forever.
 * Sizes are given in px so it looks identical at any breakpoint.
 */
export default function BestSellersCarousel({
  cardSize = 303,
  gap = 46,
  duration = 40,
}: {
  cardSize?: number;
  gap?: number;
  duration?: number;
}) {
  const loop = [...bestSellers, ...bestSellers];

  return (
    <div className="w-full overflow-hidden bg-kult-pink-soft py-10">
      <div
        className="animate-scroll-x flex w-max"
        style={{ gap, ["--scroll-duration" as string]: `${duration}s` }}
      >
        {loop.map((p, i) => (
          <Link
            key={i}
            href={`/produit/${p.slug}`}
            aria-hidden={i >= bestSellers.length}
            tabIndex={i >= bestSellers.length ? -1 : undefined}
            className="group flex shrink-0 flex-col"
            style={{ width: cardSize }}
          >
            <div className="relative overflow-hidden bg-white" style={{ width: cardSize, height: cardSize }}>
              <Image
                src={p.img}
                alt={p.name}
                fill
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
