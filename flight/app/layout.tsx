import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContext } from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flyghtt",
  description: "FLYGHTT application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContext>{children}</AppContext>
      </body>
    </html>
  );
}
