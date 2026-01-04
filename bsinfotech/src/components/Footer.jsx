import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">BS Infotech</h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Smart IT & Digital Solutions for Growing Businesses. We provide end-to-end IT services including development, branding, and consulting to help you succeed in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Branding & UI/UX</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 flex-shrink-0" size={18} />
                <span>123 Tech Park, Digital City,<br />Gujarat, India - 360001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 flex-shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 flex-shrink-0" size={18} />
                <span>info@bsinfotech.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} <span className="text-white">BS Infotech</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;