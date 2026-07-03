import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BurgerMenu from "../components/BurgerMenu";
import { ServiceIcon } from "../components/ServiceIcon";
import { services } from "../lib/content";

export const metadata: Metadata = {
  title: "À propos de nous — KULT Collection",
  description:
    "KULT Collection : maison d'artisanat contemporain. L'art de vivre californien et méditerranéen en bougie, parfum d'intérieur et céramique faits main.",
};

const valeurs = [
  { icon: "✋", title: "Fait main", body: "Chaque bougie est coulée à la main dans notre atelier parisien, chaque céramique tournée et peinte à la main en Andalousie." },
  { icon: "🌿", title: "Ingrédients naturels", body: "Cire de soja 100% naturelle, mèche en coton biologique, parfums composés à Grasse." },
  { icon: "🏺", title: "Pièces uniques", body: "Nuances et tracés varient légèrement d'une pièce à l'autre — la signature d'un objet fait main." },
  { icon: "🇫🇷", title: "Fabriqué en France & Espagne", body: "Bougies coulées à Paris, céramiques fabriquées en Andalousie. Un savoir-faire européen assumé." },
];

const gammes = [
  {
    title: "Bougies, diffuseurs et parfums d'intérieur",
    items: [
      "Cire de soja 100% naturelle",
      "Mèche en coton biologique",
      "Contenants en céramique tournés et peints à la main en Andalousie",
    ],
    footnote: "Gamme historique de la marque, cœur de l'offre actuelle.",
  },
  {
    title: "Céramique de maison",
    items: [
      "Dessinée à l'atelier parisien",
      "Fabriquée et peinte à la main en Andalousie",
      "Chaque année, le nombre de références double",
    ],
    footnote: "Gamme en pleine expansion, axe de différenciation pour les années à venir.",
  },
];

const boutiques = [
  { img: "/apropos/boutique-paris.png", name: "Boutique Paris 20", date: "Ouverte en 2024", body: "Le premier point de vente physique de la marque, vitrine de l'univers Kult." },
  { img: "/apropos/boutique-vincennes.png", name: "Boutique Vincennes", date: "Ouverte en 2026", body: "Deuxième adresse, confirmation de la dynamique de développement du réseau." },
];

const stats = [
  { n: "30+", label: "pays de distribution" },
  { n: "2", label: "boutiques en nom propre (Paris et Vincennes)" },
  { n: "50+", label: "produits artisanaux, fabriqués en France et en Espagne" },
];

const kicker = "font-label text-[16px] tracking-[1.5px] text-[#ff5883] sm:text-[18px]";
const h2 = "font-display text-[30px] font-bold leading-tight text-black sm:text-[40px]";
const body = "font-display text-[18px] leading-[1.4] text-[#595959] sm:text-[20.5px]";

export default function AProposPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* ===== Header (lavender) ===== */}
      <header className="relative z-20 flex h-[88px] items-center justify-between overflow-hidden bg-[#d1d6ff] px-5 sm:h-[108px] sm:px-8">
        <div className="relative z-10">
          <BurgerMenu barWidth={48} barHeight={7} gap={5} />
        </div>
        <Link href="/" className="relative z-10 block h-[54px] w-[104px] sm:h-[66px] sm:w-[128px]">
          <Image src="/apropos/logo-rose.png" alt="KULT Collection" fill className="object-contain" priority />
        </Link>
        <div className="relative z-10 flex items-center gap-3">
          <span className="font-label text-[26px] text-[#ff5883] sm:text-[32px]">FR</span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1608px] px-5 sm:px-10">
        {/* ===== Hero ===== */}
        <section className="flex flex-col items-center gap-10 py-16 lg:flex-row lg:gap-20 lg:py-24">
          <div className="flex w-full flex-col gap-6 lg:w-[664px]">
            <p className={kicker}>DEPUIS 2018</p>
            <h1 className={h2}>
              L&apos;art de vivre californien et méditerranéen, en bougie, parfum d&apos;intérieur et céramique.
            </h1>
            <p className={body}>
              Kult est une maison d&apos;artisanat contemporain où bougies parfumées et objets en céramique
              deviennent des objets d&apos;émotion. Nous célébrons le fait-main, la matière et les couleurs —
              chaque pièce est pensée comme un objet de décoration autant qu&apos;un objet de sens.
            </p>
          </div>
          <div className="relative aspect-[744/601] w-full flex-1 overflow-hidden">
            <Image src="/apropos/hero.png" alt="Bougie KULT Room Service" fill priority className="object-cover" sizes="(max-width:1024px) 90vw, 720px" />
          </div>
        </section>

        {/* ===== Histoire ===== */}
        <section className="flex flex-col gap-10 py-16 lg:flex-row lg:gap-24 lg:py-24">
          <div className="flex flex-col gap-5 lg:w-[820px]">
            <p className={kicker}>NOTRE HISTOIRE</p>
            <h2 className={h2}>Deux univers qui se rencontrent, une maison qui en naît.</h2>
            <div className={`${body} space-y-4`}>
              <p>
                Nos parfums sont sélectionnés à Grasse, nos bougies coulées à la main dans notre atelier
                parisien, et nos contenants en céramique sont imaginés par nos soins puis tournés et peints à
                la main par des artisans en Andalousie.
              </p>
              <p>Chaque pièce mêle savoir-faire, douceur et authenticité.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 self-start bg-[#ff5883] p-8 text-white lg:w-[468px]">
            <p className="font-label text-[15.5px] tracking-[1px]">UNE DOUBLE INSPIRATION ASSUMÉE</p>
            <p className="font-display text-[24px] leading-[1.15] sm:text-[26.5px]">
              La décontraction lumineuse de la Californie. La sensorialité chaude de la Méditerranée.
            </p>
          </div>
        </section>

        {/* ===== Atelier ===== */}
        <section className="flex flex-col gap-10 py-16 lg:flex-row lg:items-center lg:gap-20 lg:py-24">
          <div className="flex flex-col gap-4 lg:w-[500px]">
            <p className={kicker}>NOTRE ATELIER</p>
            <h2 className={h2}>Atelier de création à Paris (20e arrondissement)</h2>
            <p className={body}>
              C&apos;est ici que naissent les formules olfactives et les designs, et que sont coulées nos
              bougies — à la main, une à une.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-4 sm:gap-6">
            {["/apropos/atelier-1.png", "/apropos/atelier-2.png", "/apropos/atelier-3.png"].map((src, i) => (
              <div key={i} className="relative aspect-[275/361] w-full overflow-hidden">
                <Image src={src} alt="Atelier KULT" fill className="object-cover" sizes="30vw" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== Valeurs ===== */}
        <section className="py-16 lg:py-24">
          <p className={kicker}>NOS ENGAGEMENTS</p>
          <h2 className={`${h2} mt-3.5`}>Pourquoi choisir Kult ?</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((v) => (
              <div key={v.title} className="flex flex-col gap-3">
                <span className="text-[38px] leading-none">{v.icon}</span>
                <h3 className="font-display text-[22px] font-bold text-black sm:text-[24px]">{v.title}</h3>
                <p className="font-display text-[17px] leading-[1.4] text-[#595959] sm:text-[18px]">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Gammes ===== */}
        <section className="py-16 lg:py-24">
          <p className={kicker}>NOTRE OFFRE</p>
          <h2 className={`${h2} mt-3.5`}>Deux gammes, un seul univers.</h2>
          <div className="mt-11 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {gammes.map((g) => (
              <div key={g.title} className="flex flex-col gap-5 border-[1.5px] border-[#dedede] p-9">
                <h3 className="font-label text-[26px] text-[#39b89a] sm:text-[32px]">{g.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="font-display text-[17px] text-black sm:text-[18.5px]">✓&nbsp;&nbsp;{it}</li>
                  ))}
                </ul>
                <p className="font-display text-[16px] text-[#595959] sm:text-[17px]">{g.footnote}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Boutiques ===== */}
        <section className="relative py-16 lg:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 mx-auto h-[300px] max-w-[1805px] -translate-y-1/2 opacity-60 sm:h-[378px]">
            <Image src="/apropos/motif-blue.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative z-10">
            <p className={kicker}>NOS BOUTIQUES</p>
            <h2 className={`${h2} mt-3.5`}>Deux adresses, un fil narratif californien.</h2>
            <p className={`${body} mt-4 max-w-[900px]`}>
              Au-delà des produits Kult Collection, nos boutiques mettent en scène une sélection de marques
              lifestyle et déco qui partagent cette même inspiration.
            </p>
            <div className="mt-11 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {boutiques.map((b) => (
                <div key={b.name} className="flex flex-col gap-8">
                  <div className="relative aspect-[728/340] w-full overflow-hidden bg-[#e8e8e8]">
                    <Image src={b.img} alt={b.name} fill className="object-cover" sizes="(max-width:1024px) 90vw, 50vw" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-display text-[24px] font-bold text-black">{b.name}</h3>
                    <p className="font-label text-[18px] text-[#39b89a]">{b.date}</p>
                    <p className="font-display text-[18px] leading-[1.4] text-[#595959] sm:text-[18.5px]">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Stats ===== */}
        <section className="grid grid-cols-1 gap-12 pb-16 text-center sm:grid-cols-3 lg:pb-24">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="font-label text-[80px] leading-none text-[#ff5883] sm:text-[115px]">{s.n}</span>
              <p className="font-display max-w-[340px] text-[17px] text-[#595959] sm:text-[18.5px]">{s.label}</p>
            </div>
          ))}
        </section>
      </div>

      {/* ===== CTA ===== */}
      <section className="relative flex flex-col items-center gap-6 overflow-hidden px-6 py-20 text-center sm:py-24">
        <Image src="/apropos/cta-bg.png" alt="" fill className="object-cover" sizes="100vw" />
        <h2 className="font-label relative z-10 text-[34px] leading-tight text-white sm:text-[48px]">
          La vie est belle. Découvrez la collection.
        </h2>
        <Link
          href="/"
          className="font-label relative z-10 bg-[#fff45c] px-10 py-5 text-[20px] tracking-[1px] text-[#ff5883] transition hover:brightness-105 sm:text-[24px]"
        >
          Voir le catalogue
        </Link>
      </section>

      {/* ===== Services ===== */}
      <section className="mx-auto w-full max-w-[1608px] px-5 py-12 sm:px-10">
        <div className="grid grid-cols-1 divide-y divide-neutral-300 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3 px-6 py-8 text-center text-neutral-700">
              <ServiceIcon type={s.icon} />
              <div>
                <p className="text-[15px] font-light tracking-wide sm:text-[18px]">{s.title}</p>
                <p className="mt-1 text-[14px] font-light">{s.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer id="contact" className="w-full bg-black text-white">
        <div className="mx-auto grid max-w-[1608px] grid-cols-1 gap-10 px-8 py-16 sm:grid-cols-3 sm:px-10">
          <div>
            <h3 className="text-[20px] font-medium italic sm:text-[24px]">ADDRESSE</h3>
            <div className="mt-4 space-y-1.5 text-[16px] font-medium sm:text-[20px]">
              <p>Siège Social</p>
              <p>Kult &amp; Co</p>
              <p>78 Avenue G.De.Gaulle</p>
              <p>66200 Elne</p>
              <p>France</p>
            </div>
          </div>
          <div>
            <h3 className="text-[20px] font-medium italic sm:text-[24px]">NEWSLETTER</h3>
            <form className="mt-4 max-w-[345px]" action="#">
              <input type="email" placeholder="Email Adresse" className="h-[52px] w-full bg-white px-4 text-[16px] font-medium text-black placeholder:text-black focus:outline-none" />
              <button className="mt-3 h-[52px] w-full border border-white bg-black text-[16px] font-medium text-white transition-colors hover:bg-white hover:text-black">SUBSCRIBE NOW</button>
            </form>
          </div>
          <div>
            <h3 className="text-[20px] font-medium italic sm:text-[24px]">CONTACT</h3>
            <div className="mt-4 space-y-1.5 text-[16px] font-medium sm:text-[20px]">
              <p>+(33). 6.51.67.86.32</p>
              <p className="break-all">Mail : kult.concepthome@gmail.com</p>
            </div>
            <h3 className="mt-6 text-[20px] font-medium italic sm:text-[24px]">NOS RESEAUX :</h3>
          </div>
        </div>
      </footer>
    </main>
  );
}
