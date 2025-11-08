import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NSRIET - Excellence in Engineering Education',
    short_name: 'NSRIET',
    description: 'Premier engineering institution committed to academic excellence and innovation',
    start_url: '/',
    display: 'standalone',
    background_color: '#003366',
    theme_color: '#003366',
    icons: [
      {
        src: '/main-logo1.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
