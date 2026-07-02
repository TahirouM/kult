import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen overflow-x-hidden bg-white text-black">
        {children}
      </body>
    </html>
  );
}
