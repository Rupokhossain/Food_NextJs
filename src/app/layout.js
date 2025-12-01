"use client";
import "./globals.css";
import MainHeader from "@/components/Header/MainHeader";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/providers/Providers";
import { usePathname } from "next/navigation";
import TopHeader from "@/components/Header/TopHeader";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // ❗ Login & Signup pages — no headers/footers
  const noLayout = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en">
      <body>
        <Providers>
          {noLayout ? (
            children
          ) : (
            <>
              <TopHeader></TopHeader>
              <MainHeader />
              {children}
              <Footer />
            </>
          )}
        </Providers>
      </body>
    </html>
  );
}
