"use client";

import { useState } from "react";
import type { Product } from "../../lib/products";

export default function ProductInfo({ product }: { product: Product }) {
  const [format, setFormat] = useState(product.formats ? product.formats.length - 1 : 0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const price = product.formats ? product.formats[format].price : product.price;

  const addToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="flex w-full max-w-[724px] flex-col gap-6">
      <p className="font-label text-[16px] tracking-[1.5px] text-[#39b89a] md:text-[18px]">
        {product.eyebrow}
      </p>
      <h1 className="font-label text-[40px] leading-none text-[#ff5883] md:text-[48px]">
        {product.name}
      </h1>
      <p className="font-display text-[32px] font-medium text-black md:text-[36px]">{price}</p>

      {/* Format */}
      {product.formats && (
        <div className="flex flex-col gap-3.5">
          <p className="font-display text-[19px] font-bold text-black">Format</p>
          <div className="flex flex-wrap gap-4">
            {product.formats.map((f, i) => (
              <button
                key={f.label}
                onClick={() => setFormat(i)}
                aria-pressed={i === format}
                className={`px-7 py-4 text-[17px] transition md:text-[19px] ${
                  i === format
                    ? "font-display bg-[#39b89a] font-bold text-white"
                    : "font-display border-[1.5px] border-black text-black hover:bg-black/5"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Motif info (ceramics) */}
      {product.motifs && (
        <div className="flex flex-col gap-1">
          <p className="font-display text-[19px] font-bold text-black">
            Motif sélectionné : {product.motifs[0].name}
          </p>
          <p className="font-display text-[17px] text-[#666]">
            Choisissez un motif dans la galerie à gauche
          </p>
        </div>
      )}

      {/* Quantity */}
      <div className="flex flex-col gap-3.5">
        <p className="font-display text-[19px] font-bold text-black">Quantité</p>
        <div className="flex w-fit items-center gap-7 border-[1.5px] border-black px-6 py-3.5">
          <button
            aria-label="Diminuer la quantité"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="text-[24px] leading-none text-black"
          >
            –
          </button>
          <span className="font-display min-w-[16px] text-center text-[21px] font-bold">{qty}</span>
          <button
            aria-label="Augmenter la quantité"
            onClick={() => setQty((q) => q + 1)}
            className="text-[24px] leading-none text-black"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={addToCart}
        className="font-display w-full bg-[#39b89a] px-8 py-6 text-[20px] font-bold uppercase tracking-[1px] text-white transition hover:brightness-[1.06] md:text-[21.5px]"
      >
        {added ? "✓ Ajouté au panier" : "Ajouter au panier"}
      </button>

      {product.microcopy && (
        <p className="font-display text-[17px] text-[#666]">{product.microcopy}</p>
      )}

      <p className="font-display text-[19px] leading-[1.5] text-black md:text-[20.5px]">
        {product.description}
      </p>

      {/* Details table */}
      <dl className="mt-2 flex flex-col">
        {product.details.map(([label, value]) => (
          <div key={label} className="flex gap-6 border-b border-[#d9d9d9] py-4">
            <dt className="font-display w-[160px] shrink-0 text-[17px] font-bold text-black md:w-[220px] md:text-[18px]">
              {label}
            </dt>
            <dd className="font-display flex-1 text-[17px] text-[#666] md:text-[18px]">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
