"use client";

import { useRouter } from "next/navigation";
import { STATUS, STATUS_COLOR, fmt } from "../../data";
import { usePro } from "../../ProContext";

export function OrdersTab() {
  const router = useRouter();
  const { orders } = usePro();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold leading-none">Mes commandes</h2>
        <span className="text-[14px] text-[color:var(--muted)]">{orders.length} commandes</span>
      </div>

      <div className="mt-8 flex flex-col gap-[18px]">
        {orders.map((o) => {
          const color = STATUS_COLOR[o.statusIdx];
          const refs = o.lines.map((l) => l.n);
          const shown = refs.slice(0, 2).join(", ");
          const more = refs.length > 2 ? ` +${refs.length - 2} réf.` : "";
          return (
            <article
              key={o.id}
              className="border border-[color:var(--line)] bg-[color:var(--card-bg)] p-7 [border-radius:var(--card-radius)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[18px] font-extrabold">{o.id}</span>
                  <span
                    className="px-3 py-1 text-[13px] font-semibold"
                    style={{ background: color + "22", color }}
                  >
                    {STATUS[o.statusIdx]}
                  </span>
                </div>
                <span className="text-[13px] text-[color:var(--muted)]">Passée le {o.date}</span>
              </div>

              <p className="mt-3 text-[14px] text-[color:var(--muted)]">
                {shown}
                {more} · {o.units} pièces ·{" "}
                <span className="font-semibold text-[color:var(--ink)]">{fmt(o.totalHT)} HT</span>
              </p>

              {/* 4-step progress */}
              <div className="mt-5 flex items-center">
                {STATUS.map((_, i) => (
                  <div key={i} className="flex flex-1 items-center last:flex-none">
                    <span
                      className="h-3.5 w-3.5 shrink-0 rounded-full"
                      style={{ background: i <= o.statusIdx ? color : "var(--line)" }}
                    />
                    {i < STATUS.length - 1 && (
                      <span
                        className="h-0.5 flex-1"
                        style={{ background: i < o.statusIdx ? color : "var(--line)" }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[13px] text-[color:var(--muted)]">{o.eta}</span>
                {o.tracking && (
                  <button
                    onClick={() => router.push(`/pro/portail/livraison?order=${o.id}`)}
                    className="border-[1.5px] border-[color:var(--ink)] px-4 py-2 text-[13px] font-semibold [border-radius:var(--radius)] transition hover:bg-[color:var(--ink)] hover:text-[color:var(--bg)]"
                  >
                    Suivre la livraison →
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
