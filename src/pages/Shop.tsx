import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Qi Gong Mastery Course',
      price: 297,
      originalPrice: 397,
      category: 'digital',
      image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 156,
      description: 'Complete video training program for mastering Qi Gong',
      featured: true,
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'Healing From Within Book',
      price: 24.99,
      category: 'physical',
      image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 89,
      description: 'Comprehensive guide to integrative medicine and healing',
      featured: false,
    },
    {
      id: 3,
      name: 'Adaptogenic Stress Support',
      price: 89.99,
      category: 'supplements',
      image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 234,
      description: 'Premium adaptogenic blend for stress management',
      featured: false,
      badge: 'New',
    },
    {
      id: 4,
      name: 'Functional Medicine Toolkit',
      price: 149,
      category: 'digital',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 67,
      description: 'Complete assessment and protocol templates',
      featured: false,
    },
    {
      id: 5,
      name: 'Gut Health Protocol Bundle',
      price: 199.99,
      originalPrice: 249.99,
      category: 'supplements',
      image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 145,
      description: 'Complete gut healing supplement bundle',
      featured: true,
      badge: 'Bundle Deal',
    },
    {
      id: 6,
      name: 'Red Light Therapy Panel',
      price: 499,
      category: 'affiliate',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 78,
      description: 'Professional-grade red light therapy device',
      featured: false,
      external: true,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'digital', name: 'Digital' },
    { id: 'physical', name: 'Physical' },
    { id: 'supplements', name: 'Supplements' },
    { id: 'affiliate', name: 'Affiliate' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredProduct = products.find(p => p.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <ParallaxSection className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
    <img
      src="/images/clinicbg.jpg"
      alt="Clinic background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/70" />
  </div>

        
        <div className="relative z-10 text-center  px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center mb-16 px-4">
  {/* Heading Reveal */}
  <motion.div
    className="overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
  >
    <motion.h1
      className="text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
    >
      Healing <span className="text-primary-400">Shop</span>
    </motion.h1>
  </motion.div>

  {/* Soft Underline Glow */}
  <motion.div
    className="h-[3px] w-[110px] mt-4 mx-auto bg-white/20 rounded-full blur-sm"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
    style={{ transformOrigin: 'center' }}
  />
</div>

          
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl text-white mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Premium products to support your healing journey
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Featured Product */}
      {featuredProduct && (
        <section className="py-16 bg-primary-50 dark:bg-primary-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  Featured Product
                </div>
                <h2 className="text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
                  {featuredProduct.name}
                </h2>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(featuredProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    {featuredProduct.rating} ({featuredProduct.reviews} reviews)
                  </span>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {featuredProduct.description}
                </p>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-primary-500">
                    ${featuredProduct.price}
                  </span>
                  {featuredProduct.originalPrice && (
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      ${featuredProduct.originalPrice}
                    </span>
                  )}
                </div>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
              
              <div>
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search */}
      <section className="py-8 bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-600 dark:text-gray-300">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-navy-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-xl font-bold text-primary-500">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <button className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center ${
                      product.external
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                        : 'bg-primary-500 hover:bg-primary-600 text-white'
                    }`}>
                      {product.external ? 'View Product' : (
                        <>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4 text-white">
            Questions About Our Products?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our team is here to help you choose the right products for your healing journey
          </p>
          <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Contact Our Team
          </button>
        </div>
      </section>
    </motion.div>
  );
}