"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  variant: string;
  unit: number;
  qty: number;
  img: string;
};

const initialItems: CartItem[] = [
  { slug: "assiette-la-dolce-vita", name: "Assiette La Dolce Vita", variant: "La Dolce Vita · 20 cm", unit: 12.5, qty: 1, img: "/produit/plate-main.png" },
  { slug: "bougie-violette", name: "Bougie Violette", variant: "Violette · 220 g", unit: 23, qty: 2, img: "/assets/bs-1.png" },
  { slug: "diffuseur-coco-tonka", name: "Diffuseur Coco & Tonka", variant: "150 ml", unit: 25, qty: 1, img: "/assets/bs-3.png" },
];

const steps = ["Panier", "Livraison", "Paiement", "Confirmation"];

const suggestions = [
  { slug: "bougie-lait-damande", name: "BOUGIE LAIT D'AMANDE", price: "23.00€", img: "/assets/bs-2.png" },
  { slug: "assiette-la-dolce-vita", name: "BOUGEOIR LA DOLCE VITA", price: "19.00€", img: "/produit/thumb-dolce-vita.png" },
  { slug: "bougie-lait-de-figue", name: "CARAFE ECLAT DE SOLEIL", price: "16.50€", img: "/assets/bs-5.png" },
];

const fmt = (n: number) => n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "€";

export default function CartClient() {
  const [items, setItems] = useState(initialItems);

  const setQty = (i: number, delta: number) =>
    setItems((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], qty: Math.max(1, next[i].qty + delta) };
      return next;
    });

  const removeItem = (i: number) => setItems((prev) => prev.filter((_, idx) => idx !== i));

  const { count, subtotal } = useMemo(() => {
    // "articles" counts distinct lines (matches the Figma récapitulatif)
    let s = 0;
    for (const it of items) s += it.unit * it.qty;
    return { count: items.length, subtotal: s };
  }, [items]);

  const freeShipping = subtotal >= 35;

  return (
    <div className="mx-auto w-full max-w-[1608px] px-5 py-12 sm:px-10">
      {/* Title + progress steps */}
      <p className="font-label text-[16px] tracking-[1.5px] text-[#ff5883] sm:text-[18px]">
        {count} ARTICLE{count > 1 ? "S" : ""}
      </p>
      <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <h1 className="font-display text-[36px] font-bold leading-none text-black sm:text-[44px]">Votre panier</h1>
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 items-center justify-center text-[13px] font-bold ${
                  i === 0 ? "bg-kult-violet text-white" : "border border-neutral-300 text-neutral-400"
                }`}
              >
                {i + 1}
              </span>
              <span className={`font-display text-[16px] ${i === 0 ? "text-black" : "text-neutral-400"}`}>{s}</span>
              {i < steps.length - 1 && <span className="ml-1 hidden h-px w-10 bg-neutral-300 sm:block" />}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_420px]">
        {/* ===== Items ===== */}
        <div className="flex flex-col">
          {items.length === 0 && (
            <p className="font-display py-16 text-center text-[20px] text-[#595959]">
              Votre panier est vide.{" "}
              <Link href="/" className="text-kult-violet underline">Découvrir la collection</Link>
            </p>
          )}
          {items.map((it, i) => (
            <div key={it.slug} className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-neutral-200 py-6">
              <Link href={`/produit/${it.slug}`} className="relative h-[80px] w-[80px] shrink-0 overflow-hidden bg-neutral-100 sm:h-[92px] sm:w-[92px]">
                <Image src={it.img} alt={it.name} fill className="object-cover" sizes="92px" />
              </Link>
              <div className="min-w-[130px] flex-1">
                <Link href={`/produit/${it.slug}`} className="font-display block text-[18px] font-bold leading-tight text-black hover:opacity-70 sm:text-[22px]">
                  {it.name}
                </Link>
                <p className="font-display text-[14px] text-[#595959] sm:text-[16px]">{it.variant}</p>
                <button onClick={() => removeItem(i)} className="mt-1 text-[13px] text-neutral-400 underline hover:text-black">
                  Retirer
                </button>
              </div>
              {/* qty stepper */}
              <div className="flex items-center gap-4 border border-black px-3.5 py-2">
                <button aria-label="Diminuer" onClick={() => setQty(i, -1)} className="text-[18px] leading-none">−</button>
                <span className="font-display min-w-[16px] text-center text-[16px] font-bold">{it.qty}</span>
                <button aria-label="Augmenter" onClick={() => setQty(i, 1)} className="text-[18px] leading-none">+</button>
              </div>
              <p className="font-display ml-auto w-[80px] shrink-0 text-right text-[18px] font-medium italic text-black sm:w-[90px] sm:text-[20px]">
                {fmt(it.unit * it.qty)}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Summary ===== */}
        <aside className="flex flex-col gap-4">
          {/* gift banner */}
          <div className="flex items-center gap-3 bg-kult-pink-soft px-5 py-3.5">
            <span className="text-[18px]">🎁</span>
            <p className="font-label text-[13px] tracking-[0.5px] text-black sm:text-[14px]">
              Une bougie offerte est incluse dans votre commande !
            </p>
          </div>

          <div className="border border-neutral-200 p-7">
            <h2 className="font-display text-[24px] font-bold text-black">Récapitulatif</h2>
            <div className="mt-5 space-y-3">
              <Row label={`Sous-total (${count} article${count > 1 ? "s" : ""})`} value={fmt(subtotal)} />
              <Row
                label="Livraison"
                value={freeShipping ? "Offerte" : "4.90€"}
                valueClass={freeShipping ? "font-bold text-[#39b89a]" : ""}
              />
            </div>
            <div className="my-5 h-px bg-neutral-200" />
            <div className="flex items-center justify-between">
              <span className="font-display text-[22px] font-bold text-black">Total</span>
              <span className="font-display text-[22px] font-bold text-black">{fmt(subtotal)}</span>
            </div>

            {/* promo */}
            <div className="mt-5 flex gap-2">
              <input
                placeholder="Code promo"
                className="font-display h-[52px] min-w-0 flex-1 border border-neutral-300 px-4 text-[15px] text-black placeholder:text-neutral-400 focus:border-black focus:outline-none"
              />
              <button className="font-display shrink-0 border border-black px-5 text-[15px] font-medium transition hover:bg-black hover:text-white">
                Appliquer
              </button>
            </div>

            <button
              disabled={items.length === 0}
              className="font-display mt-4 w-full bg-kult-violet py-4 text-[18px] font-bold uppercase tracking-[1px] text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40 sm:text-[20px]"
            >
              Passer la commande
            </button>
          </div>

          {/* reassurance */}
          <ul className="mt-1 space-y-2 text-[15px] text-[#595959]">
            <li>🔒 Paiement 100% sécurisé</li>
            <li>↩️ Retours gratuits sous 30 jours</li>
            <li>🚚 Livraison offerte dès 35€ d&apos;achat</li>
          </ul>
        </aside>
      </div>

      {/* ===== Suggestions ===== */}
      <section className="mt-24">
        <h2 className="font-label mb-10 text-[32px] text-[#ff5883] sm:text-[44px]">Complétez votre commande</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          {suggestions.map((s) => (
            <Link key={s.name} href={`/produit/${s.slug}`} className="group flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                <Image src={s.img} alt={s.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:640px) 90vw, 30vw" />
              </div>
              <h3 className="font-display text-[20px] font-bold uppercase text-black sm:text-[24px]">{s.name}</h3>
              <p className="font-display text-[20px] text-black sm:text-[24px]">{s.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Row({ label, value, valueClass = "" }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-display text-[16px] text-[#595959] sm:text-[17px]">{label}</span>
      <span className={`font-display text-[16px] text-black sm:text-[17px] ${valueClass}`}>{value}</span>
    </div>
  );
}
