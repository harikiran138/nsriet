'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function MousCollaborationsPage() {
  return (
    <ThreeSectionPage
      title="MoUs & Collaborations"
      subtitle="Building strong partnerships with industry and academia."
      section1={{
        title: 'Our Collaborations',
        content: (
          <div className="space-y-4">
            <p>We have established Memorandums of Understanding (MoUs) with a wide range of companies and academic institutions to foster innovation and provide our students with hands-on experience.</p>
          </div>
        ),
      }}
      section2={{
        title: 'Collaboration Details',
        content: (
          <div className="space-y-4">
            <p>Details about our collaborations will be updated here soon.</p>
          </div>
        ),
      }}
      section3={{
        title: 'Impact & Case Studies',
        content: (
          <div className="space-y-4">
            <p>Impact and case studies of our collaborations will be updated here soon.</p>
          </div>
        ),
      }}
    />
  );
}
