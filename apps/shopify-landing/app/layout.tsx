import type { Metadata } from "next";
import { DM_Sans, Lexend, Aldrich } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Testa for Shopify - A/B Testing for Your Store",
  description:
    "Want to do A/B Testing? We have the tools. Achieve full A/B Testing potential of your Shopify store with Testa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${lexend.variable} ${aldrich.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
