'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function CDCResourcesPage() {
  return (
    <ThreeSectionPage
      title="Resources & Support"
      subtitle="Tools and materials to support your career development"
      section1={{
        title: 'Resource Overview',
        content: (
          <div className="space-y-4">
            <p>
              The CDC provides comprehensive resources including guides, templates, databases, and tools to support your career development journey.
            </p>
            <p>
              All resources are accessible online and updated regularly with current industry information and best practices.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Available Resources',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Resume & Cover Letter Templates',
                'Interview Question Bank',
                'Industry Research Reports',
                'Job Portal Access',
                'LinkedIn Profile Optimization',
                'Professional Certification Guides',
                'Salary Database & Trends',
                'Company Profiles & Reviews',
              ].map((resource) => (
                <div key={resource} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-corporate-blue font-bold">📁</span>
                  <span className="text-corporate-navy dark:text-gray-200 font-medium">{resource}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Access & Support',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Resource Categories</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Career Planning Tools</li>
                <li>• Application Materials</li>
                <li>• Industry Information</li>
                <li>• Professional Development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Access Portal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">🔗 CDC Resource Hub</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📚 Library of Resources</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">🔍 Search Tools</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">💬 Request Resources</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
