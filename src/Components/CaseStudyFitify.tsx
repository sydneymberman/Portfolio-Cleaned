import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function CaseStudyFitify() {
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
                  UX/UI Design • 2024
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tighter mb-6 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 dark:from-pink-400 dark:via-pink-300 dark:to-pink-200 bg-clip-text text-transparent">
                  Fitify
                </h1>
                <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
                  AI-powered fashion try-on app that revolutionizes online shopping
                </p>
                <div className="flex flex-wrap gap-3">
                  {["UX Design", "Mobile App", "AI", "E-commerce"].map((tag) => (
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
                    src={image_bb30b76d65d2f65f4582095fe5de44d53bb91e46}
                    alt="Fitify App"
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
              className="grid md:grid-cols-4 gap-8 mb-20"
            >
              <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-none p-8">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Role</h3>
                <p className="text-lg">UX/UI Designer</p>
              </div>
              <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-none p-8">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Timeline</h3>
                <p className="text-lg">10 weeks</p>
              </div>
              <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-none p-8">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Platform</h3>
                <p className="text-lg">iOS & Android</p>
              </div>
              <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-lg dark:shadow-none p-8">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Team</h3>
                <p className="text-lg">Team of Four</p>
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
                Fitify is an AI-powered fashion try-on application that allows users to virtually try on clothing from top brands before purchasing. The app uses advanced computer vision and machine learning to provide accurate size matching and style recommendations.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                The goal was to reduce return rates in online fashion retail while improving customer confidence in their purchases.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-pink-50/50 via-white/50 to-white dark:from-zinc-950/50 dark:via-black/50 dark:to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl tracking-tighter mb-8 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent">
                The Problem
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                Online fashion retail faces a critical challenge: <span className="text-pink-600 dark:text-pink-400">30-40% return rates</span> due to sizing issues and style mismatches. Customers struggle to visualize how clothing will look on their body type, leading to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Challenge 01</div>
                  <h3 className="text-xl mb-3">Customer Frustration</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Uncertainty about fit and style leads to purchase hesitation and abandoned carts
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Challenge 02</div>
                  <h3 className="text-xl mb-3">Business Impact</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    High return rates cost retailers billions annually in shipping and restocking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research Section */}
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl tracking-tighter mb-8 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent">
                Research & Insights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                I conducted user interviews with 25 online shoppers and analyzed competitor solutions to understand pain points and opportunities.
              </p>

              <div className="space-y-6">
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <h3 className="text-2xl mb-4">Key Insight #1</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    <span className="text-pink-600 dark:text-pink-400">78% of users</span> said they would shop online more frequently if they could try clothes on virtually
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <h3 className="text-2xl mb-4">Key Insight #2</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Users want <span className="text-pink-600 dark:text-pink-400">personalized recommendations</span> based on their body type and style preferences
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <h3 className="text-2xl mb-4">Key Insight #3</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Trust in AI accuracy was the biggest concern, requiring <span className="text-pink-600 dark:text-pink-400">transparent sizing information</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-pink-50/50 via-white/50 to-white dark:from-zinc-950/50 dark:via-black/50 dark:to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl tracking-tighter mb-8 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent">
                The Solution
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                I designed an intuitive, AI-powered try-on experience that combines cutting-edge technology with a delightful user interface.
              </p>

              <div className="space-y-8">
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <h3 className="text-2xl mb-4">1. Virtual Try-On</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                    Users upload a photo and instantly see clothing items rendered on their body with accurate fit and draping
                  </p>
                  <div className="bg-gradient-to-br from-pink-100/50 to-pink-50/50 dark:from-pink-500/5 dark:to-transparent rounded-xl p-12 text-center border border-pink-200/30 dark:border-pink-500/10">
                    <p className="text-gray-400 dark:text-gray-500">Virtual Try-On Feature Mockup</p>
                  </div>
                </div>

                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <h3 className="text-2xl mb-4">2. Smart Size Matching</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                    AI analyzes body measurements and compares them with brand size charts to recommend the perfect size
                  </p>
                  <div className="bg-gradient-to-br from-pink-100/50 to-pink-50/50 dark:from-pink-500/5 dark:to-transparent rounded-xl p-12 text-center border border-pink-200/30 dark:border-pink-500/10">
                    <p className="text-gray-400 dark:text-gray-500">Size Matching Interface</p>
                  </div>
                </div>

                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                  <h3 className="text-2xl mb-4">3. Style Recommendations</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                    Personalized outfit suggestions based on user preferences, purchase history, and trending styles
                  </p>
                  <div className="bg-gradient-to-br from-pink-100/50 to-pink-50/50 dark:from-pink-500/5 dark:to-transparent rounded-xl p-12 text-center border border-pink-200/30 dark:border-pink-500/10">
                    <p className="text-gray-400 dark:text-gray-500">Recommendation Algorithm Flow</p>
                  </div>
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
                Impact & Results
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                The app prototype was tested with 50+ users, delivering measurable improvements in shopping confidence and purchase intent.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8 text-center">
                  <div className="text-5xl bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent mb-4">
                    -35%
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Projected reduction in return rates
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8 text-center">
                  <div className="text-5xl bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent mb-4">
                    92%
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    User satisfaction rating
                  </p>
                </div>
                <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8 text-center">
                  <div className="text-5xl bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-200 bg-clip-text text-transparent mb-4">
                    +45%
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Increase in purchase confidence
                  </p>
                </div>
              </div>

              <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-md dark:shadow-none p-8">
                <h3 className="text-2xl mb-4">What I Learned</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  This project taught me the importance of balancing cutting-edge AI technology with user trust and transparency. The most successful features were those that clearly communicated how the AI worked and provided users with control over their experience.
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