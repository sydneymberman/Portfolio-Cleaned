import * as motionReact from "motion/react";
const { motion } = motionReact;
import { Navigation } from "./Navigation";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { MobileCarousel } from "./MobileCarousel";

export function CaseStudyFitify() {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState<
    number | null
  >(null);

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <Navigation />

      {/* Lava Lamp Effect - Animated gradient orbs in background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Orb 1 */}
        <motion.div
          className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full"
          animate={{
            x: [0, 150, -100, 80, 0],
            y: [0, -100, 150, -70, 0],
            scale: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, #3b82f6 30%, transparent) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        {/* Orb 2 */}
        <motion.div
          className="absolute top-[60%] right-[20%] w-[450px] h-[450px] rounded-full"
          animate={{
            x: [0, -120, 100, -80, 0],
            y: [0, 120, -140, 80, 0],
            scale: [1, 0.9, 1.4, 0.95, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, #3b82f6 25%, transparent) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Orb 3 */}
        <motion.div
          className="absolute bottom-[15%] left-[25%] w-[400px] h-[400px] rounded-full"
          animate={{
            x: [0, 180, -120, 90, 0],
            y: [0, -130, 110, -90, 0],
            scale: [1, 1.1, 0.85, 1.25, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, #3b82f6 20%, transparent) 0%, transparent 70%)",
            filter: "blur(95px)",
          }}
        />
        {/* Orb 4 */}
        <motion.div
          className="absolute top-[35%] right-[10%] w-[350px] h-[350px] rounded-full"
          animate={{
            x: [0, -90, 110, -70, 0],
            y: [0, 100, -120, 90, 0],
            scale: [1, 1.2, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, #3b82f6 22%, transparent) 0%, transparent 70%)",
            filter: "blur(85px)",
          }}
        />
        {/* Orb 5 */}
        <motion.div
          className="absolute bottom-[40%] right-[35%] w-[380px] h-[380px] rounded-full"
          animate={{
            x: [0, 130, -110, 95, 0],
            y: [0, -95, 125, -80, 0],
            scale: [1, 0.95, 1.25, 1.05, 1],
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, #3b82f6 18%, transparent) 0%, transparent 70%)",
            filter: "blur(88px)",
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
              className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </motion.button>

            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm mb-12 border border-blue-500/20">
                  UXDG 101 • UX Foundations • 2024
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-12 lg:mb-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl -z-10" />
                <div className="relative w-full max-w-full lg:max-w-4xl mx-auto overflow-hidden rounded-3xl">
                  <div
                    className="w-full aspect-[16/9] flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e3a8a 100%)",
                    }}
                  >
                    <div className="text-center text-white/90 px-8">
                      <p
                        className="text-6xl md:text-8xl tracking-tight italic mb-4"
                        style={{ fontWeight: 300 }}
                      >
                        fitify
                      </p>
                      <p className="text-lg md:text-xl tracking-widest uppercase opacity-70">
                        See the fit
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center lg:-mt-[7.1875rem] relative z-10"
              >
                <div className="flex justify-center mb-6">
                  <h1
                    className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-blue-500 italic"
                    style={{ fontWeight: 300 }}
                  >
                    fitify
                  </h1>
                </div>
                <p className="text-2xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  A unique e-commerce platform transforming the
                  online shopping experience using AI-powered
                  virtual try-on technology
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    "UX Design",
                    "Mobile App",
                    "AI",
                    "E-commerce",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm bg-card/70 backdrop-blur-lg rounded-full border border-border text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
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
              <div className="bg-card/70 backdrop-blur-lg rounded-2xl border border-border p-8">
                <h3
                  className="text-sm uppercase tracking-widest text-blue-500 mb-4"
                  style={{ fontWeight: 600 }}
                >
                  Role
                </h3>
                <p className="text-lg text-foreground">
                  UX/UI Designer
                </p>
              </div>
              <div className="bg-card/70 backdrop-blur-lg rounded-2xl border border-border p-8">
                <h3
                  className="text-sm uppercase tracking-widest text-blue-500 mb-4"
                  style={{ fontWeight: 600 }}
                >
                  Timeline
                </h3>
                <p className="text-lg text-foreground">
                  10 weeks (2024)
                </p>
              </div>
              <div className="bg-card/70 backdrop-blur-lg rounded-2xl border border-border p-8">
                <h3
                  className="text-sm uppercase tracking-widest text-blue-500 mb-4"
                  style={{ fontWeight: 600 }}
                >
                  Platform
                </h3>
                <p className="text-lg text-foreground">
                  iOS Mobile App
                </p>
              </div>
              <div className="bg-card/70 backdrop-blur-lg rounded-2xl border border-border p-8">
                <h3
                  className="text-sm uppercase tracking-widest text-blue-500 mb-4"
                  style={{ fontWeight: 600 }}
                >
                  Team
                </h3>
                <p className="text-lg text-foreground">
                  Steven Vasil, Nicky Zuino, Joy Carter, Sydney
                  Berman
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                Overview
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                Fitify is a{" "}
                <span className="text-blue-500 font-semibold">
                  unique e-commerce platform
                </span>{" "}
                transforming the online shopping experience using{" "}
                <span className="text-blue-500 font-semibold">
                  AI image generation
                </span>
                . Users can virtually try on clothing from top
                brands, see how items look on their body type, and
                shop with confidence — all from their phone.
              </p>
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                The app bridges the gap between browsing and buying
                by letting users upload a photo and instantly
                visualize how garments fit, reducing hesitation and
                eliminating the guesswork of online fashion
                shopping.
              </p>
              <p className="text-xl text-foreground/80 leading-relaxed">
                With{" "}
                <span className="text-blue-500 font-semibold">
                  30–40% of online clothing
                </span>{" "}
                purchases returned due to sizing issues, and{" "}
                <span className="text-blue-500 font-semibold">
                  70% of those returns
                </span>{" "}
                attributed to poor fit, Fitify addresses a critical
                pain point in the fashion e-commerce industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Prototype Video */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-blue-500/5 via-background to-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                Prototype Video
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-12">
                A walkthrough of the Fitify experience — from
                onboarding to virtual try-on to checkout.
              </p>
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/15 bg-card/80 backdrop-blur-lg aspect-video flex items-center justify-center">
                <div className="text-center px-8">
                  <div
                    className="text-6xl text-blue-500 mb-4"
                    style={{ fontWeight: 300 }}
                  >
                    ▶
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Fitify Prototype Walkthrough
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Fitify? */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-blue-500/5 via-background to-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                Why{" "}
                <span className="text-blue-500 italic" style={{ fontWeight: 300 }}>
                  fitify
                </span>
                ?
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-12">
                Online fashion shopping is broken. Customers can't
                see how clothes will actually look on them, leading
                to frustration, wasted money, and mountains of
                returns.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-5xl text-blue-500 mb-4"
                    style={{ fontWeight: 700 }}
                  >
                    $817B
                  </div>
                  <h3 className="text-xl mb-3 text-foreground font-semibold">
                    Global Market
                  </h3>
                  <p className="text-muted-foreground">
                    The online fashion market continues to grow,
                    yet the shopping experience remains fundamentally
                    flawed.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-5xl text-blue-500 mb-4"
                    style={{ fontWeight: 700 }}
                  >
                    30-40%
                  </div>
                  <h3 className="text-xl mb-3 text-foreground font-semibold">
                    Return Rate
                  </h3>
                  <p className="text-muted-foreground">
                    Average return rate for online clothing —
                    costing retailers billions annually in shipping
                    and restocking.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-5xl text-blue-500 mb-4"
                    style={{ fontWeight: 700 }}
                  >
                    70%
                  </div>
                  <h3 className="text-xl mb-3 text-foreground font-semibold">
                    Due to Poor Fit
                  </h3>
                  <p className="text-muted-foreground">
                    of returns are caused by sizing issues — the
                    single biggest reason customers send items
                    back.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-5xl text-blue-500 mb-4"
                    style={{ fontWeight: 700 }}
                  >
                    52%
                  </div>
                  <h3 className="text-xl mb-3 text-foreground font-semibold">
                    Cart Abandonment
                  </h3>
                  <p className="text-muted-foreground">
                    of shoppers abandon their cart due to
                    uncertainty about how clothing will fit or look
                    on them.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research & Discovery */}
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                Research & Discovery
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-12">
                We conducted user interviews with frequent online
                shoppers, performed competitive analysis of
                existing try-on solutions, and developed personas
                to understand pain points and opportunities in the
                fashion e-commerce space.
              </p>

              {/* Competitive Analysis Placeholder */}
              <div className="mb-12">
                <h3
                  className="text-2xl mb-4 text-foreground"
                  style={{ fontWeight: 600 }}
                >
                  Competitive Analysis
                </h3>
                <p className="text-muted-foreground mb-6">
                  We analyzed existing virtual try-on solutions and
                  fashion apps to identify gaps and opportunities
                  for differentiation.
                </p>
                <div className="rounded-2xl overflow-hidden border border-blue-500/15 bg-card/80 backdrop-blur-lg p-12 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <p className="text-muted-foreground text-lg">
                      Competitive Analysis Board
                    </p>
                  </div>
                </div>
              </div>

              {/* What We Learned */}
              {/* Mobile Carousel */}
              <div className="md:hidden mb-12">
                <MobileCarousel>
                  {[
                    <div
                      key="insight1"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8"
                    >
                      <div
                        className="text-sm uppercase tracking-wider text-blue-500 mb-3"
                        style={{ fontWeight: 600 }}
                      >
                        What We Learned
                      </div>
                      <h3
                        className="text-2xl mb-4 text-foreground"
                        style={{ fontWeight: 600 }}
                      >
                        Seeing Is Believing
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Users overwhelmingly said they want to see
                        clothes on THEIR body, not a model. Generic
                        product photos create a disconnect that
                        erodes confidence.
                      </p>
                    </div>,
                    <div
                      key="insight2"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8"
                    >
                      <div
                        className="text-sm uppercase tracking-wider text-blue-500 mb-3"
                        style={{ fontWeight: 600 }}
                      >
                        What We Learned
                      </div>
                      <h3
                        className="text-2xl mb-4 text-foreground"
                        style={{ fontWeight: 600 }}
                      >
                        Size Charts Fail
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Size charts are confusing and inconsistent
                        across brands. Users expressed frustration
                        at being a different size in every store,
                        making it impossible to shop confidently.
                      </p>
                    </div>,
                    <div
                      key="insight3"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8"
                    >
                      <div
                        className="text-sm uppercase tracking-wider text-blue-500 mb-3"
                        style={{ fontWeight: 600 }}
                      >
                        What We Learned
                      </div>
                      <h3
                        className="text-2xl mb-4 text-foreground"
                        style={{ fontWeight: 600 }}
                      >
                        Returns Erode Trust
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Frequent returns create a negative cycle:
                        users lose trust in online shopping, shop
                        less, or only buy from brands where they
                        already know their size.
                      </p>
                    </div>,
                    <div
                      key="insight4"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8"
                    >
                      <div
                        className="text-sm uppercase tracking-wider text-blue-500 mb-3"
                        style={{ fontWeight: 600 }}
                      >
                        What We Learned
                      </div>
                      <h3
                        className="text-2xl mb-4 text-foreground"
                        style={{ fontWeight: 600 }}
                      >
                        Personalization Converts
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Users responded positively to personalized
                        recommendations. Curated selections based
                        on their style preferences significantly
                        increased engagement and purchase intent.
                      </p>
                    </div>,
                  ]}
                </MobileCarousel>
              </div>

              {/* Desktop Stack */}
              <div className="hidden md:block space-y-6 mb-12">
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    What We Learned
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    Seeing Is Believing
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Users overwhelmingly said they want to see
                    clothes on THEIR body, not a model. Generic
                    product photos create a disconnect that erodes
                    confidence.
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    What We Learned
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    Size Charts Fail
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Size charts are confusing and inconsistent
                    across brands. Users expressed frustration at
                    being a different size in every store, making
                    it impossible to shop confidently.
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    What We Learned
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    Returns Erode Trust
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Frequent returns create a negative cycle: users
                    lose trust in online shopping, shop less, or
                    only buy from brands where they already know
                    their size.
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    What We Learned
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    Personalization Converts
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Users responded positively to personalized
                    recommendations. Curated selections based on
                    their style preferences significantly increased
                    engagement and purchase intent.
                  </p>
                </div>
              </div>

              {/* How Might We */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-3xl p-12 border border-blue-500/20 mb-12">
                <h3
                  className="text-2xl mb-8 text-center text-foreground"
                  style={{ fontWeight: 600 }}
                >
                  How Might We?
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <p className="text-foreground/80 text-lg leading-relaxed italic">
                      "How might we help users visualize how
                      clothing fits on their unique body type
                      before purchasing?"
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-foreground/80 text-lg leading-relaxed italic">
                      "How might we reduce return rates by
                      increasing purchase confidence in online
                      fashion shopping?"
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12"></div>
            </motion.div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-blue-500/5 via-background to-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                The Problem
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-12">
                Online clothing shopping is fundamentally
                frustrating. Users can't try before they buy,
                leading to uncertainty, wasted money, and a broken
                experience.
              </p>

              {/* Mobile Carousel */}
              <div className="md:hidden">
                <MobileCarousel>
                  {[
                    <div
                      key="challenge1"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8"
                    >
                      <div
                        className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                        style={{ fontWeight: 600 }}
                      >
                        Challenge 01
                      </div>
                      <h3 className="text-xl mb-3 text-foreground font-semibold">
                        Fit Uncertainty
                      </h3>
                      <p className="text-muted-foreground">
                        Users can't visualize how clothing will look
                        on their specific body type. Product photos
                        on models don't reflect the real shopping
                        experience.
                      </p>
                    </div>,
                    <div
                      key="challenge2"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8"
                    >
                      <div
                        className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                        style={{ fontWeight: 600 }}
                      >
                        Challenge 02
                      </div>
                      <h3 className="text-xl mb-3 text-foreground font-semibold">
                        High Return Rates
                      </h3>
                      <p className="text-muted-foreground">
                        30–40% of online clothing purchases are
                        returned, costing retailers billions
                        annually in shipping, restocking, and lost
                        customer trust.
                      </p>
                    </div>,
                    <div
                      key="challenge3"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8"
                    >
                      <div
                        className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                        style={{ fontWeight: 600 }}
                      >
                        Challenge 03
                      </div>
                      <h3 className="text-xl mb-3 text-foreground font-semibold">
                        Sizing Inconsistency
                      </h3>
                      <p className="text-muted-foreground">
                        Every brand sizes differently, making it
                        impossible for shoppers to know their size
                        without ordering and trying on — then
                        returning what doesn't fit.
                      </p>
                    </div>,
                  ]}
                </MobileCarousel>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Challenge 01
                  </div>
                  <h3 className="text-xl mb-3 text-foreground font-semibold">
                    Fit Uncertainty
                  </h3>
                  <p className="text-muted-foreground">
                    Users can't visualize how clothing will look on
                    their specific body type. Product photos on
                    models don't reflect the real shopping
                    experience.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Challenge 02
                  </div>
                  <h3 className="text-xl mb-3 text-foreground font-semibold">
                    High Return Rates
                  </h3>
                  <p className="text-muted-foreground">
                    30–40% of online clothing purchases are
                    returned, costing retailers billions annually in
                    shipping, restocking, and lost customer trust.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Challenge 03
                  </div>
                  <h3 className="text-xl mb-3 text-foreground font-semibold">
                    Sizing Inconsistency
                  </h3>
                  <p className="text-muted-foreground">
                    Every brand sizes differently, making it
                    impossible for shoppers to know their size
                    without ordering and trying on — then returning
                    what doesn't fit.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Solution - Product Overview */}
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                <span className="hidden lg:flex items-center gap-3">
                  The Solution:{" "}
                  <span
                    className="text-blue-500 italic"
                    style={{ fontWeight: 300 }}
                  >
                    fitify
                  </span>
                </span>
                <span className="lg:hidden flex flex-col gap-2 items-start">
                  <span>The Solution:</span>
                  <span
                    className="text-blue-500 italic"
                    style={{ fontWeight: 300 }}
                  >
                    fitify
                  </span>
                </span>
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-12">
                Through Fitify, online fashion shopping becomes{" "}
                <span className="text-blue-500 font-semibold">
                  visual, confident, and personalized
                </span>
                . An AI-powered platform that lets you see the fit
                before you buy.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Core Feature
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    AI Virtual Try-On
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    AI image generation renders clothing directly
                    onto user-uploaded photos, showing exactly how
                    garments look on their unique body type with
                    accurate fit and draping.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Core Feature
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    Brand Integration
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Shop from top brands like H&M, Zara, and
                    ARITZIA in one unified experience. Browse new
                    arrivals, trending items, and exclusive
                    collections all in one place.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Core Feature
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    Picked for You
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    AI-curated recommendations based on style
                    preferences, body type, and browsing history.
                    The more you use Fitify, the smarter it gets
                    at finding your perfect pieces.
                  </p>
                </div>
              </div>

              {/* Brand Partners Showcase */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-3xl p-12 border border-blue-500/20">
                <h3
                  className="text-2xl mb-8 text-center text-foreground"
                  style={{ fontWeight: 600 }}
                >
                  Brand Partners
                </h3>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  Fitify brings your favorite brands together in
                  one place. Browse, try on, and shop from a
                  curated selection of top fashion retailers.
                </p>

                {/* Mobile Carousel */}
                <div className="md:hidden">
                  <MobileCarousel>
                    {[
                      <div
                        key="brand1"
                        className="flex flex-col items-center"
                      >
                        <div className="w-64 h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border">
                          <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                            H&M
                          </p>
                        </div>
                      </div>,
                      <div
                        key="brand2"
                        className="flex flex-col items-center"
                      >
                        <div className="w-64 h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border">
                          <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                            ZARA
                          </p>
                        </div>
                      </div>,
                      <div
                        key="brand3"
                        className="flex flex-col items-center"
                      >
                        <div className="w-64 h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border">
                          <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                            ARITZIA
                          </p>
                        </div>
                      </div>,
                      <div
                        key="brand4"
                        className="flex flex-col items-center"
                      >
                        <div className="w-64 h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border">
                          <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                            NIKE
                          </p>
                        </div>
                      </div>,
                      <div
                        key="brand5"
                        className="flex flex-col items-center"
                      >
                        <div className="w-64 h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border">
                          <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                            LEVI'S
                          </p>
                        </div>
                      </div>,
                      <div
                        key="brand6"
                        className="flex flex-col items-center"
                      >
                        <div className="w-64 h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border">
                          <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                            UNIQLO
                          </p>
                        </div>
                      </div>,
                    ]}
                  </MobileCarousel>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-12">
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border shadow-sm">
                      <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                        H&M
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border shadow-sm">
                      <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                        ZARA
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border shadow-sm">
                      <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                        ARITZIA
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border shadow-sm">
                      <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                        NIKE
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border shadow-sm">
                      <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                        LEVI'S
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded-2xl border border-border shadow-sm">
                      <p className="text-2xl text-foreground/60 font-semibold tracking-wider">
                        UNIQLO
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Shopping Experience */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-blue-500/5 via-background to-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                Shopping Made Effortless
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-12">
                Fitify is designed to seamlessly integrate into
                how people actually shop — from casual browsing to
                confident purchasing.
              </p>

              {/* Mobile Carousel */}
              <div className="md:hidden">
                <MobileCarousel>
                  {[
                    <div
                      key="experience1"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden"
                    >
                      <div
                        className="w-full h-64 flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                        }}
                      >
                        <p className="text-blue-600/60 text-lg">
                          Browse & Discover
                        </p>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg mb-2 text-foreground font-semibold">
                          Browse & Discover
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Find the perfect outfit from your couch
                          with curated collections and brand
                          partnerships
                        </p>
                      </div>
                    </div>,
                    <div
                      key="experience2"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden"
                    >
                      <div
                        className="w-full h-64 flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                        }}
                      >
                        <p className="text-blue-600/60 text-lg">
                          Try Before You Buy
                        </p>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg mb-2 text-foreground font-semibold">
                          Try Before You Buy
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          See exactly how it looks on you with
                          AI-powered virtual try-on
                        </p>
                      </div>
                    </div>,
                    <div
                      key="experience3"
                      className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden"
                    >
                      <div
                        className="w-full h-64 flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                        }}
                      >
                        <p className="text-blue-600/60 text-lg">
                          Shop with Confidence
                        </p>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg mb-2 text-foreground font-semibold">
                          Shop with Confidence
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Purchase knowing it'll fit — fewer
                          returns, more satisfaction
                        </p>
                      </div>
                    </div>,
                  ]}
                </MobileCarousel>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-8">
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden">
                  <div
                    className="w-full h-64 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                    }}
                  >
                    <p className="text-blue-600/60 text-lg">
                      Browse & Discover
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg mb-2 text-foreground font-semibold">
                      Browse & Discover
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Find the perfect outfit from your couch with
                      curated collections and brand partnerships
                    </p>
                  </div>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden">
                  <div
                    className="w-full h-64 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                    }}
                  >
                    <p className="text-blue-600/60 text-lg">
                      Try Before You Buy
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg mb-2 text-foreground font-semibold">
                      Try Before You Buy
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      See exactly how it looks on you with
                      AI-powered virtual try-on
                    </p>
                  </div>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden">
                  <div
                    className="w-full h-64 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                    }}
                  >
                    <p className="text-blue-600/60 text-lg">
                      Shop with Confidence
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg mb-2 text-foreground font-semibold">
                      Shop with Confidence
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Purchase knowing it'll fit — fewer returns,
                      more satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground text-center"
                style={{ fontWeight: 600 }}
              >
                App Features
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
                The Fitify app provides a seamless shopping
                experience with AI-powered try-on, personalized
                recommendations, and multi-brand integration.
              </p>

              {/* Mobile Images - horizontal scroll */}
              <div className="lg:hidden flex overflow-x-auto gap-4 mb-12 pb-4 px-2">
                {[
                  "Virtual Try-On",
                  "Brand Discovery",
                  "Picked for You",
                  "Smart Filtering",
                  "Seamless Checkout",
                ].map((label) => (
                  <div
                    key={label}
                    className="w-40 h-72 flex-shrink-0 drop-shadow-xl rounded-2xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)",
                    }}
                  >
                    <p className="text-white/70 text-xs text-center px-3">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile Accordion */}
              <div className="lg:hidden space-y-4">
                {/* Feature 1 */}
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === 0 ? null : 0,
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-semibold text-foreground">
                      Virtual Try-On
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground transition-transform ${openAccordion === 0 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openAccordion === 0 && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground text-base mb-4">
                        Upload a photo and instantly see any
                        garment rendered on your body. AI image
                        generation creates accurate visualizations
                        showing fit, draping, and proportions.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            One-tap photo upload with camera or
                            gallery
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            AI renders clothing with accurate fit
                            and draping
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Compare multiple outfits side by side
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Feature 2 */}
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === 1 ? null : 1,
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-semibold text-foreground">
                      Brand Discovery
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground transition-transform ${openAccordion === 1 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openAccordion === 1 && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground text-base mb-4">
                        Browse and shop from top fashion brands
                        all in one app. Discover new arrivals,
                        trending collections, and exclusive items
                        from H&M, Zara, ARITZIA, and more.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Multi-brand catalog in one unified
                            app
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            New arrivals and trending items
                            updated daily
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Brand-specific collections and
                            exclusive drops
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Feature 3 */}
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === 2 ? null : 2,
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-semibold text-foreground">
                      Picked for You
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground transition-transform ${openAccordion === 2 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openAccordion === 2 && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground text-base mb-4">
                        AI-curated recommendations that learn your
                        style. The more you browse and try on, the
                        smarter Fitify gets at surfacing pieces
                        you'll love.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Personalized "Picked for You" feed
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Style preference learning over time
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Cross-brand recommendations based on
                            taste
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Feature 4 */}
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === 3 ? null : 3,
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-semibold text-foreground">
                      Smart Filtering
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground transition-transform ${openAccordion === 3 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openAccordion === 3 && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground text-base mb-4">
                        Find exactly what you're looking for with
                        intelligent search and filtering. Sort by
                        brand, style, price, occasion, and more.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Filter by brand, category, price range
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Occasion-based search (casual, formal,
                            athletic)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Save searches and get notified of new
                            matches
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Feature 5 */}
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === 4 ? null : 4,
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-semibold text-foreground">
                      Seamless Checkout
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground transition-transform ${openAccordion === 4 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openAccordion === 4 && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground text-base mb-4">
                        Save favorites, compare items, and check
                        out directly within the app. A smooth end-
                        to-end shopping experience from discovery
                        to doorstep.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Wishlist and favorites with try-on
                            previews
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            In-app secure checkout across all
                            brands
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-sm font-bold">
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm">
                            Order tracking and delivery
                            notifications
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop Layout - hidden on mobile */}
              <div className="hidden lg:block space-y-24">
                {/* Virtual Try-On */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3
                      className="text-3xl mb-6 text-foreground"
                      style={{ fontWeight: 600 }}
                    >
                      Virtual Try-On
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      Upload a photo and instantly see any garment
                      rendered on your body. AI image generation
                      creates accurate visualizations showing fit,
                      draping, and proportions.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          One-tap photo upload with camera or
                          gallery
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          AI renders clothing with accurate fit
                          and draping
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Compare multiple outfits side by side
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <div
                      className="w-80 h-[500px] mx-auto rounded-3xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)",
                      }}
                    >
                      <p className="text-white/50 text-sm">
                        Virtual Try-On Screen
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Brand Discovery */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1 rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <div
                      className="w-full h-[500px] max-w-sm mx-auto rounded-3xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)",
                      }}
                    >
                      <p className="text-white/50 text-sm">
                        Brand Discovery Screen
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1 lg:order-2"
                  >
                    <h3
                      className="text-3xl mb-6 text-foreground"
                      style={{ fontWeight: 600 }}
                    >
                      Brand Discovery
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      Browse and shop from top fashion brands all
                      in one app. Discover new arrivals, trending
                      collections, and exclusive items from H&M,
                      Zara, ARITZIA, and more.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Multi-brand catalog in one unified app
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          New arrivals and trending items updated
                          daily
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Brand-specific collections and exclusive
                          drops
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* Picked for You */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3
                      className="text-3xl mb-6 text-foreground"
                      style={{ fontWeight: 600 }}
                    >
                      Picked for You
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      AI-curated recommendations that learn your
                      style. The more you browse and try on, the
                      smarter Fitify gets at surfacing pieces
                      you'll love.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Personalized "Picked for You" feed
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Style preference learning over time
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Cross-brand recommendations based on
                          taste
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <div
                      className="w-80 h-[500px] mx-auto rounded-3xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)",
                      }}
                    >
                      <p className="text-white/50 text-sm">
                        Picked for You Screen
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Smart Filtering */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1 rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <div
                      className="w-80 h-[500px] mx-auto rounded-3xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)",
                      }}
                    >
                      <p className="text-white/50 text-sm">
                        Smart Filtering Screen
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1 lg:order-2"
                  >
                    <h3
                      className="text-3xl mb-6 text-foreground"
                      style={{ fontWeight: 600 }}
                    >
                      Smart Filtering
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      Find exactly what you're looking for with
                      intelligent search and filtering. Sort by
                      brand, style, price, occasion, and more.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Filter by brand, category, price range
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Occasion-based search (casual, formal,
                          athletic)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Save searches and get notified of new
                          matches
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* Seamless Checkout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3
                      className="text-3xl mb-6 text-foreground"
                      style={{ fontWeight: 600 }}
                    >
                      Seamless Checkout
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      Save favorites, compare items, and check out
                      directly within the app. A smooth end-to-end
                      shopping experience from discovery to
                      doorstep.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Wishlist and favorites with try-on
                          previews
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          In-app secure checkout across all brands
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-foreground/80">
                          Order tracking and delivery notifications
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <div
                      className="w-80 h-[500px] mx-auto rounded-3xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)",
                      }}
                    >
                      <p className="text-white/50 text-sm">
                        Checkout Screen
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design System */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-blue-500/5 via-background to-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                Design System
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-12">
                A clean, modern visual language that conveys trust,
                confidence, and the cutting-edge technology
                powering the experience.
              </p>

              {/* Color Palette */}
              <div className="mb-12">
                <h3
                  className="text-2xl mb-6 text-foreground"
                  style={{ fontWeight: 600 }}
                >
                  Color Palette
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-border">
                    <div
                      className="w-full h-24 rounded-lg mb-4"
                      style={{ backgroundColor: "#3360EC" }}
                    ></div>
                    <p className="font-mono text-sm text-muted-foreground">
                      #3360EC
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      Primary Blue
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-border">
                    <div
                      className="w-full h-24 rounded-lg mb-4"
                      style={{ backgroundColor: "#1A1A2E" }}
                    ></div>
                    <p className="font-mono text-sm text-muted-foreground">
                      #1A1A2E
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      Primary Dark
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-border">
                    <div className="w-full h-24 bg-white rounded-lg mb-4 border border-gray-200"></div>
                    <p className="font-mono text-sm text-muted-foreground">
                      #FFFFFF
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      Primary Light
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-border">
                    <div
                      className="w-full h-24 rounded-lg mb-4"
                      style={{ backgroundColor: "#6B8AFF" }}
                    ></div>
                    <p className="font-mono text-sm text-muted-foreground">
                      #6B8AFF
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      Accent Blue
                    </p>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border p-8">
                <h3
                  className="text-2xl mb-6 text-foreground"
                  style={{ fontWeight: 600 }}
                >
                  Typography
                </h3>
                <div className="space-y-6">
                  <div>
                    <p
                      className="text-sm text-blue-500 mb-2 uppercase tracking-wider"
                      style={{ fontWeight: 600 }}
                    >
                      Headings
                    </p>
                    <p
                      style={{
                        fontFamily:
                          "SF Pro Display, -apple-system, sans-serif",
                      }}
                      className="text-2xl text-foreground"
                    >
                      SF Pro Display Bold & Semibold
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      40px, 32px, 24px, 20px
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-sm text-blue-500 mb-2 uppercase tracking-wider"
                      style={{ fontWeight: 600 }}
                    >
                      Body Text
                    </p>
                    <p
                      style={{
                        fontFamily:
                          "SF Pro Text, -apple-system, sans-serif",
                      }}
                      className="text-lg text-foreground"
                    >
                      SF Pro Text Regular
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      17px (lead), 15px (body), 13px (caption)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Users Access Fitify */}
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                How Users Get to{" "}
                <span
                  className="text-blue-500 italic"
                  style={{ fontWeight: 300 }}
                >
                  fitify
                </span>
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-12">
                We designed a multi-channel distribution strategy
                that reaches users wherever they discover new
                fashion experiences.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Channel 01
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    App Store
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Direct download from the iOS App Store with a
                    premium listing, screenshots, and App Store
                    Optimization to drive organic discovery.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Channel 02
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    Brand Partnerships
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integration with major fashion retailers who
                    benefit from reduced return rates and increased
                    customer satisfaction.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8 hover:border-blue-500/30 transition-colors">
                  <div
                    className="text-sm uppercase tracking-wider text-blue-500 mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Channel 03
                  </div>
                  <h3
                    className="text-2xl mb-4 text-foreground"
                    style={{ fontWeight: 600 }}
                  >
                    Social Media
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Influencer partnerships and viral try-on
                    content on Instagram, TikTok, and YouTube to
                    drive awareness and downloads.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* To Wrap Up */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-blue-500/5 via-background to-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8 text-foreground"
                style={{ fontWeight: 600 }}
              >
                To Wrap Up
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-12">
                Fitify transforms online fashion shopping from
                guesswork into confidence. See the fit, love the
                fit, keep the fit.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8">
                  <h3
                    className="text-2xl mb-4 text-blue-500"
                    style={{ fontWeight: 600 }}
                  >
                    See the fit before you buy
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    AI-powered virtual try-on eliminates the
                    guesswork, giving users a true preview of how
                    clothing looks on their unique body.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8">
                  <h3
                    className="text-2xl mb-4 text-blue-500"
                    style={{ fontWeight: 600 }}
                  >
                    Shop smarter, return less
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    By solving the visualization gap, Fitify
                    directly addresses the $550B return problem in
                    fashion e-commerce, benefiting both consumers
                    and retailers.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8">
                  <h3
                    className="text-2xl mb-4 text-blue-500"
                    style={{ fontWeight: 600 }}
                  >
                    Your style, personalized
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    AI recommendations learn from user preferences
                    and behavior, delivering a curated feed that
                    improves with every interaction.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-blue-500/15 p-8">
                  <h3
                    className="text-2xl mb-4 text-blue-500"
                    style={{ fontWeight: 600 }}
                  >
                    One app, every brand
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    A unified shopping experience across multiple
                    retailers means users can discover, try on, and
                    purchase from all their favorite brands in one
                    place.
                  </p>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border p-8">
                <h3
                  className="text-2xl mb-4 text-foreground"
                  style={{ fontWeight: 600 }}
                >
                  What I Learned
                </h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    <span className="text-blue-500 font-semibold">
                      AI-driven design:
                    </span>{" "}
                    Designing intuitive interfaces around complex
                    AI technology taught me the importance of
                    making powerful features feel simple and
                    trustworthy to users.
                  </p>
                  <p>
                    <span className="text-blue-500 font-semibold">
                      E-commerce UX:
                    </span>{" "}
                    Understanding the psychology of online shopping
                    confidence — visualization is everything. When
                    users can see themselves in clothing, purchase
                    intent dramatically increases.
                  </p>
                  <p>
                    <span className="text-blue-500 font-semibold">
                      Cross-brand consistency:
                    </span>{" "}
                    Creating a unified experience across different
                    retailers required careful design systems work
                    to maintain visual cohesion while respecting
                    each brand's identity.
                  </p>
                  <p>
                    <span className="text-blue-500 font-semibold">
                      Research-driven iteration:
                    </span>{" "}
                    User interview insights directly shaped the
                    virtual try-on flow — from how photos are
                    uploaded to how results are displayed. Every
                    design decision was grounded in real user
                    needs.
                  </p>
                </div>
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
                onClick={() => navigate("/projects")}
                className="group px-8 py-4 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6, color-mix(in srgb, #3b82f6 80%, white))",
                }}
              >
                <span style={{ fontWeight: 600 }}>
                  View All Projects
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
