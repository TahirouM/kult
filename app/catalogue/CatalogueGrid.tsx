"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES, productsByCategory } from "../lib/products";

export default function CatalogueGrid() {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("cat") ?? "tous";
  const list = productsByCategory(active);

  const filters = [{ slug: "tous", label: "Tous" }, ...CATEGORIES];

  const select = (slug: string) => {
    router.replace(slug === "tous" ? "/catalogue" : `/catalogue?cat=${slug}`, { scroll: false });
  };

  return (
    <div className="mx-auto w-full max-w-[1608px] px-5 py-12 sm:px-10">
      <p className="font-label text-[16px] tracking-[1.5px] text-[#ff5883] sm:text-[18px]">NOTRE CATALOGUE</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-2">
        <h1 className="font-display text-[36px] font-bold leading-none text-black sm:text-[48px]">
          Toute la collection
        </h1>
        <span className="font-display text-[15px] text-[#595959] sm:text-[16px]">
          {list.length} produit{list.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Category filters */}
      <div className="mt-8 flex flex-wrap gap-3">
        {filters.map((f) => {
          const isActive = active === f.slug;
          return (
            <button
              key={f.slug}
              onClick={() => select(f.slug)}
              aria-pressed={isActive}
              className={`font-display px-6 py-2.5 text-[15px] transition sm:text-[16px] ${
                isActive
                  ? "bg-black font-bold text-white"
                  : "border border-neutral-300 text-black hover:border-black"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Products grid */}
      {list.length === 0 ? (
        <p className="font-display mt-16 text-[20px] text-[#595959]">
          Aucun produit dans cette catégorie pour le moment.
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-3">
          {list.map((p) => (
            <Link key={p.slug} href={`/produit/${p.slug}`} className="group flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 45vw, (max-width:1024px) 45vw, 30vw"
                />
              </div>
              <h2 className="font-display text-[18px] font-bold uppercase leading-tight text-black sm:text-[22px]">
                {p.name}
              </h2>
              <p className="font-display text-[18px] text-black sm:text-[22px]">{p.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
