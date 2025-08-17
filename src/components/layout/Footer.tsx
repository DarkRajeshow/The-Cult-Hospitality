import { Building, Calendar, ChefHat, Coffee, Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const logo = {
    icon: 'C',
    name: 'THE CULT',
    description: 'Redefining luxury hospitality through curated experiences and exceptional service.'
};

// const socialIcons = [
//     { label: 'Facebook', icon: <span className="text-sm font-semibold">f</span>, href: '#' },
//     { label: 'Instagram', icon: <span className="text-sm font-semibold">i</span>, href: '#' },
//     { label: 'Twitter', icon: <span className="text-sm font-semibold">t</span>, href: '#' },
// ];

const navigationLinks = [
    { label: 'Home', href: '/' },
    // { label: 'About Us', href: '/about' },
    { label: 'Our Brands', href: '/brands' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
];

const experiences = [   
    { label: 'The Cult Stay', icon: Building, href: '/brands' },
    { label: 'The Cult Banquet', icon: Calendar, href: '/brands' },
    { label: 'The Cults Kitchen', icon: ChefHat, href: '/brands' },
    { label: 'The Cults Café & Bistro', icon: Coffee, href: '/brands' },
];

const contactInfo = [
    { label: '+91 72830 72930', icon: Phone },
    { label: 'partnerships@theculthospitality.com', icon: Mail },
    { label: 'Solapur, Maharashtra', icon: MapPin },
];

const policies = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    // { label: 'Cookies', href: '#' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#FFFBEA] border-t-2 border-black/5 text-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 font-normal text-sm sm:text-base">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-8 lg:gap-12">
                    {/* Logo & Social */}
                    <div className="space-y-4 lg:col-span-1">
                        <div className="flex items-center">
                            <Link to={'/'} className="flex items-center">
                                <div className='h-16 sm:h-20 lg:h-24'>
                                    <img className='h-full w-auto object-contain' src="/assets/images/logo-h.png" alt="The Cult Hospitality" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-black leading-relaxed text-xs sm:text-sm lg:text-base max-w-xs">
                            {logo.description}
                        </p>
                        {/* <div className="flex space-x-3 sm:space-x-4 pt-2 sm:pt-4">
                            {socialIcons.map(({ label, icon, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div> */}
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-medium text-amber-700">Navigation</h4>
                        <ul className="space-y-2 sm:space-y-3 text-black">
                            {navigationLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} className="hover:text-amber-700 transition-colors flex items-center space-x-2 text-sm sm:text-base">
                                        <span>{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experiences */}
                    <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-medium text-amber-700">Our Brands</h4>
                        <ul className="space-y-2 sm:space-y-3 text-black">
                            {experiences.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <a href={href} className="hover:text-amber-700 transition-colors flex items-center space-x-2 text-sm sm:text-base">
                                        <Icon className="h-4 w-4 flex-shrink-0" />
                                        <span className="break-words">{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-medium text-amber-700">Get in Touch</h4>
                        <ul className="space-y-2 sm:space-y-3 text-black">
                            {contactInfo.map(({ label, icon: Icon }) => (
                                <li key={label} className="flex items-start space-x-3">
                                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                                    <span className="text-xs sm:text-sm lg:text-base break-words leading-relaxed">
                                        {label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-600 text-xs sm:text-sm">
                    <p className="text-center sm:text-left mb-4 sm:mb-0">
                        &copy; 2025 The Cult Hospitality. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 lg:gap-6">
                        {policies.map(({ label, href }) => (
                            <a 
                                key={label} 
                                href={href} 
                                className="hover:text-amber-700 transition-colors whitespace-nowrap"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 