import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Stethoscope } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Clinics', href: '/clinics' },
    { name: 'Programs', href: '/programs' },
    { name: 'Books', href: '/books' },
    { name: 'Media', href: '/media' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-white" />
            <div className="text-xl font-heading font-bold text-white">
              Dr. Jonathan M. Fields
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-base font-semibold transition-all duration-200 pb-1
                    ${isActive ? 'text-white' : 'text-white/70'}
                    hover:text-white
                    after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:h-[2px] after:w-0 hover:after:w-6 after:bg-white after:rounded-full after:transition-all after:duration-300
                    ${isActive ? 'after:w-6' : ''}
                  `}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Theme toggle + CTA + Mobile menu */}
          <div className="flex items-center space-x-4 ml-8">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-white" />
              )}
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors duration-200"
            >
              Book Consult
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-black border-t border-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-white bg-primary-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}

            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-white bg-primary-500 rounded-md hover:bg-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Consult
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
