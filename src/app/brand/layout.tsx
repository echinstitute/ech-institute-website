import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Assets & Guidelines | ECH Institute",
  description:
    "Official ECH Institute brand guidelines, logos, colors, and typography. Download ECH Institute assets for media, press, and community use.",
  keywords: [
    "ECH Institute brand",
    "ECH Institute logo",
    "Ethereum Cat Herders brand",
    "Ethereum branding",
    "media kit",
    "press kit",
    "brand guidelines",
  ],
  openGraph: {
    title: "Brand Assets | ECH Institute",
    description:
      "Official ECH Institute brand guidelines, logos, colors, and typography. Download our media kit.",
    url: "https://www.echinstitute.org/brand",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "ECH Institute Brand Assets",
      },
    ],
  },
  twitter: {
    title: "Brand Assets | ECH Institute",
    description: "Official ECH Institute brand guidelines and downloadable logo assets.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/brand",
  },
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
