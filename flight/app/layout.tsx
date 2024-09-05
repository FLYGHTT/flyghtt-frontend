import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import QueryProvider from "./QueryProvider";
import { Toaster } from "react-hot-toast";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
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
        <QueryProvider>
          <AppProvider>
            {children}
            <Toaster
              toastOptions={{
                style: {
                  background: "hsla(170, 82%, 48%, 1)",
                  color: "#fff",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                },
              }}
            />
          </AppProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
