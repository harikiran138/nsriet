'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function InternshipsPage() {
  return (
    <ThreeSectionPage
      title="Internships & Apprenticeships"
      subtitle="Gain real-world experience with leading organizations"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              Internship and apprenticeship programs provide students with hands-on industry experience, allowing them to apply academic knowledge in real-world scenarios.
            </p>
            <p>
              We have partnerships with leading companies across various sectors, offering diverse internship opportunities during summer and winter breaks.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Internship Details',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { type: 'Summer Internship', duration: '6-8 weeks', when: 'April-May' },
                { type: 'Winter Internship', duration: '4-6 weeks', when: 'December-January' },
                { type: 'Long-term Internship', duration: '3-6 months', when: 'Throughout year' },
                { type: 'Apprenticeship', duration: 'Variable', when: 'Post-graduation' },
              ].map((program) => (
                <div key={program.type} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white mb-2">{program.type}</h3>
                  <p className="text-sm text-corporate-navy dark:text-gray-300"><strong>Duration:</strong> {program.duration}</p>
                  <p className="text-sm text-corporate-navy dark:text-gray-300"><strong>When:</strong> {program.when}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Apply & Resources',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Industry Partners</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• TCS, Infosys, Cognizant</li>
                <li>• Accenture, Tech Mahindra</li>
                <li>• Automotive: TATA, Mahindra</li>
                <li>• Startups & SMEs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Application Process</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 Available Opportunities</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📝 Application Form</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Guidelines & Terms</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📞 Contact CDC</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
