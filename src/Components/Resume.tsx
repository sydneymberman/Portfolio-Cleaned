import { Link } from "react-router";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Navigation } from "./Navigation";

export function Resume() {
  const { theme, toggleTheme } = useTheme();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-zinc-950 dark:via-black dark:to-zinc-900 transition-colors duration-500">
      {/* Navigation */}
      <Navigation />
      
      <div className="py-24 px-6">
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Card */}
        <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-2xl p-6 md:p-12 mb-6">
          <h1 className="text-4xl md:text-6xl mb-4 md:mb-6 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Sydney Berman
          </h1>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-2 md:gap-4 text-sm md:text-base text-gray-600 dark:text-gray-400 text-center">
            <a href="mailto:sydneymberman@gmail.com" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              sydneymberman@gmail.com
            </a>
            <span className="hidden md:inline">|</span>
            <a href="tel:+14167169134" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              (416) 716-9134
            </a>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-2xl p-6 md:p-12">
          
          {/* Mobile: Collapsible Sections, Desktop: Full View */}
          
          {/* Experience */}
          <section className="mb-8 md:mb-12">
            <button
              onClick={() => toggleSection('experience')}
              className="w-full flex items-center justify-between mb-4 md:mb-8 pb-3 border-b-2 border-pink-500/30 dark:border-pink-500/50 lg:pointer-events-none"
            >
              <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-left">
                Experience
              </h2>
              <ChevronDown 
                className={`w-6 h-6 text-pink-600 dark:text-pink-400 transition-transform duration-300 lg:hidden ${
                  expandedSection === 'experience' ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div className={`space-y-6 md:space-y-10 ${expandedSection === 'experience' ? 'block' : 'hidden'} lg:block`}>
              {/* Philosophy (Coty) x SCADPRO */}
              <div>
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <div className="uppercase tracking-wide text-gray-900 dark:text-white text-sm md:text-base">Philosophy (Coty) x SCADPRO</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">January - April 2025</div>
                </div>
                <div className="text-pink-600 dark:text-pink-400 mb-3 italic text-sm md:text-base">UX Team Lead</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>Single-handedly led the UX design portion of a real-world beauty brand project, recruiting an additional UX designer to strengthen capabilities</li>
                  <li>Redesigned critical aspects of company website, documenting process and reasoning for implementation by client's development team</li>
                  <li>Created comprehensive wireframes, mockups, and prototypes to enhance the user experience</li>
                  <li>Conducted user research and testing to refine design solutions based on usability insights</li>
                  <li>Presented UX design solutions to company stakeholders and adapted based on feedback</li>
                  <li>Served as primary point of contact for all UX-related tasks, providing guidance and support to the team</li>
                </ul>
              </div>

              {/* Corktown Designs */}
              <div>
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <div className="uppercase tracking-wide text-gray-900 dark:text-white text-sm md:text-base">Corktown Designs</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">November-December 2024</div>
                </div>
                <div className="text-pink-600 dark:text-pink-400 mb-3 italic text-sm md:text-base">User Experience Designer</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>Redesigned and reorganized store website using Shopify, revamping user interface while maintaining brand identity</li>
                  <li>Improved website functionality and user experience to increase customer engagement and sales</li>
                  <li>Conducted usability testing and implemented UX improvements to optimize site navigation</li>
                  <li>Reorganized product categories for more intuitive shopping experience</li>
                  <li>Customized Shopify code to enhance site performance with focus on UI improvements and seamless navigation</li>
                  <li>Worked within limited budget constraints using free resources and built-in tools</li>
                </ul>
              </div>

              {/* Bergo Designs - Assistant Web Developer */}
              <div>
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <div className="uppercase tracking-wide text-gray-900 dark:text-white text-sm md:text-base">Bergo Designs - Gallery of Industrial Design</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">June 2020 - Present</div>
                </div>
                <div className="text-pink-600 dark:text-pink-400 mb-3 italic text-sm md:text-base">Assistant Web Developer (On-Call)</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>Assisted in uploading and maintaining product listings across website and social media platforms</li>
                  <li>Collaborated with marketing team to maintain consistent branding and product visibility online</li>
                  <li>Photographed store products and edited images to enhance visual appeal for online listings</li>
                  <li>Optimized product photos for web and social media use while maintaining brand aesthetic</li>
                </ul>
              </div>

              {/* Bergo Designs - Retail Associate */}
              <div>
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <div className="uppercase tracking-wide text-gray-900 dark:text-white text-sm md:text-base">Bergo Designs - Gallery of Industrial Design</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">June 2019 - 2024</div>
                </div>
                <div className="text-pink-600 dark:text-pink-400 mb-3 italic text-sm md:text-base">Retail Associate</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>Provided exceptional customer service, assisting with product inquiries and recommendations</li>
                  <li>Operated Lightspeed POS system to process transactions efficiently</li>
                  <li>Collaborated with team to improve operational efficiency and store workflow</li>
                  <li>Contributed to visual merchandising efforts to enhance the in-store customer experience</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8 md:mb-12">
            <button
              onClick={() => toggleSection('education')}
              className="w-full flex items-center justify-between mb-4 md:mb-8 pb-3 border-b-2 border-pink-500/30 dark:border-pink-500/50 lg:pointer-events-none"
            >
              <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-left">
                Education
              </h2>
              <ChevronDown 
                className={`w-6 h-6 text-pink-600 dark:text-pink-400 transition-transform duration-300 lg:hidden ${
                  expandedSection === 'education' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className={`${expandedSection === 'education' ? 'block' : 'hidden'} lg:block`}>
              <div className="uppercase tracking-wide text-gray-900 dark:text-white mb-3 text-sm md:text-base">Savannah College of Art and Design (SCAD)</div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">Bachelor of Fine Arts (BFA) in User Experience Design, Minor in Graphic Design</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">May 2026</div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8 md:mb-12">
            <button
              onClick={() => toggleSection('certifications')}
              className="w-full flex items-center justify-between mb-4 md:mb-8 pb-3 border-b-2 border-pink-500/30 dark:border-pink-500/50 lg:pointer-events-none"
            >
              <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-left">
                Certifications
              </h2>
              <ChevronDown 
                className={`w-6 h-6 text-pink-600 dark:text-pink-400 transition-transform duration-300 lg:hidden ${
                  expandedSection === 'certifications' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul className={`list-disc list-outside ml-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed ${expandedSection === 'certifications' ? 'block' : 'hidden'} lg:block`}>
              <li>Generative AI: Introduction and Applications - IBM via Coursera (2025)</li>
              <li>Adobe Certified Professional in Visual Design</li>
              <li>Teamwork Foundations Certification by LinkedIn Learning</li>
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-8 md:mb-0">
            <button
              onClick={() => toggleSection('skills')}
              className="w-full flex items-center justify-between mb-4 md:mb-8 pb-3 border-b-2 border-pink-500/30 dark:border-pink-500/50 lg:pointer-events-none"
            >
              <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-left">
                Skills
              </h2>
              <ChevronDown 
                className={`w-6 h-6 text-pink-600 dark:text-pink-400 transition-transform duration-300 lg:hidden ${
                  expandedSection === 'skills' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul className={`space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed ${expandedSection === 'skills' ? 'block' : 'hidden'} lg:block`}>
              <li>
                <span className="text-gray-900 dark:text-white">Technical:</span> Figma, Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects), HTML, CSS, JavaScript, Visual Studio Code, Shopify, Arduino, Python
              </li>
              <li>
                <span className="text-gray-900 dark:text-white">Generative AI and AI Tools:</span> Large Language Models (LLMs), ChatGPT, GPT, Claude, Sora, DALL-E, Stable Diffusion, Google Veo, IBM Generative AI Classroom, Prompt Engineering, Vibe Coding, AI-Generated Content Creation (Text, Image, Video, Code), AI Applications in Design
              </li>
              <li>
                <span className="text-gray-900 dark:text-white">UX/UI Design:</span> Wireframing, Prototyping, User Research and Personas, Usability Testing, Information Architecture, A/B Testing, Accessibility and Inclusive Design
              </li>
              <li>
                <span className="text-gray-900 dark:text-white">3D Design:</span> Rhino 3D, Keyshot, Industrial Design
              </li>
              <li>
                <span className="text-gray-900 dark:text-white">Business:</span> Project Management, Cross-Functional Collaboration, Customer Satisfaction, Marketing, Data-Driven Design
              </li>
            </ul>
          </section>

          {/* Fun Fact */}
          <section className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-pink-500/20 dark:border-pink-500/30">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 dark:from-pink-500/20 dark:to-purple-500/20 rounded-2xl p-4 md:p-6 border border-pink-500/20 dark:border-pink-500/30">
              <div className="flex items-start gap-3">
                <span className="text-xl md:text-2xl">✨</span>
                <div>
                  <h3 className="text-base md:text-lg text-gray-900 dark:text-white mb-2">Fun Fact</h3>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    I designed and coded this entire portfolio myself using a combination of vibe coding and traditional development. From concept to deployment, every pixel and line of code reflects my passion for blending creativity with technical execution.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Portfolio Button */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 dark:border-white/10 text-center">
            <Link 
              to="/"
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 text-sm md:text-base"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}