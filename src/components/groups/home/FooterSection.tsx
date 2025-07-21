import { Building, Calendar, ChefHat, Coffee, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';

const logo = {
  icon: 'C',
  name: 'THE CULT',
  description: 'Redefining luxury hospitality through curated experiences and exceptional service.'
};

const socialIcons = [
  { label: 'Facebook', icon: <span className="text-sm font-bold">f</span>, href: '#' },
  { label: 'Instagram', icon: <span className="text-sm font-bold">i</span>, href: '#' },
  { label: 'Twitter', icon: <span className="text-sm font-bold">t</span>, href: '#' },
];

const navigationLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Careers', href: '#' },
];

const experiences = [
  { label: 'The Cult Stay', icon: Building, href: '#' },
  { label: 'The Cult Banquet', icon: Calendar, href: '#' },
  { label: 'The Cults Kitchen', icon: ChefHat, href: '#' },
  { label: 'The Cults Café & Bistro', icon: Coffee, href: '#' },
];

const contactInfo = [
  { label: '+91 78881 72579', icon: Phone },
  { label: 'info@thecultstay.com', icon: Mail },
  { label: 'Solapur, Maharashtra', icon: MapPin },
];

const policies = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies', href: '#' },
];

const newsletter = {
  placeholder: 'Your email',
  button: 'Subscribe',
};

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{logo.icon}</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                {logo.name}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">{logo.description}</p>
            <div className="flex space-x-4 pt-4">
              {socialIcons.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Navigation</h4>
            <ul className="space-y-3 text-gray-300">
              {navigationLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-amber-400 transition-colors flex items-center space-x-2">
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Experiences */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Our Experiences</h4>
            <ul className="space-y-3 text-gray-300">
              {experiences.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-amber-400 transition-colors flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Get in Touch</h4>
            <ul className="space-y-3 text-gray-300">
              {contactInfo.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-amber-400" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-gray-400 mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <Input placeholder={newsletter.placeholder} className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400" />
                <Button size="sm" className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600">{newsletter.button}</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2025 The Cult Hospitality. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {policies.map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-amber-400 transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 