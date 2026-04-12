import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Web3Provider } from "@/providers/Web3Provider";
import { ThemeProvider } from "@/providers/ThemeProvider";
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
  metadataBase: new URL("https://www.echinstitute.org"),
  title: {
    default: "ECH Institute Ethereum Protocol Governance & Coordination",
    template: "%s | ECH Institute",
  },
  description:
    "ECH Institute is a 501(c)(3) non-profit supporting Ethereum's protocol governance, EIP coordination, and community education as a neutral public good. Founded July 2024.",
  keywords: [
    "ECH Institute",
    "Ethereum governance",
    "EIP coordination",
    "Ethereum Improvement Proposals",
    "protocol governance",
    "PEEPanEIP",
    "blockchain education",
    "Ethereum community",
    "WiEP",
    "Women in Ethereum Protocol",
    "All Core Devs",
    "decentralized governance",
    "public good",
    "nonprofit Ethereum",
  ],
  authors: [{ name: "ECH Institute", url: "https://www.echinstitute.org" }],
  creator: "ECH Institute",
  publisher: "ECH Institute",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.echinstitute.org",
    siteName: "ECH Institute",
    title: "ECH Institute Ethereum Protocol Governance & Coordination",
    description:
      "ECH Institute supports Ethereum's protocol governance and coordination as a neutral public good — helping the ecosystem scale responsibly and sustainably.",
    images: [
      {
        url: "/assets/ech_full_logo.png",
        width: 1200,
        height: 630,
        alt: "ECH Institute Ethereum Protocol Governance & Coordination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ECH Institute Ethereum Protocol Governance & Coordination",
    description:
      "Supporting Ethereum's protocol governance, EIP coordination, and community education as a neutral 501(c)(3) public good.",
    images: ["/assets/ech_full_logo.png"],
    creator: "@ECHinstitute",
    site: "@ECHinstitute",
  },
  icons: {
    icon: [
      { url: "/assets/ech_full_logo.png", type: "image/png" },
    ],
    apple: "/assets/ech_full_logo.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
  alternates: {
    canonical: "https://www.echinstitute.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ECH Institute",
              alternateName: "ECH Institute Inc.",
              url: "https://www.echinstitute.org",
              logo: "https://www.echinstitute.org/assets/ech_full_logo.png",
              description:
                "ECH Institute is a 501(c)(3) non-profit supporting Ethereum's protocol governance, EIP coordination, and community education as a neutral public good. Founded July 11, 2024.",
              foundingDate: "2024-07-11",
              email: "team@ethcatherders.com",
              sameAs: [
                "https://x.com/ECHinstitute",
                "https://github.com/echinstitute",
                "https://www.youtube.com/@echinstitute",
                "https://www.linkedin.com/company/ethereum-cat-herders/",
              ],
              nonprofitStatus: "Nonprofit501c3",
              areaServed: "Worldwide",
              knowsAbout: [
                "Ethereum governance",
                "EIP coordination",
                "Blockchain education",
                "Protocol development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Web3Provider>
            <Navigation />
            <main className="w-full">
              {children}
            </main>
            <Footer />
            <Toaster />
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
