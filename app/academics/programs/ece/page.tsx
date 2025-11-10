'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function ECEPage() {
  return (
    <ThreeSectionPage
      title="Electronics & Communication Engineering"
      subtitle="Master the art of wireless and communication technologies"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              The ECE program focuses on design, development, and optimization of electronic and communication systems.
            </p>
            <p>
              Students learn about signal processing, wireless communications, microelectronics, and embedded systems through hands-on laboratory work and industry projects.
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
                'Digital Electronics',
                'Microprocessors & Microcontrollers',
                'Signals & Systems',
                'Communication Theory',
                'Wireless Communications',
                'RF & Microwave Engineering',
                'VLSI Design',
                'Embedded Systems',
                'Network Protocols',
                'IoT Systems',
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
                <li>• RF Engineer</li>
                <li>• VLSI Design Engineer</li>
                <li>• Embedded Systems Engineer</li>
                <li>• Telecom Network Engineer</li>
                <li>• IoT Developer</li>
                <li>• Signal Processing Specialist</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Program Syllabus</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Lab Facilities</a>
                <a href="/cdc/placements" className="block text-corporate-blue hover:underline font-medium">👥 Placements</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📚 Research Papers</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
