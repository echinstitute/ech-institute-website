import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECH Institute Podcast & Media Hub",
  description:
    "PEEPanEIP deep-dives, The Fusaka Files, Ecosystem Project Demo (EPD), Women in Ethereum Protocol (WiEP) study groups, and All Core Devs (ACD) archives. Protocol education for the global Ethereum community.",
  keywords: [
    "PEEPanEIP podcast",
    "ECH Institute podcast",
    "Ethereum podcast",
    "EIP deep dive",
    "Fusaka Files",
    "Ecosystem Project Demo",
    "EPD podcast",
    "WiEP Women in Ethereum",
    "All Core Devs archive",
    "Ethereum protocol education",
    "ACDE ACDC meetings",
  ],
  openGraph: {
    title: "ECH Institute Podcast & Media Hub",
    description:
      "PEEPanEIP, The Fusaka Files, EPD, WiEP, and All Core Devs archives — one place for Ethereum protocol education and coordination.",
    url: "https://www.echinstitute.org/podcast",
    images: [
      {
        url: "/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "ECH Institute Podcast & Media Hub",
      },
    ],
  },
  twitter: {
    title: "ECH Institute Podcast — PEEPanEIP, Fusaka Files & More",
    description:
      "Deep-dives into EIPs, Fusaka upgrade series, WiEP study groups, and All Core Devs session archives for the global Ethereum developer community.",
    images: ["/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/podcast",
  },
};

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
