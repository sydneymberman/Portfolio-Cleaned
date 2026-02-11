import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function CaseStudyPong() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Navigation />
      
      {/* Animated gradient orbs in background */}
      <div className="fixed inset-0 pointer-events-none z-0">
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500"
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
            background: 'radial-gradient(circle, rgba(219, 39, 119, 0.2) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32">
          <div className="max-w-7xl mx-auto w-full">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(-1)}
              className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </motion.button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-2 bg-pink-100/50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-full text-sm mb-6 border border-pink-200/50 dark:border-pink-500/20">
                  Web Development • 2024
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tighter mb-6 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 dark:from-pink-400 dark:via-pink-300 dark:to-pink-200 bg-clip-text text-transparent">
                  Pong Game
                </h1>
                <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
                  Smart arcade game where your AI opponent adapts to your skill
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Web Development", "Game Design", "AI", "JavaScript"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm bg-white/40 dark:bg-zinc-900/50 backdrop-blur-lg rounded-full border border-white/30 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent rounded-3xl blur-3xl" />
                <div className="relative bg-white/40 dark:bg-zinc-900/50 backdrop-blur-lg rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1543033906-8f2a9f541af9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNhZGUlMjBnYW1lJTIwcmV0cm8lMjBuZW9ufGVufDF8fHx8MTc2MzY3MTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pong Game"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8 mb-20"
            >
              <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-none p-8">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Role</h3>
                <p className="text-lg">Full-Stack Developer</p>
              </div>
              <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-none p-8">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Timeline</h3>
                <p className="text-lg">4 weeks</p>
              </div>
              <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-none p-8">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Platform</h3>
                <p className="text-lg">Web (Canvas)</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl tracking-tighter mb-8 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent">
                Overview
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                A modern take on the classic Pong game, featuring adaptive AI that learns from player behavior and adjusts difficulty in real-time. The game includes six unique gameplay modes with physics-bending mechanics that create an engaging, endlessly replayable experience.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Built entirely with vanilla JavaScript and HTML5 Canvas, this project showcases dynamic game physics, collision detection, and machine learning algorithms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-pink-50/50 via-white/50 to-white dark:from-zinc-950/50 dark:via-black/50 dark:to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl tracking-tighter mb-8 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent">
                The Challenge
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                Classic arcade games often suffer from <span className="text-pink-600 dark:text-pink-400">static difficulty curves</span>. New players get frustrated by impossible AI, while experienced players find the game too easy. The challenge was to create an AI that:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Goal 01</div>
                  <h3 className="text-xl mb-3">Adapts Dynamically</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Matches player skill level without explicit difficulty settings
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Goal 02</div>
                  <h3 className="text-xl mb-3">Feels Natural</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Creates challenging but fair gameplay that keeps players engaged
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Approach Section */}
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl tracking-tighter mb-8 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent">
                Technical Approach
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                I implemented a hybrid AI system combining predictive algorithms with performance tracking to create truly adaptive gameplay.
              </p>

              <div className="space-y-6">
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <h3 className="text-2xl mb-4">Adaptive AI Algorithm</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    The AI analyzes <span className="text-pink-600 dark:text-pink-400">player win rate, reaction time, and rally length</span> to adjust paddle speed and prediction accuracy in real-time
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <h3 className="text-2xl mb-4">Physics Engine</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Custom collision detection system with <span className="text-pink-600 dark:text-pink-400">realistic ball spin, momentum transfer,</span> and angle-based deflection
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <h3 className="text-2xl mb-4">Performance Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Implemented <span className="text-pink-600 dark:text-pink-400">requestAnimationFrame</span> for smooth 60fps gameplay and efficient rendering
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-pink-50/50 via-white/50 to-white dark:from-zinc-950/50 dark:via-black/50 dark:to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl tracking-tighter mb-8 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent">
                Gameplay Modes
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                Six unique game modes that transform the classic Pong experience with physics-bending mechanics.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Mode 01</div>
                  <h3 className="text-xl mb-3">Gravity Mode</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ball falls downward with realistic gravity physics
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Mode 02</div>
                  <h3 className="text-xl mb-3">Speed Mode</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ball accelerates with each paddle hit for intense rallies
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Mode 03</div>
                  <h3 className="text-xl mb-3">Multi-Ball Mode</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Multiple balls spawn creating chaotic gameplay
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Mode 04</div>
                  <h3 className="text-xl mb-3">Wave Mode</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Paddles move in a wave pattern for added challenge
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Mode 05</div>
                  <h3 className="text-xl mb-3">Target Mode</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Hit targets on the opponent's side to score bonus points
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Mode 06</div>
                  <h3 className="text-xl mb-3">Chaos Mode</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Random power-ups and obstacles appear mid-game
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl tracking-tighter mb-8 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent">
                Results & Impact
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                The game was playtested with 100+ users, with feedback driving several iterations of the AI balancing system.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8 text-center">
                  <div className="text-5xl bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent mb-4">
                    4.8/5
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Average fun rating from playtesters
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8 text-center">
                  <div className="text-5xl bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent mb-4">
                    12min
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Average session length (3x industry standard)
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8 text-center">
                  <div className="text-5xl bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent mb-4">
                    85%
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Players said AI felt "fair and challenging"
                  </p>
                </div>
              </div>

              <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                <h3 className="text-2xl mb-4">What I Learned</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  This project deepened my understanding of game physics, AI behavior, and the importance of playtesting. The adaptive difficulty system taught me that great UX isn't just about interfaces - it's about creating experiences that feel natural and responsive. The most rewarding feedback was hearing players say the AI felt "almost human" in its responses.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <button
                onClick={() => navigate('/projects')}
                className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 dark:from-pink-500 dark:to-pink-400 text-white rounded-full hover:shadow-xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <span>View All Projects</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}