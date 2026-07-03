// Public product catalogue — powers product cards and the PDP (/produit/[slug]).

export type ProductFormat = { label: string; price: string };
export type ProductMotif = { name: string; thumb: string };
export type DetailRow = [label: string, value: string];

export type Product = {
  slug: string;
  name: string;
  eyebrow: string; // green kicker
  price: string;
  img: string; // card / main image
  category: string; // breadcrumb category
  subcategory?: string;
  description: string;
  microcopy?: string;
  formats?: ProductFormat[];
  motifs?: ProductMotif[]; // ceramics only — swatch gallery
  details: DetailRow[];
};

export const products: Product[] = [
  {
    slug: "assiette-la-dolce-vita",
    name: "Assiette La Dolce Vita",
    eyebrow: "CÉRAMIQUE PEINTE À LA MAIN · ANDALOUSIE",
    price: "12.50€",
    img: "/produit/plate-main.png",
    category: "Céramiques",
    subcategory: "Assiettes",
    description:
      "Assiette à dessert tournée et peinte à la main par des céramistes en Andalousie. Chaque pièce est unique : les nuances et le tracé du motif peuvent légèrement varier d'un exemplaire à l'autre — la signature d'un objet fait main.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "13 cm — 6.50€", price: "6.50€" },
      { label: "20 cm — 12.50€", price: "12.50€" },
    ],
    motifs: [
      { name: "La Dolce Vita", thumb: "/produit/thumb-dolce-vita.png" },
      { name: "Amore", thumb: "/produit/thumb-amore.png" },
      { name: "Amour Soleil", thumb: "/produit/thumb-amour-soleil.png" },
      { name: "Ciao Bella", thumb: "/produit/thumb-ciao-bella.png" },
    ],
    details: [
      ["Dimensions", "Ø 20 cm (existe aussi en 13 cm)"],
      ["Matière", "Céramique émaillée, tournée et peinte à la main"],
      ["Entretien", "Lavage à la main recommandé"],
      ["Origine", "Fabriquée artisanalement en Andalousie"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },
  {
    slug: "bougie-violette",
    name: "Bougie Violette",
    eyebrow: "BOUGIE PARFUMÉE · 180G",
    price: "23.00€",
    img: "/assets/bs-1.png",
    category: "Bougies",
    description:
      "Une violette poudrée et enveloppante, coulée à la main dans un verre rayé signature. Mèche coton, cire végétale, 45h de combustion.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "Bougie · 180g — 23.00€", price: "23.00€" },
      { label: "Grand format · 320g — 34.00€", price: "34.00€" },
    ],
    details: [
      ["Contenance", "180 g · env. 45h de combustion"],
      ["Matière", "Cire végétale, mèche coton"],
      ["Parfum", "Violette poudrée"],
      ["Origine", "Coulée à la main en France"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },
  {
    slug: "bougie-lait-damande",
    name: "Bougie Lait d'Amande",
    eyebrow: "BOUGIE PARFUMÉE · 180G",
    price: "23.00€",
    img: "/assets/bs-2.png",
    category: "Bougies",
    description:
      "Amande douce et vanille crémeuse, comme un dessert d'été. Cire végétale, mèche coton, 45h de combustion.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "Bougie · 180g — 23.00€", price: "23.00€" },
      { label: "Grand format · 320g — 34.00€", price: "34.00€" },
    ],
    details: [
      ["Contenance", "180 g · env. 45h de combustion"],
      ["Matière", "Cire végétale, mèche coton"],
      ["Parfum", "Amande douce & vanille"],
      ["Origine", "Coulée à la main en France"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },
  {
    slug: "diffuseur-coco-tonka",
    name: "Diffuseur Coco & Tonka",
    eyebrow: "DIFFUSEUR À BÂTONS · 100ML",
    price: "25.00€",
    img: "/assets/bs-3.png",
    category: "Parfums",
    description:
      "Coco lacté et fève tonka gourmande. Diffusion douce et continue pendant près de 3 mois. Livré avec 8 bâtons en rotin.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "100 ml — 25.00€", price: "25.00€" },
      { label: "200 ml — 39.00€", price: "39.00€" },
    ],
    details: [
      ["Contenance", "100 ml · diffusion ~3 mois"],
      ["Matière", "8 bâtons en rotin inclus"],
      ["Parfum", "Coco lacté & fève tonka"],
      ["Origine", "Assemblé en France"],
      ["Colisage", "Vendu à l'unité"],
    ],
  },
  {
    slug: "bougie-lait-de-figue",
    name: "Bougie Lait de Figue",
    eyebrow: "BOUGIE PARFUMÉE · 180G",
    price: "25.00€",
    img: "/assets/bs-5.png",
    category: "Bougies",
    description:
      "Figue fraîche et lait végétal, une gourmandise méditerranéenne. Cire végétale, mèche coton, 45h de combustion.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "Bougie · 180g — 25.00€", price: "25.00€" },
      { label: "Grand format · 320g — 36.00€", price: "36.00€" },
    ],
    details: [
      ["Contenance", "180 g · env. 45h de combustion"],
      ["Matière", "Cire végétale, mèche coton"],
      ["Parfum", "Figue & lait végétal"],
      ["Origine", "Coulée à la main en France"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}
