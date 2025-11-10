'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function MBAPage() {
  return (
    <ThreeSectionPage
      title="Master of Business Administration"
      subtitle="Build leadership skills for the modern business world"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              The MBA program at NSRIET is designed for engineering professionals and graduates seeking business management expertise.
            </p>
            <p>
              The program combines business fundamentals with technology management, preparing graduates for leadership roles in diverse industries.
            </p>
            <p>
              <strong>Program Duration:</strong> 2 years (4 semesters) | <strong>Intake:</strong> 60 students | <strong>Specializations:</strong> Operations, Finance, Marketing, Technology Management
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Curriculum Highlights',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Management Fundamentals',
                'Financial Management',
                'Marketing Management',
                'Operations Management',
                'Strategic Management',
                'Business Analytics',
                'Organizational Behavior',
                'Technology Management',
                'Entrepreneurship',
                'Corporate Governance',
              ].map((subject) => (
                <div key={subject} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-corporate-blue font-bold">✓</span>
                  <span className="text-corporate-navy dark:text-gray-200 font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Career & Resources',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Career Paths</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Management Consultant</li>
                <li>• Operations Manager</li>
                <li>• Financial Analyst</li>
                <li>• Product Manager</li>
                <li>• Business Analyst</li>
                <li>• Entrepreneur</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Program Brochure</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Faculty Profiles</a>
                <a href="/cdc/placements" className="block text-corporate-blue hover:underline font-medium">👥 Alumni Network</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📚 Case Studies</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
