import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, PenTool, BarChart, Database, Monitor, Search } from 'lucide-react';

const servicesData = [
  {
    category: "IT & Software Development",
    items: [
      { title: "Custom Web Development", desc: "Business Websites, eCommerce, CMS", icon: <Monitor /> },
      { title: "Mobile App Development", desc: "Android, iOS, Hybrid Solutions", icon: <Smartphone /> },
      { title: "Software Development", desc: "ERP, CRM, Inventory Automation", icon: <Code /> },
      { title: "Cloud Solutions", desc: "Hosting, Deployment, Integration", icon: <Cloud /> },
      { title: "API Development", desc: "Secure & Scalable Inter-connectivity", icon: <Database /> },
    ]
  },
  {
    category: "Creative & Branding",
    items: [
      { title: "Graphic Designing", desc: "Logos, Brochures, Flyers, Posters", icon: <PenTool /> },
      { title: "UI/UX Designing", desc: "Web & Mobile Interfaces", icon: <Monitor /> },
      { title: "Brand Identity", desc: "Complete Brand Kit & Strategy", icon: <Search /> },
    ]
  },
  {
    category: "Digital Marketing",
    items: [
      { title: "SEO Optimization", desc: "Rank #1 on Google", icon: <Search /> },
      { title: "Social Media Marketing", desc: "Instagram, Facebook, LinkedIn Growth", icon: <Smartphone /> },
      { title: "PPC Advertising", desc: "Google Ads & Facebook Ads", icon: <BarChart /> },
    ]
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to scale your business.
          </p>
        </div>

        {servicesData.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-2xl font-bold text-brand-light mb-8 border-l-4 border-brand pl-4">
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-xl group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-brand/20 rounded-lg flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;