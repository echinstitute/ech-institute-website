import type { MetadataRoute } from "next";
import { ROUTES, SITE } from "@/config/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  return [
    { url: `${base}${ROUTES.home}`,        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}${ROUTES.about}`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}${ROUTES.events}`,      lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}${ROUTES.podcast}`,     lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}${ROUTES.peepaneip}`,   lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}${ROUTES.fusakaFiles}`, lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}${ROUTES.epd}`,         lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}${ROUTES.wiep}`,        lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}${ROUTES.donate}`,      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
