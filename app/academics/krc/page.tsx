'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function ResourcesPage() {
  return (
    <ThreeSectionPage
      title="Knowledge Resource Centre"
      subtitle="Comprehensive academic and learning resources for students"
      section1={{
        title: 'Resource Overview',
        content: (
          <div className="space-y-4">
            <p>
              The Knowledge Resource Centre provides students and faculty with access to extensive academic materials, research papers, journals, and learning aids.
            </p>
            <p>
              Our resource collection is curated to support curriculum delivery and foster self-directed learning among students.
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
                'Digital Library & E-Books',
                'Research Journals & Papers',
                'Video Lectures & Tutorials',
                'Course Notes & Study Materials',
                'Online Certifications',
                'Industry Reports & Case Studies',
                'Simulation Software Access',
                'Open Educational Resources (OER)',
              ].map((resource) => (
                <div key={resource} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-corporate-blue font-bold">📚</span>
                  <span className="text-corporate-navy dark:text-gray-200 font-medium">{resource}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Access Information',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Digital Platforms</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Central Library Portal</li>
                <li>• NPTEL Course Library</li>
                <li>• Coursera for Campus</li>
                <li>• IEEE Xplore</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Support & Access</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">🔗 Digital Library Portal</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📖 Resource Guide</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">💬 Librarian Support</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">❓ Access Credentials</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
