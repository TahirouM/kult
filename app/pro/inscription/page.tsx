"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Eyebrow } from "../components/ui";
import { usePro } from "../ProContext";

const sectors = [
  "Concept-store / boutique",
  "Hôtellerie",
  "Restauration",
  "Décoration / architecte",
  "Entreprise / comité",
  "Autre",
];

const inputCls =
  "h-[50px] w-full border-[1.5px] border-[color:var(--line)] bg-[color:var(--card-bg)] px-4 text-[15px] text-[color:var(--ink)] [border-radius:var(--radius)] focus:border-[color:var(--accent)] focus:outline-none";
const labelCls = "mb-1.5 block text-[13px] font-semibold text-[color:var(--ink)]";

const marche = [
  { n: 1, t: "Vous vous inscrivez", s: "Informations de votre entreprise." },
  { n: 2, t: "Nous validons", s: "Sous 48h ouvrées." },
  { n: 3, t: "Vous commandez", s: "Catalogue pro débloqué." },
];

export default function ProSignup() {
  const router = useRouter();
  const { submitSignup } = usePro();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    submitSignup(String(data.get("company") || ""));
    router.push("/pro/portail/compte");
  }

  return (
    <main className="mx-auto max-w-[1180px] px-6 pb-24 pt-12 md:px-10">
      <Link href="/pro" className="text-[14px] text-[color:var(--muted)] hover:underline">
        ← Retour à KULT Pro
      </Link>

      <div className="mt-8 grid items-start gap-14 md:grid-cols-[1.3fr_.9fr]">
        {/* left: form */}
        <div>
          <Eyebrow>Création de compte pro</Eyebrow>
          <h1 className="mt-4 text-[clamp(34px,4vw,54px)] font-extrabold leading-none tracking-[-1.2px]">
            Devenir revendeur
          </h1>
          <p className="mt-4 max-w-[520px] text-[16px] text-[color:var(--muted)]">
            Renseignez les informations de votre entreprise. Après vérification, votre compte est
            validé sous 48h et vous accédez au catalogue pro.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-[22px]">
            <div className="grid gap-[18px] sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelCls}>Raison sociale *</label>
                <input name="company" required placeholder="Ex. Maison Lumière" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>SIRET *</label>
                <input name="siret" required placeholder="123 456 789 00012" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Secteur d&apos;activité</label>
                <select name="sector" className={inputCls}>
                  {sectors.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>Contact *</label>
                <input name="contact" required placeholder="Prénom Nom" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Email professionnel *</label>
                <input name="email" type="email" required placeholder="contact@enseigne.fr" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Téléphone</label>
                <input name="phone" placeholder="06 00 00 00 00" className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Adresse de facturation</label>
                <input name="address" placeholder="Adresse, code postal, ville" className={inputCls} />
              </div>
            </div>

            <label className="flex items-start gap-2.5 text-[13px] text-[color:var(--muted)]">
              <input type="checkbox" required className="mt-0.5 accent-[color:var(--accent)]" />
              J&apos;accepte les conditions générales de vente professionnelles et la politique de
              confidentialité.
            </label>

            <button
              type="submit"
              className="h-[62px] self-start bg-[color:var(--accent)] px-10 text-[15px] font-bold uppercase tracking-[1.5px] text-[color:var(--accent-ink)] transition [border-radius:var(--radius)] hover:brightness-[1.06]"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>

        {/* right: aside */}
        <aside
          className="bg-[color:var(--surface)] p-9 [border-radius:var(--card-radius)] md:sticky md:top-[170px]"
          style={{ boxShadow: "var(--tile-shadow)" }}
        >
          <h2 className="text-[20px] font-bold">Comment ça marche</h2>
          <div className="mt-6 flex flex-col gap-6">
            {marche.map((m) => (
              <div key={m.n} className="flex gap-4">
                <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-[14px] font-bold text-[color:var(--accent-ink)]">
                  {m.n}
                </span>
                <div>
                  <p className="text-[15px] font-semibold">{m.t}</p>
                  <p className="text-[14px] text-[color:var(--muted)]">{m.s}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-6 border-[color:var(--line)]" />
          <p className="text-[14px] text-[color:var(--muted)]">
            Une question ?{" "}
            <span className="font-semibold text-[color:var(--ink)]">pro@kultcollection.fr</span>
          </p>
        </aside>
      </div>
    </main>
  );
}
