import { Navigation } from "./Navigation";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import embodyLogo from "figma:asset/382fb7e43884845be7f31dd981c53da8724aac62.png";

const allProjects = [
  {
    title: "Fitify",
    description:
      "AI-powered fashion try-on app that lets users virtually try on clothing from top brands. Features include style recommendations, size matching, and seamless shopping integration.",
    category: "UX/UI Design",
    image:
      "https://images.unsplash.com/photo-1658274474930-bb27a64022c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBzY3JlZW58ZW58MXx8fHwxNzU5NzIxMjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024",
    tags: ["UX Design", "Mobile App", "AI", "E-commerce"],
    link: "/projects/fitify",
  },
  {
    title: "Embody",
    description:
      "AI-powered health monitoring system for PCOS. Hydrogel patches collect biomarkers while the app provides personalized cycle tracking, symptom management, and predictive insights",
    category: "Product Design, UX Design",
    image:
      "https://images.unsplash.com/photo-1658274474930-bb27a64022c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBzY3JlZW58ZW58MXx8fHwxNzU5NzIxMjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025",
    tags: ["Product Design", "UX Design", "Healthcare", "AI"],
    link: "/projects/embody",
  },
  {
    title: "Pong Game",
    description:
      "Smart arcade game where your AI opponent adapts to your skill. Six gameplay modes with physics-bending mechanics and responsive difficulty scaling.",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1658274474930-bb27a64022c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBzY3JlZW58ZW58MXx8fHwxNzU5NzIxMjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024",
    tags: [
      "Web Development",
      "Game Design",
      "AI",
      "JavaScript",
    ],
    link: "/projects/pong",
  },
];

export function AllProjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900 transition-colors duration-500">
      <Navigation />

      {/* Animated gradient orbs in background */}
      <div className="fixed inset-0 pointer-events-none z-0">
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
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
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
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(219, 39, 119, 0.3) 0%, transparent 70%)",
            filter: "blur(100px)",
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
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500"
          animate={{
            x: [0, -180, 120, -90, 0],
            y: [0, 140, -160, 90, 0],
            scale: [1, 0.9, 1.3, 0.95, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(219, 39, 119, 0.2) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tighter mb-6 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 dark:from-pink-400 dark:via-pink-300 dark:to-pink-200 bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Explore my complete portfolio of UX design,
              product design, and web development work.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative cursor-pointer"
                onClick={() => navigate(project.link)}
              >
                {/* Project Card */}
                <div className="relative bg-white/40 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_rgba(236,72,153,0.08)] hover:dark:shadow-[0_8px_32px_rgba(236,72,153,0.15)] transition-all duration-500 overflow-hidden hover:scale-105">
                  {/* Subtle glow on hover in dark mode */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/5 to-transparent" />
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-pink-100/80 to-pink-200/80 dark:from-zinc-900/80 dark:to-zinc-800/80 backdrop-blur-xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 dark:opacity-100 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent" />
                    </div>

                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 space-y-4">
                    <div className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      {project.category}
                    </div>

                    <h3 className="text-2xl tracking-tight">
                      {project.title === "Embody" ? (
                        <img 
                          src={embodyLogo} 
                          alt="Embody" 
                          className="h-8 w-auto" 
                        />
                      ) : (
                        project.title
                      )}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-pink-100/50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-full border border-pink-200/50 dark:border-pink-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Year */}
                    <div className="text-xs text-gray-400 dark:text-gray-500 pt-2">
                      {project.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="inline-block px-8 py-4 bg-white/40 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg">
              <p className="text-gray-600 dark:text-gray-400">
                More projects coming soon! ✨
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}