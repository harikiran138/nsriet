'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Building2, Award, BookOpen, Users, Calendar, Target, Briefcase } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useEffect, useState } from 'react';

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function CDCPage() {
  const statistics = [
    { label: 'Placement Rate', value: 92, suffix: '%', icon: <TrendingUp className="w-8 h-8" /> },
    { label: 'Companies Visited', value: 150, suffix: '+', icon: <Building2 className="w-8 h-8" /> },
    { label: 'Highest Package', value: 45, suffix: ' LPA', icon: <Award className="w-8 h-8" /> },
    { label: 'Average Package', value: 8, suffix: '.5 LPA', icon: <Target className="w-8 h-8" /> }
  ];

  const topRecruiters = [
    { name: 'Google', category: 'Technology', packages: '40-50 LPA' },
    { name: 'Microsoft', category: 'Technology', packages: '35-45 LPA' },
    { name: 'Amazon', category: 'E-commerce', packages: '30-42 LPA' },
    { name: 'TCS', category: 'IT Services', packages: '3.5-7 LPA' },
    { name: 'Infosys', category: 'IT Services', packages: '4-8 LPA' },
    { name: 'Wipro', category: 'IT Services', packages: '3.8-7.5 LPA' },
    { name: 'Accenture', category: 'Consulting', packages: '4.5-9 LPA' },
    { name: 'Deloitte', category: 'Consulting', packages: '6-12 LPA' },
    { name: 'Goldman Sachs', category: 'Finance', packages: '20-30 LPA' },
    { name: 'Morgan Stanley', category: 'Finance', packages: '18-28 LPA' },
    { name: 'Bosch', category: 'Engineering', packages: '5-10 LPA' },
    { name: 'L&T', category: 'Engineering', packages: '4-8 LPA' }
  ];

  const trainingPrograms = [
    {
      title: 'Technical Skills Development',
      duration: '3 months',
      topics: ['Data Structures', 'Algorithms', 'System Design', 'DBMS'],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'Aptitude & Reasoning',
      duration: '2 months',
      topics: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability'],
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Soft Skills Training',
      duration: '1 month',
      topics: ['Communication', 'Group Discussion', 'Interview Techniques'],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Industry Certification Programs',
      duration: '4 months',
      topics: ['AWS Certification', 'Microsoft Azure', 'Google Cloud Platform'],
      icon: <Award className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      company: 'Google',
      package: '42 LPA',
      batch: '2024',
      quote: 'The training and guidance provided by CDC helped me crack my dream job at Google. The mock interviews and technical sessions were invaluable.'
    },
    {
      name: 'Priya Patel',
      company: 'Microsoft',
      package: '38 LPA',
      batch: '2024',
      quote: 'CDC&apos;s comprehensive placement preparation program gave me the confidence to ace technical interviews. Forever grateful for their support.'
    },
    {
      name: 'Amit Kumar',
      company: 'Amazon',
      package: '35 LPA',
      batch: '2024',
      quote: 'From resume building to interview preparation, CDC guided us at every step. The placement officers were always available to help.'
    }
  ];

  const upcomingDrives = [
    {
      company: 'Google',
      date: 'Nov 15, 2024',
      roles: 'Software Engineer',
      eligibility: 'All branches',
      package: '40-50 LPA'
    },
    {
      company: 'Amazon',
      date: 'Nov 20, 2024',
      roles: 'SDE-1, SDE-2',
      eligibility: 'CSE, IT, ECE',
      package: '30-42 LPA'
    },
    {
      company: 'Deloitte',
      date: 'Nov 25, 2024',
      roles: 'Business Technology Analyst',
      eligibility: 'All branches',
      package: '6-12 LPA'
    },
    {
      company: 'Infosys',
      date: 'Dec 1, 2024',
      roles: 'System Engineer',
      eligibility: 'All branches',
      package: '4-8 LPA'
    }
  ];

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-corporate-blue to-corporate-lightBlue dark:from-gray-900 dark:to-blue-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Briefcase className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Career Development Cell</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering students with skills, opportunities, and guidance for successful careers
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Placement Statistics 2023-24
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Outstanding placement records year after year
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800 text-center shadow-lg"
                >
                  <div className="flex justify-center mb-4 text-corporate-lightBlue dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-corporate-blue dark:text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Top Recruiters
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Leading organizations trust our students
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {topRecruiters.map((recruiter, index) => (
              <AnimatedSection key={recruiter.name} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-corporate-blue to-corporate-lightBlue dark:from-blue-600 dark:to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-corporate-blue dark:text-white text-lg mb-1">
                    {recruiter.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {recruiter.category}
                  </p>
                  <p className="text-xs text-corporate-lightBlue dark:text-blue-400 font-semibold">
                    {recruiter.packages}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Training Programs Offered
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Comprehensive preparation for campus placements
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-corporate-lightBlue dark:bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-1">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Duration: {program.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {program.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Student Testimonials
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Success stories from our placed students
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-corporate-blue to-corporate-lightBlue dark:from-blue-600 dark:to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-corporate-blue dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Batch of {testimonial.batch}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company} • {testimonial.package}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Upcoming Placement Drives
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Latest opportunities for our students
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingDrives.map((drive, index) => (
              <AnimatedSection key={drive.company} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border-l-4 border-corporate-blue dark:border-blue-500 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-corporate-blue dark:text-white mb-1">
                        {drive.company}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {drive.date}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">
                      Open
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Role:</span>
                      <span className="font-semibold text-corporate-blue dark:text-white">
                        {drive.roles}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Eligibility:</span>
                      <span className="font-semibold text-corporate-blue dark:text-white">
                        {drive.eligibility}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Package:</span>
                      <span className="font-semibold text-corporate-lightBlue dark:text-blue-400">
                        {drive.package}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
