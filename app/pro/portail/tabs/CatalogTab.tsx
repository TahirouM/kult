"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PRODUCTS, MOQ, fmt, volumeDiscount } from "../../data";
import { usePro } from "../../ProContext";

export function CatalogTab() {
  const router = useRouter();
  const { cart, stepCart, subtotal, units, discount, total, placeOrder } = usePro();

  const moqReached = subtotal >= MOQ;
  const gaugePct = Math.min(100, (subtotal / MOQ) * 100);
  const rate = volumeDiscount(subtotal);

  function onPlace() {
    const num = placeOrder();
    if (num) router.push("/pro/portail/commandes");
  }

  return (
    <div>
      <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold leading-none">Catalogue pro</h2>
      <p className="mt-2 text-[15px] text-[color:var(--muted)]">
        Prix HT revendeur · commande par colisage · minimum 300 € HT.
      </p>

      <div className="mt-8 grid items-start gap-9 lg:grid-cols-[1fr_340px]">
        {/* product list */}
        <div className="flex flex-col gap-3.5">
          {PRODUCTS.map((p) => {
            const qty = cart[p.id] || 0;
            const lineTotal = qty * p.unitHT;
            return (
              <div
                key={p.id}
                className="grid grid-cols-[88px_1fr] items-center gap-5 border border-[color:var(--line)] bg-[color:var(--card-bg)] p-4 [border-radius:var(--card-radius)] sm:grid-cols-[88px_1fr_auto]"
              >
                <div className="relative h-[88px] w-[88px] overflow-hidden [border-radius:var(--img-radius)]">
                  <Image src={p.img} alt={p.name} fill className="object-cover" sizes="88px" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[16px] font-semibold">{p.name}</h3>
                  <p className="text-[13px] text-[color:var(--muted)]">Colisage · {p.pack} pièces</p>
                  <p className="text-[13px] text-[color:var(--muted)]">PVC conseillé {fmt(p.retailPrice)}</p>
                </div>
                <div className="col-span-2 flex flex-col items-end gap-2.5 sm:col-span-1">
                  <div className="text-[16px] font-bold">{fmt(p.unitHT)} HT</div>
                  <div className="flex items-center gap-3.5 border-[1.5px] border-[color:var(--line)] px-3.5 py-2 [border-radius:var(--radius)]">
                    <button
                      aria-label="Retirer un colis"
                      onClick={() => stepCart(p.id, -1)}
                      className="text-[18px] leading-none text-[color:var(--ink)] disabled:opacity-30"
                      disabled={qty === 0}
                    >
                      −
                    </button>
                    <span className="min-w-[28px] text-center text-[15px] font-medium tabular-nums">{qty}</span>
                    <button
                      aria-label="Ajouter un colis"
                      onClick={() => stepCart(p.id, 1)}
                      className="text-[18px] leading-none text-[color:var(--ink)]"
                    >
                      +
                    </button>
                  </div>
                  {qty > 0 && (
                    <div className="text-[13px] font-semibold text-[color:var(--accent)]">{fmt(lineTotal)} HT</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* order recap */}
        <aside
          className="flex flex-col gap-4 bg-[color:var(--surface)] p-7 [border-radius:var(--card-radius)] lg:sticky lg:top-[170px]"
          style={{ boxShadow: "var(--tile-shadow)" }}
        >
          <h3 className="text-[19px] font-bold">Ma commande</h3>

          <Row label="Articles" value={`${units} pièces`} />
          <Row label="Sous-total" value={`${fmt(subtotal)} HT`} />
          {rate > 0 && (
            <Row
              label={`Palier volume −${Math.round(rate * 100)}%`}
              value={`− ${fmt(discount)}`}
              accent
            />
          )}

          {/* MOQ gauge */}
          <div>
            <div className="h-2 w-full overflow-hidden bg-[color:var(--line)]">
              <div className="h-full bg-[color:var(--accent)] transition-all" style={{ width: `${gaugePct}%` }} />
            </div>
            <p className="mt-2 text-[13px] text-[color:var(--muted)]">
              {moqReached
                ? "Minimum de commande atteint ✦"
                : `Encore ${fmt(MOQ - subtotal)} HT — minimum 300 € HT`}
            </p>
          </div>

          <hr className="border-[color:var(--line)]" />
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-medium">Total</span>
            <span className="text-[24px] font-extrabold">{fmt(total)} HT</span>
          </div>

          <button
            onClick={onPlace}
            disabled={!moqReached}
            className="mt-1 py-4 text-[14px] font-bold uppercase tracking-[1.5px] transition [border-radius:var(--radius)]"
            style={
              moqReached
                ? { background: "var(--accent)", color: "var(--accent-ink)" }
                : { background: "var(--line)", color: "var(--muted)", cursor: "not-allowed" }
            }
          >
            Valider la commande
          </button>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between text-[14px]">
      <span className={accent ? "text-[color:var(--accent)]" : "text-[color:var(--muted)]"}>{label}</span>
      <span className={accent ? "font-semibold text-[color:var(--accent)]" : "font-medium"}>{value}</span>
    </div>
  );
}
