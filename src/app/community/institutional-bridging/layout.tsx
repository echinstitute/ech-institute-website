import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional Bridging | ECH Institute",
  description:
    "ECH Institute bridges the gap between traditional institutions and the Ethereum ecosystem, facilitating education and seamless integration.",
  keywords: [
    "Institutional bridging Ethereum",
    "Ethereum enterprise adoption",
    "ECH Institute institutions",
    "blockchain for institutions",
    "Ethereum education institutions",
  ],
  openGraph: {
    title: "Institutional Bridging | ECH Institute",
    description:
      "Bridging the gap between traditional institutions and the Ethereum ecosystem through education.",
    url: "https://www.echinstitute.org/institutional-bridging",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "Institutional Bridging",
      },
    ],
  },
  twitter: {
    title: "Institutional Bridging | ECH Institute",
    description: "Connecting traditional institutions with the Ethereum ecosystem.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/institutional-bridging",
  },
};

export default function InstitutionalBridgingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
