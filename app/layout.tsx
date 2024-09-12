import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Wrapper from "@/components/Wrapper";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studio Legale Federico",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
          <Wrapper>
            <Nav />
            <div className="mt-6 mb-20">
              {children}
            </div>
            <Footer />
          </Wrapper>
      </body>
    </html>
  );
}
