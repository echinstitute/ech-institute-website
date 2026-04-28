import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethereum Education & Protocol Literacy",
  description:
    "Empowering the next generation of protocol contributors with technical literacy, EIP deep-dives, and hands-on governance participation. Learn how to contribute to Ethereum protocol upgrades.",
  keywords: [
    "Ethereum education",
    "protocol literacy",
    "EIP deep dive",
    "learn blockchain governance",
    "Ethereum protocol coordination",
    "ECH Institute education",
    "blockchain technical training",
  ],
  openGraph: {
    title: "Ethereum Education & Protocol Literacy | ECH Institute",
    description:
      "Bridge the gap between observation and contribution. Our education programs empower you to understand and participate in Ethereum's core development.",
    url: "https://www.echinstitute.org/education",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "Ethereum Education & Protocol Literacy",
      },
    ],
  },
  twitter: {
    title: "Ethereum Education & Protocol Literacy | ECH Institute",
    description:
      "Hands-on education for the next generation of Ethereum protocol contributors. EIP deep-dives and coordination training.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/education",
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
