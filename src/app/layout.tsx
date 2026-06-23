import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Playfair_Display, Caveat, Birthstone_Bounce } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const corinthia = Birthstone_Bounce({
  variable: "--font-corinthia-raw",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What About A World",
  description:
    "Plan your own trip - no travel agency, no chaos. An AI assistant guides you step by step.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} ${caveat.variable} ${corinthia.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
