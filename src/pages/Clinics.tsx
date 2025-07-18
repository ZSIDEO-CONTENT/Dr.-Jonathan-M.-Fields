
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Star, CheckCircle } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

export default function Clinics() {
  const clinics = [
    {
      name: 'Integrative Medicine US - Beverly Hills',
      address: '9201 Sunset Blvd, West Hollywood, CA 90069',
      phone: '(310) 555-0123',
      hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'CR8 Health Center - Newport Beach',
      address: '1000 Quail St, Newport Beach, CA 92660',
      phone: '(949) 555-0123',
      hours: 'Mon-Fri: 8AM-5PM, Sat: 9AM-3PM',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const services = [
    {
      name: 'Acupuncture',
      description: 'Traditional Chinese medicine technique for pain relief and healing',
      icon: '🎯',
      benefits: ['Pain relief', 'Stress reduction', 'Improved sleep', 'Better digestion'],
    },
    {
      name: 'Herbal Therapy',
      description: 'Custom herbal formulations based on individual needs',
      icon: '🌿',
      benefits: ['Natural healing', 'Immune support', 'Hormonal balance', 'Detoxification'],
    },
    {
      name: 'Functional Testing',
      description: 'Comprehensive lab work to identify root causes',
      icon: '🔬',
      benefits: ['Root cause analysis', 'Personalized protocols', 'Track progress', 'Prevent disease'],
    },
    {
      name: 'Longevity Support',
      description: 'Anti-aging and vitality optimization protocols',
      icon: '🧬',
      benefits: ['Increased energy', 'Better cognitive function', 'Improved mobility', 'Enhanced recovery'],
    },
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Dr. Fields transformed my health completely. His approach is thorough and caring.',
      date: '2 weeks ago',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Outstanding clinic with state-of-the-art facilities. The staff is incredibly knowledgeable.',
      date: '1 month ago',
    },
    {
      name: 'Emma Rodriguez',
      rating: 5,
      text: 'After years of conventional medicine failing me, Dr. Fields found the root cause of my issues.',
      date: '6 weeks ago',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
     <ParallaxSection className="relative h-screen flex items-center justify-center bg-white  dark:bg-navy-900">
 <div className="absolute inset-0 bg-white dark:bg-navy-900" />


  <div className="relative z-10 text-center text-gray-900 px-4 sm:px-6 lg:px-8">
    <motion.h1
      className="text-5xl md:text-7xl font-heading dark:text-white font-bold mb-6 text-gray-900"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Our Clinics
    </motion.h1>

    <motion.p
      className="text-xl md:text-2xl mb-8 max-w-2xl dark:text-white mx-auto text-gray-600"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Integrative Medicine US | CR8 Health Centers
    </motion.p>
  </div>
</ParallaxSection>


      {/* Clinic Locations */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              State-of-the-art facilities designed for healing and wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {clinics.map((clinic, index) => (
              <motion.div
                key={clinic.name}
                className="bg-gray-50 dark:bg-navy-800 rounded-xl overflow-hidden shadow-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {clinic.name}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-5 w-5 mr-3 text-primary-500" />
                      {clinic.address}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Phone className="h-5 w-5 mr-3 text-primary-500" />
                      {clinic.phone}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="h-5 w-5 mr-3 text-primary-500" />
                      {clinic.hours}
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Book Appointment
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive integrative medicine services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white dark:bg-navy-900 p-8 rounded-xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              What Our Patients Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">5.0</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Based on 200+ Google Reviews</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                className="bg-gray-50 dark:bg-navy-800 p-6 rounded-xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    {review.date}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{review.text}"</p>
                <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
              </motion.div>
            ))}
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
            Schedule your consultation today and take the first step toward optimal health
          </p>
          <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Free Consultation
          </button>
        </div>
      </section>
    </motion.div>
  );
}