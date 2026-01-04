import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary z-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-brand/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6"
          >
            Future-Ready IT Solutions <br /> for Modern Businesses
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            We transform ideas into digital reality with cutting-edge software development, cloud strategy, and creative branding.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="px-8 py-4 bg-brand hover:bg-brand-dark rounded-full font-semibold transition-all shadow-lg shadow-brand/25 flex items-center justify-center gap-2">
              Get Started <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: <Zap className="text-yellow-400" />, title: "Fast Performance", desc: "Optimized code for lightning fast load times." },
                    { icon: <ShieldCheck className="text-green-400" />, title: "Secure Systems", desc: "Enterprise-grade security protocols." },
                    { icon: <Globe className="text-blue-400" />, title: "Global Scale", desc: "Infrastructure built to handle millions of users." },
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;