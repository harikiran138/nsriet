'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function LMSPage() {
  return (
    <ThreeSectionPage
      title="Learning Management System"
      subtitle="Digital platform for seamless learning and collaboration"
      section1={{
        title: 'LMS Overview',
        content: (
          <div className="space-y-4">
            <p>
              Our Learning Management System (LMS) provides a comprehensive digital platform for course delivery, student-faculty interaction, and academic resource management.
            </p>
            <p>
              The LMS facilitates both synchronous and asynchronous learning, enabling students to access course materials, submit assignments, take assessments, and communicate with instructors anytime, anywhere.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Key Features & Capabilities',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Course Content Management',
                'Interactive Quizzes & Tests',
                'Assignment Submission',
                'Grade Tracking',
                'Discussion Forums',
                'Live Virtual Classes',
                'Resource Library',
                'Progress Analytics',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-corporate-blue font-bold">✓</span>
                  <span className="text-corporate-navy dark:text-gray-200 font-medium">{feature}</span>
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
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Getting Started</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Login using institutional credentials</li>
                <li>• Enroll in registered courses</li>
                <li>• Access course materials and assignments</li>
                <li>• Participate in online discussions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Support Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">🔗 LMS Portal Login</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📖 User Guide</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">💬 Technical Support</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">❓ FAQ</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
