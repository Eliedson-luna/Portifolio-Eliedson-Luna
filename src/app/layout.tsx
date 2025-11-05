import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Header from "@/shared/components/structural/header";
import Footer from "@/shared/components/structural/footer";

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
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <body className={`antialiased bg-bg`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
