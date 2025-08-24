import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Web3Provider } from "@/providers/Web3Provider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECH Institute",
  description: "ECH Institute is a 501(c)3 nonprofit organization focused on providing education and resources to the Ethereum community.",
  icons: {
    icon: "/assets/ech_full_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Web3Provider>
          <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <Header />
            {children}
            <Footer />
          </div>
          <Toaster />
        </Web3Provider>
      </body>
    </html>
  );
}
