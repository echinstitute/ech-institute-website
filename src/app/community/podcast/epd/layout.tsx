import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EPD Podcast | ECH Institute",
  description:
    "Ethereum Protocol Development (EPD) Podcast by ECH Institute. Dive deep into the technical updates and core development of Ethereum.",
  keywords: [
    "EPD podcast",
    "Ethereum Protocol Development",
    "Ethereum core devs podcast",
    "ECH Institute podcast",
    "Ethereum protocol updates",
  ],
  openGraph: {
    title: "EPD Podcast | ECH Institute",
    description:
      "Dive deep into the technical updates and core development of Ethereum with the EPD Podcast.",
    url: "https://www.echinstitute.org/podcast/epd",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "EPD Podcast",
      },
    ],
  },
  twitter: {
    title: "EPD Podcast | ECH Institute",
    description: "Dive deep into Ethereum Protocol Development.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/podcast/epd",
  },
};

export default function EpdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
