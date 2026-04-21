import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Talks",
  description:
    "ECH Institute at Devcon 7 Bangkok, ETH Singapore 2024, and Devconnect Argentina 2025 — EIP Summits, WiEP networking, governance workshops, and community activations across the Ethereum ecosystem.",
  keywords: [
    "ECH Institute events",
    "Devcon Bangkok 2024",
    "ETH Singapore 2024",
    "Devconnect Argentina 2025",
    "EIP Summit",
    "WiEP networking",
    "Ethereum governance events",
    "PEEPanEIP events",
    "Ethereum community events",
  ],
  openGraph: {
    title: "Events & Talks — ECH Institute",
    description:
      "From ETH Singapore 2024 to Devconnect Argentina 2025 — ECH Institute organizes EIP Summits, WiEP brunches, governance workshops, and community activations at major Ethereum events.",
    url: "https://www.echinstitute.org/events",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "ECH Institute Events & Talks",
      },
    ],
  },
  twitter: {
    title: "Events & Talks — ECH Institute",
    description:
      "EIP Summits, WiEP networking, and governance workshops at Devcon, ETH Singapore, and Devconnect Argentina.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
