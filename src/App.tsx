
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Clinics from './pages/Clinics';
import Programs from './pages/Programs';
import Books from './pages/Books';
import Media from './pages/Media';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-navy-900 text-gray-900 dark:text-white transition-colors duration-300">
          <ScrollToTop />
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/clinics" element={<Clinics />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/books" element={<Books />} />
              <Route path="/media" element={<Media />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;