import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { url: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Beautician putting cosmetic product", category: "Skincare" },
    { url: "https://images.pexels.com/photos/3985358/pexels-photo-3985358.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Face cleaning", category: "Facial" },
    { url: "https://images.pexels.com/photos/17891760/pexels-photo-17891760.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Cosmetics", category: "Makeup" },
    { url: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spa Mask", category: "Spa" },
    { url: "https://images.pexels.com/photos/433626/pexels-photo-433626.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Cruet bottles", category: "Products" },
    { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800", alt: "Beautiful Woman", category: "Beauty" },
    { url: "https://images.pexels.com/photos/34835304/pexels-photo-34835304.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Leopard Print Nail Art", category: "Nails" },
    { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800", alt: "Salon Interior", category: "Interior" },
  ];

  return (
    <div className="bg-nude-50 min-h-screen">
      <div className="bg-primary-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            Our <span className="text-primary-600 italic">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-700 font-light max-w-2xl mx-auto"
          >
            Take a look inside our premium salon and see the stunning transformations we create every day.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl aspect-w-4 aspect-h-5"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-white font-serif text-lg font-medium">{img.alt}</p>
                  <p className="text-primary-200 text-sm">{img.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
