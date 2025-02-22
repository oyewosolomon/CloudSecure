import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const ResearchSection = () => {
  const cancerProgressData = [
    { name: '2020', efficacy: 42, sideEffects: 68 },
    { name: '2021', efficacy: 53, sideEffects: 58 },
    { name: '2022', efficacy: 67, sideEffects: 49 },
    { name: '2023', efficacy: 78, sideEffects: 38 },
    { name: '2024', efficacy: 85, sideEffects: 32 },
    { name: '2025', efficacy: 91, sideEffects: 25 },
  ];

  const trialPatientsData = [
    { name: 'Lung', patients: 318 },
    { name: 'Breast', patients: 421 },
    { name: 'Prostate', patients: 287 },
    { name: 'Pancreatic', patients: 165 },
    { name: 'Colorectal', patients: 243 },
    { name: 'Leukemia', patients: 196 },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Clinical Research Progress</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our ongoing clinical trials demonstrate promising improvements in treatment efficacy while reducing side effects.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Cancer Treatment Progress (2020-2025)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cancerProgressData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: 'none'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="efficacy" 
                  name="Treatment Efficacy (%)" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ r: 6, strokeWidth: 2 }}
                  activeDot={{ r: 8, stroke: '#1d4ed8', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sideEffects" 
                  name="Side Effects Severity (%)" 
                  stroke="#ef4444" 
                  strokeWidth={3} 
                  dot={{ r: 6, strokeWidth: 2 }}
                  activeDot={{ r: 8, stroke: '#b91c1c', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-gray-600 mt-4 text-center italic">
            Our novel genomic approach has consistently improved efficacy while reducing side effects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Current Trial Participants</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trialPatientsData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="patients" name="Patients" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray-600 mt-4 text-sm text-center">
              Distribution of patients across our 6 primary cancer research programs
            </p>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Research Milestones</h3>
            <div className="space-y-6">
              {[
                {
                  year: '2023',
                  title: 'Phase II Trial Success',
                  description: 'Our targeted therapy for non-small cell lung cancer showed 78% response rate with reduced side effects compared to standard chemotherapy.'
                },
                {
                  year: '2024',
                  title: 'Breakthrough Designation',
                  description: 'FDA granted Breakthrough Therapy designation for our personalized immunotherapy approach in treatment-resistant breast cancer.'
                },
                {
                  year: '2025',
                  title: 'Expanded Access Program',
                  description: 'Launched compassionate use program allowing patients with advanced pancreatic cancer early access to our experimental treatment.'
                },
              ].map((milestone, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white">
                      <span className="text-blue-800 font-bold text-sm">{milestone.year}</span>
                    </div>
                    {index < 2 && <div className="h-full w-0.5 bg-blue-100"></div>}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Participate in Our Clinical Trials</h3>
          <p className="max-w-2xl mx-auto mb-8">
            Help advance the future of personalized medicine by participating in one of our ongoing clinical trials. 
            Our research depends on volunteers like you.
          </p>
          <button className="px-8 py-3 bg-white text-blue-900 hover:bg-blue-100 rounded-lg font-medium transition-all">
            Check Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;