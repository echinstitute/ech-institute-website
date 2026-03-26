import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to ECH Institute",
  description:
    "Support ECH Institute, a 501(c)(3) non-profit powering Ethereum protocol governance, EIP coordination, and community education. Donate via Ethereum or other methods to help sustain open, decentralized public infrastructure.",
  keywords: [
    "donate ECH Institute",
    "Ethereum donation",
    "support Ethereum governance",
    "501c3 donation blockchain",
    "ECH Institute funding",
    "public good donation",
    "crypto donation nonprofit",
  ],
  openGraph: {
    title: "Donate to ECH Institute — Support Ethereum's Public Infrastructure",
    description:
      "ECH Institute is a 501(c)(3) non-profit. Your donation supports EIP coordination, community education, and Ethereum governance as a neutral public good.",
    url: "https://www.echinstitute.org/donate",
    images: [
      {
        url: "/assets/ech_full_logo.png",
        width: 1200,
        height: 630,
        alt: "Donate to ECH Institute",
      },
    ],
  },
  twitter: {
    title: "Donate to ECH Institute — Ethereum Public Good",
    description:
      "Support 501(c)(3) non-profit ECH Institute — powering Ethereum protocol governance, EIP coordination, and community education.",
    images: ["/assets/ech_full_logo.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/donate",
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
