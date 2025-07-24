import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/structural/footer";
import Head from "next/head";
import Header from "@/components/structural/header";


export const metadata: Metadata = {
  title: "DevLuna | Portifólio",
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
      <body className={`min-h-screen antialiased content-center flex flex-col`}>
        <Header/>
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col min-h-screen">
          <main className="flex-grow justify-center bg-[#03011d00]  rounded-t-md">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
