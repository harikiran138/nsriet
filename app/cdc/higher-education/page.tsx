'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function HigherEducationPage() {
  return (
    <ThreeSectionPage
      title="Higher Education Support"
      subtitle="Guiding you towards advanced academic opportunities"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              We provide comprehensive support to students pursuing higher education in India and abroad, including guidance on admissions, entrance exams, and scholarship opportunities.
            </p>
            <p>
              Our team assists students in preparing for competitive exams and connects them with leading universities and research institutions.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Support Services',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Entrance Exam Guidance (GATE, CAT, GRE, GMAT)',
                'University Selection & Application',
                'Scholarship Information & Application',
                'Research Opportunity Identification',
                'Interview Preparation',
                'Letter of Recommendation Support',
                'Study Abroad Guidance',
                'Visa Assistance Resources',
              ].map((service) => (
                <div key={service} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-corporate-blue font-bold">✓</span>
                  <span className="text-corporate-navy dark:text-gray-200 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Resources & Assistance',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Exam Preparation</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• GATE Study Material</li>
                <li>• GRE/GMAT Resources</li>
                <li>• CAT Preparation</li>
                <li>• Mock Tests & Practice</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Get Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📚 Resource Portal</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 University Database</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">💬 Schedule Counseling</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📞 Contact CDC</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
