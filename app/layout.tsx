import { Providers } from "@/lib/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-[#EFF5F6]`}>
          <main>
            <nav className="bg-white h-[80px] relative flex">
              <Link
                href="/"
                className="text-primary absolute left-10  self-center"
              >
                DermOnDemand
              </Link>
            </nav>

            {children}
            {/* <Footer /> */}
          </main>
        </body>
      </html>
    </Providers>
  );
}