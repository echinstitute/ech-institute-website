import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support ECH Institute",
  description:
    "Support ECH Institute, a 501(c)(3) non-profit powering Ethereum protocol governance, EIP coordination, and community education. Support via Ethereum or other methods to help sustain open, decentralized public infrastructure.",
  keywords: [
    "support ECH Institute",
    "Ethereum donation",
    "support Ethereum governance",
    "501c3 donation blockchain",
    "ECH Institute funding",
    "public good donation",
    "crypto donation nonprofit",
  ],
  openGraph: {
    title: "Support ECH Institute Support Ethereum's Public Infrastructure",
    description:
      "ECH Institute is a 501(c)(3) non-profit. Your support fuels EIP coordination, community education, and Ethereum governance as a neutral public good.",
    url: "https://www.echinstitute.org/support",
    images: [
      {
        url: "/assets/ech_full_logo.png",
        width: 1200,
        height: 630,
        alt: "Support ECH Institute",
      },
    ],
  },
  twitter: {
    title: "Support ECH Institute Ethereum Public Good",
    description:
      "Support 501(c)(3) non-profit ECH Institute powering Ethereum protocol governance, EIP coordination, and community education.",
    images: ["/assets/ech_full_logo.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/support",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
