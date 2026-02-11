import { motion } from "motion/react";
import { Search, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Research & Discovery",
    description: "Deep dive into user needs, market trends, and business objectives through interviews, surveys, and competitive analysis.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Design & Iterate",
    description: "Create wireframes, prototypes, and high-fidelity designs. Test with users and iterate based on feedback.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    number: "03",
    title: "Develop & Build",
    description: "Collaborate with developers to ensure pixel-perfect implementation while maintaining design integrity.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Optimize",
    description: "Deploy the solution, monitor performance metrics, and continuously optimize based on user data and feedback.",
    color: "from-green-500 to-teal-500",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl tracking-tighter mb-4">
            MY PROCESS
          </h2>
          <p className="text-xl opacity-70 max-w-2xl mx-auto">
            A strategic approach to creating meaningful digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 h-full hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${step.color} rounded-l-2xl`} />
                
                <div className="mb-6">
                  <div className="text-6xl opacity-20 mb-4">{step.number}</div>
                  <div className={`inline-flex p-4 bg-gradient-to-br ${step.color} text-white rounded-2xl`}>
                    <step.icon size={32} />
                  </div>
                </div>
                
                <h3 className="text-2xl mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="opacity-70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
