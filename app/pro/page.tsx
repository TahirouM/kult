import Image from "next/image";
import { Eyebrow, Button } from "./components/ui";

const steps = [
  { n: "01", title: "Création de compte pro", desc: "Inscription en ligne et validation des comptes revendeurs sous 48h par notre équipe." },
  { n: "02", title: "Commande en ligne", desc: "Catalogue pro, conditions tarifaires dégressives et minimum de commande, en libre-service." },
  { n: "03", title: "Suivi de commande", desc: "Le statut de chaque commande est visible en temps réel dans votre espace." },
  { n: "04", title: "Suivi de livraison", desc: "Informations d'expédition, transporteur et numéro de suivi, mis à jour à chaque étape." },
];

const tiers = [
  { title: "Standard", value: "−30%", desc: "sur le prix public, dès 300 € HT de commande.", theme: "light" },
  { title: "Volume", value: "−5%", desc: "remise additionnelle dès 800 € HT de commande.", theme: "accent" },
  { title: "Grand compte", value: "−10%", desc: "remise additionnelle dès 2 000 € HT de commande.", theme: "dark" },
];

export default function ProLanding() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-[var(--sec-pad)] md:grid-cols-[1.1fr_.9fr] md:px-10">
          <div className="flex flex-col gap-6">
            <Eyebrow>KULT Pro · Espace revendeurs</Eyebrow>
            <h1 className="text-[clamp(40px,4.8vw,72px)] font-extrabold leading-none tracking-[-1.5px]">
              Le portail des professionnels
            </h1>
            <p className="max-w-[500px] text-[18px] leading-[1.65] text-[color:var(--ink)]/80">
              Créez votre compte revendeur, commandez en ligne aux conditions pro, et suivez vos
              commandes et livraisons en temps réel — au même endroit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/pro/inscription" variant="accent">
                Créer un compte pro
              </Button>
              <Button href="/pro/portail/catalogue" variant="outline">
                Découvrir KULT Pro
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-10">
              {[
                { v: "300€", l: "min. de commande" },
                { v: "−30%", l: "tarif revendeur" },
                { v: "48h", l: "validation" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[34px] font-extrabold leading-none">{s.v}</div>
                  <div className="mt-1 text-[13px] text-[color:var(--muted)]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative aspect-[3/4] w-full overflow-hidden [border-radius:var(--card-radius)]"
            style={{ boxShadow: "var(--tile-shadow)" }}
          >
            <Image src="/pro/artisan-web.jpg" alt="Atelier KULT" fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
          </div>
        </div>
      </section>

      {/* Parcours pro */}
      <section className="mx-auto max-w-[1280px] px-6 py-[var(--sec-pad)] md:px-10">
        <Eyebrow>Le parcours pro</Eyebrow>
        <h2 className="mt-4 text-[clamp(30px,3.6vw,50px)] font-extrabold leading-tight tracking-[-1px]">
          Tout votre compte pro, de A à Z
        </h2>
        <div className="mt-10 grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col gap-3.5 border border-[color:var(--line)] bg-[color:var(--card-bg)] p-8 [border-radius:var(--card-radius)]"
            >
              <span className="text-[13px] font-extrabold text-[color:var(--accent)]">{s.n}</span>
              <h3 className="text-[20px] font-bold">{s.title}</h3>
              <p className="text-[15px] leading-[1.6] text-[color:var(--muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conditions tarifaires */}
      <section className="bg-[color:var(--surface2)]">
        <div className="mx-auto max-w-[1280px] px-6 py-[var(--sec-pad)] md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Conditions tarifaires</Eyebrow>
              <h2 className="mt-4 text-[clamp(30px,3.6vw,50px)] font-extrabold leading-tight tracking-[-1px]">
                Des paliers dégressifs
              </h2>
            </div>
            <p className="text-[15px] font-medium">Minimum de commande : 300 € HT</p>
          </div>
          <div className="mt-10 grid gap-[22px] md:grid-cols-3">
            {tiers.map((t) => {
              const isDark = t.theme === "dark";
              return (
                <div
                  key={t.title}
                  className="p-8 [border-radius:var(--card-radius)]"
                  style={{
                    background: isDark ? "var(--ink)" : "var(--bg)",
                    color: isDark ? "var(--bg)" : "var(--ink)",
                    boxShadow: "var(--tile-shadow)",
                  }}
                >
                  <h3 className="text-[16px] font-bold">{t.title}</h3>
                  <div
                    className="mt-3 text-[40px] font-extrabold leading-none"
                    style={{ color: t.theme === "light" ? "var(--ink)" : "var(--accent)" }}
                  >
                    {t.value}
                  </div>
                  <p
                    className="mt-3 text-[14px] leading-[1.5]"
                    style={{ color: isDark ? "rgba(255,255,255,.7)" : "var(--muted)" }}
                  >
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-[1280px] px-6 py-[var(--sec-pad)] md:px-10">
        <div
          className="flex flex-wrap items-center justify-between gap-6 bg-[color:var(--accent)] px-12 py-11 [border-radius:var(--card-radius)]"
        >
          <div className="text-[color:var(--accent-ink)]">
            <h2 className="text-[clamp(24px,2.6vw,34px)] font-extrabold">Prêt à rejoindre KULT Pro ?</h2>
            <p className="mt-2 text-[15px] opacity-90">Compte validé sous 48h · sans engagement.</p>
          </div>
          <Button href="/pro/inscription" variant="dark">
            Créer mon compte pro
          </Button>
        </div>
      </section>
    </main>
  );
}
