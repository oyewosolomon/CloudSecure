import React, { useState, useEffect, useRef } from 'react';
import { Users, Rocket, Cpu, Sparkles } from 'lucide-react';

// Custom components for icons
const Flask: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6v2H9z"></path>
      <path d="M5 8h14"></path>
      <path d="M15.62 10 13 16.17c-.11.28-.39.48-.7.53L9 17.91c-.34.05-.68-.07-.91-.33A.94.94 0 0 1 8 16.62z"></path>
      <path d="m15.62 10-.35.13-3.74 1.33c-.77.28-1.28 1.03-1.28 1.85v2.89"></path>
      <path d="M5 8v1a5 5 0 0 0 5 5h.5"></path>
      <path d="M8 16.62v2.38h8v-2.38"></path>
      <path d="M11 2c0 .6.4 1 1 1h0c.6 0 1-.4 1-1"></path>
    </svg>
  );
};

const Books: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
      <path d="M8 7h6"></path>
      <path d="M8 11h8"></path>
    </svg>
  );
};

interface Partnership {
  title: string;
  icon: JSX.Element;
  description: string;
  benefits: string[];
  partners: string[];
  image: string;
}

const PartnershipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const highlighterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tabsRef.current[activeTab] && highlighterRef.current) {
      const activeTabElement = tabsRef.current[activeTab];
      highlighterRef.current.style.width = `${activeTabElement?.offsetWidth}px`;
      highlighterRef.current.style.left = `${activeTabElement?.offsetLeft}px`;
    }
  }, [activeTab]);

  const partnerships: Partnership[] = [
    {
      title: "Pharmaceutical Collaborations",
      icon: <Flask />,
      description: "We partner with leading pharmaceutical companies to accelerate drug discovery and development using our AI-driven genomic analysis platforms.",
      benefits: [
        "Reduced time-to-market for novel therapeutics",
        "Higher success rates in clinical trials",
        "Identification of previously unexplored drug targets"
      ],
      partners: ["Novartis", "Pfizer", "Merck", "AstraZeneca", "Roche"],
      image: "/images/i.jpg"
    },
    {
      title: "Academic Research",
      icon: <Books />,
      description: "Our collaborative research programs with universities advance genomic science while developing the next generation of scientists.",
      benefits: [
        "Access to cutting-edge laboratory facilities",
        "Joint publication opportunities in high-impact journals",
        "Student internship and fellowship programs"
      ],
      partners: ["Stanford University", "MIT", "Cambridge", "Johns Hopkins", "Max Planck Institute"],
     image: "/images/i.jpg"
    },
    {
      title: "Technology Integration",
      icon: <Cpu />,
      description: "We work with technology companies to integrate hardware and software solutions that enhance our laboratory automation systems.",
      benefits: [
        "Custom robotics solutions for genomic research",
        "Cloud computing infrastructure for data analysis",
        "AI model optimization for biomedical applications"
      ],
      partners: ["NVIDIA", "Illumina", "Thermo Fisher Scientific", "PerkinElmer", "ABB Robotics"],
      image: "/images/i.jpg"
    },
    {
      title: "Patient Advocacy",
      icon: <Users />,
      description: "We collaborate with patient advocacy groups to ensure our research addresses the most pressing needs of patient communities.",
      benefits: [
        "Patient-centered research design",
        "Expanded access programs for experimental treatments",
        "Educational resources for patients and caregivers"
      ],
      partners: ["American Cancer Society", "Leukemia & Lymphoma Society", "Rare Disease Foundation", "Susan G. Komen", "Pancreatic Cancer Action Network"],
     image: "/images/i.jpg"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Strategic Partnerships</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaboration is at the heart of scientific progress. We partner with leading organizations 
            across multiple sectors to accelerate discovery and improve patient outcomes.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="relative mb-12 flex justify-center">
          <div className="inline-flex rounded-lg overflow-x-auto bg-blue-50 p-1 relative">
            {partnerships.map((partnership, index) => (
              <button
                key={index}
                ref={(el) => (tabsRef.current[index] = el)}
                className={`px-6 py-3 rounded-md transition-all duration-200 relative z-10 ${
                  activeTab === index ? 'text-white' : 'text-gray-700 hover:text-blue-700'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {partnership.title}
              </button>
            ))}
            <div
              ref={highlighterRef}
              className="absolute top-1 bottom-1 left-1 rounded-md bg-blue-600 transition-all duration-300 ease-in-out"
              style={{ height: 'calc(100% - 8px)' }}
            ></div>
          </div>
        </div>

        {/* Partnership Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6 text-blue-600">
              {partnerships[activeTab].icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {partnerships[activeTab].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {partnerships[activeTab].description}
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Benefits:</h4>
              <ul className="space-y-2">
                {partnerships[activeTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1 text-green-500">
                      <Sparkles size={16} />
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Partner Organizations:</h4>
              <div className="flex flex-wrap gap-2">
                {partnerships[activeTab].partners.map((partner, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center">
                <Rocket size={18} className="mr-2" />
                Explore Partnership Opportunities
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden group">
              <img 
                src={partnerships[activeTab].image} 
                alt={partnerships[activeTab].title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-bold mb-2">Ready to Collaborate?</h4>
                <p className="text-white/80 text-sm">
                  Join our network of innovative partners working at the forefront of genomic medicine.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-indigo-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;