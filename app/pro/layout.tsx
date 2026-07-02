import type { Metadata } from "next";
import { ProProvider } from "./ProContext";
import { ProHeader, ProFooter, ProToast } from "./components/ProChrome";

export const metadata: Metadata = {
  title: "KULT Pro — Espace revendeurs",
  description:
    "Portail professionnel KULT Collection : compte revendeur, catalogue HT, commande en ligne et suivi de livraison en temps réel.",
};

export default function ProLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="kult-pro min-h-screen overflow-x-hidden">
      <ProProvider>
        <ProHeader />
        {children}
        <ProFooter />
        <ProToast />
      </ProProvider>
    </div>
  );
}
