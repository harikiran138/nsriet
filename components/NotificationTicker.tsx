'use client';

import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const notifications = [
  "🎓 Admissions Open for Academic Year 2024-25",
  "📢 Campus Placement Drive - 15th December 2024",
  "🏆 NSRIET wins Best Innovation Award",
  "📚 Library Extended Hours during Exams",
  "🔬 Research Symposium on 20th December",
];

export default function NotificationTicker() {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-y border-yellow-200 dark:border-yellow-800 py-0.5 overflow-hidden">
      <div className="section-container flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200 font-semibold flex-shrink-0">
          <Bell className="w-5 h-5 animate-pulse" />
          <span className="hidden sm:inline">Latest Updates:</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...notifications, ...notifications].map((notification, index) => (
              <span
                key={index}
                className="text-yellow-900 dark:text-yellow-100 font-medium"
              >
                {notification}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
