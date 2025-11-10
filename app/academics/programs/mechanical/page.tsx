'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function MechanicalPage() {
  return (
    <ThreeSectionPage
      title="Mechanical Engineering"
      subtitle="Design and innovate the machines of the future"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              The Mechanical Engineering program develops engineers capable of designing, analyzing, manufacturing, and improving mechanical systems and devices.
            </p>
            <p>
              Students learn thermodynamics, fluid mechanics, machine design, and manufacturing processes through theory, simulations, and hands-on project work.
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
                'Thermodynamics & Heat Transfer',
                'Fluid Mechanics',
                'Machine Design',
                'Manufacturing Technology',
                'CAD & Simulation',
                'Mechanics of Materials',
                'Mechanical Vibrations',
                'Renewable Energy Systems',
                'Industrial Engineering',
                'Robotics & Automation',
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
                <li>• Mechanical Design Engineer</li>
                <li>• Manufacturing Engineer</li>
                <li>• Robotics Engineer</li>
                <li>• Automotive Engineer</li>
                <li>• Thermal Engineer</li>
                <li>• Process Engineer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Program Overview</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 CAD Labs</a>
                <a href="/cdc/placements" className="block text-corporate-blue hover:underline font-medium">👥 Placements</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📚 Project Gallery</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
