"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "../../lib/products";

export default function ProductGallery({ product }: { product: Product }) {
  const [motif, setMotif] = useState(0);
  const hasMotifs = product.motifs && product.motifs.length > 0;

  return (
    <div className="flex w-full max-w-[700px] flex-col items-center gap-8 bg-[#fffbc3] p-8 md:p-14">
      {/* main image */}
      <div className="relative aspect-square w-full max-w-[580px] overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          fill
          priority
          className="object-cover"
          sizes="(max-width:768px) 90vw, 580px"
        />
      </div>

      {/* motif thumbnails (ceramics) */}
      {hasMotifs && (
        <div className="flex flex-wrap justify-center gap-5">
          {product.motifs!.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setMotif(i)}
              aria-label={`Motif ${m.name}`}
              aria-pressed={i === motif}
              className={`relative h-[72px] w-[72px] overflow-hidden rounded-full transition md:h-[88px] md:w-[88px] ${
                i === motif ? "ring-2 ring-[#39b89a] ring-offset-2" : "opacity-80 hover:opacity-100"
              }`}
            >
              <Image src={m.thumb} alt={m.name} fill className="object-cover" sizes="88px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
