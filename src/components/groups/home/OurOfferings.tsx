import React, { useState, useCallback, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Types
export interface SubOffering {
    id: string | number;
    title: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
    gradient?: string;
    image?: string;
    hoverImage?: string;
    subOfferings?: SubOffering[];
}

export interface Offering {
    id: string | number;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    image: string;
    hoverImage?: string;
    category?: string;
    subOfferings?: SubOffering[];
}

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    ref?: React.RefObject<HTMLDivElement>;
}

// Simplified Animation variants - reduced animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};

const subItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2
        }
    }
};

const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: {
        height: 'auto',
        opacity: 1,
        transition: {
            height: { duration: 0.3 },
            opacity: { duration: 0.2, delay: 0.1 }
        }
    }
};

// Components
const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(({ children, className = "" }, ref) => {
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.section>
    );
});

const SubOfferingCard: React.FC<{
    subOffering: SubOffering;
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
    onToggle?: () => void;
    isExpanded?: boolean;
    level?: number;
    offeringId: string | number;
}> = ({ subOffering, isActive, onHover, onLeave, onToggle, isExpanded = false, level = 1, offeringId }) => {
    const hasNestedSubOfferings = subOffering.subOfferings && subOffering.subOfferings.length > 0;
    const marginLeft = level === 1 ? 'ml-6' : `ml-${6 + level * 2}`;

    const handleClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent event bubbling
        if (hasNestedSubOfferings && onToggle) {
            onToggle();
        }
    }, [hasNestedSubOfferings, onToggle]);

    return (
        <motion.div
            variants={subItemVariants}
            className={`${marginLeft} border-l-2 border-black/20 pl-4 py-1`}
        >
            <div
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all border duration-200 cursor-pointer ${isActive
                    ? 'bg-gray-100 border-black/30'
                    : 'hover:bg-white/10 border-transparent'
                    }`}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                onClick={handleClick}
            >
                {subOffering.icon && (
                    <div className={`rounded-full flex items-center justify-center transition-all duration-200`}>
                        <subOffering.icon className="h-4 w-4 text-black" />
                    </div>
                )}

                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-black flex items-center">
                            {subOffering.title}
                            {hasNestedSubOfferings && (
                                <span className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold rounded-full bg-orange-500 text-black">
                                    {subOffering.subOfferings!.length}
                                </span>
                            )}
                        </h4>
                        {hasNestedSubOfferings && (
                            <ChevronRight className={`h-3 w-3 text-black/70 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''
                                }`} />
                        )}
                    </div>
                    <p className="text-xs text-black/80 mt-0.5">
                        {subOffering.description}
                    </p>
                </div>
            </div>

            {/* Nested Sub-offerings */}
            <AnimatePresence>
                {hasNestedSubOfferings && isExpanded && (
                    <motion.div
                        variants={expandVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="mt-1 overflow-hidden"
                    >
                        {subOffering.subOfferings!.map((nestedSub) => (
                            <SubOfferingCard
                                key={nestedSub.id}
                                subOffering={nestedSub}
                                isActive={false}
                                onHover={() => onHover()}
                                onLeave={onLeave}
                                level={level + 1}
                                offeringId={offeringId}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const OurOfferings: React.FC<{ offerings: Offering[] }> = ({ offerings = [] }) => {
    const [activeCard, setActiveCard] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>(offerings[0]?.image || '');
    const [selectedTitle, setSelectedTitle] = useState<string>(offerings[0]?.title || '');

    const [expandedCards, setExpandedCards] = useState<Set<string | number>>(new Set());
    const [expandedSubOfferings, setExpandedSubOfferings] = useState<Set<string>>(new Set());

    // Refs for sticky behavior
    // const sectionRef = useRef<HTMLDivElement>(null);

    const handleCardHover = useCallback((offering: Offering) => {
        setActiveCard(offering.id.toString());
        setSelectedImage(offering.hoverImage || offering.image);
        setSelectedTitle(offering.title);
    }, []);

    const handleCardLeave = useCallback(() => {
        setActiveCard(null);
        setSelectedImage(offerings[0]?.image || '');
        setSelectedTitle(offerings[0]?.title || '');
    }, [offerings]);

    const handleCardClick = useCallback((offering: Offering, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent event bubbling

        if (offering.subOfferings && offering.subOfferings.length > 0) {
            setExpandedCards(prev => {
                const newExpanded = new Set(prev);
                if (newExpanded.has(offering.id)) {
                    newExpanded.delete(offering.id);
                    // Also close all sub-offerings when parent closes
                    const newExpandedSubs = new Set(expandedSubOfferings);
                    offering.subOfferings?.forEach(sub => {
                        newExpandedSubs.delete(`${offering.id}-${sub.id}`);
                    });
                    setExpandedSubOfferings(newExpandedSubs);
                } else {
                    newExpanded.add(offering.id);
                }
                return newExpanded;
            });
        }
    }, [expandedSubOfferings]);

    const handleSubOfferingHover = useCallback((offering: Offering, subOffering: SubOffering) => {
        const cardId = `${offering.id}-${subOffering.id}`;
        setActiveCard(cardId);
        setSelectedImage(subOffering.image || offering.hoverImage || offering.image);
        setSelectedTitle(subOffering.title);
    }, []);

    const handleSubOfferingToggle = useCallback((offeringId: string | number, subOfferingId: string | number) => {
        const key = `${offeringId}-${subOfferingId}`;
        setExpandedSubOfferings(prev => {
            const newExpanded = new Set(prev);
            if (newExpanded.has(key)) {
                newExpanded.delete(key);
            } else {
                newExpanded.add(key);
            }
            return newExpanded;
        });
    }, []);

    const countTotalSubOfferings = useCallback((subOfferings: SubOffering[]): number => {
        return subOfferings.reduce((total, sub) => {
            let count = 1;
            if (sub.subOfferings) {
                count += countTotalSubOfferings(sub.subOfferings);
            }
            return total + count;
        }, 0);
    }, []);

    if (!offerings.length) {
        return <div>No offerings available</div>;
    }

    return (
        <AnimatedSection className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto z-10">
                <motion.div className="text-center mb-12 sm:mb-16">
                    <Badge className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 border-orange-200/50 mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        OUR COMPREHENSIVE ECOSYSTEM
                    </Badge>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
                        Interconnected
                        <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                            {' '}Excellence
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        From boutique hospitality to sustainable initiatives, explore our diverse ecosystem of brands working together to create meaningful impact and exceptional experiences
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
                    {/* Left Side - Cards (No scrollbar, natural flow) */}
                    <motion.div className="space-y-4 lg:pr-4">
                        {offerings.map((offering) => {
                            const isCardActive = activeCard === offering.id.toString() || activeCard?.startsWith(`${offering.id}-`);
                            const isExpanded = expandedCards.has(offering.id);

                            return (
                                <motion.div
                                    key={offering.id}
                                    className="group cursor-pointer"
                                    onMouseEnter={() => handleCardHover(offering)}
                                    onMouseLeave={handleCardLeave}
                                    onClick={(e) => handleCardClick(offering, e)}
                                >
                                    <Card className={`border-0 shadow-sm transition-all duration-300 overflow-hidden`}>
                                        <CardContent className="p-4 sm:p-6">
                                            <div className="flex items-center space-x-3 sm:space-x-4">
                                                <div className={`w-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300`}>
                                                    <offering.icon className={`h-5 w-5 sm:h-7 sm:w-7 transition-colors duration-300 ${isCardActive || isExpanded
                                                        ? 'text-black'
                                                        : 'text-gray-700'
                                                        }`} />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className={`text-lg sm:text-xl font-semibold mb-1 sm:mb-2 transition-colors duration-300 flex items-center ${isCardActive || isExpanded
                                                            ? 'text-black'
                                                            : 'text-gray-900'
                                                            }`}>
                                                            {offering.title}
                                                            {offering.subOfferings && offering.subOfferings.length > 0 && (
                                                                <span className="ml-2 sm:ml-3 inline-flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 text-xs font-semibold rounded-full bg-orange-500 text-black">
                                                                    {countTotalSubOfferings(offering.subOfferings)}
                                                                </span>
                                                            )}
                                                        </h3>

                                                        {offering.subOfferings && offering.subOfferings.length > 0 && (
                                                            <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 ${isCardActive || isExpanded
                                                                ? 'text-black'
                                                                : 'text-gray-500'
                                                                } ${isExpanded ? 'rotate-180' : ''}`} />
                                                        )}
                                                    </div>

                                                    <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${isCardActive || isExpanded
                                                        ? 'text-black/90'
                                                        : 'text-gray-600'
                                                        }`}>
                                                        {offering.description}
                                                    </p>
                                                </div>

                                                <ArrowRight className={`h-4 w-4 sm:h-6 sm:w-6 transition-all duration-300 ${isCardActive || isExpanded
                                                    ? 'text-black transform translate-x-1'
                                                    : 'text-gray-400 group-hover:text-gray-600 group-hover:transform group-hover:translate-x-1'
                                                    }`} />
                                            </div>

                                            {/* Sub-offerings */}
                                            <AnimatePresence>
                                                {offering.subOfferings && offering.subOfferings.length > 0 && isExpanded && (
                                                    <motion.div
                                                        variants={expandVariants}
                                                        initial="collapsed"
                                                        animate="expanded"
                                                        exit="collapsed"
                                                        className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-black/20"
                                                    >
                                                        <div className="mb-3 sm:mb-4">
                                                            <p className="text-xs font-semibold text-black/70 uppercase tracking-wider">
                                                                Sub-offerings ({countTotalSubOfferings(offering.subOfferings)})
                                                            </p>
                                                        </div>

                                                        {offering.subOfferings.map((subOffering) => (
                                                            <SubOfferingCard
                                                                key={subOffering.id}
                                                                subOffering={subOffering}
                                                                isActive={activeCard === `${offering.id}-${subOffering.id}`}
                                                                onHover={() => handleSubOfferingHover(offering, subOffering)}
                                                                onLeave={handleCardLeave}
                                                                onToggle={() => handleSubOfferingToggle(offering.id, subOffering.id)}
                                                                isExpanded={expandedSubOfferings.has(`${offering.id}-${subOffering.id}`)}
                                                                level={1}
                                                                offeringId={offering.id}
                                                            />
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="relative lg:sticky lg:top-24">
                        <motion.div className="relative h-60 sm:h-80 lg:h-[500px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20" />

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selectedImage}
                                    src={selectedImage}
                                    alt="Brand showcase"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={imageVariants}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Simple floating badge */}
                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-30">
                                <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm">
                                    {selectedTitle}
                                </Badge>
                            </div>

                            {/* Subtle decorative elements */}
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-20 blur-xl" />
                            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-15 blur-xl" />
                        </motion.div>
                    </div>
                </div>

                {/* Call to Action */}
                <Link to="/brands">
                    <motion.div className="text-center mt-12 sm:mt-16">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            Explore All Brands
                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </motion.div>
                </Link>
            </div>
        </AnimatedSection>
    );
};

export default OurOfferings;