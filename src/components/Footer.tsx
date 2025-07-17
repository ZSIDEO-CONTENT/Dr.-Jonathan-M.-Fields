import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-primary-500" />
              <div className="text-xl font-heading font-bold">
                Dr. Jonathan M. Fields
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Integrative Medicine Expert helping you heal from the inside out through functional medicine and ancient wisdom.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
              <Link to="/clinics" className="block text-gray-400 hover:text-white transition-colors">Clinics</Link>
              <Link to="/programs" className="block text-gray-400 hover:text-white transition-colors">Programs</Link>
              <Link to="/books" className="block text-gray-400 hover:text-white transition-colors">Books</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link to="/programs" className="block text-gray-400 hover:text-white transition-colors">Functional Medicine</Link>
              <Link to="/programs" className="block text-gray-400 hover:text-white transition-colors">Qi Gong Training</Link>
              <Link to="/clinics" className="block text-gray-400 hover:text-white transition-colors">Acupuncture</Link>
              <Link to="/clinics" className="block text-gray-400 hover:text-white transition-colors">Herbal Therapy</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get health tips and updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dr. Jonathan M. Fields. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}