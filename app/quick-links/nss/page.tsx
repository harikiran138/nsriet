'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function NSSPage() {
  return (
    <ThreeSectionPage
      title="National Service Scheme (NSS)"
      subtitle="Serving society, building character and citizenship"
      section1={{
        title: 'NSS Overview',
        content: (
          <div className="space-y-4">
            <p>
              The National Service Scheme (NSS) at NSRIET provides students with opportunities to engage in community service and contribute to social development.
            </p>
            <p>
              Through NSS, students develop a sense of social responsibility, learn civic values, and contribute to nation-building activities.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Activities & Programs',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Community Health Camps',
                'Environmental Conservation',
                'Education for Underprivileged',
                'Disaster Relief Operations',
                'Adult Literacy Programs',
                'Skill Development Workshops',
                'Tree Plantation Drives',
                'Blood Donation Camps',
              ].map((activity) => (
                <div key={activity} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-corporate-blue font-bold">🤝</span>
                  <span className="text-corporate-navy dark:text-gray-200 font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Get Involved',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Volunteering</h3>
              <p className="text-corporate-navy dark:text-gray-200 mb-4">
                All students are encouraged to participate in NSS activities and contribute to community service.
              </p>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Minimum 2 hours weekly</li>
                <li>• Various project options</li>
                <li>• Certificates & recognition</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Contact & Participate</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 NSS Registration</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📅 Upcoming Activities</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">👥 NSS Coordinators</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📖 NSS Handbook</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
