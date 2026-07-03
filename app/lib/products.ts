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

  // ---- Bougies ----
  {
    slug: "bougie-pamplemousse-rose-vanille",
    name: "Bougie Pamplemousse Rose & Vanille",
    eyebrow: "BOUGIE PARFUMÉE · 180G",
    price: "23.00€",
    img: "/assets/cat-540.png",
    category: "Bougies",
    description:
      "Pamplemousse rose pétillant adouci d'une vanille crémeuse. Coulée à la main dans un verre rayé signature. Mèche coton, cire végétale, 45h de combustion.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "Bougie · 180g — 23.00€", price: "23.00€" },
      { label: "Grand format · 320g — 34.00€", price: "34.00€" },
    ],
    details: [
      ["Contenance", "180 g · env. 45h de combustion"],
      ["Matière", "Cire végétale, mèche coton"],
      ["Parfum", "Pamplemousse rose & vanille"],
      ["Origine", "Coulée à la main en France"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },

  // ---- Parfums (diffuseurs) ----
  {
    slug: "diffuseur-figuier",
    name: "Diffuseur Figuier",
    eyebrow: "DIFFUSEUR À BÂTONS · 100ML",
    price: "25.00€",
    img: "/assets/cat-542.png",
    category: "Parfums",
    description:
      "Figue verte et sève de figuier, la Méditerranée en diffusion. Douce et continue pendant près de 3 mois. Livré avec 8 bâtons en rotin.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "100 ml — 25.00€", price: "25.00€" }],
    details: [
      ["Contenance", "100 ml · diffusion ~3 mois"],
      ["Matière", "8 bâtons en rotin inclus"],
      ["Parfum", "Figue & sève de figuier"],
      ["Origine", "Assemblé en France"],
      ["Colisage", "Vendu à l'unité"],
    ],
  },
  {
    slug: "diffuseur-ambre",
    name: "Diffuseur Ambre",
    eyebrow: "DIFFUSEUR À BÂTONS · 100ML",
    price: "25.00€",
    img: "/assets/cat-544.png",
    category: "Parfums",
    description:
      "Ambre chaud et bois précieux, une signature enveloppante. Diffusion douce et continue pendant près de 3 mois. Livré avec 8 bâtons en rotin.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "100 ml — 25.00€", price: "25.00€" }],
    details: [
      ["Contenance", "100 ml · diffusion ~3 mois"],
      ["Matière", "8 bâtons en rotin inclus"],
      ["Parfum", "Ambre & bois"],
      ["Origine", "Assemblé en France"],
      ["Colisage", "Vendu à l'unité"],
    ],
  },
  {
    slug: "diffuseur-tubereuse",
    name: "Diffuseur Tubéreuse",
    eyebrow: "DIFFUSEUR À BÂTONS · 100ML",
    price: "25.00€",
    img: "/assets/collec-574.png",
    category: "Parfums",
    description:
      "Tubéreuse opulente et fleurs blanches, un bouquet solaire. Diffusion douce et continue pendant près de 3 mois. Livré avec 8 bâtons en rotin.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "100 ml — 25.00€", price: "25.00€" }],
    details: [
      ["Contenance", "100 ml · diffusion ~3 mois"],
      ["Matière", "8 bâtons en rotin inclus"],
      ["Parfum", "Tubéreuse & fleurs blanches"],
      ["Origine", "Assemblé en France"],
      ["Colisage", "Vendu à l'unité"],
    ],
  },
  {
    slug: "diffuseur-cerise",
    name: "Diffuseur Cerise",
    eyebrow: "DIFFUSEUR À BÂTONS · 100ML",
    price: "25.00€",
    img: "/assets/bs-3.png",
    category: "Parfums",
    description:
      "Cerise croquante et amande douce, une gourmandise acidulée. Diffusion douce et continue pendant près de 3 mois. Livré avec 8 bâtons en rotin.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "100 ml — 25.00€", price: "25.00€" }],
    details: [
      ["Contenance", "100 ml · diffusion ~3 mois"],
      ["Matière", "8 bâtons en rotin inclus"],
      ["Parfum", "Cerise & amande"],
      ["Origine", "Assemblé en France"],
      ["Colisage", "Vendu à l'unité"],
    ],
  },

  // ---- Céramiques (assiettes) ----
  {
    slug: "assiette-pink-palm",
    name: "Assiette Pink & Palm",
    eyebrow: "CÉRAMIQUE PEINTE À LA MAIN · ANDALOUSIE",
    price: "12.50€",
    img: "/assets/cat-545.png",
    category: "Céramiques",
    subcategory: "Assiettes",
    description:
      "Assiette à dessert tournée et peinte à la main en Andalousie. Motif palmier et touches rosées — chaque pièce est unique.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "13 cm — 6.50€", price: "6.50€" },
      { label: "20 cm — 12.50€", price: "12.50€" },
    ],
    details: [
      ["Dimensions", "Ø 20 cm (existe aussi en 13 cm)"],
      ["Matière", "Céramique émaillée, peinte à la main"],
      ["Entretien", "Lavage à la main recommandé"],
      ["Origine", "Fabriquée artisanalement en Andalousie"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },
  {
    slug: "assiette-time-to-brunch",
    name: "Assiettes Time to Brunch",
    eyebrow: "CÉRAMIQUE PEINTE À LA MAIN · ANDALOUSIE",
    price: "12.50€",
    img: "/assets/cat-541.png",
    category: "Céramiques",
    subcategory: "Assiettes",
    description:
      "Assiette à dessert tournée et peinte à la main en Andalousie. Un clin d'œil aux brunchs ensoleillés — chaque pièce est unique.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "13 cm — 6.50€", price: "6.50€" },
      { label: "20 cm — 12.50€", price: "12.50€" },
    ],
    details: [
      ["Dimensions", "Ø 20 cm (existe aussi en 13 cm)"],
      ["Matière", "Céramique émaillée, peinte à la main"],
      ["Entretien", "Lavage à la main recommandé"],
      ["Origine", "Fabriquée artisanalement en Andalousie"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },
  {
    slug: "assiette-press-for-champagne",
    name: "Assiettes Press for Champagne",
    eyebrow: "CÉRAMIQUE PEINTE À LA MAIN · ANDALOUSIE",
    price: "12.50€",
    img: "/assets/cat-548.png",
    category: "Céramiques",
    subcategory: "Assiettes",
    description:
      "Assiette à dessert tournée et peinte à la main en Andalousie. « Press for Champagne » — l'esprit festif de KULT. Chaque pièce est unique.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "13 cm — 6.50€", price: "6.50€" },
      { label: "20 cm — 12.50€", price: "12.50€" },
    ],
    details: [
      ["Dimensions", "Ø 20 cm (existe aussi en 13 cm)"],
      ["Matière", "Céramique émaillée, peinte à la main"],
      ["Entretien", "Lavage à la main recommandé"],
      ["Origine", "Fabriquée artisanalement en Andalousie"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },

  // ---- Parfums (sprays) ----
  {
    slug: "parfum-vanille-patchouli",
    name: "Parfum Vanille & Patchouli",
    eyebrow: "PARFUM D'INTÉRIEUR · 100ML",
    price: "25.00€",
    img: "/assets/cat-547.png",
    category: "Parfums",
    description:
      "Vanille gourmande et patchouli terreux, un sillage chaud à vaporiser dans la maison ou sur le linge.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "100 ml — 25.00€", price: "25.00€" }],
    details: [
      ["Contenance", "100 ml · spray"],
      ["Matière", "Base sans alcool"],
      ["Parfum", "Vanille & patchouli"],
      ["Origine", "Composé à Grasse"],
      ["Colisage", "Vendu à l'unité"],
    ],
  },
  {
    slug: "parfum-mimosa",
    name: "Parfum Mimosa",
    eyebrow: "PARFUM D'INTÉRIEUR · 100ML",
    price: "25.00€",
    img: "/assets/collec-573.png",
    category: "Parfums",
    description:
      "Mimosa poudré et miellé, une bouffée de printemps méditerranéen à vaporiser partout dans la maison.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "100 ml — 25.00€", price: "25.00€" }],
    details: [
      ["Contenance", "100 ml · spray"],
      ["Matière", "Base sans alcool"],
      ["Parfum", "Mimosa poudré"],
      ["Origine", "Composé à Grasse"],
      ["Colisage", "Vendu à l'unité"],
    ],
  },

  // ---- Céramiques (bougies céramique) ----
  {
    slug: "bougie-ceramique-figuier",
    name: "Bougie Céramique Figuier",
    eyebrow: "BOUGIE EN CÉRAMIQUE · 220G",
    price: "39.00€",
    img: "/assets/collec-572.png",
    category: "Céramiques",
    description:
      "Bougie coulée dans un contenant en céramique rayée, tourné et peint à la main en Andalousie. Parfum figuier, mèche coton, 60h de combustion. Le contenant se réutilise en vase ou pot.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "220 g — 39.00€", price: "39.00€" }],
    details: [
      ["Contenance", "220 g · env. 60h de combustion"],
      ["Matière", "Céramique émaillée + cire végétale"],
      ["Parfum", "Figuier"],
      ["Origine", "Céramique faite main en Andalousie"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },
  {
    slug: "bougie-ceramique-pamplemousse",
    name: "Bougie Céramique Pamplemousse, Rose & Vanille",
    eyebrow: "BOUGIE EN CÉRAMIQUE · 220G",
    price: "39.00€",
    img: "/assets/bs-5.png",
    category: "Céramiques",
    description:
      "Bougie coulée dans un contenant en céramique rayée, tourné et peint à la main en Andalousie. Pamplemousse rose & vanille, mèche coton, 60h de combustion. Le contenant se réutilise en vase ou pot.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "220 g — 39.00€", price: "39.00€" }],
    details: [
      ["Contenance", "220 g · env. 60h de combustion"],
      ["Matière", "Céramique émaillée + cire végétale"],
      ["Parfum", "Pamplemousse rose & vanille"],
      ["Origine", "Céramique faite main en Andalousie"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },

  // ---- Florale ----
  {
    slug: "bougie-mimosa",
    name: "Bougie Mimosa",
    eyebrow: "BOUGIE PARFUMÉE · 180G",
    price: "23.00€",
    img: "/assets/collec-573.png",
    category: "Florale",
    description:
      "Mimosa poudré et miellé, un bouquet de printemps méditerranéen. Coulée à la main dans un verre rayé signature. Mèche coton, cire végétale, 45h de combustion.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [
      { label: "Bougie · 180g — 23.00€", price: "23.00€" },
      { label: "Grand format · 320g — 34.00€", price: "34.00€" },
    ],
    details: [
      ["Contenance", "180 g · env. 45h de combustion"],
      ["Matière", "Cire végétale, mèche coton"],
      ["Parfum", "Mimosa poudré"],
      ["Origine", "Coulée à la main en France"],
      ["Colisage", "Vendue à l'unité"],
    ],
  },
  {
    slug: "diffuseur-fleur-doranger",
    name: "Diffuseur Fleur d'Oranger",
    eyebrow: "DIFFUSEUR À BÂTONS · 100ML",
    price: "25.00€",
    img: "/assets/cat-544.png",
    category: "Florale",
    description:
      "Fleur d'oranger solaire et néroli délicat, une évasion florale. Diffusion douce et continue pendant près de 3 mois. Livré avec 8 bâtons en rotin.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "100 ml — 25.00€", price: "25.00€" }],
    details: [
      ["Contenance", "100 ml · diffusion ~3 mois"],
      ["Matière", "8 bâtons en rotin inclus"],
      ["Parfum", "Fleur d'oranger & néroli"],
      ["Origine", "Assemblé en France"],
      ["Colisage", "Vendu à l'unité"],
    ],
  },

  // ---- Autres ----
  {
    slug: "coffret-decouverte",
    name: "Coffret Découverte",
    eyebrow: "COFFRET CADEAU",
    price: "45.00€",
    img: "/assets/cat-548.png",
    category: "Autres",
    description:
      "Un été sur palm beach en une boîte : trois mini-bougies, une assiette La Dolce Vita et notre carte parfumée. Emballage cadeau offert.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "Coffret — 45.00€", price: "45.00€" }],
    details: [
      ["Contenu", "3 mini-bougies + 1 assiette"],
      ["Emballage", "Coffret cadeau signature"],
      ["Idéal", "Cadeau, pendaison de crémaillère"],
      ["Édition", "Limitée · été 2026"],
      ["Colisage", "Vendu à l'unité"],
    ],
  },
  {
    slug: "carte-parfumee",
    name: "Carte Parfumée",
    eyebrow: "ACCESSOIRE · SENTEUR",
    price: "6.00€",
    img: "/assets/cat-547.png",
    category: "Autres",
    description:
      "Carte à parfumer à glisser dans un tiroir, une penderie ou la voiture. Senteur signature KULT, tenue plusieurs semaines.",
    microcopy: "Frais de port offerts dès 35€  ·  Livraison en 3–5 jours",
    formats: [{ label: "À l'unité — 6.00€", price: "6.00€" }],
    details: [
      ["Format", "Carte parfumée à suspendre"],
      ["Senteur", "Signature KULT"],
      ["Tenue", "Plusieurs semaines"],
      ["Origine", "Parfum composé à Grasse"],
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

// Public catalogue categories (menu order). `slug` matches ?cat= and the label
// is compared case-insensitively against Product.category.
export const CATEGORIES = [
  { slug: "bougies", label: "Bougies" },
  { slug: "ceramiques", label: "Céramiques" },
  { slug: "parfums", label: "Parfums" },
  { slug: "florale", label: "Florale" },
  { slug: "autres", label: "Autres" },
] as const;

export function productsByCategory(catSlug?: string): Product[] {
  // A specific category → just its products.
  if (catSlug && catSlug !== "tous") {
    const cat = CATEGORIES.find((c) => c.slug === catSlug);
    if (cat) {
      return products.filter((p) => p.category.toLowerCase() === cat.label.toLowerCase());
    }
  }
  // "Tous" → all products grouped by category (same-category items side by side),
  // in the CATEGORIES order, preserving original order within each category.
  return CATEGORIES.flatMap((cat) =>
    products.filter((p) => p.category.toLowerCase() === cat.label.toLowerCase())
  );
}
