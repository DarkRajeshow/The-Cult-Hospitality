import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { ReactNode, MouseEvent } from "react";

// Binary Animation Background Component
interface BinaryAnimationBackgroundProps {
    children: ReactNode;
}

export const BinaryAnimationBackground = ({ children }: BinaryAnimationBackgroundProps) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        let str = generateRandomString(); // Generate enough for full screen
        setRandomString(str);
    }, []);

    function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const str = generateRandomString();
        setRandomString(str);
    }

    return (
        <div
            onMouseMove={onMouseMove}
            className="group/hero relative w-full h-screen overflow-hidden"
        >
            {/* Content Layer */}
            <div className="relative z-20 w-full h-full">
                {children}
            </div>

            {/* Binary Animation Overlay */}
            <BinaryPattern
                mouseX={mouseX as unknown as ReturnType<typeof useMotionValue>}
                mouseY={mouseY as unknown as ReturnType<typeof useMotionValue>}
                randomString={randomString}
            />
            </div>
    );
};

// Binary Pattern Component
interface BinaryPatternProps {
    mouseX: ReturnType<typeof useMotionValue>;
    mouseY: ReturnType<typeof useMotionValue>;
    randomString: string;
}

const BinaryPattern = ({ mouseX, mouseY, randomString }: BinaryPatternProps) => {
    let maskImage = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none absolute inset-0 z-10 w-full h-full">
            {/* Animated binary text overlay */}
            <motion.div
                className="absolute inset-0 w-full h-full opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500"
                style={style}
            >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <div className="w-full h-full p-4">
                        <pre className="text-xs font-mono font-semibold text-green-400/80 leading-3 whitespace-pre-wrap break-words animate-pulse w-full h-full">
                            {randomString}
                        </pre>
                    </div>
                </div>
            </motion.div>

            {/* Additional animated overlay for depth */}
            <motion.div
                className="absolute inset-0 w-full h-full opacity-0 group-hover/hero:opacity-30 mix-blend-overlay transition-opacity duration-700"
                style={style}
            >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            </motion.div>
        </div>
    );
};

// Random binary string generator
const characters = "01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101";

const generateRandomString = (): string => {
    let result = "";
    const cols = 200; // Number of characters per row
    const rows = 50; // Number of rows

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            if (col % 8 === 7) result += " "; // Add spaces every 8 characters
        }
        result += "\n"; // New line after each row
    }
    return result;
};
