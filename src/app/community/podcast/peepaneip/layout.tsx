import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PEEPanEIP | ECH Institute",
  description:
    "PEEPanEIP is an educational video series by ECH Institute diving deep into Ethereum Improvement Proposals with the authors and core developers.",
  keywords: [
    "PEEPanEIP",
    "Ethereum Improvement Proposals",
    "EIP authors",
    "Ethereum education",
    "ECH Institute video series",
    "EIP deep dive",
  ],
  openGraph: {
    title: "PEEPanEIP | ECH Institute",
    description:
      "An educational video series diving deep into Ethereum Improvement Proposals.",
    url: "https://www.echinstitute.org/podcast/peepaneip",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "PEEPanEIP",
      },
    ],
  },
  twitter: {
    title: "PEEPanEIP | ECH Institute",
    description: "Educational deep dives into Ethereum Improvement Proposals.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/podcast/peepaneip",
  },
};

export default function PeepaneipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
