"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
  { label: "Bougies", href: "/pro/portail/catalogue?cat=bougies" },
  { label: "Céramiques", href: "/pro/portail/catalogue?cat=ceramiques" },
  { label: "Parfums", href: "/pro/portail/catalogue?cat=parfums" },
  { label: "Florale", href: "/pro/portail/catalogue?cat=florale" },
  { label: "Autres", href: "/pro/portail/catalogue?cat=autres" },
];

/**
 * Site-wide burger menu. `size` controls the bar dimensions so it can match
 * both the desktop canvas (68×10) and the compact mobile header.
 */
export default function BurgerMenu({
  barWidth = 68,
  barHeight = 10,
  gap = 4,
}: {
  barWidth?: number;
  barHeight?: number;
  gap?: number;
}) {
  const [open, setOpen] = useState(false);
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  // lock body scroll while the drawer is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    setCatalogueOpen(false);
  };

  // Scroll to an on-page section by id. Both the mobile and desktop layouts
  // declare the same anchor ids, but only one layout is visible at a time;
  // pick the anchor that is actually rendered (has an offsetParent).
  const goToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    close();
    requestAnimationFrame(() => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>(`#${id}`));
      const visible = targets.find((el) => el.offsetParent !== null) || targets[0];
      visible?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      {/* Burger button */}
      <button
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex flex-col"
        style={{ gap }}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="block bg-black" style={{ width: barWidth, height: barHeight }} />
        ))}
      </button>

      {/* Overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-[70] flex w-[86vw] max-w-[420px] flex-col bg-kult-pink shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-7 pb-6 pt-8">
          <span className="font-display text-[26px] font-bold leading-none text-black">Menu</span>
          <button
            aria-label="Fermer le menu"
            onClick={close}
            className="text-[32px] leading-none text-black transition-opacity hover:opacity-60"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-7 pb-10">
          {/* Catalogue — expandable */}
          <div className="border-b border-black/15">
            <button
              onClick={() => setCatalogueOpen((v) => !v)}
              aria-expanded={catalogueOpen}
              className="font-display flex w-full items-center justify-between py-4 text-[26px] font-bold text-black"
            >
              Catalogue
              <span
                className={`text-[22px] transition-transform duration-300 ${catalogueOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                catalogueOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="overflow-hidden">
                {categories.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      onClick={close}
                      className="block py-2.5 pl-4 text-[18px] text-black/80 transition-colors hover:text-black"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <MenuLink href="/a-propos" label="À propos de nous" onClick={close} />
          <a
            href="#contact"
            onClick={goToSection("contact")}
            className="font-display block border-b border-black/15 py-4 text-[26px] font-bold text-black"
          >
            Contact
          </a>
          <MenuLink href="/pro" label="Espace Pro" onClick={close} />
        </nav>
      </aside>
    </>
  );
}

function MenuLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-display block border-b border-black/15 py-4 text-[26px] font-bold text-black"
    >
      {label}
    </Link>
  );
}
