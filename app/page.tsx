import Image from "next/image";
import Link from "next/link";
import { FigmaCanvas, FBox } from "./components/FigmaCanvas";
import MobileHome from "./components/MobileHome";
import { bestSellers, catalogue, collectionItems } from "./lib/content";

const CANVAS_H = 6633;

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* Mobile / tablet: fluid stacked layout (< lg) */}
      <div className="lg:hidden">
        <MobileHome />
      </div>

      {/* Desktop: pixel-faithful Figma canvas (>= lg) */}
      <div className="hidden lg:block">
        <FigmaCanvas height={CANVAS_H}>
          {/* ============ HERO (Slide 16:9) — pink band 0..1023 ============ */}
          <FBox x={0} y={0} w={1728} h={1023} className="overflow-hidden bg-kult-pink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-stripes.svg"
              alt=""
              className="pointer-events-none absolute"
              style={{ width: 3053, height: 1223, left: 1326, top: -1448, transform: "rotate(90deg)", transformOrigin: "top left" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-group.svg"
              alt=""
              className="pointer-events-none absolute"
              style={{ width: 2297.67, height: 1588.14, left: -1385.14, top: -155.81 }}
            />
          </FBox>

          {/* Pool photo (Rectangle 510) 0,108 1728x887 */}
          <FBox x={0} y={108} w={1728} h={887} className="overflow-hidden">
            <Image src="/assets/hero.png" alt="Bougie KULT au bord de la piscine" fill priority className="object-cover" />
          </FBox>

          {/* Burger — 3 bars 68px at x137 y34/48/63 */}
          <FBox x={137} y={34} w={68} h={10} className="bg-black" />
          <FBox x={137} y={48} w={68} h={11} className="bg-black" />
          <FBox x={137} y={63} w={68} h={10} className="bg-black" />

          {/* Logo blanc 104x66 at 812,28 */}
          <FBox x={812} y={28} w={104} h={66}>
            <Image src="/assets/logo-blanc.png" alt="KULT Collection" fill className="object-contain" />
          </FBox>

          {/* Cart 46x46 at 1520,28 */}
          <FBox x={1520} y={28} w={46} h={46}>
            <Image src="/assets/shopping-bag.svg" alt="Panier" fill />
          </FBox>

          {/* KULT Pro link (added — not in Figma header, gives desktop access to /pro) */}
          <FBox x={1220} y={40} w={230} h={30}>
            <Link
              href="/pro"
              className="inline-flex items-center gap-2 text-[22px] font-semibold leading-none text-black transition-opacity hover:opacity-70"
            >
              <span className="h-2 w-2 rounded-full bg-kult-violet" />
              KULT Pro
            </Link>
          </FBox>

          {/* FR at 1571,33 36px bold black */}
          <FBox x={1571} y={33} w={46} h={41}>
            <span className="text-[36px] font-bold leading-none text-black">FR</span>
          </FBox>

          {/* ============ BEST SELLERS ============ */}
          <FBox x={744} y={1076}>
            <h2 className="whitespace-nowrap text-[48px] font-light leading-none text-black">BEST SELLERS</h2>
          </FBox>

          {/* soft pink block 1620x489 at 106,1218 */}
          <FBox x={106} y={1218} w={1620} h={489} className="bg-kult-pink-soft" />

          {bestSellers.map((p) => (
            <FBox key={p.x} x={p.x} y={1268} w={303} h={303} className="overflow-hidden">
              <Image src={p.img} alt={p.name} fill className="object-cover" />
            </FBox>
          ))}
          {bestSellers.map((p) => (
            <div key={`t-${p.x}`}>
              <FBox x={p.x} y={1583} w={420}>
                <h3 className="text-[20px] font-medium leading-none text-black">{p.name}</h3>
              </FBox>
              <FBox x={p.x} y={1622} w={160}>
                <p className="text-[20px] font-medium italic leading-none text-black">{p.price}</p>
              </FBox>
            </div>
          ))}

          {/* ============ COLLECTION DU MOIS ============ */}
          {/* motif behind: full width 1728x545 at 0,1894 */}
          <FBox x={0} y={1894} w={1728} h={545}>
            <Image src="/assets/logo-motifs-1.png" alt="" fill className="object-cover" />
          </FBox>

          <FBox x={341} y={1788}>
            <h2 className="whitespace-nowrap text-[48px] font-light leading-none text-black">COLLECTION DU MOIS</h2>
          </FBox>
          <FBox x={341} y={1853}>
            <p className="whitespace-nowrap text-[24px] font-normal leading-none text-black">
              Pour un été sur palm beach réussi
            </p>
          </FBox>

          {/* big image 435x432 at 341,1947 */}
          <FBox x={341} y={1947} w={435} h={432} className="overflow-hidden">
            <Image src={collectionItems.main.img} alt={collectionItems.main.name} fill className="object-cover" />
          </FBox>
          {/* label on big image bottom-left */}
          <FBox x={366} y={2315} w={231}>
            <p className="text-[16px] font-bold leading-none text-black">{collectionItems.main.name}</p>
          </FBox>
          <FBox x={366} y={2339} w={73}>
            <p className="text-[20px] font-medium italic leading-none text-black">{collectionItems.main.price}</p>
          </FBox>

          {/* top small image 183x211 at 788,1947 */}
          <FBox x={788} y={1947} w={183} h={211} className="overflow-hidden">
            <Image src={collectionItems.top.img} alt={collectionItems.top.name} fill className="object-cover" />
          </FBox>
          {/* Bougie Mimosa black label 165x72 at 971,2086 */}
          <FBox x={971} y={2086} w={165} h={72} className="bg-black">
            <div className="flex h-full flex-col justify-center px-3">
              <p className="text-[16px] font-bold leading-none text-white">{collectionItems.top.name}</p>
              <p className="mt-1 text-[20px] font-medium italic leading-none text-white">{collectionItems.top.price}</p>
            </div>
          </FBox>

          {/* bottom small image 183x211 at 788,2175 */}
          <FBox x={788} y={2175} w={183} h={211} className="overflow-hidden">
            <Image src={collectionItems.bottom.img} alt={collectionItems.bottom.name} fill className="object-cover" />
          </FBox>
          {/* Diffuseur Mimosa black label 187x86 at 971,2300 */}
          <FBox x={971} y={2300} w={187} h={86} className="bg-black">
            <div className="flex h-full flex-col justify-center px-3">
              <p className="text-[16px] font-bold leading-none text-white">{collectionItems.bottom.name}</p>
              <p className="mt-1 text-[20px] font-medium italic leading-none text-white">{collectionItems.bottom.price}</p>
            </div>
          </FBox>

          {/* ============ A PROPOS ============ */}
          {/* full-width photo band 1738x340 at -10,2608 */}
          <FBox x={-10} y={2608} w={1738} h={340} className="overflow-hidden">
            <Image src="/assets/about.png" alt="À propos de nous" fill className="object-cover" />
          </FBox>
          {/* translucent pink overlay */}
          <FBox x={0} y={2608} w={1728} h={340} style={{ background: "rgba(255,237,241,0.44)" }} />
          {/* black pill 485x88 at 621,2734 */}
          <FBox x={621} y={2734} w={485} h={88} className="rounded-[71px] bg-black">
            <div className="flex h-full items-center justify-center">
              <span className="text-[48px] font-semibold leading-none text-white">A propos de nous</span>
            </div>
          </FBox>

          {/* ============ NOTRE CATALOGUE ============ */}
          <FBox x={106} y={3142}>
            <h2 className="whitespace-nowrap text-[48px] font-light leading-none text-black">NOTRE CATALOGUE</h2>
          </FBox>

          {/* rose motif behind catalogue: 1515x574 at 106,4797 */}
          <FBox x={106} y={4797} w={1515} h={574}>
            <Image src="/assets/logo-motif-rose-2.png" alt="" fill className="object-cover" />
          </FBox>

          {catalogue.map((c) => (
            <FBox key={`${c.x}-${c.y}`} x={c.x} y={c.y} w={c.w} h={c.h} className="overflow-hidden">
              <Image src={c.img} alt="Produit du catalogue KULT" fill className="object-cover" />
            </FBox>
          ))}

          {/* VOIR PLUS button — 254x66 rounded at 737,5213 */}
          <FBox x={737} y={5213} w={254} h={66} className="rounded-[52px] bg-black">
            <div className="flex h-full items-center justify-center">
              <span className="text-[32px] font-light leading-none text-white">VOIR PLUS</span>
            </div>
          </FBox>

          {/* Service banner image — 1416x347 at 156,5519 */}
          <FBox x={156} y={5519} w={1416} h={347} className="overflow-hidden">
            <Image src="/assets/catalogue-banner.png" alt="Nos services" fill className="object-contain" />
          </FBox>

          {/* ============ FOOTER — black 1728x666 at 0,5967 ============ */}
          <FBox x={0} y={5967} w={1728} h={666} className="bg-black" />

          {/* monstera leaf group at bottom-left */}
          <FBox x={0} y={5888} w={161} h={220}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/footer-monstera.svg" alt="" className="h-full w-full" />
          </FBox>

          {/* ADDRESSE */}
          <FBox x={197} y={6054}>
            <span className="text-[24px] font-medium italic leading-none text-white">ADDRESSE</span>
          </FBox>
          <FBox x={197} y={6142}><span className="text-[24px] font-medium leading-none text-white">Siège Social</span></FBox>
          <FBox x={197} y={6191}><span className="text-[24px] font-medium leading-none text-white">Kult &amp; Co</span></FBox>
          <FBox x={197} y={6240}><span className="text-[24px] font-medium leading-none text-white">78 Avenue G.De.Gaulle</span></FBox>
          <FBox x={197} y={6289}><span className="text-[24px] font-medium leading-none text-white">66200 Elne</span></FBox>
          <FBox x={197} y={6338}><span className="text-[24px] font-medium leading-none text-white">France</span></FBox>

          {/* NEWSLETTER */}
          <FBox x={654} y={6054}>
            <span className="text-[24px] font-medium italic leading-none text-white">NEWSLETTER</span>
          </FBox>
          <FBox x={635} y={6169} w={345} h={71} className="bg-white">
            <div className="flex h-full items-center px-[19px]">
              <span className="text-[24px] font-medium leading-none text-black">Email Adresse</span>
            </div>
          </FBox>
          <FBox x={635} y={6249} w={345} h={71} className="border border-white bg-black">
            <div className="flex h-full items-center justify-center">
              <span className="text-[24px] font-medium leading-none text-white">SUBSCRIBE NOW</span>
            </div>
          </FBox>

          {/* CONTACT */}
          <FBox x={1120} y={6054}>
            <span className="text-[24px] font-medium italic leading-none text-white">CONTACT</span>
          </FBox>
          <FBox x={1120} y={6142}><span className="text-[24px] font-medium leading-none text-white">+(33). 6.51.67.86.32</span></FBox>
          <FBox x={1120} y={6191}><span className="text-[24px] font-medium leading-none text-white">Mail : kult.concepthome@gmail.com</span></FBox>
          <FBox x={1120} y={6344}>
            <span className="text-[24px] font-medium italic leading-none text-white">NOS RESEAUX :</span>
          </FBox>
        </FigmaCanvas>
      </div>
    </main>
  );
}
