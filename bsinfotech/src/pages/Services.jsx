import { servicesData } from '../data/servicesData'; // <--- Note the { }
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="bg-blue-600 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Comprehensive IT & Digital solutions tailored for your business growth.
        </p>
      </section>

      {/* Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.category}       // Data file mein 'category' hai
              description={service.description}
              icon={service.icon}
              servicesList={service.services} // Data file mein 'services' array hai
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;