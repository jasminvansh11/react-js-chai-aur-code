import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      
      {/* Header */}
      <section className="bg-blue-600 py-16 lg:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Have a project in mind or need expert IT advice? We're here to help you grow.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 px-4 max-w-7xl mx-auto -mt-10 lg:-mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Right Column: Form (On mobile, this often looks better first, but we kept it right for desktop logic) */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 order-2 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+91..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Digital Marketing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Left Column: Contact Info */}
          <div className="space-y-8 order-1 lg:order-1 pt-8 lg:pt-0">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fill out the form or reach us directly. Our team is standing by to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Our Office", l1: "123 Tech Park, Digital City,", l2: "Ahmedabad, Gujarat" },
                { icon: Mail, title: "Email Us", l1: "info@bsinfotech.com", l2: "support@bsinfotech.com" },
                { icon: Phone, title: "Call Us", l1: "+91 98765 43210", l2: "+91 91234 56789" },
                { icon: Clock, title: "Working Hours", l1: "Mon - Fri: 9:00 AM - 6:00 PM", l2: "Sat - Sun: Closed" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
                  <div className="bg-blue-100 p-3.5 rounded-xl text-blue-600 flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.l1}</p>
                    <p className="text-gray-600">{item.l2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;