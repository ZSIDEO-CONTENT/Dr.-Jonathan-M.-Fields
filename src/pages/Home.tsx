
import { Link } from 'react-router-dom';
import drj from '@/assets/drj.png';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, CheckCircle, Calendar, FileText, } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

export default function Home() {
  const conditions = [
    { name: 'Chronic Fatigue', icon: '⚡', description: 'Restore your energy naturally' },
    { name: 'Thyroid Issues', icon: '🦋', description: 'Balance your metabolism' },
    { name: 'Hormone Imbalance', icon: '🌸', description: 'Optimize hormonal health' },
    { name: 'Gut Health', icon: '🌱', description: 'Heal your digestive system' },
    { name: 'Autoimmunity', icon: '🛡️', description: 'Strengthen your immune system' },
    { name: 'Neuropathy', icon: '🧠', description: 'Restore nerve function' },
  ];

  const steps = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Book Consult',
      description: 'Schedule your free discovery call to discuss your health goals',
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Personalized Plan',
      description: 'Receive a custom protocol tailored to your unique needs',
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Real Results',
      description: 'Experience lasting improvements in your health and vitality',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Dr. Fields helped me overcome chronic fatigue that I had struggled with for years. His approach is truly holistic.',
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      text: 'The Qi Gong program transformed my energy levels and stress management. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Maria R.',
      text: 'Finally found someone who understands the connection between mind, body, and spirit. Life-changing experience.',
      rating: 5,
    },
  ];

  const podcasts = [
    {
      title: 'Healing Autoimmune Naturally',
      date: 'Dec 15, 2024',
      duration: '45 min',
      image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'The Power of Qi Gong',
      date: 'Dec 10, 2024',
      duration: '38 min',
      image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Functional Medicine Basics',
      date: 'Dec 5, 2024',
      duration: '52 min',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
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
<ParallaxSection className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
  {/* Background image and overlay */}
  <div className="absolute inset-0 -z-10">
    <img
      src="/images/clinicbg.jpg"
      alt="Clinic background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/70" />
  </div>

  {/* Foreground content */}
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
    <div className="relative z-10 flex flex-col items-center justify-center text-center">
  {/* Line 1: Reveal with mask */}
  <motion.div
    className="overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
  >
    <motion.h1
      className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
    >
      Functional&nbsp;
      <span className="text-primary-400">Medicine</span>
    </motion.h1>
  </motion.div>

  {/* Line 2: Delayed elegant reveal */}
  <motion.div
    className="overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    <motion.h2
      className="text-[clamp(2rem,5vw,3rem)] font-light italic text-white/80 mt-4 tracking-wide"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
    >
      meets <span className="not-italic text-primary-300 font-semibold">Ancient Wisdom</span>
    </motion.h2>
  </motion.div>

  {/* Underline glow bar */}
  <motion.div
    className="h-[4px] w-[180px] mt-6 bg-white/20 rounded-full blur-sm"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
    style={{ transformOrigin: 'center' }}
  />
</div>


    <motion.p
      className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Helping You Heal From The Inside Out
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <a
        href="/contact"
        className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
      >
        Book a Free Consult
      </a>
      <button className="bg-[#7d293b] hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center space-x-2 hover:scale-105">
        <Play className="h-5 w-5" />
        <span>Watch Video</span>
      </button>
    </motion.div>
  </div>
</ParallaxSection>



      {/* About Strip */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={drj}
                alt="Dr. Jonathan M. Fields"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
                Meet Dr. Jonathan M. Fields
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                With over 15 years of experience in integrative medicine, Dr. Fields combines the best of modern functional medicine with ancient healing wisdom. His unique approach has helped thousands of patients reclaim their health and vitality.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-white hover:text-black font-semibold"
              >
                Learn More About Dr. Fields
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Addressing the root causes of your health challenges with personalized, integrative approaches
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.name}
                className="bg-gray-50 dark:bg-navy-800 p-8 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl mb-4">{condition.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {condition.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{condition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your journey to optimal health in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
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
              What Our Patients Say
            </h2>
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
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900 dark:text-white">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Preview */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Latest Podcast Episodes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Insights and wisdom for your healing journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {podcasts.map((podcast, index) => (
              <motion.div
                key={podcast.title}
                className="bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {podcast.date} • {podcast.duration}
                  </p>
                  <button className="flex items-center text-primary-500 hover:text-primary-600 font-semibold">
                    <Play className="h-5 w-5 mr-2" />
                    Listen Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4 text-white">
            Download Your Free Health Optimization Checklist
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get our comprehensive guide to optimizing your health naturally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Download Now
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}