import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      company: "Global Bank Corp",
      industry: "Financial Services",
      logo: "/api/placeholder/64/64",
      quote: "CloudSecure helped us achieve compliance across 5000+ cloud resources while reducing security incidents by 85%.",
      stats: [
        { label: "Security Incidents", value: "-85%" },
        { label: "Compliance Costs", value: "-40%" },
        { label: "Cloud Resources", value: "5000+" }
      ],
      author: {
        name: "Sarah Chen",
        role: "Chief Information Security Officer",
        image: "/api/placeholder/48/48"
      }
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      logo: "/api/placeholder/64/64",
      quote: "Automated compliance monitoring saved our team 20 hours per week while ensuring HIPAA compliance.",
      stats: [
        { label: "Time Saved", value: "20hrs/week" },
        { label: "Compliance Score", value: "100%" },
        { label: "ROI", value: "300%" }
      ],
      author: {
        name: "Dr. James Wilson",
        role: "Head of IT Security",
        image: "/api/placeholder/48/48"
      }
    }
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See how leading companies strengthen their security with CloudSecure
          </p>
        </div>

        <div className="relative">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className={`transition-opacity duration-500 ${
                idx === activeStory ? 'opacity-100' : 'opacity-0 absolute top-0'
              }`}
            >
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Story Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <img
                        src={story.logo}
                        alt={story.company}
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{story.company}</h3>
                        <p className="text-gray-600">{story.industry}</p>
                      </div>
                    </div>

                    <blockquote className="text-2xl font-medium text-gray-900 mb-8">
                      "{story.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <img
                        src={story.author.image}
                        alt={story.author.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{story.author.name}</p>
                        <p className="text-gray-600">{story.author.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {story.stats.map((stat, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                        <p className="text-3xl font-bold text-blue-600 mb-2">
                          {stat.value}
                        </p>
                        <p className="text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevStory}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="text-gray-600" />
            </button>
            <div className="flex gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStory(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeStory ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextStory}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;