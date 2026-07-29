import type { Metadata } from "next";
import "./globals.css";
import "@/shared/fonts/robotoMono/robotoMono.css";
import "@/shared/fonts/fontSize/fontsize.css";
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
      <body className="antialiased">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
