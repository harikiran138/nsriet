'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Award, 
  TrendingUp,
  Calendar,
  BookOpen,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import NotificationTicker from '@/components/NotificationTicker';
import ImageGallery from '@/components/ImageGallery';
import EventCarousel from '@/components/EventCarousel';
import Image from 'next/image';

const stats = [
  { icon: GraduationCap, value: 5000, suffix: '+', label: 'Students Enrolled' },
  { icon: Users, value: 300, suffix: '+', label: 'Experienced Faculty' },
  { icon: Building2, value: 8, suffix: '', label: 'Departments' },
  { icon: Award, value: 95, suffix: '%', label: 'Placement Rate' },
];

const features = [
  {
    icon: BookOpen,
    title: 'World-Class Education',
    description: 'Comprehensive curriculum aligned with industry standards and global best practices.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'State-of-the-art labs and research facilities fostering innovation and creativity.',
  },
  {
    icon: TrendingUp,
    title: 'Career Excellence',
    description: 'Strong industry partnerships ensuring excellent placement opportunities.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Learn from experienced professors and industry professionals.',
  },
];

const upcomingEvents = [
  {
    date: '15 DEC 2024',
    title: 'Campus Placement Drive',
    description: 'Leading tech companies recruiting on campus for various roles across engineering streams. Meet recruiters from Fortune 500 companies and promising startups.',
    category: 'Placements',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    date: '20 DEC 2024',
    title: 'Research Symposium',
    description: 'Annual research paper presentations by faculty and students. Showcase innovative projects and cutting-edge research in engineering and technology.',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
  },
  {
    date: '25 DEC 2024',
    title: 'Tech Fest 2024',
    description: 'Inter-college technical festival featuring robotics competitions, coding marathons, technical workshops, and guest lectures from industry experts.',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
  },
  {
    date: '5 JAN 2025',
    title: 'Innovation Hackathon',
    description: '48-hour coding marathon focused on solving real-world problems. Collaborate with peers and win exciting prizes.',
    category: 'Competition',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    alt: 'Modern campus building with students',
    title: 'Campus Infrastructure',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    alt: 'Students collaborating in classroom',
    title: 'Interactive Learning',
  },
  {
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    alt: 'Technical seminar with industry experts',
    title: 'Industry Seminars',
  },
  {
    src: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop',
    alt: 'Innovation and startup incubation',
    title: 'Innovation Hub',
  },
  {
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    alt: 'Advanced laboratory facilities',
    title: 'Research Labs',
  },
  {
    src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    alt: 'Modern library with digital resources',
    title: 'Digital Library',
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
    alt: 'Hands-on workshop session',
    title: 'Technical Workshops',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
    alt: 'Graduation ceremony celebration',
    title: 'Convocation',
  },
  {
    src: 'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?w=800&h=600&fit=crop',
    alt: 'Research and development activities',
    title: 'R&D Center',
  },
];

export default function Home() {
  return (
    <>
      {/* Notification Ticker */}
      <NotificationTicker />

      {/* Hero Section */}
      <section className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop"
            alt="NSRIET Campus"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/90 via-blue-900/85 to-corporate-lightBlue/90 dark:from-gray-900/95 dark:via-blue-900/90 dark:to-gray-800/95"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="section-container relative z-10 py-24 md:py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading">
              Empowering Future<br />
              <span className="text-blue-200">Innovators at NSRIET</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Excellence in Engineering Education • Industry-Ready Graduates • World-Class Research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="px-8 py-4 bg-white text-corporate-blue font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-corporate-blue transition-all transform hover:scale-105"
              >
                Explore Campus
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-corporate-lightBlue dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-corporate-blue dark:text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Why Choose NSRIET?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Join a community dedicated to academic excellence, innovation, and holistic development
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-corporate-lightBlue dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events - Enhanced Carousel */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue dark:text-white mb-4 font-heading">
                Upcoming Events
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Stay updated with our latest activities, workshops, and programs that shape the future
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <EventCarousel events={upcomingEvents} autoSlide={true} interval={6000} />
          </AnimatedSection>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue dark:text-white mb-4 font-heading">
                Campus Life
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Explore our state-of-the-art facilities, vibrant campus culture, and enriching academic environment
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ImageGallery images={galleryImages} columns={3} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-corporate-blue to-corporate-lightBlue dark:from-gray-900 dark:to-blue-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Join thousands of students who chose excellence. Apply now and be part of the NSRIET family.
              </p>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-corporate-blue font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Apply for Admission <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
