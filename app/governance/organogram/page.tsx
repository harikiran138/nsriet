'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function OrganogramPage() {
  return (
    <ThreeSectionPage
      title="Organizational Structure"
      subtitle="Governance and administrative hierarchy"
      section1={{
        title: 'Organizational Overview',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET follows a well-defined organizational structure ensuring efficient administration, academic excellence, and student welfare.
            </p>
            <p>
              Our governance model emphasizes transparency, accountability, and participatory decision-making across all levels.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Organizational Hierarchy',
        content: (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="border-l-4 border-corporate-blue pl-4">
                  <h3 className="font-bold text-corporate-navy dark:text-white">Principal</h3>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400">Chief Executive & Academic Head</p>
                </div>
                <div className="ml-8 space-y-3">
                  <div className="border-l-4 border-blue-300 pl-4">
                    <h4 className="font-semibold text-corporate-navy dark:text-white">Vice Principal (Academic)</h4>
                    <p className="text-sm text-corporate-textSecondary dark:text-gray-400">Academics & Curriculum</p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <h4 className="font-semibold text-corporate-navy dark:text-white">Vice Principal (Admin)</h4>
                    <p className="text-sm text-corporate-textSecondary dark:text-gray-400">Administration & Student Affairs</p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <h4 className="font-semibold text-corporate-navy dark:text-white">Registrar</h4>
                    <p className="text-sm text-corporate-textSecondary dark:text-gray-400">Records & Administration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Department Heads & Contacts',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Main Departments</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Computer Science & Engineering</li>
                <li>• Electronics & Communication</li>
                <li>• Electrical & Electronics</li>
                <li>• Mechanical Engineering</li>
                <li>• Management & Commerce</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Full Organogram</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 Department Directory</a>
                <a href="/governance/governing-body" className="block text-corporate-blue hover:underline font-medium">👥 Governing Body</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📞 Contact Directory</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
