'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Calendar, Rocket, Users, Award, TrendingUp, Code, Cpu } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function IICPage() {
  const events = [
    {
      title: 'National Innovation Challenge 2024',
      date: 'March 15-17, 2024',
      description: '48-hour hackathon with 200+ participants from across India',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Startup Ideation Workshop',
      date: 'February 10, 2024',
      description: 'Interactive session with successful entrepreneurs and VCs',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'AI/ML Innovation Summit',
      date: 'January 28, 2024',
      description: 'Expert talks on cutting-edge AI technologies and applications',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Patent Filing Awareness Program',
      date: 'December 5, 2023',
      description: 'Guidance on intellectual property rights and patent procedures',
      icon: <Award className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const projects = [
    {
      title: 'Smart Agriculture System',
      team: 'AgriTech Innovators',
      description: 'IoT-based solution for precision farming and crop monitoring',
      status: 'Funded',
      amount: '₹2,50,000'
    },
    {
      title: 'Healthcare Chatbot',
      team: 'MedAI Solutions',
      description: 'AI-powered preliminary diagnosis and health consultation platform',
      status: 'Incubated',
      amount: '₹1,80,000'
    },
    {
      title: 'Waste Management App',
      team: 'EcoWarriors',
      description: 'Smart waste segregation and recycling tracking mobile application',
      status: 'Prototype',
      amount: '₹1,20,000'
    },
    {
      title: 'EdTech Platform',
      team: 'LearnFlow',
      description: 'Personalized learning platform with adaptive assessments',
      status: 'Development',
      amount: '₹2,00,000'
    }
  ];

  const mentorshipPrograms = [
    {
      title: 'Industry Mentor Connect',
      description: 'One-on-one mentorship from industry experts',
      participants: 150,
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Startup Incubation Program',
      description: '6-month intensive program for student startups',
      participants: 25,
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Innovation Leadership Training',
      description: 'Developing entrepreneurial mindset and skills',
      participants: 200,
      icon: <TrendingUp className="w-8 h-8" />
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
                <Lightbulb className="w-12 h-12 text-yellow-300" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Institute Innovation Council</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fostering a culture of innovation, entrepreneurship, and creative problem-solving
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-6">
                About IIC
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                The Institute Innovation Council (IIC) at NSRIET is established under the Ministry of Education&apos;s 
                Innovation Cell (MIC) to systematically foster the culture of innovation and start-up ecosystem in our institution.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                We organize workshops, hackathons, ideation sessions, and mentorship programs to nurture innovative ideas 
                and transform them into viable solutions that address real-world challenges.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Active Members', icon: <Users className="w-8 h-8" /> },
              { number: '75+', label: 'Projects Launched', icon: <Rocket className="w-8 h-8" /> },
              { number: '30+', label: 'Events Conducted', icon: <Calendar className="w-8 h-8" /> }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/20 p-8 rounded-xl text-center border border-blue-200 dark:border-blue-800"
                >
                  <div className="flex justify-center mb-4 text-corporate-lightBlue dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-corporate-blue dark:text-white mb-2">
                    {stat.number}
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
                Recent Events
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Driving innovation through engaging programs and activities
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <AnimatedSection key={event.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className={`h-2 bg-gradient-to-r ${event.color}`} />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center text-white`}>
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
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
                Student Projects Showcase
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Innovative solutions developed by our talented students
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        by {project.team}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-600">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Seed Funding</span>
                    <span className="text-lg font-bold text-corporate-blue dark:text-blue-400">
                      {project.amount}
                    </span>
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
                Mentorship Programs
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Guiding the next generation of innovators and entrepreneurs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipPrograms.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-corporate-lightBlue dark:bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {program.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-3xl font-bold text-corporate-lightBlue dark:text-blue-400">
                      {program.participants}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Participants</p>
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
