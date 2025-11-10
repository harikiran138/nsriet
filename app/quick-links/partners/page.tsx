'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function PartnerInstitutionPage() {
  return (
    <ThreeSectionPage
      title="Partner Institution"
      subtitle="Our network of collaborating institutions."
      section1={{
        title: 'Our Partners',
        content: (
          <div className="space-y-4">
            <p>We collaborate with a network of institutions to enhance learning and research opportunities.</p>
          </div>
        ),
      }}
      section2={{
        title: 'Key Links / Activities',
        content: (
          <div className="space-y-4">
            <p>Details about our partner institutions and collaborative activities will be updated here soon.</p>
          </div>
        ),
      }}
      section3={{
        title: 'Contact / Gallery / Support',
        content: (
          <div className="space-y-4">
            <p>Contact information and gallery for our partner institutions will be updated here soon.</p>
          </div>
        ),
      }}
    />
  );
}
