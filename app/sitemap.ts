import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nsriet.edu.in';
  
  const routes = [
    '',
    '/about',
    '/governance',
    '/admissions',
    '/academics',
    '/iic',
    '/industry',
    '/cdc',
    '/quick-links',
    '/feedback',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
