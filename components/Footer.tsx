'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-corporate-blue dark:bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Image
              src="/main-logo1.png"
              alt="NSRIET Logo"
              width={80}
              height={80}
              className="mb-4 bg-white rounded-lg p-2"
            />
            <h3 className="font-bold text-xl mb-3">NSRIET</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Excellence in Engineering Education. Empowering students with knowledge, skills, and innovation for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-200 transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-blue-200 transition-colors">Admissions</Link></li>
              <li><Link href="/academics" className="hover:text-blue-200 transition-colors">Academics</Link></li>
              <li><Link href="/cdc" className="hover:text-blue-200 transition-colors">Placements</Link></li>
              <li><Link href="/quick-links" className="hover:text-blue-200 transition-colors">Library</Link></li>
              <li><Link href="/feedback" className="hover:text-blue-200 transition-colors">Grievance</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Important</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/governance" className="hover:text-blue-200 transition-colors">Governance</Link></li>
              <li><Link href="/iic" className="hover:text-blue-200 transition-colors">Innovation Council</Link></li>
              <li><Link href="/industry" className="hover:text-blue-200 transition-colors">Industry Connect</Link></li>
              <li><Link href="/notifications" className="hover:text-blue-200 transition-colors">Notifications</Link></li>
              <li><Link href="/events" className="hover:text-blue-200 transition-colors">Events</Link></li>
              <li><Link href="/careers" className="hover:text-blue-200 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>NSRIET Campus, Education District, City, State - 123456</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@nsriet.edu.in</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 dark:border-gray-700">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
            <p>© {new Date().getFullYear()} NSRIET. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
