'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function CalendarPage() {
  return (
    <ThreeSectionPage
      title="Academic Calendar"
      subtitle="Important dates and academic schedule for the current year"
      section1={{
        title: 'Current Academic Year',
        content: (
          <div className="space-y-4">
            <p>
              The academic calendar outlines all important dates, including semester start and end dates, examination schedules, and institutional holidays.
            </p>
            <p>
              Students, faculty, and staff should refer to this calendar for planning their academic and administrative activities.
            </p>
            <p className="font-bold text-corporate-navy dark:text-white">Academic Year: 2024-2025</p>
          </div>
        ),
      }}
      section2={{
        title: 'Schedule Overview',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                <h3 className="font-bold text-corporate-navy dark:text-white mb-3">Semester I</h3>
                <ul className="space-y-2 text-sm text-corporate-navy dark:text-gray-200">
                  <li><strong>Start Date:</strong> August 1, 2024</li>
                  <li><strong>Mid-Term:</strong> September 15-20, 2024</li>
                  <li><strong>End Date:</strong> November 30, 2024</li>
                  <li><strong>Exams:</strong> December 1-15, 2024</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                <h3 className="font-bold text-corporate-navy dark:text-white mb-3">Semester II</h3>
                <ul className="space-y-2 text-sm text-corporate-navy dark:text-gray-200">
                  <li><strong>Start Date:</strong> January 1, 2025</li>
                  <li><strong>Mid-Term:</strong> February 10-15, 2025</li>
                  <li><strong>End Date:</strong> April 15, 2025</li>
                  <li><strong>Exams:</strong> April 20-May 5, 2025</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Resources & Downloads',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Important Dates</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Fresher Induction: July 20-25, 2024</li>
                <li>• Independence Day: August 15, 2024</li>
                <li>• Diwali Holiday: October 31-Nov 2, 2024</li>
                <li>• Republic Day: January 26, 2025</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Downloads</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Full Academic Calendar</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Exam Schedule</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Holiday List</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Fee Schedule</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
