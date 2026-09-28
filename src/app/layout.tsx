import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "MUFOMIC GEN 13",
  description: "Official Landing Page MUFOMIC Gen 13 Universitas Multimedia Nusantara. Informasi regulasi audisi online, RSVP Mufogigs, dan kegiatan musik kampus UMN.",
  keywords: ["Mufomic", "Mufomic Gen 13", "Audisi Online", "Orkes UMN", "UKM Musik UMN", "Mufogigs"],
  icons: {
    icon: '/images/logo/logo-mufomic-navbar.webp', // Tautan ke file gambar logo
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-[#080306] text-slate-100 selection:bg-rose-600 selection:text-white relative overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
