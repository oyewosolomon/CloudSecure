import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  TrendingUp, 
  Settings2, 
  Building, 
  Wallet 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Real-time Analytics Dashboard",
      description: "Monitor space utilization with intuitive dashboards showing real-time occupancy data and historical trends.",
    },
    {
      icon: Users,
      title: "Occupancy Tracking",
      description: "Advanced sensors and AI algorithms track space usage patterns to optimize workplace layouts.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered predictions help you anticipate future space needs and optimize resource allocation.",
    },
    {
      icon: Settings2,
      title: "Automated Optimization",
      description: "Get AI-generated recommendations for optimal office layouts based on your unique needs.",
    },
    {
      icon: Building,
      title: "Multi-location Management",
      description: "Manage multiple office locations from a single platform with unified reporting and analytics.",
    },
    {
      icon: Wallet,
      title: "Cost Optimization",
      description: "Reduce real estate costs by up to 30% through data-driven space optimization strategies.",
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Workplaces
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides everything you need to optimize your workspace and reduce costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-block p-4 bg-blue-50 rounded-lg mb-6 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;