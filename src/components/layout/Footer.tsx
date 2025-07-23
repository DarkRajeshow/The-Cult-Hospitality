import { Building, Calendar, ChefHat, Coffee, Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

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
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Brands', href: '/brands' },
    { label: 'Contact', href: '/contact' },
];

const experiences = [
    { label: 'The Cult Stay', icon: Building, href: '/contact#Hotel' },
    { label: 'The Cult Banquet', icon: Calendar, href: '/contact#Banquet' },
    { label: 'The Cults Kitchen', icon: ChefHat, href: '/contact#Shop' },
    { label: 'The Cults Café & Bistro', icon: Coffee, href: '/contact#Café' },
];

const contactInfo = [
    { label: '+91 95454 06070', icon: Phone },
    { label: 'info@thecultstay.com', icon: Mail },
    { label: 'Solapur, Maharashtra', icon: MapPin },
];

const policies = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookies', href: '#' },
];

// const newsletter = {
//     placeholder: 'Your email',
//     button: 'Subscribe',
// };

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#FFFBEA] border-t-2 border-black/5 text-black py-10 sm:py-16 px-3 sm:px-6 font-normal text-sm sm:text-base">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                    {/* Logo & Social */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            {/* <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">{logo.icon}</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                                {logo.name}
                            </span> */}
                            <Link to={'/'} className={`flex items-center`}>
                                <div className='h-24 sm:h-20 md:h-30'>
                                    <img className='w-24 sm:w-20 md:w-30' src="/assets/images/logo.png" alt="" />
                                </div>
                            </Link>
                        </div>
                    <p className="text-black leading-relaxed text-xs sm:text-base">{logo.description}</p>
                        <div className="flex space-x-3 sm:space-x-4 pt-2 sm:pt-4">
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
                        </div>
                    </div>
                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-amber-700">Navigation</h4>
                        <ul className="space-y-3 text-black">
                            {navigationLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} className="hover:text-amber-700 transition-colors flex items-center space-x-2">
                                        <span>{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Experiences */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-amber-700">Our Experiences</h4>
                        <ul className="space-y-3 text-black">
                            {experiences.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <a href={href} className="hover:text-amber-700 transition-colors flex items-center space-x-2">
                                        <Icon className="h-4 w-4" />
                                        <span>{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Contact & Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-amber-700">Get in Touch</h4>
                        <ul className="space-y-3 text-black">
                            {contactInfo.map(({ label, icon: Icon }) => (
                                <li key={label} className="flex items-center space-x-3">
                                    <Icon className="h-5 w-5 text-amber-700" />
                                    <span>{label}</span>
                                </li>
                            ))}
                        </ul>
                        {/* <div className="pt-4">
                            <h5 className="text-sm font-medium text-gray-400 mb-2">Newsletter</h5>
                            <form className="flex space-x-2" onSubmit={handleNewsletterSubmit}>
                                <input 
                                    placeholder="Your email" 
                                    className="bg-gray-800 py-2 px-3 rounded-full border-gray-700 text-white placeholder-gray-400 focus:border-amber-400" 
                                    value={newsletterEmail}
                                    onChange={e => setNewsletterEmail(e.target.value)}
                                    type="email"
                                    required
                                />
                                <button 
                                    className="bg-gradient-to-r rounded-full py-2 px-3 from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-semibold"
                                    type="submit"
                                    disabled={newsletterSubmitted}
                                >
                                    {newsletterSubmitted ? 'Thank You!' : 'Subscribe'}
                                </button>
                            </form>
                            {newsletterError && <p className="text-red-600 text-xs mt-2">{newsletterError}</p>}
                            {newsletterSubmitted && <p className="text-green-600 text-xs mt-2">We'll be in touch soon with exclusive offers!</p>}
                        </div> */}
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-base">
                    <p>&copy; 2025 The Cult Hospitality. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {policies.map(({ label, href }) => (
                            <a key={label} href={href} className="hover:text-amber-700 transition-colors">{label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 