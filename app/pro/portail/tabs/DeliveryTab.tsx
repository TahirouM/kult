"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { usePro } from "../../ProContext";

export function DeliveryTab() {
  const { orders } = usePro();
  const router = useRouter();
  const params = useSearchParams();

  // orders that have a shipment timeline
  const shipped = useMemo(() => orders.filter((o) => o.ship.length > 0), [orders]);
  const requested = params.get("order");
  const current =
    shipped.find((o) => o.id === requested) || shipped[0] || null;

  const progressPct = current
    ? Math.round((current.ship.filter((s) => s.done).length / current.ship.length) * 100)
    : 0;
  const firstUndone = current ? current.ship.findIndex((s) => !s.done) : -1;

  return (
    <div>
      <div className="flex items-center gap-3">
        <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold leading-none">Suivi de livraison</h2>
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 text-[12px] font-semibold"
          style={{ background: "rgba(43,157,110,.14)", color: "#2B9D6E" }}
        >
          <span className="pulse-dot h-2 w-2 rounded-full bg-[#2B9D6E]" />
          Temps réel
        </span>
      </div>

      {/* order chips */}
      <div className="mt-6 flex flex-wrap gap-3">
        {shipped.map((o) => {
          const active = current?.id === o.id;
          return (
            <button
              key={o.id}
              onClick={() => router.replace(`/pro/portail/livraison?order=${o.id}`)}
              className="px-4 py-2 text-[13px] font-semibold [border-radius:var(--radius)]"
              style={
                active
                  ? { background: "var(--ink)", color: "var(--bg)" }
                  : { border: "1.5px solid var(--line)", color: "var(--ink)" }
              }
            >
              {o.id}
            </button>
          );
        })}
      </div>

      {!current ? (
        <div className="mt-8 border border-dashed border-[color:var(--line)] px-10 py-16 text-center text-[15px] text-[color:var(--muted)] [border-radius:var(--card-radius)]">
          Aucune commande en cours d&apos;expédition pour le moment.
        </div>
      ) : (
        <div className="mt-8 grid items-start gap-9 lg:grid-cols-[1fr_300px]">
          {/* timeline */}
          <div className="border border-[color:var(--line)] bg-[color:var(--card-bg)] p-9 [border-radius:var(--card-radius)]">
            <ol className="flex flex-col">
              {current.ship.map((s, i) => {
                const inProgress = i === firstUndone;
                const isLast = i === current.ship.length - 1;
                return (
                  <li key={i} className="flex gap-4">
                    {/* dot + connector */}
                    <div className="flex flex-col items-center">
                      <span
                        className={`h-4 w-4 shrink-0 rounded-full border-2 ${inProgress ? "pulse-dot" : ""}`}
                        style={{
                          background: s.done ? "#2B9D6E" : "var(--bg)",
                          borderColor: s.done ? "#2B9D6E" : "var(--line)",
                        }}
                      />
                      {!isLast && <span className="my-1 w-0.5 flex-1 bg-[color:var(--line)]" />}
                    </div>
                    {/* label */}
                    <div className={isLast ? "pb-0" : "pb-6"}>
                      <p className={`text-[15px] ${s.done ? "font-semibold text-[color:var(--ink)]" : "font-medium text-[color:var(--muted)]"}`}>
                        {s.label}
                      </p>
                      <p className="text-[13px] text-[color:var(--muted)]">{s.meta}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* aside */}
          <aside
            className="flex flex-col gap-4 border border-[color:var(--line)] bg-[color:var(--surface)] p-7 [border-radius:var(--card-radius)]"
            style={{ boxShadow: "var(--tile-shadow)" }}
          >
            <Field label="Commande" value={current.id} big />
            <Field label="Transporteur" value={current.carrier || "—"} />
            <Field label="N° de suivi" value={current.tracking || "—"} />
            <Field label="Livraison estimée" value={current.eta} accent />
            <hr className="border-[color:var(--line)]" />
            <div className="h-2 w-full overflow-hidden bg-[color:var(--line)]">
              <div className="h-full bg-[#2B9D6E] transition-all" style={{ width: `${progressPct}%` }} />
            </div>
            <p className="text-[13px] text-[color:var(--muted)]">{progressPct}% du trajet</p>
          </aside>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  accent,
  big,
}: {
  label: string;
  value: string;
  accent?: boolean;
  big?: boolean;
}) {
  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-wide text-[color:var(--muted)]">{label}</p>
      <p
        className={`mt-0.5 font-semibold ${big ? "text-[18px] font-extrabold" : "text-[15px]"}`}
        style={accent ? { color: "var(--accent)" } : undefined}
      >
        {value}
      </p>
    </div>
  );
}
