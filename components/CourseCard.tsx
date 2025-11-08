'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Clock, Users, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface CourseCardProps {
  name: string;
  code: string;
  duration: string;
  seats: number;
  eligibility: string;
  image?: string;
  index: number;
}

export default function CourseCard({
  name,
  code,
  duration,
  seats,
  eligibility,
  image,
  index,
}: CourseCardProps) {
  const defaultImage = `https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || defaultImage}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-4 py-2 bg-corporate-lightBlue text-white font-bold rounded-lg text-lg shadow-lg">
            {code}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white font-heading">
            {name}
          </h3>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Clock className="w-5 h-5 text-corporate-lightBlue dark:text-blue-400" />
            <span className="text-sm font-medium">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Users className="w-5 h-5 text-corporate-lightBlue dark:text-blue-400" />
            <span className="text-sm font-medium">{seats} Seats</span>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
            <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Eligibility</p>
              <p className="text-sm">{eligibility}</p>
            </div>
          </div>
        </div>

        <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-corporate-blue to-corporate-lightBlue text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 group">
          Apply Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
