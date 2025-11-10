'use client';

import { motion } from 'framer-motion';
import { 
  Link as LinkIcon, 
  FileText, 
  BookOpen, 
  Monitor, 
  GraduationCap,
  Users,
  Download,
  MapPin,
  MessageSquare,
  Library,
  Calendar,
  Award,
  Building2,
  Mail,
  Phone,
  AlertCircle,
  ClipboardList,
  FileSpreadsheet
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export default function QuickLinksPage() {
  const studentResources = [
    {
      title: 'Examination Results',
      description: 'Check semester exam results and grade cards',
      icon: <FileText className="w-6 h-6" />,
      link: '#',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Digital Library',
      description: 'Access e-books, journals, and research papers',
      icon: <Library className="w-6 h-6" />,
      link: '#',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'E-Learning Portal',
      description: 'Online courses and learning materials',
      icon: <Monitor className="w-6 h-6" />,
      link: '#',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Academic Calendar',
      description: 'Important dates and semester schedule',
      icon: <Calendar className="w-6 h-6" />,
      link: '#',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Student Portal',
      description: 'Attendance, assignments, and internal marks',
      icon: <GraduationCap className="w-6 h-6" />,
      link: '#',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Scholarships',
      description: 'Apply for various scholarship programs',
      icon: <Award className="w-6 h-6" />,
      link: '#',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const administrativeLinks = [
    {
      title: 'Grievance Redressal',
      description: 'Submit and track your grievances online',
      icon: <MessageSquare className="w-6 h-6" />,
      link: '#',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Faculty Directory',
      description: 'Contact information of faculty members',
      icon: <Users className="w-6 h-6" />,
      link: '#',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Campus Map',
      description: 'Interactive campus map and directions',
      icon: <MapPin className="w-6 h-6" />,
      link: '#',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Fee Payment',
      description: 'Online fee payment portal',
      icon: <Building2 className="w-6 h-6" />,
      link: '#',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with different departments',
      icon: <Phone className="w-6 h-6" />,
      link: '#',
      color: 'from-violet-500 to-violet-600'
    },
    {
      title: 'Anti-Ragging Cell',
      description: 'Report ragging incidents confidentially',
      icon: <AlertCircle className="w-6 h-6" />,
      link: '#',
      color: 'from-rose-500 to-rose-600'
    }
  ];

  const downloads = [
    {
      title: 'Application Forms',
      description: 'Download admission and other application forms',
      icon: <ClipboardList className="w-6 h-6" />,
      link: '#',
      size: '2.5 MB'
    },
    {
      title: 'Syllabus & Curriculum',
      description: 'Course syllabi for all programs and semesters',
      icon: <BookOpen className="w-6 h-6" />,
      link: '#',
      size: '15 MB'
    },
    {
      title: 'College Brochure',
      description: 'Comprehensive information about NSRIET',
      icon: <FileText className="w-6 h-6" />,
      link: '#',
      size: '8.3 MB'
    },
    {
      title: 'Fee Structure',
      description: 'Detailed fee structure for all programs',
      icon: <FileSpreadsheet className="w-6 h-6" />,
      link: '#',
      size: '500 KB'
    },
    {
      title: 'Academic Regulations',
      description: 'Rules and regulations for students',
      icon: <FileText className="w-6 h-6" />,
      link: '#',
      size: '3.2 MB'
    },
    {
      title: 'Time Table',
      description: 'Current semester class schedules',
      icon: <Calendar className="w-6 h-6" />,
      link: '#',
      size: '1.8 MB'
    }
  ];

  const externalLinks = [
    { title: 'AICTE', url: 'https://www.aicte-india.org/', icon: <LinkIcon className="w-5 h-5" /> },
    { title: 'JNTUH', url: 'https://jntuh.ac.in/', icon: <LinkIcon className="w-5 h-5" /> },
    { title: 'UGC', url: 'https://www.ugc.ac.in/', icon: <LinkIcon className="w-5 h-5" /> },
    { title: 'NPTEL', url: 'https://nptel.ac.in/', icon: <LinkIcon className="w-5 h-5" /> },
    { title: 'SWAYAM', url: 'https://swayam.gov.in/', icon: <LinkIcon className="w-5 h-5" /> },
    { title: 'e-Pathshala', url: 'https://epathshala.nic.in/', icon: <LinkIcon className="w-5 h-5" /> }
  ];

  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-corporate-navy via-blue-900 to-corporate-dark text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <LinkIcon className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Quick Links & Resources
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Easy access to all important resources, portals, and information for students and staff
            </p>
          </motion.div>
        </div>
      </section>

  <section className="py-20 bg-card">
        <div className="section-container">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Student Resources
              </h2>
              <p className="text-muted text-lg">
                Essential tools and portals for students
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentResources.map((resource, index) => (
              <AnimatedSection key={resource.title} delay={index * 0.1}>
                <Link href={resource.link}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-6 rounded-xl border border-base shadow-md hover:shadow-xl transition-all cursor-pointer h-full"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-muted text-sm">
                      {resource.description}
                    </p>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

  <section className="py-20 bg-surface">
        <div className="section-container">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Administrative
              </h2>
              <p className="text-muted text-lg">
                Important administrative services and information
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {administrativeLinks.map((link, index) => (
              <AnimatedSection key={link.title} delay={index * 0.1}>
                <Link href={link.link}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card p-6 rounded-xl border border-base shadow-md hover:shadow-xl transition-all cursor-pointer h-full"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                      {link.icon}
                    </div>
                    <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-2">
                      {link.title}
                    </h3>
                    <p className="text-muted text-sm">
                      {link.description}
                    </p>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

  <section className="py-20 bg-card">
        <div className="section-container">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Downloads
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Important documents and forms
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <AnimatedSection key={download.title} delay={index * 0.1}>
                <Link href={download.link}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-6 rounded-xl border border-base shadow-md hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-corporate-lightBlue dark:bg-blue-600 rounded-lg flex items-center justify-center text-white">
                        {download.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-corporate-blue dark:text-white mb-1">
                          {download.title}
                        </h3>
                        <p className="text-sm text-muted">
                          {download.size}
                        </p>
                      </div>
                      <Download className="w-5 h-5 text-corporate-lightBlue dark:text-blue-400" />
                    </div>
                    <p className="text-muted text-sm">
                      {download.description}
                    </p>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

  <section className="py-20 bg-surface">
        <div className="section-container">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                External Links
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Important educational portals and regulatory bodies
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {externalLinks.map((link, index) => (
              <AnimatedSection key={link.title} delay={index * 0.05}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-card p-4 rounded-lg border border-base shadow-sm hover:shadow-md transition-all flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-corporate-lightBlue dark:bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      {link.icon}
                    </div>
                    <span className="font-semibold text-corporate-blue dark:text-white">
                      {link.title}
                    </span>
                    <LinkIcon className="w-4 h-4 text-gray-400 ml-auto" />
                  </motion.div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-corporate-blue dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="bg-white/10 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <Mail className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Need Help?
              </h3>
              <p className="text-blue-100 dark:text-gray-300 mb-6">
                If you cannot find what you&apos;re looking for, please contact our support team
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:info@nsriet.edu.in"
                  className="px-6 py-3 bg-white text-corporate-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Email Support
                </a>
                <a 
                  href="tel:+911234567890"
                  className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
