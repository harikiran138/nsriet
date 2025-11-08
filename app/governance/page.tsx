'use client';

import { motion } from 'framer-motion';
import { Users, ChevronDown, ChevronRight, Building2, Award, GraduationCap, Briefcase } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';

interface TreeNodeProps {
  title: string;
  name: string;
  children?: TreeNodeProps[];
  icon?: React.ReactNode;
}

function TreeNode({ title, name, children, icon }: TreeNodeProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = children && children.length > 0;

  return (
    <div className="ml-8 first:ml-0">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative"
      >
        <div
          className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-corporate-blue dark:border-blue-500 cursor-pointer hover:shadow-lg transition-all mb-4"
          onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        >
          {hasChildren && (
            <span className="text-corporate-blue dark:text-blue-400">
              {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </span>
          )}
          {icon && <span className="text-corporate-lightBlue dark:text-blue-400">{icon}</span>}
          <div className="flex-1">
            <h3 className="font-bold text-corporate-blue dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{name}</p>
          </div>
        </div>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 border-l-2 border-gray-200 dark:border-gray-700 pl-4"
          >
            {children?.map((child, index) => (
              <TreeNode key={index} {...child} />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default function GovernancePage() {
  const organizationStructure: TreeNodeProps = {
    title: 'Board of Directors',
    name: 'Sri. N. S. Raju (Chairman)',
    icon: <Building2 className="w-6 h-6" />,
    children: [
      {
        title: 'Principal',
        name: 'Dr. Rajesh Kumar',
        icon: <Award className="w-5 h-5" />,
        children: [
          {
            title: 'Vice Principal (Academics)',
            name: 'Dr. Priya Sharma',
            icon: <GraduationCap className="w-5 h-5" />,
            children: [
              { title: 'Dean - Engineering', name: 'Prof. Amit Patel', icon: <Users className="w-4 h-4" /> },
              { title: 'Dean - Sciences', name: 'Dr. Suresh Reddy', icon: <Users className="w-4 h-4" /> },
              { title: 'HOD - CSE', name: 'Dr. Kavitha Rao', icon: <Briefcase className="w-4 h-4" /> },
              { title: 'HOD - ECE', name: 'Dr. Ramesh Kumar', icon: <Briefcase className="w-4 h-4" /> },
              { title: 'HOD - Mechanical', name: 'Prof. Vijay Singh', icon: <Briefcase className="w-4 h-4" /> },
              { title: 'HOD - Civil', name: 'Dr. Lakshmi Devi', icon: <Briefcase className="w-4 h-4" /> },
            ]
          },
          {
            title: 'Vice Principal (Administration)',
            name: 'Prof. Anil Verma',
            icon: <GraduationCap className="w-5 h-5" />,
            children: [
              { title: 'Dean - Student Affairs', name: 'Dr. Meera Nair', icon: <Users className="w-4 h-4" /> },
              { title: 'Dean - R&D', name: 'Dr. Prakash Iyer', icon: <Users className="w-4 h-4" /> },
              { title: 'Chief Administrative Officer', name: 'Mr. Sanjay Gupta', icon: <Users className="w-4 h-4" /> },
            ]
          }
        ]
      }
    ]
  };

  const governanceBodies = [
    {
      title: 'Academic Council',
      description: 'Oversees all academic programs, curriculum development, and quality assurance',
      members: 15,
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: 'Board of Studies',
      description: 'Department-wise boards for syllabus design and academic planning',
      members: 8,
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Finance Committee',
      description: 'Manages financial planning, budgets, and resource allocation',
      members: 7,
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: 'Student Welfare Committee',
      description: 'Addresses student concerns, welfare activities, and campus life',
      members: 12,
      icon: <Users className="w-8 h-8" />
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
            <h1 className="text-5xl font-bold mb-6">Governance Structure</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transparent and effective leadership ensuring academic excellence and institutional growth
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Organization Chart
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Our hierarchical structure promoting efficiency and accountability
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <TreeNode {...organizationStructure} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Governance Bodies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Specialized committees ensuring comprehensive institutional management
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {governanceBodies.map((body, index) => (
              <AnimatedSection key={body.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-corporate-lightBlue dark:bg-blue-600 rounded-full flex items-center justify-center text-white">
                      {body.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-corporate-blue dark:text-white mb-2">
                        {body.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {body.members} Members
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {body.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
