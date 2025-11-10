'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function ClubsPage() {
  return (
    <ThreeSectionPage
      title="Clubs & Societies"
      subtitle="Student-led organizations for learning and growth"
      section1={{
        title: 'Club Overview',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET hosts numerous student clubs and societies that cater to diverse interests including technology, arts, sports, and social causes.
            </p>
            <p>
              These organizations provide platforms for students to network, develop skills, and pursue their passions outside the classroom.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Active Clubs & Societies',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Robotics Club', interest: 'Robotics & Automation' },
                { name: 'AI & ML Society', interest: 'Artificial Intelligence' },
                { name: 'Web Development Club', interest: 'Web Technologies' },
                { name: 'Photography Club', interest: 'Visual Arts' },
                { name: 'Debate Society', interest: 'Communication' },
                { name: 'Literary Club', interest: 'Writing & Literature' },
                { name: 'Sports Committee', interest: 'Athletics' },
                { name: 'Cultural Society', interest: 'Arts & Culture' },
              ].map((club) => (
                <div key={club.name} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white mb-2">{club.name}</h3>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400">Interest: {club.interest}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Join & Participate',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">How to Join</h3>
              <ol className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>1. Browse available clubs</li>
                <li>2. Attend club meeting</li>
                <li>3. Fill membership form</li>
                <li>4. Start participating</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 All Clubs Directory</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📅 Club Events Calendar</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📝 Membership Form</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">💬 Contact Club Heads</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
