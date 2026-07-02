// Shared content for both the desktop canvas and the mobile layout.
// Coordinates match the updated Figma frame (1728 × 6633).

// Best sellers — 5 tiles of 303×303 at y=1268, x = 127/476/825/1176/1524.
export const bestSellers = [
  { img: "/assets/bs-1.png", x: 127, name: "BOUGIE VIOLETTE", price: "23.00€" },
  { img: "/assets/bs-2.png", x: 476, name: "BOUGIE LAIT D'AMANDE", price: "23.00€" },
  { img: "/assets/bs-3.png", x: 825, name: "DIFFUSEUR COCO & TONKA", price: "25.00€" },
  { img: "/assets/bs-4.png", x: 1176, name: "DIFFUSEUR COCO & TONKA", price: "25.00€" },
  { img: "/assets/bs-5.png", x: 1524, name: "BOUGIE LAIT DE FIGUE", price: "25.00€" },
];

// Catalogue tiles with exact Figma x/y/w/h (used by the desktop canvas).
// Columns at x = 106 / 615 / 1124, width 497.
export const catalogue = [
  { img: "/assets/cat-548.png", x: 106, y: 3264, w: 497, h: 541 },
  { img: "/assets/cat-543.png", x: 106, y: 3829, w: 497, h: 461 },
  { img: "/assets/cat-545.png", x: 106, y: 4314, w: 497, h: 814 },
  { img: "/assets/cat-540.png", x: 615, y: 3264, w: 497, h: 476 },
  { img: "/assets/cat-542.png", x: 615, y: 3764, w: 497, h: 670 },
  { img: "/assets/cat-546.png", x: 615, y: 4458, w: 497, h: 670 },
  { img: "/assets/cat-541.png", x: 1124, y: 3264, w: 497, h: 541 },
  { img: "/assets/cat-544.png", x: 1124, y: 3829, w: 497, h: 796 },
  { img: "/assets/cat-547.png", x: 1124, y: 4649, w: 497, h: 479 },
];

// Catalogue grouped by Figma column (used by the mobile masonry layout).
export const catalogueColumns = [
  catalogue.filter((c) => c.x === 106),
  catalogue.filter((c) => c.x === 615),
  catalogue.filter((c) => c.x === 1124),
];

// Collection du mois — product labels overlaid on the images.
export const collectionItems = {
  main: { img: "/assets/collec-572.png", name: "BOUGIE CERAMIQUE FIGUIER", price: "39.00€" },
  top: { img: "/assets/collec-573.png", name: "BOUGIE MIMOSA", price: "23.00€" },
  bottom: { img: "/assets/collec-574.png", name: "DIFFUSEUR MIMOSA", price: "25.00€" },
};

export const services = [
  { title: "NOUVEAU SERVICE SHOPPING", subtitle: "Fresh", icon: "bag" as const },
  {
    title: "FRAIS DE PORT OFFERT A PARTIR DE",
    subtitle: "35€ D'ACHAT",
    icon: "truck" as const,
  },
  { title: "SPECIAL EMBALLAGE CADEAUX", subtitle: "So good", icon: "gift" as const },
];
