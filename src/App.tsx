import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, Instagram, Facebook, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { CartProvider, useCart } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

// --- Layout Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cart, setIsCartOpen } = useCart();
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-gray-900">
              Beauty <span className="text-primary-600 font-light italic">Essentials</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-primary-600 ${
                  location.pathname === link.path ? 'text-primary-600 font-medium' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-primary-600 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>
              
              <Link 
                to="/contact" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 focus:outline-none"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-primary-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base transition-colors ${
                  location.pathname === link.path ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-full text-base font-medium"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-nude-50 pt-16 pb-8 border-t-4 border-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Beauty <span className="text-primary-400 font-light italic">Essentials</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premium beauty salon located in Bahria Town, Karachi. We specialize in enhancing your natural beauty with top-tier services and products.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/sanasohail_bestudio/reels/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/bysanasohail/?ref=NONE_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-gray-300">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Our Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Shop</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white text-sm transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-gray-300">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">AQ Super Market Ground, 195 Precinct 19, Bahria Town, Karachi</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">0334 3045857</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-gray-300">Working Hours</h4>
            <ul className="space-y-3">
               <li className="flex justify-between text-sm text-gray-400 border-b border-gray-800 pb-2">
                 <span>Mon, Thu</span>
                 <span>1:00 PM - 12:00 AM</span>
               </li>
               <li className="flex justify-between text-sm text-gray-400 border-b border-gray-800 pb-2">
                 <span>Tue, Wed</span>
                 <span>12:00 PM - 8:00 PM</span>
               </li>
               <li className="flex justify-between text-sm text-gray-400 border-b border-gray-800 pb-2">
                 <span>Friday</span>
                 <span>12:00 AM - 12 PM / 2 PM - 1 AM</span>
               </li>
               <li className="flex justify-between text-sm text-gray-400">
                 <span>Sat, Sun</span>
                 <span className="text-primary-400">Closed</span>
               </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Beauty Essentials. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="text-xs text-gray-500">Designed with Elegance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  // Pre-fill a standard chat greeting
  const message = "Hello Beauty Essentials! I would like to inquire about your services.";
  const url = `https://wa.me/923343045857?text=${encodeURIComponent(message)}`;
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-8 h-8 pointer-events-none" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-gray-800 text-sm px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
        Chat with us
      </span>
    </a>
  );
};

// --- ScrollToTop ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- Main App Component ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </CartProvider>
    </Router>
  );
}
