// Shared content for both the desktop canvas and the mobile layout.

export const bestSellers = [
  { img: "/assets/bs-1.png", x: 70, name: "BOUGIE VIOLETTE", price: "23.00€" },
  { img: "/assets/bs-2.png", x: 561, name: "BOUGIE LAIT D'AMANDE", price: "23.00€" },
  { img: "/assets/bs-3.png", x: 1052, name: "DIFFUSEUR COCO & TONKA", price: "25.00€" },
  { img: "/assets/bs-4.png", x: 1546, name: "", price: "" },
];

// Catalogue tiles with exact Figma x/y/w/h (used by the desktop canvas).
export const catalogue = [
  { img: "/assets/cat-548.png", x: 12, y: 4026, w: 559, h: 608 },
  { img: "/assets/cat-543.png", x: 12, y: 4661, w: 559, h: 518 },
  { img: "/assets/cat-545.png", x: 12, y: 5206, w: 559, h: 915 },
  { img: "/assets/cat-540.png", x: 584, y: 4026, w: 559, h: 535 },
  { img: "/assets/cat-542.png", x: 584, y: 4588, w: 559, h: 753 },
  { img: "/assets/cat-546.png", x: 584, y: 5368, w: 559, h: 753 },
  { img: "/assets/cat-541.png", x: 1156, y: 4026, w: 559, h: 608 },
  { img: "/assets/cat-544.png", x: 1156, y: 4661, w: 559, h: 895 },
  { img: "/assets/cat-547.png", x: 1156, y: 5583, w: 559, h: 538 },
];

// Catalogue grouped by Figma column (used by the mobile masonry layout).
export const catalogueColumns = [
  catalogue.filter((c) => c.x === 12),
  catalogue.filter((c) => c.x === 584),
  catalogue.filter((c) => c.x === 1156),
];

export const services = [
  { title: "NOUVEAU SERVICE SHOPPING", subtitle: "Fresh", icon: "bag" as const },
  {
    title: "FRAIS DE PORT OFFERT A PARTIR DE",
    subtitle: "35€ D'ACHAT",
    icon: "truck" as const,
  },
  { title: "SPECIAL EMBALLAGE CADEAUX", subtitle: "So good", icon: "gift" as const },
];
