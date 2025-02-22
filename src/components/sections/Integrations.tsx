import React from 'react';
import { Cloud, ArrowRight, Check } from 'lucide-react';

const IntegrationsSection = () => {
  const cloudProviders = [
    {
      name: "Amazon Web Services",
      features: ["EC2", "S3", "Lambda", "EKS"],
      category: "Cloud Provider"
    },
    {
      name: "Microsoft Azure",
      features: ["VM", "Blob Storage", "Functions", "AKS"],
      category: "Cloud Provider"
    },
    {
      name: "Google Cloud",
      features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "GKE"],
      category: "Cloud Provider"
    }
  ];

  const tools = [
    {
      name: "Kubernetes",
      category: "Container Orchestration",
      features: ["Pod Security", "Network Policies", "RBAC"]
    },
    {
      name: "Terraform",
      category: "Infrastructure as Code",
      features: ["Policy Checks", "Security Rules", "Compliance Templates"]
    },
    {
      name: "GitHub",
      category: "DevOps",
      features: ["Actions Integration", "Code Scanning", "Security Alerts"]
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600">
            Connect with your existing cloud infrastructure and tools
          </p>
        </div>

        {/* Cloud Providers */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Cloud Providers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <Cloud className="text-blue-600" size={32} />
                  <span className="text-sm text-blue-600 font-medium px-3 py-1 bg-blue-50 rounded-full">
                    {provider.category}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-4">{provider.name}</h4>
                <ul className="space-y-3">
                  {provider.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-blue-600 font-semibold flex items-center group">
                  Learn more 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Tools & Platforms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <img 
                    src={`/api/placeholder/32/32`}
                    alt={tool.name}
                    className="w-8 h-8"
                  />
                  <span className="text-sm text-blue-600 font-medium px-3 py-1 bg-blue-50 rounded-full">
                    {tool.category}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-4">{tool.name}</h4>
                <ul className="space-y-3">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-blue-600 font-semibold flex items-center group">
                  View integration 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;