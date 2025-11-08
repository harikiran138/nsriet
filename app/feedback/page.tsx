'use client';

import { motion } from 'framer-motion';
import FeedbackForm from '@/components/FeedbackForm';
import AnimatedSection from '@/components/AnimatedSection';

export default function FeedbackPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-corporate-blue to-corporate-lightBlue dark:from-gray-900 dark:to-blue-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Feedback & Suggestions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your feedback helps us improve. Share your thoughts and suggestions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <FeedbackForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
