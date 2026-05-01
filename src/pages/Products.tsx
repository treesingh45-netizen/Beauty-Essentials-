import { motion } from 'motion/react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export default function Products() {
  const { addToCart } = useCart();
  
  const categories = Array.from(new Set(products.map(p => p.category)));

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
            Shop <span className="text-primary-600 italic">Essentials</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-700 font-light max-w-2xl mx-auto"
          >
            Take the salon experience home. Our curated selection of premium skincare and beauty products will keep you glowing.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {categories.map((category, idx) => {
          const categoryProducts = products.filter(p => p.category === category);
          return (
            <div key={category} className="mb-20 last:mb-0">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 border-b border-gray-200 pb-4">
                {category}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categoryProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
                  >
                    <div className="aspect-w-4 aspect-h-4 bg-nude-100 flex items-center justify-center p-8 relative">
                      {product.isPopular && (
                        <span className="absolute top-4 left-4 bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
                          Best Seller
                        </span>
                      )}
                      
                      <div className="w-full h-48 flex items-center justify-center text-primary-300 font-serif italic text-xl drop-shadow-sm">
                        {product.category} Image
                      </div>
                      
                      {/* Quick Add Overlay */}
                      <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add to Bag
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-serif font-bold text-gray-900 mb-2 leading-tight min-h-[3rem]">{product.name}</h3>
                      <p className="text-primary-600 font-bold mb-3">PKR {product.price}</p>
                      <p className="text-sm text-gray-500 mb-6 flex-grow">{product.description}</p>
                      
                      <button 
                         onClick={() => addToCart(product)}
                         className="w-full py-2.5 rounded-xl border border-primary-600 text-primary-600 font-medium hover:bg-primary-50 transition-colors md:hidden"
                      >
                         Add to Bag
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
