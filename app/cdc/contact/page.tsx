'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function CDCContactPage() {
  return (
    <ThreeSectionPage
      title="Contact CDC"
      subtitle="Get in touch with our career development team"
      section1={{
        title: 'Contact Information',
        content: (
          <div className="space-y-4">
            <p>
              Reach out to the Career Development Cell for queries about placements, career guidance, internships, and other services.
            </p>
            <p>
              Our team is available to assist you with all your career-related concerns and opportunities.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Office Details',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: 'Phone', value: '+91-XXXX-XXXX-XXX' },
                { label: 'Email', value: 'cdc@nsriet.edu.in' },
                { label: 'Office Location', value: 'Building A, Ground Floor, NSRIET Campus' },
                { label: 'Working Hours', value: 'Monday-Friday: 9:00 AM - 5:00 PM' },
              ].map((contact) => (
                <div key={contact.label} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <p className="text-sm font-bold text-corporate-blue uppercase">{contact.label}</p>
                  <p className="text-corporate-navy dark:text-white mt-2 font-medium">{contact.value}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Get In Touch',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">CDC Team</h3>
              <ul className="space-y-3 text-corporate-navy dark:text-gray-200">
                <li>
                  <strong>Head - CDC:</strong> Dr. [Name]
                  <br />
                  <span className="text-sm">Email: [email]</span>
                </li>
                <li>
                  <strong>Placement Coordinator:</strong> [Name]
                  <br />
                  <span className="text-sm">Email: [email]</span>
                </li>
                <li>
                  <strong>Career Counselor:</strong> [Name]
                  <br />
                  <span className="text-sm">Email: [email]</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Contact Channels</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📧 Send Email</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 Book Appointment</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">💬 WhatsApp Chat</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📍 Visit Office</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
