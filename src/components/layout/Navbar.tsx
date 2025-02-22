import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ChevronDown, 
  Menu, 
  X, 
  ExternalLink,
  Lock,
  Book,
  Users,
  BarChart,
  Server,
  Settings,
  Building,
  FileText
} from 'lucide-react';

type MenuItem = {
  name: string;
  description: string;
  icon: React.ReactNode; // Use React.ReactNode for the icon
  badge?: string;
};

type MenuItems = {
  [key: string]: {
    title: string;
    items: MenuItem[];
  };
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItems = {
    products: {
      title: 'Products',
      items: [
        {
          name: 'Cloud Security',
          description: 'Protect your cloud infrastructure',
          icon: <Lock className="h-6 w-6 text-blue-600" />, // Use the icon directly
          badge: 'Popular'
        },
        {
          name: 'Compliance Manager',
          description: 'Automated compliance monitoring',
          icon: <Server className="h-6 w-6 text-blue-600" />
        },
        {
          name: 'Threat Detection',
          description: 'AI-powered threat detection',
          icon: <Shield className="h-6 w-6 text-blue-600" />
        },
        {
          name: 'Security Analytics',
          description: 'Advanced security insights',
          icon: <BarChart className="h-6 w-6 text-blue-600" />
        }
      ]
    },
    solutions: {
      title: 'Solutions',
      items: [
        {
          name: 'Enterprise',
          description: 'For large organizations',
          icon: <Building className="h-6 w-6 text-blue-600" />
        },
        {
          name: 'Healthcare',
          description: 'HIPAA compliant security',
          icon: <Users className="h-6 w-6 text-blue-600" />
        },
        {
          name: 'Financial Services',
          description: 'Banking grade security',
          icon: <Settings className="h-6 w-6 text-blue-600" />
        }
      ]
    },
    resources: {
      title: 'Resources',
      items: [
        {
          name: 'Documentation',
          description: 'Guides and tutorials',
          icon: <Book className="h-6 w-6 text-blue-600" />
        },
        {
          name: 'Blog',
          description: 'Latest security insights',
          icon: <FileText className="h-6 w-6 text-blue-600" />
        },
        {
          name: 'Case Studies',
          description: 'Customer success stories',
          icon: <Users className="h-6 w-6 text-blue-600" />
        }
      ]
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shado' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className={`ml-2 ${isScrolled ? 'text-gray-900 ':'text-white'} text-xl font-bold `}>CloudSecure</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {Object.entries(menuItems).map(([key, { title, items }]) => (
              <div 
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 ${isScrolled ? 'text-gray-900 ':'text-white'} hover:text-gray-900">
                  <span>{title}</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === key && (
                  <div className="absolute top-full left-0 w-80 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-4">
                      {items.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-shrink-0">
                            {item.icon} {/* Render the icon directly */}
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                              {item.badge && (
                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                  {item.badge}
                                </span>
                              )}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <a href="#" className={`${isScrolled ? 'text-gray-900 ':'text-white'}  hover:text-gray-900`}>
                Sign In
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {Object.entries(menuItems).map(([key, { title, items }]) => (
            <div key={key} className="space-y-1">
              <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                {title}
              </button>
              <div className="pl-4">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-3 py-2 text-base text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-4 space-y-2">
            <a
              href="#"
              className="block w-full px-3 py-2 text-center text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Sign In
            </a>
            <a
              href="#"
              className="block w-full px-3 py-2 text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;