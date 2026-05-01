import { motion } from 'motion/react';
import { serviceCategories } from '../data/services';
import { Sparkles, Scissors, Palette, Feather, Brush, Flower, Crown } from 'lucide-react';
import React from 'react';

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Scissors, Palette, Feather, Brush, Flower, Crown
};

export default function Services() {
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
            Our <span className="text-primary-600 italic">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-700 font-light max-w-2xl mx-auto"
          >
            From essential grooming to luxurious spa treatments, explore our comprehensive menu designed to make you look and feel your absolute best.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-200">
        <div className="grid grid-cols-1 gap-20">
          {serviceCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Sparkles;
            
            return (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                id={category.id}
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-200 border-dashed pb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center text-primary-600 border border-primary-100">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-serif font-bold text-gray-900">{category.name}</h2>
                      <p className="text-gray-600 mt-1">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                  {category.services.map((service) => (
                    <div key={service.id} className="flex justify-between items-start group p-4 rounded-xl hover:bg-white transition-colors">
                      <div className="flex-1 pr-6">
                        <h3 className="text-lg font-medium text-gray-900 font-serif group-hover:text-primary-600 transition-colors">
                          {service.name}
                        </h3>
                        {service.description && (
                          <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-primary-700 font-medium">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20 text-center px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Ready to pamper yourself?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Contact us today to schedule your appointment. We recommend booking in advance, especially for bridal and premium services.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-md"
        >
          Book Your Visit
        </a>
      </div>
    </div>
  );
}
