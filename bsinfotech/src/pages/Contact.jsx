import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent! (This is a demo)");
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-gray-400">Have a project in mind? Let's build something amazing together.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-2xl space-y-6">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand/20 rounded-lg text-brand"><MapPin /></div>
                                <div>
                                    <h4 className="font-semibold">Our Office</h4>
                                    <p className="text-gray-400"> B 36, Thakkarbapa Nagar Rd, Laxminarayan Society, Thakkarbapanagar,Nikol,<br />Ahmedabad, Gujarat 382345</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand/20 rounded-lg text-brand"><Phone /></div>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <p className="text-gray-400">+91 78781 52557</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand/20 rounded-lg text-brand"><Mail /></div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="text-gray-400">bsinfotech@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-secondary/50 rounded-2xl overflow-hidden border border-white/10 relative">
                            <iframe
                                src="https://www.google.com/maps?q=Ahmedabad,+Gujarat,+India&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Service Interest</label>
                                <select className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors">
                                    <option>Web Development</option>
                                    <option>App Development</option>
                                    <option>Digital Marketing</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand/20"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;