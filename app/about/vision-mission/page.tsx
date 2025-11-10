'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function VisionMissionPage() {
  return (
    <ThreeSectionPage
      title="Vision & Mission"
      subtitle="Our guiding principles and future aspirations"
      section1={{
        title: 'Our Vision',
        content: (
          <div className="space-y-4">
            <p>
              To be a premier institution in engineering and management education, renowned for our academic excellence, research, and innovation.
            </p>
            <p>
              We aspire to create a vibrant learning environment that produces competent professionals and entrepreneurs who can contribute to the society.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Our Mission',
        content: (
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>To provide a high-quality academic experience with a well-rounded curriculum.</li>
              <li>To foster a culture of research, innovation, and lifelong learning.</li>
              <li>To develop strong industry-academia collaborations for mutual benefit.</li>
              <li>To instill ethical values and a sense of social responsibility in our students.</li>
            </ul>
          </div>
        ),
      }}
      section3={{
        title: 'Our Core Values',
        content: (
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Excellence', desc: 'Striving for the highest standards in all that we do.' },
              { title: 'Integrity', desc: 'Upholding the highest ethical standards.' },
              { title: 'Innovation', desc: 'Encouraging creative and critical thinking.' },
              { title: 'Inclusivity', desc: 'Providing equal opportunities for all.' },
            ].map((value, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/30 rounded-lg border-l-4 border-l-corporate-blue">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-1 text-sm">{value.title}</h4>
                <p className="text-xs text-corporate-textSecondary dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        ),
      }}
    />
  );
}
