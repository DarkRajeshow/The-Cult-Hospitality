import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { easeOut } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Types
export interface Offering {
    id: string | number;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    image: string;
    hoverImage?: string;
    category?: string;
}

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
}


// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easeOut
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: easeOut
        }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.3
        }
    }
};



// Components
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "" }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.section>
    );
};

const OurOfferings: React.FC<{ offerings: Offering[] }> = ({ offerings }) => {
    const [activeCard, setActiveCard] = useState<string | number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>(offerings[0].image);

    const handleCardHover = (offering: Offering) => {
        setActiveCard(offering.id);
        setSelectedImage(offering.hoverImage || offering.image);
    };


    const handleCardClick = (offering: Offering) => {
        setSelectedImage(offering.hoverImage || offering.image);
    };

    return (
        <AnimatedSection className="py-12 sm:py-24 px-2 sm:px-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50">
            <div className="max-w-7xl mx-auto">
                <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-16">
                    <Badge className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 border-orange-200 mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-base">
                        OUR BRANDS
                    </Badge>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Four Pillars of
                        <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"> Excellence</span>
                    </h2>
                    <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Each brand represents a unique facet of luxury hospitality, unified by our commitment to exceptional experiences
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
                    {/* Left Side - Cards */}
                    <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
                        {offerings.map((offering) => (
                            <motion.div
                                key={offering.id}
                                variants={itemVariants}
                                className="group cursor-pointer"
                                onMouseEnter={() => handleCardHover(offering)}
                                // onMouseLeave={handleCardLeave}
                                onClick={() => handleCardClick(offering)}
                            >
                                <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${activeCard === offering.id
                                    ? 'bg-black/80'
                                    : 'bg-white/90'
                                    }`}>
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="flex items-center space-x-3 sm:space-x-4">
                                            <div className={`w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${activeCard === offering.id
                                                ? 'bg-white/20 backdrop-blur-sm'
                                                : `bg-gradient-to-br ${offering.gradient} group-hover:bg-white/20 group-hover:backdrop-blur-sm`
                                                }`}>
                                                <offering.icon className={`h-6 w-6 sm:h-8 sm:w-8 transition-colors duration-300 ${activeCard === offering.id ? 'text-white' : 'text-gray-700 group-hover:text-white'
                                                    }`} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-base sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2 transition-colors duration-300 ${activeCard === offering.id ? 'text-white' : 'text-gray-900 group-hover:text-white'
                                                    }`}>
                                                    {offering.title}
                                                </h3>
                                                <p className={`text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-300 ${activeCard === offering.id ? 'text-white/90' : 'text-gray-600 group-hover:text-white/90'
                                                    }`}>
                                                    {offering.description}
                                                </p>
                                            </div>
                                            <ArrowRight className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 ${activeCard === offering.id
                                                ? 'text-white translate-x-1'
                                                : 'text-gray-400 group-hover:text-white group-hover:translate-x-1'
                                                }`} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Side - Image Display */}
                    <motion.div variants={itemVariants} className="relative mt-6 lg:mt-0">
                        <div className="relative h-48 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selectedImage}
                                    src={selectedImage}
                                    alt="Brand showcase"
                                    variants={imageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Floating badge */}
                            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20">
                                <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-base">
                                    {activeCard ? offerings.find(o => o.id === activeCard)?.category || offerings.find(o => o.id === activeCard)?.title : offerings[0].category || offerings[0].title}
                                </Badge>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-20 blur-xl" />
                        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl" />
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div variants={itemVariants} className="text-center mt-8 sm:mt-16">
                    <Link to="/services">
                      <Button
                          size="lg"
                          className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                          Explore All Brands
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </Link>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default OurOfferings;