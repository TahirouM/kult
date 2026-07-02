"use client";

import { usePro } from "../../ProContext";

export function AccountTab() {
  const { company, status, validateDemo } = usePro();
  const pending = status === "pending";

  const fields: [string, string][] = [
    ["Raison sociale", company],
    ["Statut", pending ? "En attente de validation" : "Validé · actif"],
    ["SIRET", "123 456 789 00012"],
    ["Palier tarifaire", "Revendeur −30%"],
    ["Email pro", "contact@enseigne.fr"],
    ["Encours autorisé", "5 000 € HT"],
  ];

  return (
    <div>
      <h2 className="text-[clamp(26px,2.8vw,38px)] font-extrabold leading-none">Mon compte</h2>

      {pending && (
        <div
          className="mt-6 border px-6 py-5 [border-radius:var(--card-radius)]"
          style={{ background: "rgba(230,162,60,.12)", borderColor: "rgba(230,162,60,.35)" }}
        >
          <p className="text-[15px] font-semibold text-[#B4791E]">Compte en attente de validation</p>
          <p className="mt-1 text-[14px] text-[color:var(--muted)]">
            Notre équipe valide votre compte sous 48h ouvrées. Vous recevrez un email dès
            l&apos;activation du catalogue pro.
          </p>
          <button
            onClick={validateDemo}
            className="mt-4 bg-[color:var(--ink)] px-6 py-3 text-[13px] font-bold uppercase tracking-[1.5px] text-[color:var(--bg)] [border-radius:var(--radius)] transition hover:brightness-[1.2]"
          >
            Simuler la validation (démo)
          </button>
        </div>
      )}

      <div className="mt-8 grid gap-x-10 gap-y-7 border border-[color:var(--line)] bg-[color:var(--card-bg)] p-8 [border-radius:var(--card-radius)] sm:grid-cols-2">
        {fields.map(([label, value]) => (
          <div key={label}>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-[color:var(--muted)]">
              {label}
            </p>
            <p className="mt-1 text-[16px] font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
