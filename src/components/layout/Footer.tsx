import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowRight,
  Shield,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      "Features",
      "Security",
      "Compliance",
      "Pricing"
    ],
    company: [
      "About Us",
      "Careers",
      "Blog",
      "Press",
      "Partners",
      "Contact"
    ],
    resources: [
      "Documentation",
      "Security Guide",
      "Compliance Center",
      "Case Studies",
      "Webinars",
      "ROI Calculator"
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Security Policy",
      "GDPR Compliance",
      "Cookie Policy",
      "Subprocessors"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Stay updated with cloud security
              </h3>
              <p className="text-gray-400">
                Get the latest updates, news and security tips
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow md:w-64"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield size={32} className="text-blue-500" />
              <span className="text-2xl font-bold">CloudSecure</span>
            </div>
            <p className="text-gray-400 mb-6">
              Protecting cloud infrastructure for enterprises worldwide with 
              AI-powered security, compliance monitoring, and automated remediation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-400">
              © {currentYear} CloudSecure. All rights reserved.
            </span>
            <div className="flex items-center gap-2 text-gray-400">
              <Globe size={16} />
              <select className="bg-transparent border-none focus:ring-0">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;