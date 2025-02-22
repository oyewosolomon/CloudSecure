import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="mt-16">
      <div className="container mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="relative h-80 rounded-lg overflow-hidden">
            {/* Replace the placeholder image with a Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.595509381907!2d-71.092184684543!3d42.36780647918638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370aaf51a6a87%3A0xd0e08ea5b308203c!2sMIT%20Computer%20Science%20%26%20Artificial%20Intelligence%20Laboratory!5e0!3m2!1sen!2sus!4v1633039290000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="BioInnovate Labs Location Map"
            ></iframe>
            <div className="absolute top-4 left-4 bg-blue-900/90 text-white px-4 py-2 rounded-lg shadow-lg">
              <h4 className="font-semibold">BioInnovate Labs HQ</h4>
              <p className="text-sm text-blue-200">Cambridge Innovation District</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
                <MapPin size={16} className="mr-2" />
                View Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;