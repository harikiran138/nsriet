'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function ResearchDevelopmentPartnersPage() {
  return (
    <ThreeSectionPage
      title="Research & Development Partners"
      subtitle="Driving innovation through collaborative research."
      section1={{
        title: 'Our R&D Partners',
        content: (
          <div className="space-y-4">
            <p>We partner with leading research organizations and companies to work on cutting-edge research and development projects.</p>
          </div>
        ),
      }}
      section2={{
        title: 'Collaboration Details',
        content: (
          <div className="space-y-4">
            <p>Details about our R&D partnerships will be updated here soon.</p>
          </div>
        ),
      }}
      section3={{
        title: 'Impact & Case Studies',
        content: (
          <div className="space-y-4">
            <p>Impact and case studies of our R&D partnerships will be updated here soon.</p>
          </div>
        ),
      }}
    />
  );
}
