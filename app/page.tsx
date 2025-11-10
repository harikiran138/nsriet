'use client';

import NotificationTicker from '@/components/NotificationTicker';
import HeroSection from '@/components/HeroSection';
import Highlights from '@/components/Highlights';
import QuickAccessCards from '@/components/QuickAccessCards';

export default function Home() {
  return (
    <>
      {/* Notification Ticker */}
      <NotificationTicker />

      {/* Hero Section - Background image with text overlay and CTA buttons */}
      <HeroSection
        backgroundImage="/hero-bg.png"
      />

      {/* Highlights Section */}
      <Highlights />

      {/* Quick Access Cards Section */}
      <QuickAccessCards />
    </>
  );
}
