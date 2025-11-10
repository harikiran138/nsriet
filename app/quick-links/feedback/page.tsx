'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import FeedbackForm from '@/components/FeedbackForm';
import AnimatedSection from '@/components/AnimatedSection';

export default function FeedbackPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-corporate-navy via-blue-900 to-corporate-dark text-white overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="w-8 h-8" />
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold backdrop-blur-sm">
                We Value Your Input
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Send Us Your Feedback
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your feedback helps us improve our services and enhance the student experience. Share your thoughts, suggestions, or report any issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              { icon: Mail, title: 'Email Us', value: 'feedback@nsriet.edu.in', description: 'Send detailed feedback' },
              { icon: Phone, title: 'Call Us', value: '+91 (123) 456-7890', description: 'Available 9 AM - 6 PM' },
              { icon: MapPin, title: 'Visit Us', value: 'NSRIET Campus', description: 'In-person feedback at admin office' },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="card group hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-corporate-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-corporate-blue font-semibold text-sm mb-1">{item.value}</p>
                    <p className="text-corporate-textSecondary dark:text-gray-400 text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-20 md:py-28 bg-corporate-background dark:bg-gray-800">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy dark:text-white mb-4">
                  Share Your Feedback
                </h2>
                <p className="text-corporate-textSecondary dark:text-gray-400 text-lg">
                  Help us enhance our services by sharing your valuable insights
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900 dark:to-transparent p-8 md:p-12 rounded-2xl border border-blue-200 dark:border-blue-800">
                <FeedbackForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
