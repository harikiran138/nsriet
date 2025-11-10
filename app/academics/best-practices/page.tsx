'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function BestPracticesPage() {
  return (
    <ThreeSectionPage
      title="Best Practices"
      subtitle="Institutional excellence through continuous improvement"
      section1={{
        title: 'Academic Best Practices',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET is committed to implementing and promoting best practices in academic delivery, research, and institutional management.
            </p>
            <p>
              We continuously evaluate and improve our processes based on feedback, benchmarking with peer institutions, and alignment with national and international standards.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Institutional Initiatives',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Quality Assurance', desc: 'Regular curriculum review and feedback mechanisms' },
                { title: 'Faculty Development', desc: 'Continuous training and professional development programs' },
                { title: 'Student Support', desc: 'Academic mentoring and counseling services' },
                { title: 'Innovation Culture', desc: 'Encouraging research and creative thinking' },
                { title: 'Industry Collaboration', desc: 'Partnerships for internships and placements' },
                { title: 'Sustainability', desc: 'Green campus initiatives and eco-friendly practices' },
              ].map((practice) => (
                <div key={practice.title} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white mb-2">{practice.title}</h3>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400">{practice.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Resources & Documentation',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Key Areas</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Teaching Methodologies</li>
                <li>• Curriculum Development</li>
                <li>• Assessment & Evaluation</li>
                <li>• Research Standards</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Downloads</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Quality Policy</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Process Documents</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Case Studies</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
