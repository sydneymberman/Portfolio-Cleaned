import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface MobileCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export function MobileCarousel({ children, className = "" }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePrevious}
          className="w-10 h-10 rounded-full bg-white/40 dark:bg-zinc-900/50 backdrop-blur-lg border border-white/30 dark:border-white/10 flex items-center justify-center hover:bg-pink-100/50 dark:hover:bg-pink-500/10 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-pink-600 dark:bg-pink-400 w-6"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white/40 dark:bg-zinc-900/50 backdrop-blur-lg border border-white/30 dark:border-white/10 flex items-center justify-center hover:bg-pink-100/50 dark:hover:bg-pink-500/10 transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        {currentIndex + 1} / {children.length}
      </div>
    </div>
  );
}
