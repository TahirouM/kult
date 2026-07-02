import Image from "next/image";
import { FigmaCanvas, FBox } from "./components/FigmaCanvas";
import MobileHome from "./components/MobileHome";
import { bestSellers, catalogue } from "./lib/content";

const CANVAS_H = 7855;

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
        {/* ============ HERO (Slide 16:9) — pink band 0..1097 ============ */}
        <FBox x={0} y={0} w={1728} h={1097} className="overflow-hidden bg-kult-pink">
          {/* Vertical stripes (_Слой_1): 1223x3053 rotated 90°, sitting to the right.
              After a 90° rotation a 1223x3053 box occupies 3053x1223. Figma places
              its rotated centre near x=1938,y=79 → top-left of the rotated box ≈ (411,-533). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero-stripes.svg"
            alt=""
            className="pointer-events-none absolute"
            style={{
              width: 3053,
              height: 1223,
              left: 1326,
              top: -1448,
              transform: "rotate(90deg)",
              transformOrigin: "top left",
            }}
          />
          {/* Concentric arcs + horizontal stripes (Group 1): 2297.67x1703.02 at x=-1385,y=-167 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero-group.svg"
            alt=""
            className="pointer-events-none absolute"
            style={{ width: 2297.67, height: 1703.02, left: -1385.14, top: -167.08 }}
          />
        </FBox>

        {/* Pool photo (Rectangle 510) 0,177 1728x885 */}
        <FBox x={0} y={177} w={1728} h={885} className="overflow-hidden">
          <Image
            src="/assets/hero.png"
            alt="Bougie KULT au bord de la piscine"
            fill
            priority
            className="object-cover"
          />
        </FBox>

        {/* Burger — 3 bars 108x16 at x106 y60/83/106 */}
        <FBox x={106} y={60} w={108} h={16} className="bg-black" />
        <FBox x={106} y={83} w={108} h={16} className="bg-black" />
        <FBox x={106} y={106} w={108} h={16} className="bg-black" />

        {/* Logo blanc 201x129 at 763,26 */}
        <FBox x={763} y={26} w={201} h={129}>
          <Image src="/assets/logo-blanc.png" alt="KULT Collection" fill className="object-contain" />
        </FBox>

        {/* Cart 64x64 at 1503,55 */}
        <FBox x={1503} y={55} w={64} h={64}>
          <Image src="/assets/shopping-bag.svg" alt="Panier" fill />
        </FBox>

        {/* FR at 1599,62 48px bold violet */}
        <FBox x={1599} y={62} w={61} h={57}>
          <span className="text-[48px] font-bold leading-none text-kult-violet">FR</span>
        </FBox>

        {/* ============ BEST SELLERS ============ */}
        <FBox x={528} y={1221}>
          <h2 className="whitespace-nowrap text-[96px] font-light leading-none text-black">
            BEST SELLERS
          </h2>
        </FBox>

        {/* soft pink block 1686x639 at 42,1337 */}
        <FBox x={42} y={1337} w={1686} h={639} className="bg-kult-pink-soft" />

        {bestSellers.map((p) => (
          <FBox key={p.x} x={p.x} y={1394} w={427} h={427} className="overflow-hidden">
            <Image src={p.img} alt={p.name || "Produit KULT"} fill className="object-cover" />
          </FBox>
        ))}
        {bestSellers
          .filter((p) => p.name)
          .map((p) => (
            <div key={`t-${p.x}`}>
              <FBox x={p.x + 9} y={1840} w={427}>
                <h3 className="text-[30px] font-medium leading-none text-black">{p.name}</h3>
              </FBox>
              <FBox x={p.x + 9} y={1897} w={200}>
                <p className="text-[30px] font-medium italic leading-none text-black">{p.price}</p>
              </FBox>
            </div>
          ))}

        {/* ============ COLLECTION DU MOIS ============ */}
        {/* motif logo behind: 1705x538 at 33,2293 */}
        <FBox x={33} y={2293} w={1705} h={538}>
          <Image src="/assets/logo-motifs-1.png" alt="" fill className="object-cover" />
        </FBox>

        <FBox x={341} y={2083}>
          <h2 className="whitespace-nowrap text-[96px] font-light leading-none text-black">
            COLLECTION DU MOIS
          </h2>
        </FBox>
        <FBox x={356} y={2191}>
          <p className="whitespace-nowrap text-[32px] font-normal leading-none text-black">
            Pour un été sur palm beach réussi
          </p>
        </FBox>

        {/* big image 653x648 at 341,2267 */}
        <FBox x={341} y={2267} w={653} h={648} className="overflow-hidden">
          <Image src="/assets/collec-572.png" alt="Collection du mois" fill className="object-cover" />
        </FBox>
        {/* two small 275x317 at 1012,2267 and 1012,2609 */}
        <FBox x={1012} y={2267} w={275} h={317} className="overflow-hidden">
          <Image src="/assets/collec-573.png" alt="Bougie citron" fill className="object-cover" />
        </FBox>
        <FBox x={1012} y={2609} w={275} h={317} className="overflow-hidden">
          <Image src="/assets/collec-574.png" alt="Diffuseur" fill className="object-cover" />
        </FBox>

        {/* ============ A PROPOS ============ */}
        {/* full-width band 1738x340 at -10,3228 */}
        <FBox x={-10} y={3228} w={1738} h={340} className="overflow-hidden">
          <Image src="/assets/about.png" alt="À propos de nous" fill className="object-cover" />
        </FBox>
        <FBox x={453} y={3356}>
          <h2 className="whitespace-nowrap text-[96px] font-light leading-none text-black">
            A propos de nous
          </h2>
        </FBox>

        {/* ============ NOTRE CATALOGUE ============ */}
        <FBox x={42} y={3788}>
          <h2 className="whitespace-nowrap text-[96px] font-light leading-none text-black">
            NOTRE CATALOGUE
          </h2>
        </FBox>
        <FBox x={42} y={3904}>
          <p className="whitespace-nowrap text-[32px] font-normal leading-none text-black">
            Pour ceux avide de...
          </p>
        </FBox>

        {/* rose motif behind catalogue: 1703x645 at 12,5749 */}
        <FBox x={12} y={5749} w={1703} h={645}>
          <Image src="/assets/logo-motif-rose-2.png" alt="" fill className="object-cover" />
        </FBox>

        {catalogue.map((c) => (
          <FBox key={`${c.x}-${c.y}`} x={c.x} y={c.y} w={c.w} h={c.h} className="overflow-hidden">
            <Image src={c.img} alt="Produit du catalogue KULT" fill className="object-cover" />
          </FBox>
        ))}

        {/* VOIR PLUS button — 396x104 rounded at 666,6170 */}
        <FBox x={666} y={6170} w={396} h={104} className="rounded-[52px] bg-black">
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-[48px] font-light leading-none text-white">VOIR PLUS</span>
          </div>
        </FBox>

        {/* Service banner image — 1416x347 at 156,6707 */}
        <FBox x={156} y={6707} w={1416} h={347} className="overflow-hidden">
          <Image src="/assets/catalogue-banner.png" alt="Nos services" fill className="object-contain" />
        </FBox>

        {/* ============ FOOTER — black 1728x666 at 0,7189 ============ */}
        <FBox x={0} y={7189} w={1728} h={666} className="bg-black" />

        {/* ADDRESSE */}
        <FBox x={197} y={7276}>
          <span className="text-[24px] font-medium italic leading-none text-white">ADDRESSE</span>
        </FBox>
        <FBox x={197} y={7364}>
          <span className="text-[24px] font-medium leading-none text-white">Siège Social</span>
        </FBox>
        <FBox x={197} y={7413}>
          <span className="text-[24px] font-medium leading-none text-white">Kult &amp; Co</span>
        </FBox>
        <FBox x={197} y={7462}>
          <span className="text-[24px] font-medium leading-none text-white">78 Avenue G.De.Gaulle</span>
        </FBox>
        <FBox x={197} y={7511}>
          <span className="text-[24px] font-medium leading-none text-white">66200 Elne</span>
        </FBox>
        <FBox x={197} y={7560}>
          <span className="text-[24px] font-medium leading-none text-white">France</span>
        </FBox>

        {/* NEWSLETTER */}
        <FBox x={654} y={7276}>
          <span className="text-[24px] font-medium italic leading-none text-white">NEWSLETTER</span>
        </FBox>
        <FBox x={635} y={7391} w={345} h={71} className="bg-white">
          <div className="flex h-full items-center px-[19px]">
            <span className="text-[24px] font-medium leading-none text-black">Email Adresse</span>
          </div>
        </FBox>
        <FBox x={635} y={7471} w={345} h={71} className="border border-white bg-black">
          <div className="flex h-full items-center justify-center">
            <span className="text-[24px] font-medium leading-none text-white">SUBSCRIBE NOW</span>
          </div>
        </FBox>

        {/* CONTACT */}
        <FBox x={1120} y={7276}>
          <span className="text-[24px] font-medium italic leading-none text-white">CONTACT</span>
        </FBox>
        <FBox x={1120} y={7364}>
          <span className="text-[24px] font-medium leading-none text-white">+(33). 6.51.67.86.32</span>
        </FBox>
        <FBox x={1120} y={7413}>
          <span className="text-[24px] font-medium leading-none text-white">
            Mail : kult.concepthome@gmail.com
          </span>
        </FBox>
        <FBox x={1120} y={7566}>
          <span className="text-[24px] font-medium italic leading-none text-white">NOS RESEAUX :</span>
        </FBox>
        </FigmaCanvas>
      </div>
    </main>
  );
}
