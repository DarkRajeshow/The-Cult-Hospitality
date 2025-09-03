import React, { useEffect, useState } from 'react';
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import {
  Star,
  Play,
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhanced floating particles with more variety
interface EnhancedParticleProps {
  delay?: number;
  type?: 'default' | 'sparkle' | 'star';
}
const EnhancedParticle: React.FC<EnhancedParticleProps> = ({ delay = 0, type = 'default' }) => {
  type AnimationProps = {
    opacity?: number[]; 
    scale?: number[]; 
    y?: number[]; 
    x?: number[]; 
    rotate?: number[];
  };

  const variants: Record<'default' | 'sparkle' | 'star', { className: string; animation: AnimationProps }> = {
    default: {
      className: "w-1 h-1 bg-amber-400/60 rounded-full",
      animation: {
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [0, -120],
        x: [0, Math.random() * 60 - 30]
      }
    },
    sparkle: {
      className: "w-2 h-2 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full",
      animation: {
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0, 1.5, 0.8, 1.2, 0],
        rotate: [0, 180, 360],
        y: [0, -100],
        x: [0, Math.random() * 40 - 20]
      }
    },
    star: {
      className: "w-3 h-3",
      animation: {
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 360],
        y: [0, -150],
        x: [0, Math.random() * 50 - 25]
      }
    }
  };

  const variant = variants[type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={variant.animation}
      transition={{
        duration: type === 'star' ? 4 : 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 1
      }}
      className={`absolute ${variant.className}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${75 + Math.random() * 25}%`
      }}
    >
      {type === 'star' && (
        <Sparkles className="w-full h-full text-amber-400/80 fill-amber-400/40" />
      )}
    </motion.div>
  );
};

// Enhanced typewriter with more fluid animation
interface TypewriterTextProps {
  words: string[];
  className?: string;
}
const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  className = ""
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 30 : Math.random() * 100 + 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-amber-400"
      >
        |
      </motion.span>
    </span>
  );
};

// Mouse follower effect
const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
      style={{
        background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
      }}
      animate={{
        x: 0,
        y: 0,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
    />
  );
};

// Animated background elements
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: 0.5
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          <div className={`w-${8 + i * 4} h-${8 + i * 4} border border-amber-400/30 ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'
            }`} />
        </motion.div>
      ))}
    </div>
  );
};

interface HeroContent {
  guests: string;
  heading: string[];
  subtitle: string;
  typewriterWords: string[];
  rating: { value: number; label: string };
  cta: { label: string; link: string };
  video: { title: string; description: string };
}

const HeroSection: React.FC<{ content: HeroContent }> = ({ content }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);


  // Mouse movement effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative h-[100vh] sm:h-screen overflow-hidden">
      {/* Mouse Follower */}
      <MouseFollower />

      {/* Enhanced Background with Multiple Layers */}
      <div
        className="absolute inset-0 scale-110"
      >
        {/* Primary Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/images/lobby.png')`
          }}
        />

        {/* Enhanced Gradient Overlays */}
        <motion.div
          style={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-orange-600/10" /> */}

        {/* Dynamic Grain Effect */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 100%", "100% 0%"]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-25 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz48L3N2Zz4=')] bg-repeat"
        />

        {/* Floating Geometric Shapes */}
        <FloatingShapes />
      </div>

      {/* Enhanced Floating Particles System */}
      {[...Array(8)].map((_, i) => (
        <EnhancedParticle key={`default-${i}`} delay={i * 0.3} type="default" />
      ))}
      {[...Array(5)].map((_, i) => (
        <EnhancedParticle key={`sparkle-${i}`} delay={i * 0.6 + 2} type="sparkle" />
      ))}
      {[...Array(3)].map((_, i) => (
        <EnhancedParticle key={`star-${i}`} delay={i * 1.2 + 4} type="star" />
      ))}

      {/* Main Content with Mouse Following */}
      <motion.div
        style={{
          x: springX,
          rotateX: useTransform(springY, [-20, 20], [5, -5]),
          rotateY: useTransform(springX, [-20, 20], [-5, 5])
        }}
        className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl sm:max-w-4xl lg:max-w-6xl mx-auto perspective-1000">
          {/* Enhanced Location Badge with Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 200 }}
            className="mb-4 sm:mb-6 lg:mb-8 flex flex-wrap justify-center gap-2 sm:gap-4"
          >
            <div className="bg-white/10 text-white border border-amber-400/30 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base flex items-center gap-2">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-400" />
              {content.guests}
            </div>
          </motion.div>

          {/* Enhanced Main Heading with 3D Effect */}
          <div className="mb-4 sm:mb-6 lg:mb-8 perspective-1000">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-MyAwesomeFont font-semibold text-white mb-2 sm:mb-4 leading-tight sm:leading-none tracking-tight"
            >
              <motion.span
                initial={{ y: 150, opacity: 0 }}
                animate={isLoaded ? { y: 0, opacity: 1, rotateX: 0 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="block transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {content.heading[0]}
              </motion.span>
              <motion.span
                initial={{ y: 150, opacity: 0 }}
                animate={isLoaded ? { y: 0, opacity: 1, rotateX: 0 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="block bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 bg-clip-text text-transparent transform-gpu filter drop-shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {content.heading[1]}
              </motion.span>
            </motion.h1>
          </div>

          {/* Enhanced Subtitle with Improved Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-6 sm:mb-8 lg:mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/95 font-medium mb-4 sm:mb-6 leading-relaxed">
              {content.subtitle}{" "}
              <TypewriterText
                words={content.typewriterWords}
                className="text-transparent bg-yellow-400 font-semibold bg-clip-text"
              />
            </p>

            {/* Enhanced Rating Display */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-white/80 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: -180, scale: 0 }}
                    animate={isLoaded ? { opacity: 1, rotate: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 1.8 + i * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-amber-400 text-amber-400 filter drop-shadow-sm" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm sm:text-base lg:text-lg font-medium">{content.rating.value} {content.rating.label}</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons with Better Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold overflow-hidden group transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Link to={content.cta.link}>
                <span className="relative flex items-center gap-2 sm:gap-3 z-10">
                  {content.cta.label}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <motion.div
                className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateX: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl sm:max-w-5xl w-full aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full border-4 border-amber-400/30 border-t-amber-400 flex items-center justify-center"
                  >
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 ml-1" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{content.video.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base lg:text-lg">{content.video.description}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowVideo(false)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm text-white/80 hover:text-white flex items-center justify-center text-lg sm:text-xl font-medium transition-all duration-200"
              >
                ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;