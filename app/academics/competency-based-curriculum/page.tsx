'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function CurriculumPage() {
  return (
    <ThreeSectionPage
      title="Competency Based Curriculum"
      subtitle="Education focused on developing practical skills and competencies"
      section1={{
        title: 'Curriculum Framework',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET follows a competency-based curriculum approach that aligns with industry requirements and international standards.
            </p>
            <p>
              Our curriculum is regularly updated in consultation with industry experts to ensure students acquire relevant knowledge and skills for the job market.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Key Features',
        content: (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Skill-Focused', desc: 'Emphasis on practical skills and industry-relevant competencies' },
                { title: 'Industry-Aligned', desc: 'Curriculum designed with input from industry partners' },
                { title: 'Flexible Pathways', desc: 'Multiple specialization options and electives' },
                { title: 'Project-Based Learning', desc: 'Hands-on projects integrated throughout programs' },
              ].map((feature) => (
                <div key={feature.title} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Implementation & Resources',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Learning Outcomes</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Technical expertise in chosen discipline</li>
                <li>• Problem-solving and analytical skills</li>
                <li>• Communication and teamwork abilities</li>
                <li>• Continuous learning mindset</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Documentation</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Curriculum Documents</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Outcome Mapping</a>
                <a href="/academics/resources" className="block text-corporate-blue hover:underline font-medium">📚 Teaching Resources</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
