'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const departments = [
  { name: 'Computer Science & Engineering', hod: 'Dr. Amit Kumar', labs: 5, faculty: 25 },
  { name: 'Electronics & Communication', hod: 'Dr. Priya Singh', labs: 4, faculty: 18 },
  { name: 'Mechanical Engineering', hod: 'Prof. Rajesh Sharma', labs: 6, faculty: 20 },
  { name: 'Civil Engineering', hod: 'Dr. Suresh Patel', labs: 3, faculty: 15 },
  { name: 'Electrical Engineering', hod: 'Prof. Neha Verma', labs: 4, faculty: 12 },
  { name: 'Information Technology', hod: 'Dr. Arun Mehta', labs: 4, faculty: 16 },
];

export default function AcademicsPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-corporate-blue to-corporate-lightBlue dark:from-gray-900 dark:to-blue-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Academics</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive academic programs designed for holistic development
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Departments
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <AnimatedSection key={dept.name} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
                  <GraduationCap className="w-12 h-12 text-corporate-lightBlue dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-3">
                    {dept.name}
                  </h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                    <p>HOD: {dept.hod}</p>
                    <p>Labs: {dept.labs} | Faculty: {dept.faculty}</p>
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
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h2 className="text-3xl font-bold text-corporate-blue dark:text-white mb-6">
                Academic Calendar 2024-25
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-corporate-lightBlue dark:text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white mb-1">Semester 1</h4>
                    <p className="text-gray-600 dark:text-gray-400">August - December 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-corporate-lightBlue dark:text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white mb-1">Semester 2</h4>
                    <p className="text-gray-600 dark:text-gray-400">January - May 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
