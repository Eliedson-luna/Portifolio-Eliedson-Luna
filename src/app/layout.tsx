import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevLuna",
  description: "Portifólio de Desenvolvedor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased flex flex-col overflow-hidden`}
      >
        <Header />
        <main className="grid place-items-center flex-grow min-h-[80%] items-center justify-items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
