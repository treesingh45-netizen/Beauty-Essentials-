import { motion } from 'motion/react';
import { Shield, Heart, Sparkles, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-nude-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            About <span className="text-primary-600 italic">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-700 font-light"
          >
            Discover the passion and dedication behind Bahria Town's most trusted premium beauty salon.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3985323/pexels-photo-3985323.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                alt="Woman getting facial treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="font-serif text-3xl font-bold text-primary-600 mb-1">5+</p>
              <p className="text-sm font-medium tracking-wide uppercase text-gray-500">Years of Excellence</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900">Welcome to Beauty Essentials</h2>
            <p className="text-gray-600 leading-relaxed">
              Located in the heart of Bahria Town, Karachi, Beauty Essentials was founded with a singular 
              vision: to provide an unparalleled salon experience that combines luxury, comfort, and exceptional results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our 5-star rated facility is designed to be your personal oasis. From the moment you walk through 
              our doors, you are treated to a personalized journey. Whether it's a rejuvenating facial, 
              a chic new haircut, or a complete bridal transformation, our expert team is dedicated to enhancing 
              your natural beauty.
            </p>
            
            <div className="border-l-4 border-primary-400 pl-6 my-8 py-2">
              <p className="font-serif italic text-xl text-gray-800">
                "We believe that beauty is not just about looking good, but feeling confident and empowered in your own skin."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-gray-100 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver premium beauty and skincare services using high-quality products and advanced techniques, 
                while maintaining the highest standards of hygiene and customer care in a relaxing environment.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and sought-after beauty destination in Karachi, known for 
                transformative results, exceptional service, and setting industry standards for cleanliness and professionalism.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Why <span className="italic text-primary-600">Choose Us?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We don't just offer services; we offer an experience. Here is what sets Beauty Essentials apart.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="w-8 h-8" />,
              title: "Expert Professionals",
              desc: "Our team consists of highly trained and experienced stylists, makeup artists, and skincare specialists."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Uncompromising Hygiene",
              desc: "We strictly adhere to top-tier sanitization protocols to ensure a safe and clean environment for every client."
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: "Quality Products",
              desc: "We only use premium, authentic beauty and skincare products to guarantee the best results without damaging your skin or hair."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-primary-50"
            >
              <div className="mx-auto w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
