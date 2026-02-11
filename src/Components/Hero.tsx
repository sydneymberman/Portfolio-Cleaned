import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-black dark:via-zinc-950 dark:to-black transition-colors duration-500">
      {/* Ambient glow effects - lava lamp style */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light mode orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-500"
          animate={{
            x: [0, 200, -150, 100, 0],
            y: [0, -120, 180, -80, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-500"
          animate={{
            x: [0, -180, 120, -90, 0],
            y: [0, 140, -160, 90, 0],
            scale: [1, 0.9, 1.3, 0.95, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(219, 39, 119, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-500"
          animate={{
            x: [0, -100, 150, -80, 0],
            y: [0, 100, -120, 140, 0],
            scale: [1, 1.1, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.25) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        
        {/* Dark mode orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500"
          animate={{
            x: [0, 200, -150, 100, 0],
            y: [0, -120, 180, -80, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 dark:opacity-100 transition-opacity duration-500"
          animate={{
            x: [0, -180, 120, -90, 0],
            y: [0, 140, -160, 90, 0],
            scale: [1, 0.9, 1.3, 0.95, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(219, 39, 119, 0.2) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500"
          animate={{
            x: [0, -100, 150, -80, 0],
            y: [0, 100, -120, 140, 0],
            scale: [1, 1.1, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.15) 10%, transparent 80%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-7xl w-full px-6 lg:px-12 text-left relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight">
            <span 
              className="block bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
              style={{ 
                textShadow: '0 0 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              USER EXPERIENCE
            </span>
            <span className="block">
              <span 
                className="bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
                style={{ 
                  textShadow: '0 0 1px rgba(255, 255, 255, 0.1)',
                }}
              >
                DESIGNER
              </span>
              {' '}
              <span 
                className="text-4xl md:text-5xl lg:text-6xl text-gray-500 dark:text-gray-500 inline-block align-top translate-y-[10px]"
              >
                graphic designer
              </span>
            </span>
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
}
