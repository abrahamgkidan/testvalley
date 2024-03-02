import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TestValley",
  description:
    "From buying a new product to experience, verified used, repair warranty, reasonable sale of electronic products together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <div className="pageWrapper">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
