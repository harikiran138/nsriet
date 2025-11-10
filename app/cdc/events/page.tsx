'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function AnnouncementsPage() {
  return (
    <ThreeSectionPage
      title="Announcements & Events"
      subtitle="Stay updated with CDC news and upcoming activities"
      section1={{
        title: 'Latest Updates',
        content: (
          <div className="space-y-4">
            <p>
              This page provides regular updates on CDC events, recruitment drives, workshops, and other important announcements.
            </p>
            <p>
              Subscribe to our notifications to never miss important career-related news and opportunities.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Upcoming Events',
        content: (
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { date: 'December 15, 2024', title: 'Campus Placement Drive', type: 'Placements' },
                { date: 'December 20, 2024', title: 'Industry Interaction Session - Tech Giants', type: 'Workshop' },
                { date: 'January 10, 2025', title: 'Resume Writing Workshop', type: 'Training' },
                { date: 'January 15, 2025', title: 'Interview Preparation Program', type: 'Training' },
                { date: 'February 1, 2025', title: 'Internship Drive - Software Companies', type: 'Recruitment' },
              ].map((event) => (
                <div key={event.title} className="border-l-4 border-corporate-blue bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <p className="text-sm font-bold text-corporate-blue uppercase">{event.type}</p>
                  <h3 className="text-lg font-bold text-corporate-navy dark:text-white mt-2">{event.title}</h3>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400 mt-1">📅 {event.date}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Subscribe & Connect',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Stay Informed</h3>
              <p className="text-corporate-navy dark:text-gray-200 mb-4">
                Subscribe to get email notifications about placements, workshops, and events.
              </p>
              <a href="#" className="inline-block px-6 py-2 bg-corporate-blue text-white rounded-lg hover:opacity-90 font-medium">
                Subscribe Now
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📱 CDC on WhatsApp</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📘 CDC on Facebook</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📧 Email Notifications</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">🔗 LinkedIn Group</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
