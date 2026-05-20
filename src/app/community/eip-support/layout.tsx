import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EIP Support & Coordination | ECH Institute",
  description:
    "ECH Institute provides EIP support and coordination to help Ethereum developers navigate the Ethereum Improvement Proposal process efficiently.",
  keywords: [
    "EIP support",
    "Ethereum Improvement Proposals",
    "EIP coordination",
    "Ethereum core devs",
    "Ethereum protocol",
    "ECH Institute EIP",
  ],
  openGraph: {
    title: "EIP Support & Coordination | ECH Institute",
    description:
      "Providing essential support to help navigate the Ethereum Improvement Proposal process.",
    url: "https://www.echinstitute.org/eip-support",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "EIP Support & Coordination",
      },
    ],
  },
  twitter: {
    title: "EIP Support & Coordination | ECH Institute",
    description: "Support and coordination for Ethereum Improvement Proposals (EIPs).",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/eip-support",
  },
};

export default function EipSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
