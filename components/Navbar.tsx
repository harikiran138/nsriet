'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

const topLinks = [
  { name: 'Circular Notification', href: '/notifications' },
  { name: 'Upcoming Events', href: '/events' },
  { name: 'Feedback', href: '/feedback' },
  { name: 'News Bulletin', href: '/news' },
  { name: 'Career Opportunities', href: '/careers' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Vision & Mission', href: '/about#vision' },
      { name: 'Management', href: '/about#management' },
      { name: 'Infrastructure', href: '/about#infrastructure' },
    ],
  },
  { name: 'Governance', href: '/governance' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Academics', href: '/academics' },
  { name: 'Institute Innovation Council', href: '/iic' },
  { name: 'Industry Connect', href: '/industry' },
  { name: 'CDC', href: '/cdc' },
  { name: 'Quick Links', href: '/quick-links' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    html.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  const isDark = mounted && typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Header */}
      <div className="bg-corporate-blue dark:bg-gray-800 text-white py-2 hidden lg:block">
        <div className="section-container">
          <div className="flex items-center justify-between text-sm">
            <div className="font-bold tracking-wide">NSRIET</div>
            <div className="flex items-center gap-1">
              {topLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className="hover:text-blue-200 transition-colors px-2"
                  >
                    {link.name}
                  </Link>
                  {index < topLinks.length - 1 && (
                    <span className="text-blue-300">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/main-logo1.png"
              alt="NSRIET Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-corporate-blue dark:text-white">
                NSRIET
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Excellence in Education
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() =>
                  link.submenu && setActiveSubmenu(link.name)
                }
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-corporate-lightBlue dark:hover:text-blue-400 font-medium transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.submenu && activeSubmenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden min-w-[220px]"
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700"
          >
            <div className="section-container py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-700 dark:text-gray-200 hover:text-corporate-lightBlue dark:hover:text-blue-400 font-medium"
                    onClick={() => !link.submenu && setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 space-y-1">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-corporate-lightBlue dark:hover:text-blue-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
