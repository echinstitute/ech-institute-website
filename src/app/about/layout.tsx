import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ECH Institute",
  description:
    "ECH Institute Inc. is a 501(c)(3) non-profit organization founded July 11, 2024. We support Ethereum's protocol governance, EIP coordination, and community education as a neutral public good. Learn about our board, mission, and work.",
  keywords: [
    "ECH Institute about",
    "Ethereum governance nonprofit",
    "EIP coordination organization",
    "Pooja Ranjan",
    "Ethereum Cat Herders history",
    "501c3 blockchain",
    "ECH Institute board",
    "Ethereum public good",
  ],
  openGraph: {
    title: "About ECH Institute 501(c)(3) Ethereum Governance Nonprofit",
    description:
      "Founded July 11, 2024, ECH Institute supports Ethereum's governance and EIP coordination as a neutral public good. Meet our team and learn what we do.",
    url: "https://www.echinstitute.org/about",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "About ECH Institute",
      },
    ],
  },
  twitter: {
    title: "About ECH Institute Ethereum Governance & Coordination",
    description:
      "Founded July 11, 2024. ECH Institute supports Ethereum's protocol governance, EIP coordination, and community education as a neutral 501(c)(3).",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
