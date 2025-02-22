import React from 'react';
import { Shield, Cloud, Lock, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute animate-pulse top-10 left-10 md:left-20">
          <Cloud size={80} className="text-blue-300" />
        </div>
        <div className="absolute animate-pulse-delayed top-1/3 right-16 md:right-32">
          <Shield size={60} className="text-blue-400" />
        </div>
        <div className="absolute animate-pulse-slow bottom-16 left-1/4">
          <Lock size={40} className="text-blue-500" />
        </div>
      </div>

      {/* First Row: Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 relative">
        <div className="text-center space-y-8 mt-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in">
            Safeguard Your Cloud
            <span className="block text-blue-300 mt-2">Unmatched Security for Enterprises</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Empowering businesses with AI-driven threat detection, real-time protection, and seamless automation for over 1M+ cloud resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slow">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center group transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Protecting
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </button>
            <button className="border-2 border-blue-300 hover:bg-blue-300 hover:text-blue-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              See It in Action
            </button>
          </div>
        </div>
      </div>

      {/* Second Row: Stats Section */}
      <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-300">1M+</h3>
              <p className="mt-2 text-gray-200">Resources Secured</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-300">99.9%</h3>
              <p className="mt-2 text-gray-200">Detection Accuracy</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-300">24/7</h3>
              <p className="mt-2 text-gray-200">Real-Time Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-blue-900/20 pointer-events-none"></div>
    </div>
  );
};

export default Hero;