import type { Metadata } from "next";
import "./globals.css";
import "@/shared/fonts/robotoMono/robotoMono.css";
import "@/shared/fonts/fontSize/fontsize.css";
import Head from "next/head";
import Header from "@/shared/components/structural/header";

export const metadata: Metadata = {
  title: "DevLuna - Portifólio",
  description: "Portifólio de Desenvolvedor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="/assets/favicon.svg" />
      </Head>
      <body className="antialiased">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
