'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function CampusLifePage() {
  return (
    <ThreeSectionPage
      title="Campus Life"
      subtitle="Vibrant student life beyond the classroom"
      section1={{
        title: 'Life at NSRIET',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET offers a rich campus experience with diverse activities, clubs, sports, and cultural events that complement academic learning.
            </p>
            <p>
              Students have opportunities to develop leadership skills, build friendships, and create lasting memories through various campus activities.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Campus Activities & Facilities',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Technical Clubs & Interest Groups',
                'Cultural & Literary Events',
                'Sports & Recreation',
                'Hostel Facilities',
                'Canteen & Food Courts',
                'Library & Study Areas',
                'Auditorium & Event Spaces',
                'Computer & Gaming Labs',
                'Cafeteria & Recreation Zone',
                'Medical Centre',
              ].map((activity) => (
                <div key={activity} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-corporate-blue font-bold">✓</span>
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
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Student Organizations</h3>
              <ul className="space-y-2">
                <li><a href="/quick-links/clubs" className="text-corporate-blue hover:underline font-medium">Technical Clubs</a></li>
                <li><a href="/quick-links/nss" className="text-corporate-blue hover:underline font-medium">NSS - Social Service</a></li>
                <li><a href="#" className="text-corporate-blue hover:underline font-medium">Sports Committee</a></li>
                <li><a href="#" className="text-corporate-blue hover:underline font-medium">Cultural Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Resources & Gallery</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">🎬 Campus Photo Gallery</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📹 Campus Videos</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📅 Event Calendar</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 Club Registration</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
