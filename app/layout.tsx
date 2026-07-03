import type { Metadata } from "next";
import { Inter, Kaisei_Decol, Londrina_Solid } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Display serif for headings & product names (KULT rebrand)
const kaisei = Kaisei_Decol({
  variable: "--font-kaisei",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Condensed display for small labels / FR
const londrina = Londrina_Solid({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const metadata: Metadata = {
  title: "KULT Collection — Bougies & parfums d'ambiance",
  description:
    "KULT Collection : bougies, diffuseurs et parfums d'intérieur pour un été sur palm beach réussi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${kaisei.variable} ${londrina.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-white text-black">
        {children}
      </body>
    </html>
  );
}
