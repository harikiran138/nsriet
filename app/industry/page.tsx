'use client';

import { motion } from 'framer-motion';
import { Building2, Handshake, Briefcase, Users, Award, TrendingUp, GraduationCap, Rocket } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function IndustryPage() {
  const partners = [
    { name: 'TCS', category: 'IT Services' },
    { name: 'Infosys', category: 'IT Services' },
    { name: 'Wipro', category: 'IT Services' },
    { name: 'Tech Mahindra', category: 'IT Services' },
    { name: 'L&T', category: 'Engineering' },
    { name: 'Bosch', category: 'Manufacturing' },
    { name: 'Amazon', category: 'E-commerce' },
    { name: 'Microsoft', category: 'Technology' },
    { name: 'Google', category: 'Technology' },
    { name: 'Accenture', category: 'Consulting' },
    { name: 'Deloitte', category: 'Consulting' },
    { name: 'Cognizant', category: 'IT Services' }
  ];

  const mous = [
    {
      company: 'Tech Mahindra',
      type: 'Training & Placement',
      year: '2023',
      description: 'Collaborative training programs and campus recruitment drives',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      company: 'Bosch India',
      type: 'Research Collaboration',
      year: '2023',
      description: 'Joint research projects on IoT and automotive technologies',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      company: 'Amazon Web Services',
      type: 'Cloud Computing',
      year: '2024',
      description: 'AWS Academy partnership for cloud technology education',
      icon: <Award className="w-6 h-6" />
    },
    {
      company: 'Microsoft',
      type: 'Technology Partnership',
      year: '2024',
      description: 'Microsoft Learn Student Ambassadors program integration',
      icon: <Building2 className="w-6 h-6" />
    }
  ];

  const internshipPrograms = [
    {
      title: 'Summer Internship Program',
      duration: '8-12 weeks',
      companies: 50,
      students: 350,
      description: 'Industry exposure during summer break across various sectors'
    },
    {
      title: 'Winter Internship',
      duration: '4-6 weeks',
      companies: 30,
      students: 200,
      description: 'Short-term projects and skill development programs'
    },
    {
      title: 'Final Year Projects',
      duration: '6-8 months',
      companies: 40,
      students: 280,
      description: 'Industry-sponsored capstone projects with real-world impact'
    }
  ];

  const guestLectures = [
    {
      speaker: 'Mr. Satya Nadella (Microsoft CEO)',
      topic: 'Future of Cloud Computing',
      date: 'March 2024',
      attendees: 500
    },
    {
      speaker: 'Dr. Kiran Mazumdar-Shaw',
      topic: 'Biotechnology & Innovation',
      date: 'February 2024',
      attendees: 400
    },
    {
      speaker: 'Mr. N.R. Narayana Murthy',
      topic: 'Entrepreneurship & Leadership',
      date: 'January 2024',
      attendees: 600
    },
    {
      speaker: 'Ms. Arundhati Bhattacharya',
      topic: 'Banking & Digital Transformation',
      date: 'December 2023',
      attendees: 450
    }
  ];

  const researchProjects = [
    {
      title: 'AI for Healthcare Diagnostics',
      partner: 'Apollo Hospitals',
      funding: '₹50 Lakhs',
      status: 'Ongoing'
    },
    {
      title: 'Smart Grid Technologies',
      partner: 'NTPC Limited',
      funding: '₹75 Lakhs',
      status: 'Ongoing'
    },
    {
      title: 'Sustainable Building Materials',
      partner: 'L&T Construction',
      funding: '₹40 Lakhs',
      status: 'Completed'
    },
    {
      title: 'Autonomous Vehicle Systems',
      partner: 'Tata Motors',
      funding: '₹1 Crore',
      status: 'Ongoing'
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
                <Handshake className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Industry Connect & Collaborations</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building strong partnerships with leading industries for mutual growth and innovation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Our Industry Partners
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Collaborating with 100+ leading organizations across sectors
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.name} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Building2 className="w-8 h-8 text-corporate-blue dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-corporate-blue dark:text-white text-lg mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {partner.category}
                  </p>
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
                MoUs & Partnerships
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Strategic collaborations for academic excellence and innovation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {mous.map((mou, index) => (
              <AnimatedSection key={mou.company} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-corporate-blue dark:border-blue-500"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-corporate-lightBlue dark:bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      {mou.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-1">
                        {mou.company}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {mou.type} • {mou.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {mou.description}
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
                Internship Programs
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Bridging the gap between academics and industry
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center justify-between mb-4">
                    <Briefcase className="w-10 h-10 text-corporate-blue dark:text-blue-400" />
                    <span className="text-sm font-semibold text-corporate-lightBlue dark:text-blue-400">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-blue dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {program.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-300 dark:border-blue-700">
                    <div>
                      <p className="text-2xl font-bold text-corporate-blue dark:text-blue-400">
                        {program.companies}+
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Companies</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-corporate-blue dark:text-blue-400">
                        {program.students}+
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Students</p>
                    </div>
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
                Guest Lecture Series
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Learning from industry leaders and visionaries
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {guestLectures.map((lecture, index) => (
              <AnimatedSection key={lecture.speaker} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-corporate-lightBlue dark:bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-corporate-blue dark:text-white mb-2">
                        {lecture.speaker}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {lecture.topic}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>{lecture.date}</span>
                        <span className="font-semibold">{lecture.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                Collaborative Research Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Joint initiatives driving innovation and technological advancement
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-corporate-blue dark:text-white flex-1">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Ongoing' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.partner}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-600">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Funding</span>
                    <span className="text-lg font-bold text-corporate-blue dark:text-blue-400">
                      {project.funding}
                    </span>
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
