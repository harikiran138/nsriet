'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, Users, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import CourseCard from '@/components/CourseCard';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    name: 'Computer Science & Engineering',
    code: 'CSE',
    duration: '4 Years',
    seats: 180,
    eligibility: '60% in 10+2 with PCM',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
  {
    name: 'Electronics & Communication',
    code: 'ECE',
    duration: '4 Years',
    seats: 120,
    eligibility: '60% in 10+2 with PCM',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    name: 'Mechanical Engineering',
    code: 'ME',
    duration: '4 Years',
    seats: 120,
    eligibility: '60% in 10+2 with PCM',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
  },
  {
    name: 'Civil Engineering',
    code: 'CE',
    duration: '4 Years',
    seats: 90,
    eligibility: '60% in 10+2 with PCM',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
  },
  {
    name: 'Electrical Engineering',
    code: 'EE',
    duration: '4 Years',
    seats: 60,
    eligibility: '60% in 10+2 with PCM',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
  },
  {
    name: 'Information Technology',
    code: 'IT',
    duration: '4 Years',
    seats: 60,
    eligibility: '60% in 10+2 with PCM',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
];

const admissionProcess = [
  { step: '1', title: 'Online Application', desc: 'Fill the application form' },
  { step: '2', title: 'Document Verification', desc: 'Submit required documents' },
  { step: '3', title: 'Entrance Exam', desc: 'Appear for entrance test' },
  { step: '4', title: 'Counseling', desc: 'Attend counseling session' },
  { step: '5', title: 'Admission', desc: 'Complete admission formalities' },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop"
            alt="Students in classroom"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">Admissions 2024-25</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Begin your journey towards excellence. Applications are now open for aspiring engineers!
            </p>
            <button className="px-10 py-4 bg-white text-corporate-blue font-bold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl text-lg">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue dark:text-white mb-4 font-heading">
                Programs Offered
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Choose from our diverse range of AICTE-approved engineering programs designed for industry excellence
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.code} {...course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Admission Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Simple steps to secure your seat at NSRIET
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {admissionProcess.map((process, index) => (
                <AnimatedSection key={process.step} delay={index * 0.15}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-corporate-lightBlue text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                        {process.step}
                      </div>
                      {index < admissionProcess.length - 1 && (
                        <div className="w-1 h-full bg-blue-200 dark:bg-blue-900 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-2xl font-bold text-corporate-blue dark:text-white mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {process.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8 border-l-8 border-orange-500">
              <h2 className="text-3xl font-bold text-orange-800 dark:text-orange-300 mb-6">
                Important Dates
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Application Start Date</h4>
                  <p className="text-gray-700 dark:text-gray-300">1st January 2025</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Application Deadline</h4>
                  <p className="text-gray-700 dark:text-gray-300">31st March 2025</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Entrance Exam Date</h4>
                  <p className="text-gray-700 dark:text-gray-300">15th April 2025</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Counseling Dates</h4>
                  <p className="text-gray-700 dark:text-gray-300">1st - 15th May 2025</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
