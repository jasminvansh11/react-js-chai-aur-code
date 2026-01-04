import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Globe, 
  ShieldCheck, 
  Target, 
  Rocket, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Animation variants for scroll effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Data derived from your company details
  const expertiseAreas = [
    {
      title: "IT & Software Development",
      description: "Building robust digital infrastructure with Custom Web, Mobile Apps, and Cloud Solutions.",
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Creative & Branding",
      description: "Crafting unique brand identities through Logo Design, UI/UX, and Print Media.",
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Digital Marketing",
      description: "Driving growth via SEO, Social Media, PPC, and Content Marketing strategies.",
      icon: <Globe className="w-8 h-8 text-green-400" />,
      color: "bg-green-500/10 border-green-500/20"
    },
    {
      title: "IT Consulting & Support",
      description: "Securing and optimizing businesses with Cybersecurity, Strategy, and Automation.",
      icon: <ShieldCheck className="w-8 h-8 text-orange-400" />,
      color: "bg-orange-500/10 border-orange-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
          >
            We Are The Architects of <br /> <span className="text-blue-500">Digital Transformation</span>
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            We bridge the gap between complex technology and business success. From custom software to brand identity, we provide a 360-degree digital ecosystem for modern enterprises.
          </motion.p>
        </div>
      </section>

      {/* 2. Our Expertise Grid (Based on your Company Details) */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Expertise</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`p-6 rounded-2xl border ${area.color} backdrop-blur-sm transition-all duration-300`}
              >
                <div className="mb-4 p-3 bg-slate-800 rounded-lg w-fit">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Driven by Purpose</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
                    <Target size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-slate-400">
                    To empower businesses with scalable, secure, and innovative technology solutions that drive measurable growth and efficiency.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-3 bg-purple-500/20 text-purple-400 rounded-lg">
                    <Rocket size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-slate-400">
                    To be the global partner of choice for digital transformation, recognized for our commitment to quality, creativity, and integrity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex items-center justify-center"
          >
            {/* Abstract Graphic Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
            <div className="text-center p-8">
              <Users size={64} className="mx-auto text-slate-500 mb-4 opacity-50" />
              <h3 className="text-2xl font-bold text-slate-300">Client-Centric Approach</h3>
              <p className="text-slate-500 mt-2">Your success is our code.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-10 md:p-16 text-center border border-blue-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
            Whether you need a new website, a mobile app, or a complete digital marketing strategy, we are here to help.
          </p>
          
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold flex items-center gap-2 mx-auto transition-colors relative z-10 shadow-lg shadow-blue-500/25"
            >
              Get a Free Consultation <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;