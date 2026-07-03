import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BurgerMenu from "../components/BurgerMenu";
import CartClient from "./CartClient";

export const metadata: Metadata = {
  title: "Votre panier — KULT Collection",
  description: "Votre panier KULT Collection.",
};

export default function CartPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* ===== Header (pink) ===== */}
      <header className="relative z-20 flex h-[88px] items-center justify-between overflow-hidden bg-kult-pink px-5 sm:h-[108px] sm:px-8">
        <div className="relative z-10">
          <BurgerMenu barWidth={48} barHeight={7} gap={5} />
        </div>
        <Link href="/" className="relative z-10 text-center leading-none text-white">
          <span className="block text-[22px] font-bold tracking-[0.18em] sm:text-[28px]">KULT</span>
          <span className="block text-[9px] font-light tracking-[0.4em] sm:text-[11px]">COLLECTION</span>
        </Link>
        <div className="relative z-10 flex items-center gap-3">
          <Image src="/assets/shopping-bag.svg" alt="Panier" width={40} height={40} className="h-9 w-9" />
          <span className="font-label text-[26px] text-black sm:text-[32px]">FR</span>
        </div>
      </header>

      {/* ===== Cart ===== */}
      <CartClient />

      {/* ===== Footer ===== */}
      <footer id="contact" className="w-full bg-black text-white">
        <div className="mx-auto grid max-w-[1608px] grid-cols-1 gap-10 px-8 py-16 sm:grid-cols-3 sm:px-10">
          <div>
            <h3 className="text-[20px] font-medium italic sm:text-[24px]">ADDRESSE</h3>
            <div className="mt-4 space-y-1.5 text-[16px] font-medium sm:text-[20px]">
              <p>Siège Social</p>
              <p>Kult &amp; Co</p>
              <p>78 Avenue G.De.Gaulle</p>
              <p>66200 Elne</p>
              <p>France</p>
            </div>
          </div>
          <div>
            <h3 className="text-[20px] font-medium italic sm:text-[24px]">NEWSLETTER</h3>
            <form className="mt-4 max-w-[345px]" action="#">
              <input type="email" placeholder="Email Adresse" className="h-[52px] w-full bg-white px-4 text-[16px] font-medium text-black placeholder:text-black focus:outline-none" />
              <button className="mt-3 h-[52px] w-full border border-white bg-black text-[16px] font-medium text-white transition-colors hover:bg-white hover:text-black">SUBSCRIBE NOW</button>
            </form>
          </div>
          <div>
            <h3 className="text-[20px] font-medium italic sm:text-[24px]">CONTACT</h3>
            <div className="mt-4 space-y-1.5 text-[16px] font-medium sm:text-[20px]">
              <p>+(33). 6.51.67.86.32</p>
              <p className="break-all">Mail : kult.concepthome@gmail.com</p>
            </div>
            <h3 className="mt-6 text-[20px] font-medium italic sm:text-[24px]">NOS RESEAUX :</h3>
          </div>
        </div>
      </footer>
    </main>
  );
}
