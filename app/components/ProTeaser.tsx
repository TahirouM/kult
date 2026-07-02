import Link from "next/link";

/** Consumer-home teaser pointing to the KULT Pro (B2B) space. */
export default function ProTeaser() {
  return (
    <section className="bg-[#39B89A] px-5 py-10 text-white sm:px-8 md:py-14">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[2.5px] opacity-90">
            Professionnel ?
          </p>
          <h2 className="mt-2 text-[26px] font-extrabold leading-tight tracking-tight sm:text-[34px] md:text-[40px]">
            Découvrez KULT Pro
          </h2>
          <p className="mt-2 max-w-[520px] text-[15px] leading-relaxed opacity-90 sm:text-[16px]">
            Espace revendeurs : catalogue HT, tarifs dégressifs et suivi de commande en temps réel.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/pro/inscription"
            className="bg-[#0e0e0e] px-7 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-white transition hover:brightness-125"
          >
            Créer un compte pro
          </Link>
          <Link
            href="/pro"
            className="border border-white px-7 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-white transition hover:bg-white hover:text-[#39B89A]"
          >
            Découvrir KULT Pro
          </Link>
        </div>
      </div>
    </section>
  );
}
