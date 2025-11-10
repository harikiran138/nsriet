'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function ManagementPage() {
  return (
    <ThreeSectionPage
      title="Management"
      subtitle="Guided by experienced administrators and educational leaders"
      section1={{
        title: 'Administrative Leadership',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET is led by a team of experienced administrators and educational professionals committed to institutional excellence and student success.
            </p>
            <p>
              Our management structure ensures efficient operations while maintaining focus on academic quality, research advancement, and student welfare.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Governance Structure',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { role: 'Principal', name: 'Dr. [Name]', qualification: 'PhD, 25+ years of experience' },
                { role: 'Vice Principal (Academic)', name: 'Dr. [Name]', qualification: 'PhD in Engineering' },
                { role: 'Registrar', name: '[Name]', qualification: 'M.Tech, 15+ years of experience' },
                { role: 'Finance Officer', name: '[Name]', qualification: 'CA, MBA' },
              ].map((member) => (
                <div key={member.role} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white">{member.role}</h3>
                  <p className="text-sm text-corporate-navy dark:text-gray-300 mt-2">{member.name}</p>
                  <p className="text-xs text-corporate-textSecondary dark:text-gray-400 mt-1">{member.qualification}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Contact & Policies',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Administrative Offices</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Principal&apos;s Office</li>
                <li>• Academic Office</li>
                <li>• Admissions Office</li>
                <li>• Finance & Accounts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Important Documents</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Organizational Chart</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Management Policies</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Contact Directory</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
