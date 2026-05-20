import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Partnerships | ECH Institute",
  description:
    "Explore ECH Institute's community partnerships. We collaborate with leading Ethereum organizations, educational initiatives, and developer communities.",
  keywords: [
    "ECH Institute partnerships",
    "Ethereum community partners",
    "blockchain collaboration",
    "Ethereum ecosystem",
    "Ethereum Cat Herders partners",
  ],
  openGraph: {
    title: "Community Partnerships | ECH Institute",
    description:
      "Collaborating with leading Ethereum organizations, educational initiatives, and developer communities.",
    url: "https://www.echinstitute.org/community-partnerships",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "ECH Institute Community Partnerships",
      },
    ],
  },
  twitter: {
    title: "Community Partnerships | ECH Institute",
    description: "Collaborating with the Ethereum ecosystem.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/community-partnerships",
  },
};

export default function CommunityPartnershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
