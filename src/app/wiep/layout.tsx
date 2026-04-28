import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women in Ethereum Protocol (WiEP) | ECH Institute",
  description:
    "Supporting women entering Ethereum protocol governance through dedicated study groups, mentorship, and technical education. Driving diversity in protocol stewardship.",
  keywords: [
    "Women in Ethereum",
    "WiEP",
    "protocol governance diversity",
    "Ethereum mentorship",
    "women in blockchain",
    "Ethereum study groups",
  ],
  openGraph: {
    title: "Women in Ethereum Protocol (WiEP) — Diversity in Governance",
    description:
      "Join our hands-on study groups and mentorship programs designed for women eager to contribute to the Ethereum protocol.",
    url: "https://www.echinstitute.org/wiep",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "Women in Ethereum Protocol",
      },
    ],
  },
  twitter: {
    title: "Women in Ethereum Protocol (WiEP) | ECH Institute",
    description:
      "Driving diversity in protocol stewardship through dedicated education and mentorship for women in the Ethereum ecosystem.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/wiep",
  },
};

export default function WiEPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
