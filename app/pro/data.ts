// KULT Pro — mock data (from the handoff prototype). Prices HT for resellers.

export type ProProduct = {
  id: string;
  name: string;
  cat: string;
  img: string;
  retailPrice: number; // PVC TTC
  unitHT: number; // reseller price per piece
  pack: number; // carton size (colisage)
};

export type ShipStep = { label: string; meta: string; done: boolean };

export type ProOrder = {
  id: string;
  date: string;
  statusIdx: number; // index into STATUS
  totalHT: number;
  units: number;
  lines: { n: string; q: number; u: number }[];
  carrier: string | null;
  tracking: string | null;
  eta: string;
  ship: ShipStep[];
};

export const STATUS = ["Confirmée", "En préparation", "Expédiée", "Livrée"] as const;

// status color per index
export const STATUS_COLOR = ["#3C91E6", "#E6A23C", "#39B89A", "#2B9D6E"];

export const MOQ = 300; // minimum order € HT
export const CATS = ["BOUGIES", "CÉRAMIQUES", "PARFUMS", "FLORALE", "AUTRES"];

export const PRODUCTS: ProProduct[] = [
  { id: "violette", name: "Bougie Violette", cat: "Bougies", img: "/pro/candle-violette-web.png", retailPrice: 23, unitHT: 11.5, pack: 6 },
  { id: "amande", name: "Bougie Lait d'Amande", cat: "Bougies", img: "/pro/candle-amande.jpg", retailPrice: 23, unitHT: 11.5, pack: 6 },
  { id: "corail", name: "Bougie Corail", cat: "Bougies", img: "/pro/candle-corail.jpg", retailPrice: 23, unitHT: 11.5, pack: 6 },
  { id: "coco", name: "Diffuseur Coco & Tonka", cat: "Parfums", img: "/pro/candle-bleu.jpg", retailPrice: 25, unitHT: 12.5, pack: 6 },
  { id: "dolce-vita", name: "Assiette La Dolce Vita", cat: "Céramiques", img: "/pro/plate-thumb-web.png", retailPrice: 12.5, unitHT: 6.2, pack: 12 },
  { id: "vase", name: "Vase Limoncello", cat: "Céramiques", img: "/pro/vase-lemons.jpg", retailPrice: 28, unitHT: 14, pack: 4 },
  { id: "jaune", name: "Bougie Limoncello", cat: "Florale", img: "/pro/candle-jaune.jpg", retailPrice: 23, unitHT: 11.5, pack: 6 },
  { id: "coffret", name: "Coffret Découverte", cat: "Autres", img: "/pro/lifestyle-flatlay.jpg", retailPrice: 45, unitHT: 22.5, pack: 4 },
];

export const SEED_ORDERS: ProOrder[] = [
  {
    id: "KP-2026-0197",
    date: "2 juillet 2026",
    statusIdx: 0,
    totalHT: 2538.0,
    units: 240,
    lines: [
      { n: "Bougie Violette", q: 96, u: 11.5 },
      { n: "Bougie Lait d'Amande", q: 72, u: 11.5 },
      { n: "Diffuseur Coco & Tonka", q: 72, u: 12.5 },
    ],
    carrier: null,
    tracking: null,
    eta: "Expédition prévue 5 juil.",
    ship: [],
  },
  {
    id: "KP-2026-0148",
    date: "28 juin 2026",
    statusIdx: 2,
    totalHT: 1156.0,
    units: 84,
    lines: [
      { n: "Bougie Violette", q: 24, u: 11.5 },
      { n: "Assiette La Dolce Vita", q: 36, u: 6.2 },
      { n: "Diffuseur Coco & Tonka", q: 24, u: 12.5 },
    ],
    carrier: "Chronopost Pro",
    tracking: "XK4419827FR",
    eta: "jeu. 3 juillet",
    ship: [
      { label: "Commande confirmée", meta: "28 juin · 09:14", done: true },
      { label: "Colis préparé — entrepôt Elne (66)", meta: "30 juin · 16:40", done: true },
      { label: "Pris en charge par Chronopost Pro", meta: "1 juil. · 08:05", done: true },
      { label: "En transit — Hub Lyon Saint-Exupéry", meta: "2 juil. · 03:22", done: true },
      { label: "En cours de livraison", meta: "Prévu 3 juil. · matin", done: false },
      { label: "Livré", meta: "—", done: false },
    ],
  },
  {
    id: "KP-2026-0132",
    date: "21 juin 2026",
    statusIdx: 1,
    totalHT: 642.0,
    units: 48,
    lines: [
      { n: "Bougie Corail", q: 24, u: 11.5 },
      { n: "Vase Limoncello", q: 24, u: 14 },
    ],
    carrier: null,
    tracking: null,
    eta: "Expédition prévue 3 juil.",
    ship: [],
  },
  {
    id: "KP-2026-0105",
    date: "02 juin 2026",
    statusIdx: 3,
    totalHT: 1620.0,
    units: 120,
    lines: [
      { n: "Coffret Découverte", q: 48, u: 22.5 },
      { n: "Bougie Limoncello", q: 72, u: 11.5 },
    ],
    carrier: "Chronopost Pro",
    tracking: "XK4390115FR",
    eta: "Livré 6 juin",
    ship: [
      { label: "Commande confirmée", meta: "2 juin · 11:02", done: true },
      { label: "Colis préparé — entrepôt Elne (66)", meta: "3 juin · 14:20", done: true },
      { label: "Pris en charge par Chronopost Pro", meta: "4 juin · 07:50", done: true },
      { label: "En transit — Hub Lyon", meta: "5 juin · 02:10", done: true },
      { label: "En cours de livraison", meta: "6 juin · 08:30", done: true },
      { label: "Livré — signé A. Morel", meta: "6 juin · 11:47", done: true },
    ],
  },
];

/** Volume tiers: <800 standard, ≥800 −5%, ≥2000 −10%. Returns discount rate. */
export function volumeDiscount(subtotal: number): number {
  if (subtotal >= 2000) return 0.1;
  if (subtotal >= 800) return 0.05;
  return 0;
}

export function fmt(n: number): string {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}
