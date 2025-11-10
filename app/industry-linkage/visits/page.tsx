'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function IndustryVisitsInternshipsPage() {
  return (
    <ThreeSectionPage
      title="Industry Visits & Internships"
      subtitle="Bridging the gap between academia and industry."
      section1={{
        title: 'Our Programs',
        content: (
          <div className="space-y-4">
            <p>We organize regular industry visits and internship programs to provide our students with real-world exposure and practical skills.</p>
          </div>
        ),
      }}
      section2={{
        title: 'Program Details',
        content: (
          <div className="space-y-4">
            <p>Details about our industry visits and internship programs will be updated here soon.</p>
          </div>
        ),
      }}
      section3={{
        title: 'Impact & Case Studies',
        content: (
          <div className="space-y-4">
            <p>Impact and case studies of our programs will be updated here soon.</p>
          </div>
        ),
      }}
    />
  );
}
