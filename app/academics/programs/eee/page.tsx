'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function EEEPage() {
  return (
    <ThreeSectionPage
      title="Electrical & Electronics Engineering"
      subtitle="Powering tomorrow's infrastructure and innovation"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              The EEE program prepares engineers for designing, developing, and maintaining electrical power systems and electronic devices.
            </p>
            <p>
              Students gain expertise in power systems, renewable energy, industrial automation, and control systems through comprehensive theoretical and practical training.
            </p>
            <p>
              <strong>Program Duration:</strong> 4 years (8 semesters) | <strong>Intake:</strong> 120 students | <strong>Accreditation:</strong> AICTE approved, NBA accredited
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
                'Power Systems & Distribution',
                'Electrical Machines',
                'Power Electronics',
                'Control Systems',
                'Renewable Energy Engineering',
                'Industrial Automation',
                'High Voltage Engineering',
                'Smart Grids',
                'Power Quality Analysis',
                'Electrical Safety',
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
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Career Opportunities</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Power Systems Engineer</li>
                <li>• Renewable Energy Specialist</li>
                <li>• Automation Engineer</li>
                <li>• Electrical Design Engineer</li>
                <li>• Smart Grid Specialist</li>
                <li>• Energy Consultant</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Program Details</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Lab Facilities</a>
                <a href="/cdc/placements" className="block text-corporate-blue hover:underline font-medium">👥 Placements</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📚 Research Labs</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
