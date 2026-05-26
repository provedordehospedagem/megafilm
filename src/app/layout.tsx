import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import Script from "next/script";
import { AosInit } from "@/components/AosInit";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://megafilm.com.br"),
  title: {
    default: "MegaFilm Películas | Distribuidora de Películas em Curitiba",
    template: "%s | MegaFilm Películas"
  },
  description:
    "Venda e instalação de películas solares, decorativas e de segurança em Curitiba/PR para casas, lojas, prédios e projetos comerciais.",
  keywords: [
    "distribuidora de películas Curitiba",
    "película solar Curitiba",
    "bobinas de película solar",
    "película decorativa para móveis",
    "insulfilm atacado Curitiba"
  ],
  openGraph: {
    title: "MegaFilm Películas",
    description:
      "Películas solares, decorativas e linhas em bobinas para projetos comerciais, residenciais e automotivos.",
    url: "https://megafilm.com.br",
    siteName: site.name,
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
      </head>
      <body className={`${sora.variable} ${dmSans.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script src="https://unpkg.com/aos@2.3.4/dist/aos.js" strategy="afterInteractive" />
        <AosInit />
      </body>
    </html>
  );
}
