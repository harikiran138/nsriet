'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function CSEAIMLPage() {
  return (
    <ThreeSectionPage
      title="CSE - Artificial Intelligence & Machine Learning"
      subtitle="Specialize in the most in-demand technology of tomorrow"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              The CSE (AI & ML) program is a specialized undergraduate course designed to prepare students for careers in artificial intelligence and machine learning engineering.
            </p>
            <p>
              This program combines core computer science fundamentals with advanced concepts in AI, machine learning, deep learning, and data science, preparing graduates for emerging technology industries.
            </p>
            <p>
              <strong>Program Duration:</strong> 4 years (8 semesters)
              <br />
              <strong>Intake:</strong> 60 students
              <br />
              <strong>Focus:</strong> AI, Machine Learning, Deep Learning, NLP, Computer Vision
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Specialization Curriculum',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-4">
                  Core AI/ML Courses
                </h3>
                <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                  <li>• Machine Learning Fundamentals</li>
                  <li>• Deep Learning & Neural Networks</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Reinforcement Learning</li>
                  <li>• Advanced Data Analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-4">
                  Supporting Subjects
                </h3>
                <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                  <li>• Advanced Mathematics</li>
                  <li>• Statistical Analysis</li>
                  <li>• Data Engineering</li>
                  <li>• Python & R Programming</li>
                  <li>• Big Data Technologies</li>
                  <li>• AI Ethics & Responsible AI</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-3">
                Practical Experience
              </h3>
              <p className="text-corporate-navy dark:text-gray-200 mb-3">
                Students work on real-world AI/ML projects including:
              </p>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Capstone AI projects with industry partners</li>
                <li>• Internships at tech companies</li>
                <li>• AI/ML competitions and hackathons</li>
                <li>• Research publications in peer-reviewed journals</li>
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
                Career Paths
              </h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Machine Learning Engineer</li>
                <li>• AI Research Scientist</li>
                <li>• Data Scientist</li>
                <li>• AI Systems Architect</li>
                <li>• NLP Specialist</li>
                <li>• Computer Vision Engineer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">
                Resources & Links
              </h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">
                  📄 Program Specification Sheet
                </a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">
                  📄 Research & Projects
                </a>
                <a href="/cdc/placements" className="block text-corporate-blue hover:underline font-medium">
                  👥 Placement Statistics
                </a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">
                  📚 AI/ML Lab Resources
                </a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
