"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  PRODUCTS,
  SEED_ORDERS,
  ProOrder,
  volumeDiscount,
} from "./data";

export type ProStatus = "none" | "pending" | "active";

type ProCart = Record<string, number>; // productId -> quantity in pieces

type ProState = {
  status: ProStatus;
  company: string;
  cart: ProCart;
  orders: ProOrder[];
  toast: string | null;
};

type ProContextValue = ProState & {
  submitSignup: (company: string) => void;
  validateDemo: () => void;
  setQty: (productId: string, qty: number) => void;
  stepCart: (productId: string, dir: 1 | -1) => void;
  clearToast: () => void;
  placeOrder: () => string | null;
  subtotal: number;
  units: number;
  discount: number;
  total: number;
};

const KEY = "kult-pro-state";
const Ctx = createContext<ProContextValue | null>(null);

const DEFAULT: ProState = {
  status: "none",
  company: "Maison Lumière · Concept Store",
  cart: {},
  orders: SEED_ORDERS,
  toast: null,
};

export function ProProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProState>(DEFAULT);
  const [hydrated, setHydrated] = useState(false);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        setState((s) => ({ ...s, ...saved, toast: null }));
      }
    } catch {}
    setHydrated(true);
  }, []);

  // persist (status, company, cart, orders — not toast)
  useEffect(() => {
    if (!hydrated) return;
    const { status, company, cart, orders } = state;
    try {
      localStorage.setItem(KEY, JSON.stringify({ status, company, cart, orders }));
    } catch {}
  }, [state, hydrated]);

  const submitSignup = useCallback((company: string) => {
    setState((s) => ({
      ...s,
      status: "pending",
      company: company || s.company,
      toast: "Demande envoyée — compte en attente de validation",
    }));
  }, []);

  const validateDemo = useCallback(() => {
    setState((s) => ({ ...s, status: "active", toast: "Compte validé ✦ catalogue débloqué" }));
  }, []);

  const setQty = useCallback((productId: string, qty: number) => {
    setState((s) => {
      const cart = { ...s.cart };
      if (qty <= 0) delete cart[productId];
      else cart[productId] = qty;
      return { ...s, cart };
    });
  }, []);

  const stepCart = useCallback((productId: string, dir: 1 | -1) => {
    const p = PRODUCTS.find((x) => x.id === productId);
    if (!p) return;
    setState((s) => {
      const cur = s.cart[productId] || 0;
      const next = Math.max(0, cur + dir * p.pack);
      const cart = { ...s.cart };
      if (next <= 0) delete cart[productId];
      else cart[productId] = next;
      return { ...s, cart };
    });
  }, []);

  const clearToast = useCallback(() => setState((s) => ({ ...s, toast: null })), []);

  // derived cart totals
  const { subtotal, units, discount, total } = useMemo(() => {
    let sub = 0;
    let u = 0;
    for (const [id, q] of Object.entries(state.cart)) {
      const p = PRODUCTS.find((x) => x.id === id);
      if (!p) continue;
      sub += p.unitHT * q;
      u += q;
    }
    const rate = volumeDiscount(sub);
    const disc = sub * rate;
    return { subtotal: sub, units: u, discount: disc, total: sub - disc };
  }, [state.cart]);

  const placeOrder = useCallback((): string | null => {
    if (subtotal < 300) return null;
    const num = "KP-2026-0" + (150 + Math.floor((Date.now() / 1000) % 49));
    const lines = Object.entries(state.cart).map(([id, q]) => {
      const p = PRODUCTS.find((x) => x.id === id)!;
      return { n: p.name, q, u: p.unitHT };
    });
    const order: ProOrder = {
      id: num,
      date: new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
      statusIdx: 0,
      totalHT: total,
      units,
      lines,
      carrier: null,
      tracking: null,
      eta: "Expédition en préparation",
      ship: [],
    };
    setState((s) => ({
      ...s,
      orders: [order, ...s.orders],
      cart: {},
      toast: `Commande ${num} confirmée`,
    }));
    return num;
  }, [state.cart, subtotal, total, units]);

  const value: ProContextValue = {
    ...state,
    submitSignup,
    validateDemo,
    setQty,
    stepCart,
    clearToast,
    placeOrder,
    subtotal,
    units,
    discount,
    total,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePro() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("usePro must be used within ProProvider");
  return ctx;
}
