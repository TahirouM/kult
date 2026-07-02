"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePro } from "../ProContext";

const TABS = [
  { key: "catalogue", label: "Catalogue & commande" },
  { key: "commandes", label: "Mes commandes" },
  { key: "livraison", label: "Suivi de livraison" },
  { key: "compte", label: "Mon compte" },
];

// tabs that require an active account
const GATED = new Set(["catalogue", "commandes", "livraison"]);

export function PortalShell({
  tab,
  children,
}: {
  tab: string;
  children: ReactNode;
}) {
  const { company, status, validateDemo } = usePro();

  const gated = GATED.has(tab) && status === "pending";

  return (
    <main className="mx-auto max-w-[1320px] px-6 pb-24 pt-10 md:px-10">
      {/* portal header */}
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[2.5px] text-[color:var(--accent)]">
            Espace KULT Pro
          </p>
          <h1 className="mt-1 text-[clamp(26px,3vw,40px)] font-extrabold leading-none">{company}</h1>
        </div>
        <StatusBadge status={status} />
      </div>

      {/* body */}
      <div className="grid items-start gap-9 md:grid-cols-[250px_1fr]">
        {/* sidebar */}
        <aside className="border border-[color:var(--line)] bg-[color:var(--card-bg)] p-4 [border-radius:var(--card-radius)] md:sticky md:top-[170px]">
          <nav className="flex flex-col gap-1.5">
            {TABS.map((t) => {
              const active = t.key === tab;
              return (
                <Link
                  key={t.key}
                  href={`/pro/portail/${t.key}`}
                  className={`px-4 py-3 text-left text-[15px] [border-radius:var(--radius)] ${
                    active
                      ? "bg-[color:var(--ink)] font-bold text-[color:var(--bg)]"
                      : "font-medium text-[color:var(--ink)] hover:bg-[color:var(--line)]/50"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* content */}
        <section>{gated ? <ValidationGate onValidate={validateDemo} /> : children}</section>
      </div>
    </main>
  );
}

export function StatusBadge({ status }: { status: string }) {
  // 'none' = démo/aperçu (accès catalogue depuis « Découvrir »), traité comme actif.
  if (status === "active" || status === "none") {
    return (
      <span className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold" style={{ background: "rgba(43,157,110,.14)", color: "#2B9D6E" }}>
        <span className="pulse-dot h-2 w-2 rounded-full bg-[#2B9D6E]" />
        Compte validé
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold" style={{ background: "rgba(230,162,60,.16)", color: "#B4791E" }}>
      ⏳ En attente de validation
    </span>
  );
}

function ValidationGate({ onValidate }: { onValidate: () => void }) {
  return (
    <div className="flex flex-col items-center border border-dashed border-[color:var(--line)] px-10 py-16 text-center [border-radius:var(--card-radius)]">
      <span className="text-[40px]">⏳</span>
      <h2 className="mt-4 text-[26px] font-extrabold">Compte en cours de validation</h2>
      <p className="mt-3 max-w-[440px] text-[16px] text-[color:var(--muted)]">
        Votre demande a bien été reçue. Notre équipe valide les comptes revendeurs sous 48h
        ouvrées. Vous recevrez un email dès l&apos;activation.
      </p>
      <button
        onClick={onValidate}
        className="mt-8 bg-[color:var(--ink)] px-8 py-4 text-[14px] font-bold uppercase tracking-[1.5px] text-[color:var(--bg)] transition [border-radius:var(--radius)] hover:brightness-[1.2]"
      >
        Simuler la validation (démo)
      </button>
    </div>
  );
}
