import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fusaka Files | ECH Institute",
  description:
    "Fusaka Files is a podcast series by ECH Institute focusing on unique stories, challenges, and insights from the Ethereum ecosystem.",
  keywords: [
    "Fusaka Files",
    "Ethereum stories",
    "ECH Institute podcast",
    "Ethereum ecosystem insights",
    "blockchain podcast",
  ],
  openGraph: {
    title: "Fusaka Files | ECH Institute",
    description:
      "Unique stories, challenges, and insights from the Ethereum ecosystem.",
    url: "https://www.echinstitute.org/podcast/fusaka-files",
    images: [
      {
        url: "/assets/logo/ECH Institute Logo - White.png",
        width: 1200,
        height: 630,
        alt: "Fusaka Files",
      },
    ],
  },
  twitter: {
    title: "Fusaka Files | ECH Institute",
    description: "Unique stories, challenges, and insights from the Ethereum ecosystem.",
    images: ["/assets/logo/ECH Institute Logo - White.png"],
  },
  alternates: {
    canonical: "https://www.echinstitute.org/podcast/fusaka-files",
  },
};

export default function FusakaFilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
