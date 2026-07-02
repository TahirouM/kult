"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CATS } from "../data";
import { usePro } from "../ProContext";

const PROMO = [
  "Frais de port offerts à partir de 35€",
  "Une bougie offerte dès 80€",
  "Fait main en Andalousie",
  "Livraison 48/72h",
];

function Marquee() {
  const items = [...PROMO, ...PROMO, ...PROMO, ...PROMO];
  return (
    <div className="overflow-hidden bg-[color:var(--accent)] text-[color:var(--accent-ink)]">
      <div className="flex w-max whitespace-nowrap py-2" style={{ animation: "marquee 26s linear infinite" }}>
        {items.map((t, i) => (
          <span key={i} className="mx-6 text-[13px] font-medium tracking-wide">
            ✦ {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function CartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 7h12l1 13H5L6 7z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function ProHeader() {
  const { status } = usePro();
  const proHref = status === "active" ? "/pro/portail/catalogue" : "/pro";
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--bg)]">
      <div className="mx-auto flex h-[88px] max-w-[1320px] items-center justify-between gap-6 px-6 md:px-10">
        {/* search */}
        <div className="hidden min-w-0 flex-1 items-center gap-2 border border-[color:var(--line)] px-3 py-2.5 md:flex md:max-w-[280px]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.6">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            placeholder="Que recherchez-vous ?"
            className="min-w-0 flex-1 bg-transparent text-[14px] text-[color:var(--ink)] placeholder:text-[color:var(--muted)] focus:outline-none"
          />
        </div>

        {/* logo */}
        <Link href="/" className="text-center leading-none">
          <span className="block text-[26px] font-bold tracking-[0.18em]">KULT</span>
          <span className="block text-[10px] font-light tracking-[0.4em] text-[color:var(--muted)]">
            COLLECTION
          </span>
        </Link>

        {/* right nav */}
        <nav className="flex items-center gap-5 text-[15px]">
          <Link href="/" className="hidden hover:underline md:inline">
            À propos
          </Link>
          <Link
            href={proHref}
            className="inline-flex items-center gap-1.5 font-semibold text-[color:var(--accent)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            KULT Pro
          </Link>
          <button aria-label="Panier" className="text-[color:var(--ink)]">
            <CartIcon />
          </button>
          <span className="text-[15px] font-medium">FR</span>
        </nav>
      </div>

      {/* category sub-bar */}
      <div className="border-t border-[color:var(--line)]">
        <div className="mx-auto flex h-[52px] max-w-[1320px] items-center justify-center gap-8 overflow-x-auto px-6 text-[13px] font-medium tracking-wide md:px-10">
          {CATS.map((c) => (
            <span key={c} className="cursor-pointer whitespace-nowrap hover:text-[color:var(--accent)]">
              {c}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

export function ProFooter() {
  return (
    <footer className="mt-20 w-full bg-[#0e0e0e] text-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3 md:px-10">
        <div>
          <h3 className="text-[18px] font-medium italic">ADRESSE</h3>
          <div className="mt-4 space-y-1.5 text-[15px]">
            <p>Kult &amp; Co</p>
            <p>78 Avenue G.De.Gaulle</p>
            <p>66200 Elne, France</p>
          </div>
        </div>
        <div>
          <h3 className="text-[18px] font-medium italic">NEWSLETTER</h3>
          <form className="mt-4 max-w-[320px]" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email Adresse"
              className="h-[50px] w-full bg-white px-4 text-[15px] text-black placeholder:text-black focus:outline-none"
            />
            <button className="mt-3 h-[50px] w-full border border-white text-[15px] font-medium transition-colors hover:bg-white hover:text-black">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-[18px] font-medium italic">CONTACT</h3>
          <div className="mt-4 space-y-1.5 text-[15px]">
            <p>+(33). 6.51.67.86.32</p>
            <p className="break-all">pro@kultcollection.fr</p>
          </div>
          <h3 className="mt-6 text-[18px] font-medium italic">NOS RESEAUX :</h3>
        </div>
      </div>
    </footer>
  );
}

export function ProToast() {
  const { toast, clearToast } = usePro();
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(clearToast, 3200);
    return () => clearTimeout(t);
  }, [toast, clearToast]);

  if (!toast) return null;
  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-sm bg-[#111] px-5 py-3.5 text-white shadow-lg"
      style={{ animation: "toastIn .3s ease" }}
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent)] text-[12px] text-white">
        ✓
      </span>
      <span className="text-[14px]">{toast}</span>
    </div>
  );
}
