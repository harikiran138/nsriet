'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { TrendingUp, Phone } from 'lucide-react';

export default function CDCPage() {
  return (
    <ThreeSectionPage
      title="Career Development Cell (CDC)"
      subtitle="Your bridge to a successful career"
      section1={{
        title: 'Overview',
        content: (
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
              The Career Development Cell (CDC) at NSRIET is dedicated to empowering students with the skills, guidance, and opportunities needed to build successful careers. We work closely with students and industry partners to facilitate a smooth transition from academia to the professional world.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Initiatives / Activities',
        content: (
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
              We offer a wide range of initiatives, including technical skills development, soft skills training, aptitude and reasoning workshops, and industry certification programs. Our goal is to equip students with a well-rounded skillset that meets the demands of the modern job market.
            </p>
          </div>
        ),
      }}
      section3={{
        title: 'Achievements / Contact',
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <TrendingUp className="w-8 h-8 text-corporate-blue" />
              <div>
                <h4 className="font-bold text-corporate-navy dark:text-white">92% Placement Rate</h4>
                <p className="text-corporate-textSecondary dark:text-gray-400">in the 2023-24 academic year.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-corporate-blue" />
              <div>
                <h4 className="font-bold text-corporate-navy dark:text-white">Contact Us</h4>
                <p className="text-corporate-textSecondary dark:text-gray-400">cdc@nsriet.edu.in</p>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
