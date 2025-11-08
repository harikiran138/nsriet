'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import Image from 'next/image';

export interface Event {
  date: string;
  title: string;
  description: string;
  category: string;
  image?: string;
}

interface EventCarouselProps {
  events: Event[];
  autoSlide?: boolean;
  interval?: number;
}

export default function EventCarousel({ events, autoSlide = true, interval = 5000 }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoSlide, interval, events.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={events[currentIndex].image || `https://source.unsplash.com/800x600/?${events[currentIndex].category.toLowerCase()},event,college`}
                  alt={events[currentIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4 bg-corporate-lightBlue text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-1">
                    {events[currentIndex].category}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-4 text-corporate-lightBlue dark:text-blue-400">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg font-semibold">{events[currentIndex].date}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-corporate-blue dark:text-white mb-4 font-heading">
                  {events[currentIndex].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {events[currentIndex].description}
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-corporate-lightBlue text-white rounded-lg hover:bg-corporate-blue transition-colors w-fit font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 text-corporate-blue dark:text-white p-3 rounded-full shadow-xl hover:bg-white dark:hover:bg-gray-700 transition-all hover:scale-110 z-10"
          aria-label="Previous event"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 text-corporate-blue dark:text-white p-3 rounded-full shadow-xl hover:bg-white dark:hover:bg-gray-700 transition-all hover:scale-110 z-10"
          aria-label="Next event"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-corporate-lightBlue dark:bg-blue-400'
                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
