import React, { useState } from 'react';
import { Shield, Check, ChevronRight, Lock, FileCheck, Building } from 'lucide-react';

const ComplianceSection = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  
  const certifications = [
    {
      name: "SOC 2 Type II",
      icon: Shield,
      description: "Certified security controls and practices",
      details: "Annual independent audit verification"
    },
    {
      name: "ISO 27001",
      icon: Lock,
      description: "Information security management",
      details: "International security standard"
    },
    {
      name: "HIPAA",
      icon: FileCheck,
      description: "Healthcare data protection",
      details: "Full healthcare compliance"
    },
    {
      name: "PCI DSS",
      icon: Building,
      description: "Payment card security",
      details: "Level 1 Service Provider"
    }
  ];

  const frameworks = [
    "NIST Cybersecurity Framework",
    "CIS Controls",
    "GDPR",
    "CCPA",
    "FedRAMP",
    "Cloud Security Alliance (CSA)",
    "AWS Well-Architected Framework",
    "Azure Security Benchmark"
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-xl text-gray-600">
            Meeting the highest security standards and compliance requirements
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'certifications'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'frameworks'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Frameworks
            </button>
          </div>
        </div>

        {/* Certifications View */}
        <div className={`transition-all ${activeTab === 'certifications' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{cert.description}</p>
                  <p className="text-sm text-blue-600">{cert.details}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Frameworks View */}
        <div className={`transition-all ${activeTab === 'frameworks' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
              >
                <Check className="text-green-500" size={20} />
                <span className="text-gray-900">{framework}</span>
                <ChevronRight className="text-gray-400 ml-auto" size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;