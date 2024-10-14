import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import QueryProvider from "./QueryProvider";
import { Toaster } from "react-hot-toast";
import { Modal, ModalProvider } from "@/components/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          <ModalProvider>
            <AppProvider>
              <Modal />
              {children}
              <Toaster
                toastOptions={{
                  style: {
                    background: "hsla(170, 82%, 48%, 1)",
                    color: "#fff",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    minWidth: "max-content",
                  },
                }}
              />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </AppProvider>
          </ModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
