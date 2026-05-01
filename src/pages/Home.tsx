import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, CheckCircle, MapPin, Calendar, CreditCard, Phone } from 'lucide-react';
import { serviceCategories } from '../data/services';
import { products } from '../data/products';

export default function Home() {
  const popularProducts = products.filter(p => p.isPopular).slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-nude-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-nude-50/90 to-primary-50/40 mix-blend-multiply" />
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000" 
            alt="Salon Interior" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 drop-shadow-sm"
          >
            Enhancing Your <span className="text-primary-600 italic">Natural Beauty</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-light drop-shadow-md"
          >
            Experience premium salon and skincare services in Bahria Town, Karachi. 
            Where luxury meets relaxation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/contact" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
              Book Appointment
            </Link>
            <Link to="/services" className="w-full sm:w-auto bg-white/80 backdrop-blur border-2 border-primary-200 hover:border-primary-400 text-gray-800 px-8 py-3.5 rounded-full text-base font-medium transition-all flex items-center justify-center hover:bg-white">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center p-4">
              <div className="flex space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />)}
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900">5-Star Rated Salon</h3>
              <p className="text-sm text-gray-500 mt-2">Trusted by hundreds in Bahria Town</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <CheckCircle className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="text-lg font-serif font-bold text-gray-900">Premium Hygiene</h3>
              <p className="text-sm text-gray-500 mt-2">Strict sanitization protocols</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <CreditCard className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="text-lg font-serif font-bold text-gray-900">Flexible Payments</h3>
              <p className="text-sm text-gray-500 mt-2">Cash & Cards accepted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-nude-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">Our <span className="italic text-primary-600">Signature</span> Services</h2>
            <p className="text-gray-600">From essential facials to full bridal transformations, discover the perfect treatment tailored to your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.slice(0, 3).map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-primary-50 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Star className="w-6 h-6" /> {/* Placeholder icon */}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{category.description}</p>
                <Link to="/services" className="inline-flex items-center text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                  View full list <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">Shop <span className="italic text-primary-600">Essentials</span></h2>
              <p className="text-gray-600">Take the salon experience home with our hand-picked skincare and beauty products.</p>
            </div>
            <Link to="/products" className="group hidden md:inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors">
              Shop entire collection 
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-w-4 aspect-h-5 w-full overflow-hidden rounded-2xl bg-nude-100 flex items-center justify-center">
                   {/* Placeholder for Product Image */}
                   <div className="w-full h-80 bg-nude-100 flex items-center justify-center text-primary-300 font-serif italic text-xl">
                      {product.category}
                   </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">PKR {product.price}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center justify-center border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact & Testimonial */}
      <section className="py-20 bg-primary-800 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-700/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-900/50 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready for your glow up?</h2>
              <p className="text-primary-100 mb-8 max-w-md leading-relaxed">
                Visit us in Bahria Town or book your appointment today. Walk-ins are welcome subject to availability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-primary-50">
                  <MapPin className="w-6 h-6 mr-4 text-primary-300" />
                  <span>AQ Super Market Ground, Precinct 19, Bahria Town</span>
                </div>
                <div className="flex items-center text-primary-50">
                  <Phone className="w-6 h-6 mr-4 text-primary-300" />
                  <span>0334 3045857</span>
                </div>
                <div className="flex items-start text-primary-50">
                  <Calendar className="w-6 h-6 mr-4 text-primary-300" />
                  <div>
                    <p>Open 6 Days a Week (Closed Sat-Sun)</p>
                    <p className="text-sm text-primary-200 mt-1">See footer for detailed timings</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
              <div className="flex text-gold-400 mb-6">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <p className="text-xl font-serif italic text-white mb-6 leading-relaxed">
                "Absolutely love the hygiene and professionalism here. Beauty Essentials has the best facial services in Bahria Town! Highly recommended for their friendly staff and brilliant results."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center text-xl font-serif text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold">Sara A.</h4>
                  <p className="text-primary-200 text-sm">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
