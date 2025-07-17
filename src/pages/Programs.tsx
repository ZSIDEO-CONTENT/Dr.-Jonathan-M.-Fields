import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Video, FileText, Heart } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

export default function Programs() {
  const functionalPackages = [
    {
      name: 'Entry',
      price: '$497',
      duration: '1 month',
      description: 'Perfect for those new to functional medicine',
      features: [
        'Initial health assessment',
        'Basic functional testing',
        'Custom supplement plan',
        'Weekly check-ins',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Core',
      price: '$997',
      duration: '3 months',
      description: 'Our most popular comprehensive program',
      features: [
        'Comprehensive health assessment',
        'Advanced functional testing',
        'Personalized protocol',
        'Monthly consultations',
        'Supplement recommendations',
        'Nutrition guidance',
        'Priority email support',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$1997',
      duration: '6 months',
      description: 'Complete transformation with ongoing support',
      features: [
        'Complete health optimization',
        'Full functional testing panel',
        'Quarterly assessments',
        'Bi-weekly consultations',
        'Custom supplement formulation',
        'Meal planning support',
        'Direct phone access',
        'Group coaching sessions',
      ],
      popular: false,
    },
  ];

  const qiGongFeatures = [
    {
      title: 'Video Library',
      description: '50+ HD training videos for all skill levels',
      icon: <Video className="h-8 w-8" />,
    },
    {
      title: 'Meditation Tracks',
      description: 'Guided meditations for healing and relaxation',
      icon: <Heart className="h-8 w-8" />,
    },
    {
      title: 'PDF Resources',
      description: 'Downloadable guides and practice sheets',
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: 'Community Access',
      description: 'Private Facebook group with fellow practitioners',
      icon: <Users className="h-8 w-8" />,
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
    <ParallaxSection className="relative h-screen flex items-center justify-center">
  <div className="absolute bg-gradient-to-br from-[#f8f5f0] to-[#eae6df]" />

        
        <div className="relative z-10 text-center text-[#2b2b2b] px-4 sm:px-6 lg:px-8">

          <motion.h1
            className="text-5xl md:text-7xl font-heading dark:text-white font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Healing Programs
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl dark:text-white mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Functional Medicine Coaching & Online Qi Gong Training
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Functional Medicine Coaching */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Functional Health Coaching
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Personalized one-on-one coaching with optional group support to transform your health from the inside out
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {functionalPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`relative bg-gray-50 dark:bg-navy-800 rounded-xl p-8 ${
                  pkg.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
                }`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary-500 mb-2">{pkg.price}</div>
                  <p className="text-gray-600 dark:text-gray-300">{pkg.duration}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {pkg.description}
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}>
                  Start My Healing Journey
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qi Gong Program */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
                Online Qi Gong Program
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Master the ancient art of Qi Gong from home with our comprehensive video training program. Learn to cultivate your life force energy for healing, vitality, and inner peace.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {qiGongFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start space-x-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="bg-primary-500 text-white p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-white dark:bg-navy-900 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Pricing Options
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">One-time Purchase</span>
                    <span className="text-2xl font-bold text-primary-500">$297</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Monthly Membership</span>
                    <span className="text-2xl font-bold text-primary-500">$39/mo</span>
                  </div>
                </div>
              </div>
              
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Join Qi Gong Program
              </button>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Qi Gong Practice"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Compare All Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the perfect program for your healing journey
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 dark:bg-navy-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary-500 text-white">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">Entry</th>
                  <th className="p-4 text-center">Core</th>
                  <th className="p-4 text-center">Premium</th>
                  <th className="p-4 text-center">Qi Gong</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">Health Assessment</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">Functional Testing</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Advanced</td>
                  <td className="p-4 text-center">Complete</td>
                  <td className="p-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">Video Training</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">Group Support</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Price</td>
                  <td className="p-4 text-center font-bold">$497</td>
                  <td className="p-4 text-center font-bold">$997</td>
                  <td className="p-4 text-center font-bold">$1997</td>
                  <td className="p-4 text-center font-bold">$297</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4 text-white">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of patients who have reclaimed their vitality through our proven programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}