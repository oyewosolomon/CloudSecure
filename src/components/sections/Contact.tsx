import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Building, Globe } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import MapSection from './MapSection';


interface FormState {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          company: '',
          interest: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Whether you're interested in partnerships, clinical trials, or career opportunities,
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                    <Building size={24} className="text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Headquarters</h4>
                    <p className="text-blue-200">BioInnovate Tower</p>
                    <p className="text-blue-200">1250 Genome Way</p>
                    <p className="text-blue-200">Cambridge, MA 02142</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Research Facilities</h4>
                    <p className="text-blue-200">Boston Innovation District</p>
                    <p className="text-blue-200">San Francisco Bay Area</p>
                    <p className="text-blue-200">Zurich, Switzerland</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-blue-200">+1 (617) 555-0123</p>
                    <p className="text-blue-200">Mon-Fri 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-blue-200">info@bioinnovatelabs.com</p>
                    <p className="text-blue-200">partnerships@bioinnovatelabs.com</p>
                    <p className="text-blue-200">clinicaltrials@bioinnovatelabs.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                    <Globe size={24} className="text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Social Media</h4>
                    <div className="flex space-x-4 mt-2">
                      {[
                        { platform: 'twitter', icon: <FaTwitter className="w-5 h-5" /> },
                        { platform: 'linkedin', icon: <FaLinkedin className="w-5 h-5" /> },
                        { platform: 'facebook', icon: <FaFacebook className="w-5 h-5" /> },
                        { platform: 'youtube', icon: <FaYoutube className="w-5 h-5" /> },
                      ].map(({ platform, icon }) => (
                        <a
                          key={platform}
                          href={`#${platform}`}
                          className="bg-blue-800/30 hover:bg-blue-700 p-2 rounded-full transition-colors"
                        >
                          <span className="sr-only">{platform}</span>
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl p-8">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Received!</h3>
                  <p className="text-gray-600">Thank you for reaching out. A member of our team will be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        Area of Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formState.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                      >
                        <option value="">Select your interest</option>
                        <option value="partnership">Strategic Partnership</option>
                        <option value="clinicaltrials">Clinical Trials</option>
                        <option value="careers">Career Opportunities</option>
                        <option value="investment">Investment Relations</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      id="consent"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                      I consent to BioInnovate Labs collecting and storing my data in accordance with the{' '}
                      <a href="#privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
    <MapSection/>
    </div>
  );
};

export default Contact;