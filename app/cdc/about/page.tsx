'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function CDCAboutPage() {
  return (
    <ThreeSectionPage
      title="Career Development Cell"
      subtitle="Empowering students for successful careers"
      section1={{
        title: 'CDC Mission & Overview',
        content: (
          <div className="space-y-4">
            <p>
              The Career Development Cell (CDC) is dedicated to preparing students for professional success through comprehensive career guidance, skill development, and placement support.
            </p>
            <p>
              We bridge the gap between academia and industry by providing students with industry exposure, technical training, and networking opportunities throughout their academic journey.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Services & Programs',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Career Counseling',
                'Skill Development Workshops',
                'Internship Opportunities',
                'Placement Training',
                'Industry Connect Sessions',
                'Resume & Interview Prep',
                'Higher Education Guidance',
                'Entrepreneurship Support',
              ].map((service) => (
                <div key={service} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-corporate-blue font-bold">✓</span>
                  <span className="text-corporate-navy dark:text-gray-200 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Contact & Resources',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/cdc/career-guidance" className="text-corporate-blue hover:underline font-medium">Career Guidance & Counseling</a></li>
                <li><a href="/cdc/skills" className="text-corporate-blue hover:underline font-medium">Skill Development</a></li>
                <li><a href="/cdc/internships" className="text-corporate-blue hover:underline font-medium">Internships</a></li>
                <li><a href="/cdc/placements" className="text-corporate-blue hover:underline font-medium">Placements</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Contact CDC</h3>
              <div className="space-y-2">
                <p className="text-corporate-navy dark:text-gray-200">📞 Phone: +91-XXXX-XXXX</p>
                <p className="text-corporate-navy dark:text-gray-200">📧 Email: cdc@nsriet.edu.in</p>
                <p className="text-corporate-navy dark:text-gray-200">🏢 Office: Building A, Ground Floor</p>
                <a href="/cdc/contact" className="text-corporate-blue hover:underline font-medium">Full Contact Details</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
