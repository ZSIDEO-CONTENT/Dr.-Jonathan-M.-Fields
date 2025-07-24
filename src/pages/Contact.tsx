import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
     <ParallaxSection className="relative h-screen flex items-center justify-center ">
   <div className="absolute inset-0 -z-10">
    <img
      src="/images/clinicbg.jpg"
      alt="Clinic background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/70" />
  </div>

  <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">

          <div className="relative z-10 text-center mb-16 px-4">
  {/* Reveal Wrapper */}
  <motion.div
    className="overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
  >
    <motion.h1
      className="text-[clamp(2.8rem,6vw,4.75rem)] font-extrabold tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
    >
      Get <span className="text-primary-400">in Touch</span>
    </motion.h1>
  </motion.div>

  {/* Underline Glow */}
  <motion.div
    className="h-[3px] w-[120px] mt-4 mx-auto bg-white/20 rounded-full blur-sm"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
    style={{ transformOrigin: 'center' }}
  />
</div>

          
          <motion.p
            className="text-xl md:text-2xl mb-8 dark:text-white max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Start your healing journey today with a personalized consultation
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Contact Info */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                (310) 555-0123
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                info@drjonathonfields.com
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beverly Hills, CA
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mon-Fri: 9AM-6PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We'll get back to you within 24 hours
            </p>
          </div>
          
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-navy-900 rounded-xl p-8 shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-navy-800 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-navy-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-navy-800 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-navy-800 text-gray-900 dark:text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="consultation">Book Consultation</option>
                  <option value="programs">Programs Inquiry</option>
                  <option value="support">General Support</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-navy-800 text-gray-900 dark:text-white"
                placeholder="Tell us about your health goals and how we can help..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Visit Our Clinics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We have locations in Beverly Hills and Newport Beach
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-navy-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Beverly Hills Location
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-primary-500" />
                  9201 Sunset Blvd, West Hollywood, CA 90069
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-primary-500" />
                  (310) 555-0123
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="h-5 w-5 mr-3 text-primary-500" />
                  Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-300">Map Placeholder</p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-navy-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Newport Beach Location
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-primary-500" />
                  1000 Quail St, Newport Beach, CA 92660
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-primary-500" />
                  (949) 555-0123
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="h-5 w-5 mr-3 text-primary-500" />
                  Mon-Fri: 8AM-5PM, Sat: 9AM-3PM
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-300">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4 text-white">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Book your free consultation today and take the first step toward optimal health
          </p>
          <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </motion.div>
  );
}