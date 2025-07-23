import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Our Brands', path: '/brands' },
        { label: 'Contact Us', path: '/contact' }
    ];

    const location = useLocation();

    useEffect(() => {
        // Set active item based on current path
        const current = navItems.find(item => item.path === location.pathname);
        setActiveItem(current ? current.label : 'Home');
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        console.log("workign");
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className={`top-0 bg-[#FFFBEA] left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'backdrop-blur-sm shadow-sm shadow-black/5'
                : ''
                }`}>
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className={`flex items-center justify-between h-20 sm:h-24 md:h-28 ${isMobileMenuOpen && 'hidden'}`}>
                        {/* Logo Section */}
                        <Link to={'/'} className={`flex items-center`}>
                            <div className='h-16 sm:h-20 md:h-26'>
                                <img className='h-full' src="/assets/images/logo.png" alt="" />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    onClick={() => { setActiveItem(item.label); setIsMobileMenuOpen(false); }}
                                    className={`relative px-6 py-3 text-lg font-medium cursor-pointer transition-all duration-300 rounded-lg group ${activeItem === item.label
                                        ? 'text-violet-600'
                                        : 'text-zinc-700 hover:text-black'
                                        }`}
                                >
                                    <span className="relative z-10">{item.label}</span>

                                    {/* Hover background */}
                                    <div className="absolute inset-0 bg-blue-50/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Active indicator */}
                                    {activeItem === item.label && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-blue-600 rounded-full" />
                                    )}

                                    {/* Hover underline */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 rounded-full group-hover:w-8 transition-all duration-300" />
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button - Always visible on mobile */}
                        <button
                            onClick={toggleMobileMenu}
                            className={`lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 ${isMobileMenuOpen ? 'absolute top-6 right-4' : 'relative'}`}
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen
                ? 'opacity-100 bg-[#FFFBEA]'
                : 'opacity-0 pointer-events-none'
                }`}>
                {/* Backdrop for closing menu */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu} />
                {/* Mobile Menu Content */}
                <div className={`absolute top-0 right-0 w-full max-w-xs sm:max-w-sm h-full shadow-2xl transform transition-transform duration-500 z-20 bg-[#FFFBEA] ${isMobileMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}>

                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100 z-20">
                        <button
                            onClick={toggleMobileMenu}
                            className={`lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 ${isMobileMenuOpen ? 'absolute top-6 right-4' : 'relative'}`}
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                        
                        {/* <div className="flex items-center">
                            <div className='h-20'>
                                <img className='w-20' src="/assets/images/logo.png" alt="" />
                            </div>
                        </div> */}
                        {/* 
                        <Link to={'/'} className={`flex items-center`}>
                            <div className='h-24 sm:h-20 md:h-30'>
                                <img className='w-24 sm:w-20 md:w-30' src="/assets/images/logo.png" alt="" />
                            </div>
                        </Link> */}


                        {/* Backdrop */}
                        {/* <div
                            className={`absolute size-40 bg-black/20 backdrop-blur-sm transition-opacity duration-500 z-10 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onClick={toggleMobileMenu}
                        /> */}
                        {/* <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        >
                            <X size={24} />
                        </button> */}
                    </div>

                    {/* Mobile Menu Items */}
                    <div className="p-6 flex flex-col space-y-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={() => { setActiveItem(item.label); setIsMobileMenuOpen(false); }}
                                className={`w-full text-center px-6 py-4 text-xl font-medium rounded-xl transition-all duration-300 transform ${activeItem === item.label
                                    ? 'text-blue-600 bg-blue-50 scale-105'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:scale-105'
                                    }`}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: isMobileMenuOpen ? 'slideInUp 0.4s ease-out forwards' : 'none'
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;