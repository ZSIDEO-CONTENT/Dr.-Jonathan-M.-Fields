import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

export default function Media() {
  const [activeTab, setActiveTab] = useState('podcast');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const podcasts = [
    {
      title: 'Healing Autoimmune Naturally',
      date: 'Dec 15, 2024',
      duration: '45 min',
      description: 'Deep dive into natural approaches for autoimmune conditions.',
      image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Autoimmune', 'Natural Healing'],
    },
    {
      title: 'The Power of Qi Gong',
      date: 'Dec 10, 2024',
      duration: '38 min',
      description: 'Exploring the ancient practice of Qi Gong for modern wellness.',
      image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Qi Gong', 'Energy Medicine'],
    },
    {
      title: 'Functional Medicine Basics',
      date: 'Dec 5, 2024',
      duration: '52 min',
      description: 'Understanding the fundamentals of functional medicine.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Functional Medicine', 'Health'],
    },
    {
      title: 'Gut Health Revolution',
      date: 'Nov 28, 2024',
      duration: '41 min',
      description: 'How gut health affects your entire body and mind.',
      image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Gut Health', 'Microbiome'],
    },
    {
      title: 'Hormone Optimization',
      date: 'Nov 20, 2024',
      duration: '48 min',
      description: 'Natural approaches to balancing hormones at any age.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Hormones', 'Womens Health'],
    },
    {
      title: 'Stress and Healing',
      date: 'Nov 15, 2024',
      duration: '35 min',
      description: 'The connection between stress and chronic illness.',
      image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Stress', 'Mental Health'],
    },
  ];

  const blogPosts = [
    {
      title: '5 Signs Your Gut Needs Healing',
      date: 'Dec 12, 2024',
      excerpt: 'Learn to recognize the subtle signs that your digestive system needs support.',
      image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Gut Health', 'Digestion'],
    },
    {
      title: 'Morning Qi Gong Routine',
      date: 'Dec 8, 2024',
      excerpt: 'Start your day with energy and vitality using this simple routine.',
      image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Qi Gong', 'Morning Routine'],
    },
    {
      title: 'Functional Medicine vs Conventional Medicine',
      date: 'Dec 3, 2024',
      excerpt: 'Understanding the key differences and when to use each approach.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Functional Medicine', 'Healthcare'],
    },
    {
      title: 'Natural Thyroid Support',
      date: 'Nov 25, 2024',
      excerpt: 'Evidence-based approaches to supporting thyroid function naturally.',
      image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Thyroid', 'Hormones'],
    },
    {
      title: 'The Mind-Body Connection',
      date: 'Nov 18, 2024',
      excerpt: 'How emotions and thoughts directly impact physical health.',
      image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Mind-Body', 'Mental Health'],
    },
    {
      title: 'Seasonal Wellness Tips',
      date: 'Nov 10, 2024',
      excerpt: 'Adapting your health routine for optimal seasonal wellness.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Seasonal Health', 'Wellness'],
    },
  ];

  const pressFeatures = [
    {
      title: 'The Future of Integrative Medicine',
      outlet: 'Health Magazine',
      date: 'Nov 2024',
      type: 'Article',
      image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Qi Gong for Modern Life',
      outlet: 'Wellness Today Podcast',
      date: 'Oct 2024',
      type: 'Podcast Interview',
      image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Functional Medicine Explained',
      outlet: 'Morning Show',
      date: 'Sep 2024',
      type: 'TV Interview',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const getCurrentPosts = () => {
    const posts = activeTab === 'podcast' ? podcasts : blogPosts;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return posts.slice(indexOfFirstPost, indexOfLastPost);
  };

  const totalPages = Math.ceil((activeTab === 'podcast' ? podcasts.length : blogPosts.length) / postsPerPage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <ParallaxSection className="relative h-screen flex items-center justify-center">
      <div className="absolute bg-gradient-to-br from-[#f7f4ed] to-[#e4dfd6]" />

        
        <div className="relative z-10 text-center text-gray-900 px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl md:text-7xl font-heading dark:text-white font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Media & Resources
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl dark:text-white mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Podcast, Blog, and Press Coverage
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {['podcast', 'blog', 'press'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`pb-2 px-4 text-lg font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'podcast' && (
            <div className="mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
                  The Healing Within Podcast
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Weekly conversations about integrative medicine, healing, and wellness
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Listen on Spotify
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Listen on Apple
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'press' ? (
              pressFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                        {feature.type}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {feature.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.outlet}
                    </p>
                    <button className="text-primary-500 hover:text-primary-600 font-semibold">
                      View Feature
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              getCurrentPosts().map((post, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                        {activeTab === 'podcast' && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{(post as any).duration}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {activeTab === 'podcast' ? (post as any).description : (post as any).excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded flex items-center"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-primary-500 hover:text-primary-600 font-semibold">
                      {activeTab === 'podcast' ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Listen Now
                        </>
                      ) : (
                        'Read More'
                      )}
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Pagination */}
          {activeTab !== 'press' && totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 bg-white dark:bg-navy-900 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </button>
              
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === i + 1
                        ? 'bg-primary-500 text-white'
                        : 'bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-navy-800'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center px-4 py-2 bg-white dark:bg-navy-900 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4 text-white">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get the latest insights on integrative medicine and wellness delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}