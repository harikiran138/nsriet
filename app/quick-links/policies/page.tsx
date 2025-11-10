'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function PoliciesPage() {
  return (
    <ThreeSectionPage
      title="Institution Policy Documents"
      subtitle="Policies, guidelines, and regulations for institutional governance"
      section1={{
        title: 'Policy Framework',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET has comprehensive policy documents that govern all aspects of institutional operations, from academics to administration.
            </p>
            <p>
              These policies are designed to ensure transparency, fairness, quality, and adherence to regulatory standards.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Key Policy Documents',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Academic Policies', desc: 'Course structure, assessment, and grading policies' },
                { title: 'Admission Policies', desc: 'Eligibility, selection, and enrollment procedures' },
                { title: 'Fee Policy', desc: 'Fee structure, payment terms, and refund policy' },
                { title: 'Conduct & Discipline', desc: 'Student conduct rules and disciplinary procedures' },
                { title: 'Anti-Harassment Policy', desc: 'Zero-tolerance policy for harassment' },
                { title: 'Grievance Policy', desc: 'Complaint resolution procedures' },
                { title: 'Research Policy', desc: 'Research ethics and intellectual property' },
                { title: 'Quality Assurance', desc: 'Quality frameworks and accreditation standards' },
              ].map((policy) => (
                <div key={policy.title} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white mb-2">{policy.title}</h3>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400">{policy.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Downloads & Information',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-corporate-blue hover:underline font-medium">📄 Academic Handbook</a></li>
                <li><a href="#" className="text-corporate-blue hover:underline font-medium">📄 Student Conduct Manual</a></li>
                <li><a href="#" className="text-corporate-blue hover:underline font-medium">📄 Hostel Rules</a></li>
                <li><a href="#" className="text-corporate-blue hover:underline font-medium">📄 Code of Ethics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Additional Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 All Policy Documents</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">🔍 Search Policies</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">💬 Request Policy Copy</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📞 Policy Clarification</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
