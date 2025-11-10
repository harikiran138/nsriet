'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function StartupsInnovationSupportPage() {
  return (
    <ThreeSectionPage
      title="Startups & Innovation Support"
      subtitle="Fostering a culture of entrepreneurship and innovation."
      section1={{
        title: 'Our Initiatives',
        content: (
          <div className="space-y-4">
            <p>We provide a supportive ecosystem for startups and innovators, including mentorship, funding opportunities, and incubation facilities.</p>
          </div>
        ),
      }}
      section2={{
        title: 'Initiative Details',
        content: (
          <div className="space-y-4">
            <p>Details about our startup and innovation support initiatives will be updated here soon.</p>
          </div>
        ),
      }}
      section3={{
        title: 'Impact & Case Studies',
        content: (
          <div className="space-y-4">
            <p>Impact and case studies of our initiatives will be updated here soon.</p>
          </div>
        ),
      }}
    />
  );
}
