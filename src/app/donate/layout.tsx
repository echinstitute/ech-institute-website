import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Our Mission | Donate to ECH Institute",
  description:
    "Your contribution fuels our efforts to create accessible resources, coordinate critical meetings, and promote inclusivity in the Ethereum ecosystem. Support protocol public goods.",
  keywords: [
    "donate ECH Institute",
    "support Ethereum public goods",
    "Ethereum nonprofit donation",
    "funding protocol coordination",
    "blockchain education funding",
  ],
  openGraph: {
    title: "Support Ethereum Protocol Public Goods | Donate to ECH",
    description:
      "Help us scale responsibly and sustainably. Your donations support EIP coordination, community education, and neutral protocol stewardship.",
    url: "https://www.echinstitute.org/donate",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "Donate to ECH Institute",
      },
    ],
  },
  twitter: {
    title: "Support Our Mission | Donate to ECH Institute",
    description:
      "Support the coordination of Ethereum's protocol upgrades and technical education. Donate to ECH Institute, a 501(c)(3) nonprofit.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
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
