import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Homestead | ECH Institute Physical Ecosystem Space",
  description:
    "Our physical sanctuary for protocol coordination, community workshops, and technical deep-dives. A dedicated collaborative environment for the Ethereum ecosystem.",
  keywords: [
    "ECH Homestead",
    "Ethereum physical space",
    "protocol coordination hub",
    "blockchain co-working",
    "Ethereum community center",
    "homesteading Ethereum",
  ],
  openGraph: {
    title: "The Homestead — Physical Hub for Protocol Coordination",
    description:
      "A dedicated sanctuary for the Ethereum community to coordinate, learn, and build in person. Join us at the ECH Homestead.",
    url: "https://www.echinstitute.org/homestead",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "The Homestead ECH Institute",
      },
    ],
  },
  twitter: {
    title: "The Homestead | ECH Institute Physical Ecosystem Space",
    description:
      "Our dedicated space for protocol coordination and community building. The physical heart of ECH Institute operations.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/homestead",
  },
};

export default function HomesteadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
