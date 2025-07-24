import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, ChevronDown, ChevronUp } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

export default function Books() {
  const [activeChapter, setActiveChapter] = React.useState<number | null>(null);

  const chapters = [
    {
      title: 'The Foundation of Healing',
      preview: 'Understanding the root causes of illness and why conventional medicine often falls short...',
    },
    {
      title: 'Ancient Wisdom Meets Modern Science',
      preview: 'How traditional Chinese medicine principles can enhance functional medicine approaches...',
    },
    {
      title: 'The Gut-Brain Connection',
      preview: 'Exploring the crucial relationship between digestive health and mental wellbeing...',
    },
    {
      title: 'Hormonal Harmony',
      preview: 'Natural approaches to balancing hormones and optimizing endocrine function...',
    },
    {
      title: 'Energy Medicine and Qi Gong',
      preview: 'Harnessing the power of life force energy for healing and vitality...',
    },
    {
      title: 'Creating Your Healing Protocol',
      preview: 'Step-by-step guide to designing a personalized wellness plan...',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams, MD',
      title: 'Functional Medicine Physician',
      text: 'Dr. Fields has masterfully bridged the gap between ancient wisdom and modern medicine. This book is a must-read for anyone seeking true healing.',
      rating: 5,
    },
    {
      name: 'Jennifer Martinez',
      title: 'Health Coach',
      text: 'Finally, a book that addresses the whole person. The practical guidance in this book has transformed my practice and my patients\' lives.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      title: 'Wellness Advocate',
      text: 'Dr. Fields writes with such clarity and compassion. This book gave me hope and practical tools for my own healing journey.',
      rating: 5,
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
  <div className="absolute" />
   <div className="absolute inset-0 -z-10">
    <img
      src="/images/clinicbg.jpg"
      alt="Clinic background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/70" />
  </div>

  <div className="relative z-10 text-center text-white dark:text-white px-4 sm:px-6 lg:px-8">
    <motion.div
      className="mb-8"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      
    </motion.div>

    <div className="relative z-10 text-center max-w-4xl mx-auto mb-16 px-4">
  {/* Title */}
  <motion.h1
    className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold tracking-tight text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]"
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
  >
    Healing From <span className="text-primary-400">Within</span>
  </motion.h1>

  {/* Divider Line */}
  <motion.div
    className="h-[3px] w-[100px] mx-auto mt-4 bg-white/20 rounded-full blur-sm"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
    style={{ transformOrigin: 'center' }}
  />

  {/* Quote */}
  <motion.p
    className="text-lg md:text-2xl mt-8 font-light text-white/80 italic leading-relaxed"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
  >
    “The only way to heal is to understand the root cause of illness<br className="hidden md:inline" />
    and address it with both modern science and ancient wisdom.”
  </motion.p>
</div>


    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
        Pre-Order Now
      </button>
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-full font-semibold transition-colors">
        Read Preview
      </button>
    </motion.div>
  </div>
</ParallaxSection>


      {/* Book Details */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
                About the Book
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                "Healing From Within" combines Dr. Fields' extensive experience in functional medicine with ancient healing wisdom to provide a comprehensive guide for anyone seeking true health transformation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                This groundbreaking book reveals how to address the root causes of illness through personalized protocols that honor both cutting-edge science and time-tested healing traditions.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pages</h4>
                  <p className="text-gray-600 dark:text-gray-300">320 pages</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Format</h4>
                  <p className="text-gray-600 dark:text-gray-300">Hardcover & Digital</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Release Date</h4>
                  <p className="text-gray-600 dark:text-gray-300">Spring 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Language</h4>
                  <p className="text-gray-600 dark:text-gray-300">English</p>
                </div>
              </div>
              
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Pre-Order for $24.99
              </button>
            </div>
            
            <div>
              <img
                src="/images/book.jpg"
                alt="Book Pages"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Preview */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Chapter Preview
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore what's inside this transformative guide
            </p>
          </div>
          
          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => setActiveChapter(activeChapter === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Chapter {index + 1}: {chapter.title}
                    </h3>
                  </div>
                  {activeChapter === index ? (
                    <ChevronUp className="h-5 w-5 text-primary-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary-500" />
                  )}
                </button>
                
                {activeChapter === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300">{chapter.preview}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Praise for the Book
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Early reviews from healthcare professionals and readers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gray-50 dark:bg-navy-800 p-8 rounded-xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Author Media Kit
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            High-resolution images, author bio, and press materials for media outlets
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center justify-center mx-auto">
            <Download className="h-5 w-5 mr-2" />
            Download Media Kit
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4 text-white">
            Transform Your Health Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Pre-order your copy and receive exclusive bonuses including a 30-minute consultation with Dr. Fields
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Pre-Order Now - $24.99
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