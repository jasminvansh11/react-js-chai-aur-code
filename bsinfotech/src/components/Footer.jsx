import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">BH InfoTech</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering premium IT solutions to transform businesses globally. Innovation meets reliability.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-brand cursor-pointer">About Us</li>
            <li className="hover:text-brand cursor-pointer">Services</li>
            <li className="hover:text-brand cursor-pointer">Portfolio</li>
            <li className="hover:text-brand cursor-pointer">Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
   <li className="flex items-start gap-3 text-sm text-white-600">
  <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
  <span>
    B 36, Thakkarbapa Nagar Rd, Laxminarayan Society, Thakkarbapanagar,
    Nikol, Ahmedabad, Gujarat 382345
  </span>
</li>

            <li className="flex items-center gap-2"><Phone size={16} /> +91 78781 52557</li>
            <li className="flex items-center gap-2"><Mail size={16} /> bsinfotech@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/bh-infotech/" className="p-2 bg-white/5 rounded-full hover:bg-brand transition-colors"><Linkedin size={20} /></a>

            <a href="https://www.instagram.com/bh.infotech?igsh=MTA4dnRub3k3N25mcg==" className="p-2 bg-white/5 rounded-full hover:bg-brand transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm border-t border-white/5 pt-8">
        © {new Date().getFullYear()} TechPrime IT Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;