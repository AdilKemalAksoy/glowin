import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep existing imports if needed
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const authoritative = localFont({
  src: "./fonts/Authoritative.otf",
  variable: "--font-authoritative",
  weight: "400",
});

export const metadata: Metadata = {

  title: "Glowin 8 Mart Zirve | Girişimci Kadınlar",
  description: "Glowin 8 Mart Zirve - Girişimci kadınları bir araya getiren, ilham veren ve güçlendiren zirve. Kadın gücü ve girişimcilik ruhu ile dolu bir etkinlik.",
  keywords: ["girişimci kadınlar", "8 mart", "kadın zirvesi", "women empowerment", "entrepreneur women", "glowin"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${authoritative.variable} antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
