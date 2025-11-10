'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function NadimalliInformaticsPage() {
  return (
    <ThreeSectionPage
      title="Nadimpalli Informatics LLP"
      subtitle="The founding organization behind NSRIET"
      section1={{
        title: 'About the Organization',
        content: (
          <div className="space-y-4">
            <p>
              Nadimpalli Informatics LLP is the parent organization that established and continues to support NSRIET&apos;s mission of providing quality engineering education.
            </p>
            <p>
              Founded with a commitment to education and technology, the organization operates multiple educational institutions dedicated to developing skilled professionals.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Vision & Values',
        content: (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-4">Core Values</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Excellence', desc: 'Commitment to quality in all endeavors' },
                  { title: 'Innovation', desc: 'Fostering creativity and new ideas' },
                  { title: 'Integrity', desc: 'Ethical practices in all operations' },
                  { title: 'Inclusivity', desc: 'Equal opportunities for all stakeholders' },
                ].map((value) => (
                  <div key={value.title} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-corporate-navy dark:text-white mb-2">{value.title}</h4>
                    <p className="text-sm text-corporate-textSecondary dark:text-gray-400">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Institutional Network & Contact',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Associated Institutions</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• NSRIET - Engineering College</li>
                <li>• School of Management & Business</li>
                <li>• Professional Development Centre</li>
                <li>• Research & Innovation Hub</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Connect With Us</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">🌐 Organization Website</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📧 Corporate Email</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📞 Contact Information</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Corporate Profile</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
