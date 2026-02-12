import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import embodyLogo from "figma:asset/382fb7e43884845be7f31dd981c53da8724aac62.png";
import embodyImage from "figma:asset/5ae3c122e1f2e7f4381ce2d7577a200629073671.png";

const projects = [
  {
    title: "Fitify",
    description: "AI-powered fashion try-on app that lets users virtually try on clothing from top brands. Features include style recommendations, size matching, and seamless shopping integration.",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1658274474930-bb27a64022c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBzY3JlZW58ZW58MXx8fHwxNzU5NzIxMjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024",
    link: "/projects/fitify",
  },
  {
    title: "Embody",
    description: "AI-powered health monitoring system for PCOS. Hydrogel patches collect biomarkers while the app provides personalized cycle tracking, symptom management, and predictive insights",
    category: "Product Design, UX Design",
    image: embodyImage,
    year: "2025",
    link: "/projects/embody",
  },
  {
    title: "Pong Game",
    description: "Smart arcade game where your AI opponent adapts to your skill. Six gameplay modes with physics-bending mechanics and responsive difficulty scaling.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1658274474930-bb27a64022c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBzY3JlZW58ZW58MXx8fHwxNzU5NzIxMjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024",
    link: "/projects/pong",
  },
];

export function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="py-32 bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <h2 className="text-5xl md:text-6xl tracking-tighter">
              Highlighted Work
            </h2>
            <button 
              onClick={() => navigate('/projects')}
              className="group self-start md:self-auto px-6 py-3 border-2 border-pink-500 dark:border-pink-400 text-pink-600 dark:text-white rounded-full hover:bg-pink-500 hover:text-white hover:shadow-xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>See All Projects</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative pb-16">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -500) {
                    nextSlide();
                  } else if (swipe > 500) {
                    prevSlide();
                  }
                }}
                className="space-y-6 cursor-grab active:cursor-grabbing"
                onClick={() => navigate(projects[currentIndex].link)}
              >
                <div className={`group relative aspect-[4/3] backdrop-blur-xl overflow-hidden rounded-2xl shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/40 dark:border-white/10 ${
                  projects[currentIndex].title === "Embody" 
                    ? "bg-[#FAFAFA]" 
                    : "bg-gradient-to-br from-pink-100/80 to-pink-200/80 dark:from-zinc-900/80 dark:to-zinc-800/80"
                }`}>
                  {/* Glow effect on dark mode */}
                  <div className="absolute inset-0 opacity-0 dark:opacity-100 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent" />
                  </div>
                  
                  <ImageWithFallback
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="group relative space-y-6 p-8 bg-white/40 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_rgba(236,72,153,0.08)] hover:dark:shadow-[0_8px_32px_rgba(236,72,153,0.15)] transition-all duration-500 cursor-pointer">
                  {/* Subtle glow on hover in dark mode */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/5 to-transparent" />
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      {projects[currentIndex].category}
                    </div>
                    <h3 className="text-4xl md:text-5xl tracking-tight">
                      {projects[currentIndex].title === "Embody" ? (
                        <img 
                          src={embodyLogo} 
                          alt="Embody" 
                          className="h-12 md:h-14 w-auto" 
                        />
                      ) : (
                        projects[currentIndex].title
                      )}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {projects[currentIndex].description}
                    </p>
                    <div className="text-sm text-gray-400 dark:text-gray-500">
                      {projects[currentIndex].year}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-2 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border border-pink-500/20 dark:border-pink-400/20 text-pink-500 dark:text-pink-400 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-400 dark:hover:text-white transition-all duration-300 shadow-lg opacity-50 hover:opacity-100"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-2 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border border-pink-500/20 dark:border-pink-400/20 text-pink-500 dark:text-pink-400 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-400 dark:hover:text-white transition-all duration-300 shadow-lg opacity-50 hover:opacity-100"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-pink-500 dark:bg-pink-400 w-8"
                    : "bg-pink-500/30 dark:bg-pink-400/30"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                onClick={() => navigate(project.link)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center cursor-pointer ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`group relative aspect-[4/3] backdrop-blur-xl overflow-hidden rounded-2xl shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/40 dark:border-white/10 hover:scale-105 transition-transform duration-500 ${
                  !isEven ? "lg:col-start-2" : ""
                } ${
                  project.title === "Embody" 
                    ? "bg-[#FAFAFA]" 
                    : "bg-gradient-to-br from-pink-100/80 to-pink-200/80 dark:from-zinc-900/80 dark:to-zinc-800/80"
                }`}>
                  {/* Glow effect on dark mode */}
                  <div className="absolute inset-0 opacity-0 dark:opacity-100 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent" />
                  </div>
                  
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="group relative space-y-6 p-8 bg-white/40 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_rgba(236,72,153,0.08)] hover:dark:shadow-[0_8px_32px_rgba(236,72,153,0.15)] transition-all duration-500">
                  {/* Subtle glow on hover in dark mode */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/5 to-transparent" />
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      {project.category}
                    </div>
                    <h3 className="text-4xl md:text-5xl tracking-tight">
                      {project.title === "Embody" ? (
                        <img 
                          src={embodyLogo} 
                          alt="Embody" 
                          className="h-12 md:h-14 w-auto" 
                        />
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="text-sm text-gray-400 dark:text-gray-500">
                      {project.year}
                    </div>
                  </div>
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
