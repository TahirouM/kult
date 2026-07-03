"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, productsByCategory } from "../lib/products";

export default function CatalogueGrid() {
  const params = useSearchParams();
  const active = params.get("cat") ?? "tous";
  const list = productsByCategory(active);
  const activeLabel = CATEGORIES.find((c) => c.slug === active)?.label;

  return (
    <section className="relative w-full overflow-hidden">
      {/* decorative rose motif behind the whole product area */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-full opacity-50">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url(/assets/logo-motifs-1.png)",
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1608px] px-5 py-12 sm:px-10 sm:py-16">
        <h1 className="font-display text-[32px] font-bold leading-none text-black sm:text-[40px]">
          NOTRE CATALOGUE
        </h1>

        {/* Optional category filter (used when arriving from the menu) */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="/catalogue"
            className={`font-display px-5 py-2 text-[14px] transition sm:text-[15px] ${
              active === "tous" ? "bg-black font-bold text-white" : "border border-black/20 text-black hover:border-black"
            }`}
          >
            Tous
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/catalogue?cat=${c.slug}`}
              className={`font-display px-5 py-2 text-[14px] transition sm:text-[15px] ${
                active === c.slug ? "bg-black font-bold text-white" : "border border-black/20 text-black hover:border-black"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>

        {/* Product grid — 4 columns like the Figma layout */}
        {list.length === 0 ? (
          <p className="font-display mt-16 text-[20px] text-[#595959]">
            Aucun produit dans {activeLabel ? `la catégorie « ${activeLabel} »` : "cette catégorie"} pour le moment.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4">
            {list.map((p) => (
              <Link key={p.slug} href={`/produit/${p.slug}`} className="group flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden bg-white">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 45vw, (max-width:1024px) 30vw, 24vw"
                  />
                </div>
                <h2 className="font-display mt-3 text-[15px] font-bold uppercase leading-tight text-black sm:text-[16px]">
                  {p.name}
                </h2>
                <p className="font-display mt-1 text-[14px] text-black sm:text-[15px]">{p.price}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
