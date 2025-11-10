'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function SkillsPage() {
  return (
    <ThreeSectionPage
      title="Skill Development & Training"
      subtitle="Comprehensive programs to enhance student competencies and professional skills"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-6">
            <p className="text-lg text-corporate-textSecondary dark:text-gray-400 leading-relaxed">
              CDC conducts regular skill development programs covering technical expertise, communication skills, and professional competencies. Our structured workshops and trainings prepare students for competitive industry environments.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { count: '50+', label: 'Annual Workshops' },
                { count: '1000+', label: 'Students Trained' },
                { count: '20+', label: 'Skill Areas' },
              ].map((stat, idx) => (
                <div key={idx} className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                  <div className="text-2xl font-bold text-corporate-blue mb-1">{stat.count}</div>
                  <p className="text-xs text-corporate-navy dark:text-white font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section2={{
        title: 'Training Modules',
        content: (
          <div className="space-y-4">
            {[
              { category: 'Technical Skills', skills: ['Programming Languages', 'Data Structures', 'Web Development', 'Mobile Apps', 'Cloud Computing', 'AI/ML Basics'] },
              { category: 'Professional Skills', skills: ['Communication', 'Presentation', 'Leadership', 'Time Management', 'Decision Making', 'Conflict Resolution'] },
              { category: 'Certification Prep', skills: ['AWS Certification', 'Azure Cloud', 'CCNA', 'GCP Certification', 'Digital Marketing', 'SAP Basics'] },
            ].map((module, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-3 text-sm">{module.category}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {module.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-corporate-blue rounded-full"></span>
                      <span className="text-xs text-corporate-textSecondary dark:text-gray-400">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ),
      }}
      section3={{
        title: 'Training Delivery & Support',
        content: (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <h4 className="font-bold text-corporate-navy dark:text-white mb-4">Delivery Methods</h4>
              <ul className="space-y-2 text-corporate-textSecondary dark:text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  On-campus workshops
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  Online training modules
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  Industry expert sessions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  Hands-on lab sessions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  Self-paced learning
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <h4 className="font-bold text-corporate-navy dark:text-white mb-4">Program Features</h4>
              <ul className="space-y-2 text-corporate-textSecondary dark:text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  Certification upon completion
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  Resume-worthy credentials
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  Career guidance included
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                  Placement assistance
                </li>
              </ul>
            </div>
          </div>
        ),
      }}
    />
  );
}
