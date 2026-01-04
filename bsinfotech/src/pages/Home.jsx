import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Palette, TrendingUp, Shield } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = { "Code": Code, "Palette": Palette, "TrendingUp": TrendingUp, "Shield": Shield };

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 lg:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100/80 text-blue-700 text-sm font-bold tracking-wide mb-6 border border-blue-200 animate-fade-in-up">
            🚀 Empowering Business Growth
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Smart IT & Digital <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            BS Infotech transforms businesses with end-to-end IT strategies, including high-performance web development, branding, and data-driven marketing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1 shadow-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 lg:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Ideas into <span className="text-blue-600">Digital Reality</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                At BS Infotech, we don't just write code; we build businesses. Our team of expert developers and creative strategists work tirelessly to deliver solutions that are robust, scalable, and user-centric.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert Team of Developers & Designers",
                  "Agile Development Methodology",
                  "24/7 Support & Maintenance",
                  "Cost-Effective Digital Strategies"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 font-medium text-lg">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual Representation */}
            <div className="order-1 lg:order-2 bg-gradient-to-tr from-gray-50 to-blue-50 rounded-3xl p-8 h-full min-h-[300px] flex items-center justify-center border border-gray-100 shadow-inner">
               <div className="text-center transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-white p-6 rounded-2xl shadow-xl inline-block mb-4 text-blue-600">
                     <TrendingUp size={64} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Results Driven</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE HIGHLIGHTS (Responsive Grid) */}
      <section className="py-20 lg:py-28 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive services designed to cover every aspect of your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {servicesData.slice(0, 4).map((service) => {
              const IconComponent = iconMap[service.icon] || Code;
              return (
                <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col hover:-translate-y-2">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent size={28} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.category}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 lg:py-24 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ready to Grow Your Business?</h2>
          <p className="text-blue-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
            Let's discuss how BS Infotech can help you achieve your digital goals.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-2xl hover:-translate-y-1 text-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;