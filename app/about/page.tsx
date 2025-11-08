'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Building2, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop"
            alt="NSRIET Campus Building"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/90 via-blue-900/85 to-corporate-lightBlue/90"></div>
        </div>
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">About NSRIET</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A legacy of excellence in engineering education, innovation, and research since our inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue dark:text-white mb-4 font-heading">
                Vision & Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Guiding principles that drive our commitment to excellence
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-10 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-corporate-lightBlue rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-corporate-blue dark:text-white mb-6 font-heading">
                  Our Vision
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  To be a globally recognized institution of higher learning, fostering innovation, 
                  research, and entrepreneurship while producing ethical, socially responsible engineers 
                  who contribute to society&apos;s advancement.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-10 rounded-2xl border border-green-200 dark:border-green-800 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-800 dark:text-white mb-6 font-heading">
                  Our Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  To provide world-class technical education through innovative teaching methodologies, 
                  cutting-edge research facilities, and strong industry partnerships, enabling students 
                  to excel in their chosen fields and become future leaders.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Management */}
      <section id="management" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue dark:text-white mb-4 font-heading">
                Leadership & Management
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Guided by visionary leaders committed to academic excellence and student success
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { 
                name: 'Dr. Rajesh Kumar', 
                role: 'Principal', 
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
                qualification: 'Ph.D. in Computer Science'
              },
              { 
                name: 'Dr. Priya Sharma', 
                role: 'Vice Principal', 
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
                qualification: 'Ph.D. in Electronics'
              },
              { 
                name: 'Prof. Amit Patel', 
                role: 'Dean Academics', 
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
                qualification: 'M.Tech in Mechanical'
              },
            ].map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-corporate-blue dark:text-white mb-2 font-heading">
                      {member.name}
                    </h3>
                    <p className="text-corporate-lightBlue dark:text-blue-400 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{member.qualification}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                World-Class Infrastructure
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                State-of-the-art facilities designed for optimal learning
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Smart Classrooms', desc: '50+ technology-enabled learning spaces' },
              { icon: Building2, title: 'Advanced Labs', desc: 'Cutting-edge equipment and tools' },
              { icon: Building2, title: 'Central Library', desc: '50,000+ books and digital resources' },
              { icon: Building2, title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities' },
              { icon: Building2, title: 'Hostel Facilities', desc: 'Comfortable accommodation for 2000+ students' },
              { icon: Building2, title: 'Innovation Center', desc: 'Dedicated space for research and startups' },
            ].map((facility, index) => (
              <AnimatedSection key={facility.title} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                  <facility.icon className="w-12 h-12 text-corporate-lightBlue dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{facility.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
