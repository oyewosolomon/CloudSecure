import React from 'react';
import { Dna, Braces, Microscope, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const InnovationSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pioneering the intersection of genomics, AI, and automation to develop 
            personalized treatments that transform patient care.
          </p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Dna size={48} className="text-purple-500" />,
              title: "Advanced Genomic Sequencing",
              description: "Our proprietary sequencing platforms analyze genetic material with unprecedented speed and accuracy, enabling deeper insights into disease mechanisms.",
              features: ["High-throughput sequencing", "Single-cell analysis", "Long-read sequencing technology", "Rare variant detection"],
            },
            {
              icon: <Braces size={48} className="text-blue-500" />,
              title: "AI-Driven Analysis",
              description: "Our machine learning algorithms identify patterns and biomarkers invisible to traditional research methods, accelerating drug discovery pipelines.",
              features: ["Deep learning networks", "Predictive modeling", "Biomarker identification", "Treatment response prediction"],
            }
          ].map((tech, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8"
              variants={itemVariants}
            >
              <div className="mb-6">{tech.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{tech.title}</h3>
              <p className="text-gray-600 mb-6">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Animated Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Microscope size={48} className="text-green-500" />,
              title: "Robotic Lab Automation",
              description: "Our state-of-the-art automated labs conduct experiments with perfect precision around the clock, dramatically accelerating research timelines.",
              features: ["High-precision robotics", "24/7 experiment execution", "Cross-contamination prevention", "Real-time monitoring systems"],
            },
            {
              icon: <Heart size={48} className="text-red-500" />,
              title: "Personalized Medicine Platforms",
              description: "We develop tailored therapeutic approaches based on individual genetic profiles, ensuring optimal treatment efficacy with minimal side effects.",
              features: ["Patient-specific drug formulations", "Genetic compatibility testing", "Targeted delivery systems", "Biomarker monitoring"],
            }
          ].map((tech, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8"
              variants={itemVariants}
            >
              <div className="mb-6">{tech.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{tech.title}</h3>
              <p className="text-gray-600 mb-6">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InnovationSection;