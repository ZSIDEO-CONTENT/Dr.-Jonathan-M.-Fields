
import { motion } from 'framer-motion';
import { Award, Users, Heart, BookOpen } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

export default function About() {
  const timeline = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'Started my journey as a patient struggling with chronic illness, leading to a passion for integrative healing.',
    },
    {
      year: '2012',
      title: 'Medical Training',
      description: 'Completed advanced training in functional medicine and traditional Chinese medicine.',
    },
    {
      year: '2015',
      title: 'Practice Launch',
      description: 'Opened my first integrative medicine clinic, focusing on root cause healing.',
    },
    {
      year: '2018',
      title: 'Qi Gong Mastery',
      description: 'Achieved master level certification in Qi Gong and began teaching healing practices.',
    },
    {
      year: '2020',
      title: 'Digital Expansion',
      description: 'Launched online programs to reach patients worldwide during the pandemic.',
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Serving thousands of patients globally through clinics, programs, and educational content.',
    },
  ];

  const credentials = [
    { name: 'Board Certified Functional Medicine', logo: '🏥' },
    { name: 'Licensed Acupuncturist', logo: '🎯' },
    { name: 'Qi Gong Master Instructor', logo: '🧘' },
    { name: 'Herbal Medicine Specialist', logo: '🌿' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      {/* Hero Section */}
<ParallaxSection className="relative h-screen flex items-center justify-center  dark:bg-navy-900">
  <div className="absolute dark:bg-navy-900" />
  
  <div className="relative z-10 text-center text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8">
    <motion.h1
      className="text-5xl md:text-7xl font-heading font-bold mb-6"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      About Dr. Fields
    </motion.h1>

    <motion.p
      className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      From Patient to Healer — A Journey of Transformation
    </motion.p>
  </div>
</ParallaxSection>


      {/* Story Timeline */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              My Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every healer has a story. Mine began with my own struggle with chronic illness.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-500"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-50 dark:bg-navy-800 p-6 rounded-xl">
                    <div className="text-primary-500 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-navy-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Credentials & Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.name}
                className="bg-white dark:bg-navy-900 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl mb-4">{credential.logo}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {credential.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
                Mission & Philosophy
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                My mission is to bridge the gap between modern functional medicine and ancient healing wisdom. I believe true healing occurs when we address not just symptoms, but the root causes of illness while honoring the mind-body-spirit connection.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Through personalized care and education, I empower my patients to become active participants in their healing journey, providing them with the tools and knowledge they need to achieve lasting health transformation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">5000+</h4>
                  <p className="text-gray-600 dark:text-gray-300">Patients Helped</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">15+</h4>
                  <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dr. Fields in practice"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Beyond Medicine
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              When I'm not helping patients, I'm dedicated to continuous learning and family time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-navy-900 p-8 rounded-xl text-center">
              <Heart className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Family First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Married with two children, I understand the importance of work-life balance and family wellness.
              </p>
            </div>
            
            <div className="bg-white dark:bg-navy-900 p-8 rounded-xl text-center">
              <BookOpen className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Martial Arts
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Practicing and teaching martial arts for over 20 years, emphasizing discipline and inner strength.
              </p>
            </div>
            
            <div className="bg-white dark:bg-navy-900 p-8 rounded-xl text-center">
              <Award className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Teaching
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular speaker at conferences and workshops, sharing knowledge with fellow practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}