import { MetadataRoute } from 'next';
import { ROUTES } from '@/config/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.echinstitute.org';
  
  // Get all canonical routes
  const routes = Object.values(ROUTES).map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  return routes;
}
