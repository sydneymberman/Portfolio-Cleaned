import { motion } from "motion/react";
import profileImage from "figma:asset/4c2780809d51f3d525e95708e4f38b395b977cf1.png";

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-black dark:bg-zinc-950 text-white transition-colors duration-500 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-5xl md:text-6xl tracking-tighter mb-8">
              About
            </h2>
            
            {/* Profile Image */}
            <div className="relative group mt-8">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Sydney Berman"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-300">
              I'm a UX/UI designer who loves to design intuitive digital experiences where creativity meets technology.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              I'm pursuing my BFA in User Experience Design with a minor in graphic design at SCAD. For as long as I can remember, I've been passionate about design—exploring everything from traditional art to UX, industrial design, and technology. I'm constantly learning coding, electronics, and emerging tools like AI to expand how I approach design.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
             I believe great design happens when creativity meets empathy—bringing together user needs and beautiful aesthetics to create meaningful digital products.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-32"
        >
          {[
            { value: "20+", label: "Projects" },
            { value: "3", label: "Specialties" },
            { value: "100%", label: "Passion" },
            { value: "∞", label: "Creativity" },
          ].map((stat) => (
            <div 
              key={stat.label} 
              className="group text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Edge glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10" />
              </div>
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
