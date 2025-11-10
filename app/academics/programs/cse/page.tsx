'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

const curriculum = [
  'Data Structures and Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Web Development',
  'Software Engineering',
  'Mobile Application Development',
  'Cloud Computing',
];

export default function CSEPage() {
  return (
    <ThreeSectionPage
      title="Computer Science & Engineering"
      subtitle="Building the future of software and computing technology"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              The Computer Science & Engineering program at NSRIET is designed to develop skilled software professionals who can solve real-world computational problems.
            </p>
            <p>
              Students gain expertise in programming, software design, and computer systems while working on industry-relevant projects and research initiatives.
            </p>
            <p>
              <strong>Program Duration:</strong> 4 years (8 semesters)
              <br />
              <strong>Intake:</strong> 120 students
              <br />
              <strong>Accreditation:</strong> AICTE approved, NBA accredited
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Curriculum Highlights',
        content: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">
                Core Subjects
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {curriculum.map((subject) => (
                  <div key={subject} className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <span className="text-corporate-blue font-bold mt-1">✓</span>
                    <span className="text-corporate-navy dark:text-gray-200 font-medium">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-3">
                Learning Outcomes
              </h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Proficiency in multiple programming languages and frameworks</li>
                <li>• Understanding of software development lifecycle and best practices</li>
                <li>• Ability to design scalable and secure systems</li>
                <li>• Problem-solving skills for complex computational challenges</li>
              </ul>
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Career & Resources',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">
                Career Opportunities
              </h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Software Developer</li>
                <li>• Full Stack Engineer</li>
                <li>• Data Scientist</li>
                <li>• Cloud Architect</li>
                <li>• Systems Engineer</li>
                <li>• DevOps Engineer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">
                Downloads & Links
              </h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">
                  📄 Program Syllabus
                </a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">
                  📄 Faculty Directory
                </a>
                <a href="/cdc" className="block text-corporate-blue hover:underline font-medium">
                  👥 CDC Placements
                </a>
                <a href="/academics/resources" className="block text-corporate-blue hover:underline font-medium">
                  📚 Learning Resources
                </a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
