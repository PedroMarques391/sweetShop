import type { Metadata } from "next";
import { Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";
import { AosInit } from "@/components/aos.init";


const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SweetShop",
  description: "Landing page para a sua doceria dos sonhos",
  keywords: ["doceria", "sweet shop", "confeitaria", "sobremesas", "bolos", "doces"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${dancingScript.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}
