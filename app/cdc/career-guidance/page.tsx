'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function CareerGuidancePage() {
  return (
    <ThreeSectionPage
      title="Career Guidance & Counseling"
      subtitle="Personalized career direction for your future"
      section1={{
        title: 'Guidance Program',
        content: (
          <div className="space-y-4">
            <p>
              Our career guidance program provides personalized mentoring to help students explore career options, identify their strengths, and plan their professional trajectory.
            </p>
            <p>
              Through one-on-one counseling sessions, group workshops, and career exploration activities, we help students make informed decisions about their career path.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Guidance Services',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Career Counseling', desc: 'One-on-one sessions to explore career interests and opportunities' },
                { title: 'Aptitude Testing', desc: 'Psychometric assessments to identify strengths and career fit' },
                { title: 'Career Workshops', desc: 'Group sessions on career planning and professional development' },
                { title: 'Industry Exposure', desc: 'Guest lectures and industry immersion programs' },
                { title: 'Alumni Mentoring', desc: 'Learn from successful alumni in your field' },
                { title: 'Resource Library', desc: 'Career guides, job boards, and industry information' },
              ].map((service) => (
                <div key={service.title} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Booking & Resources',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">How to Get Started</h3>
              <ol className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>1. Register on the CDC portal</li>
                <li>2. Complete career aptitude test</li>
                <li>3. Book a counseling session</li>
                <li>4. Receive personalized guidance</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Access Portal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">🔗 CDC Portal Login</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 Appointment Form</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📚 Career Resources</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📞 Call/Email CDC</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
