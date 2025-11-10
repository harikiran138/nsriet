'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function PlacementsPage() {
  return (
    <ThreeSectionPage
      title="Placements"
      subtitle="Career success stories and comprehensive placement support"
      section1={{
        title: 'Placement Overview',
        content: (
          <div className="space-y-6">
            <p className="text-lg text-corporate-textSecondary dark:text-gray-400 leading-relaxed">
              NSRIET has established a stellar track record in placements with over 90% of graduates securing employment within 6 months. Our strong industry partnerships and career development initiatives ensure students are well-prepared for professional roles.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { stat: '90%+', label: 'Placement Rate' },
                { stat: '50+', label: 'Industry Partners' },
                { stat: '6-8 LPA', label: 'Avg Package' },
                { stat: '18 LPA', label: 'Highest Package' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                  <div className="text-3xl font-bold text-corporate-blue mb-2">{item.stat}</div>
                  <p className="text-xs text-corporate-navy dark:text-white font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section2={{
        title: 'Recruiting Companies',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { category: 'IT & Software', companies: 'TCS, Infosys, Wipro, HCL, Cognizant, IBM, Accenture' },
                { category: 'Tech Giants', companies: 'Google, Microsoft, Amazon, Apple, Intel, Qualcomm' },
                { category: 'Automobiles', companies: 'Maruti, Hyundai, BMW, Daimler, TVS, Hero' },
                { category: 'Finance', companies: 'Goldman Sachs, JP Morgan, ICICI Bank, HDFC Bank' },
                { category: 'Startups', companies: 'Multiple promising startups and emerging tech companies' },
                { category: 'Government', companies: 'Defence, Railways, ISRO, BHEL, NTPC' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h4 className="font-bold text-corporate-navy dark:text-white mb-2 text-sm">{item.category}</h4>
                  <p className="text-xs text-corporate-textSecondary dark:text-gray-400">{item.companies}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Placement Support Process',
        content: (
          <div className="space-y-4">
            {[
              { phase: 'Pre-Placement', activities: 'Resume building, interview coaching, aptitude training' },
              { phase: 'Company Selection', activities: 'Job notifications, pre-placement talks, company research' },
              { phase: 'Placement Drives', activities: 'On-campus & off-campus recruitment' },
              { phase: 'Post-Placement', activities: 'Offer letter support, joining assistance' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border-l-4 border-l-corporate-blue">
                <h4 className="font-semibold text-corporate-navy dark:text-white mb-1">{item.phase}</h4>
                <p className="text-sm text-corporate-textSecondary dark:text-gray-400">{item.activities}</p>
              </div>
            ))}
          </div>
        ),
      }}
    />
  );
}
