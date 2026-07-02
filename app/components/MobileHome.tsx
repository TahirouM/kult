import Image from "next/image";
import Link from "next/link";
import {
  bestSellers,
  catalogueColumns,
  collectionItems,
  services,
} from "../lib/content";
import { ServiceIcon } from "./ServiceIcon";
import ProTeaser from "./ProTeaser";

/** Fluid, stacked layout used below the `lg` breakpoint. */
export default function MobileHome() {
  return (
    <div className="w-full">
      {/* ===== Header ===== */}
      <header className="relative z-20 flex h-[88px] items-center justify-between overflow-hidden bg-kult-pink px-4 sm:h-[110px] sm:px-6">
        {/* decorative stripes */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-group.svg"
          alt=""
          className="pointer-events-none absolute -left-40 top-0 h-full w-auto opacity-80"
        />
        <button aria-label="Menu" className="relative z-10 flex flex-col gap-[5px]">
          <span className="block h-[6px] w-[38px] bg-black" />
          <span className="block h-[6px] w-[38px] bg-black" />
          <span className="block h-[6px] w-[38px] bg-black" />
        </button>
        <div className="relative z-10 h-[52px] w-[110px] sm:h-[64px] sm:w-[130px]">
          <Image src="/assets/logo-blanc.png" alt="KULT Collection" fill className="object-contain" />
        </div>
        <div className="relative z-10 flex items-center gap-2">
          <Link href="/pro" className="inline-flex items-center gap-1 text-[12px] font-semibold text-black sm:text-[13px]">
            <span className="h-1.5 w-1.5 rounded-full bg-kult-violet" />
            Pro
          </Link>
          <Image src="/assets/shopping-bag.svg" alt="Panier" width={34} height={34} className="h-8 w-8" />
          <span className="text-[22px] font-bold leading-none text-black sm:text-[26px]">FR</span>
        </div>
      </header>

      {/* ===== Hero photo ===== */}
      <div className="relative aspect-[1728/885] w-full">
        <Image src="/assets/hero.png" alt="Bougie KULT au bord de la piscine" fill priority className="object-cover" />
      </div>

      {/* ===== Pro teaser ===== */}
      <ProTeaser />

      {/* ===== Best Sellers ===== */}
      <section className="px-4 py-12 sm:px-6">
        <h2 className="mb-6 text-center text-[32px] font-light tracking-tight sm:text-[44px]">
          BEST SELLERS
        </h2>
        <div className="rounded-sm bg-kult-pink-soft px-4 py-8 sm:px-6">
          <div className="grid grid-cols-2 gap-5 sm:gap-6">
            {bestSellers.map((p) => (
              <article key={p.x} className="flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden bg-white">
                  <Image
                    src={p.img}
                    alt={p.name || "Produit KULT"}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                {p.name && (
                  <div className="mt-3">
                    <h3 className="text-[13px] font-medium sm:text-[15px]">{p.name}</h3>
                    <p className="mt-1 text-[13px] font-medium italic sm:text-[15px]">{p.price}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Collection du mois ===== */}
      <section className="relative px-4 py-12 sm:px-6">
        <div className="pointer-events-none absolute inset-x-4 top-1/2 -z-0 -translate-y-1/2 opacity-50">
          <div className="relative aspect-[1705/538] w-full">
            <Image src="/assets/logo-motifs-1.png" alt="" fill className="object-contain" />
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-[28px] font-light leading-tight tracking-tight sm:text-[40px]">
            COLLECTION DU MOIS
          </h2>
          <p className="mt-2 text-[15px] sm:text-[18px]">Pour un été sur palm beach réussi</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {/* main image with label */}
            <div className="relative col-span-2 aspect-[435/432] overflow-hidden">
              <Image src={collectionItems.main.img} alt={collectionItems.main.name} fill className="object-cover" sizes="100vw" />
              <div className="absolute bottom-3 left-3">
                <p className="text-[13px] font-bold leading-none text-black drop-shadow-sm">{collectionItems.main.name}</p>
                <p className="mt-1 text-[15px] font-medium italic leading-none text-black drop-shadow-sm">{collectionItems.main.price}</p>
              </div>
            </div>
            {/* top small + label pill */}
            <div className="relative aspect-square overflow-hidden">
              <Image src={collectionItems.top.img} alt={collectionItems.top.name} fill className="object-cover" sizes="50vw" />
              <div className="absolute bottom-2 left-2 bg-black px-2.5 py-1.5">
                <p className="text-[11px] font-bold leading-none text-white">{collectionItems.top.name}</p>
                <p className="mt-0.5 text-[13px] font-medium italic leading-none text-white">{collectionItems.top.price}</p>
              </div>
            </div>
            {/* bottom small + label pill */}
            <div className="relative aspect-square overflow-hidden">
              <Image src={collectionItems.bottom.img} alt={collectionItems.bottom.name} fill className="object-cover" sizes="50vw" />
              <div className="absolute bottom-2 left-2 bg-black px-2.5 py-1.5">
                <p className="text-[11px] font-bold leading-none text-white">{collectionItems.bottom.name}</p>
                <p className="mt-0.5 text-[13px] font-medium italic leading-none text-white">{collectionItems.bottom.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== A propos ===== */}
      <section className="relative flex aspect-[1738/340] w-full items-center justify-center overflow-hidden">
        <Image src="/assets/about.png" alt="À propos de nous" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-kult-pink-soft/40" />
        <span className="relative z-10 rounded-full bg-black px-6 py-3 text-[22px] font-semibold text-white sm:px-8 sm:py-4 sm:text-[32px]">
          A propos de nous
        </span>
      </section>

      {/* ===== Notre catalogue ===== */}
      <section className="relative px-4 py-12 sm:px-6">
        <h2 className="text-[28px] font-light leading-tight tracking-tight sm:text-[40px]">
          NOTRE CATALOGUE
        </h2>

        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
          {catalogueColumns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3 sm:gap-4">
              {col.map((item) => (
                <div
                  key={item.img}
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: `${item.w} / ${item.h}` }}
                >
                  <Image src={item.img} alt="Produit du catalogue KULT" fill className="object-cover" sizes="33vw" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-black px-10 py-3 text-[22px] font-light text-white transition-opacity hover:opacity-80 sm:text-[28px]">
            VOIR PLUS
          </button>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 divide-y divide-neutral-300 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3 px-4 py-6 text-center text-neutral-700">
              <ServiceIcon type={s.icon} />
              <div>
                <p className="text-[14px] font-light tracking-wide sm:text-[15px]">{s.title}</p>
                <p className="mt-1 text-[13px] font-light">{s.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="w-full bg-black text-white">
        <div className="grid grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-3">
          <div>
            <h3 className="text-[18px] font-medium italic">ADDRESSE</h3>
            <div className="mt-4 space-y-1.5 text-[15px] font-medium sm:text-[16px]">
              <p>Siège Social</p>
              <p>Kult &amp; Co</p>
              <p>78 Avenue G.De.Gaulle</p>
              <p>66200 Elne</p>
              <p>France</p>
            </div>
          </div>
          <div>
            <h3 className="text-[18px] font-medium italic">NEWSLETTER</h3>
            <form className="mt-4 max-w-[345px]">
              <input
                type="email"
                placeholder="Email Adresse"
                className="h-[52px] w-full bg-white px-4 text-[16px] font-medium text-black placeholder:text-black focus:outline-none"
              />
              <button
                type="submit"
                className="mt-3 h-[52px] w-full border border-white bg-black text-[16px] font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-[18px] font-medium italic">CONTACT</h3>
            <div className="mt-4 space-y-1.5 text-[15px] font-medium sm:text-[16px]">
              <p>+(33). 6.51.67.86.32</p>
              <p className="break-all">Mail : kult.concepthome@gmail.com</p>
            </div>
            <h3 className="mt-6 text-[18px] font-medium italic">NOS RESEAUX :</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}
