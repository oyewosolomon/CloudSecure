import React, { useState } from 'react';
import { Play, Pause, SkipForward, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const demos = [
    {
      title: "Threat Detection",
      description: "Watch how our AI identifies and responds to potential security threats in real-time",
      icon: Shield,
      color: "blue"
    },
    {
      title: "Compliance Monitoring",
      description: "See how we continuously monitor and report on your compliance status",
      icon: AlertTriangle,
      color: "orange"
    },
    {
      title: "Automated Remediation",
      description: "Experience automatic threat response and security issue resolution",
      icon: CheckCircle,
      color: "green"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See CloudSecure in Action
          </h2>
          <p className="text-xl text-gray-600">
            Watch how our platform protects your cloud infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Display */}
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            {/* Placeholder for demo video/animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/api/placeholder/640/360" 
                alt="Product Demo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Demo Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
                  </button>
                  <button
                    onClick={() => setActiveDemo((prev) => (prev + 1) % demos.length)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <SkipForward size={20} className="text-white" />
                  </button>
                </div>
                <span className="text-white text-sm">
                  {activeDemo + 1} of {demos.length}
                </span>
              </div>
            </div>
          </div>

          {/* Demo Features */}
          <div className="space-y-8">
            {demos.map((demo, index) => {
              const Icon = demo.icon;
              return (
                <button
                  key={index}
                  className={`w-full text-left p-6 rounded-xl transition-all ${
                    activeDemo === index
                      ? 'bg-blue-50 border-2 border-blue-200'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-${demo.color}-100`}>
                      <Icon className={`text-${demo.color}-600`} size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {demo.title}
                      </h3>
                      <p className="text-gray-600">{demo.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;