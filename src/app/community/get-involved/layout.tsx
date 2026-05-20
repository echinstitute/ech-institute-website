import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | ECH Institute",
  description:
    "Join the ECH Institute! Discover ways to get involved in Ethereum governance, EIP coordination, and community initiatives.",
  keywords: [
    "Get involved Ethereum",
    "ECH Institute jobs",
    "Ethereum contributions",
    "Ethereum governance participation",
    "Ethereum community volunteer",
  ],
  openGraph: {
    title: "Get Involved | ECH Institute",
    description:
      "Join our mission to support Ethereum governance, EIP coordination, and community education.",
    url: "https://www.echinstitute.org/get-involved",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "Get Involved with ECH Institute",
      },
    ],
  },
  twitter: {
    title: "Get Involved | ECH Institute",
    description: "Join our mission to support Ethereum governance and coordination.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/get-involved",
  },
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
