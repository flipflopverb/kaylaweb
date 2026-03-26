import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Photography Portfolio",
  description: "Professional photography services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F5]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
