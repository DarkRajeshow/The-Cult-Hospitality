import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';


// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const AnimatedSection = ({ children, className = "" }) => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
