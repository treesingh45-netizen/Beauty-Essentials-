import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [notes, setNotes] = useState('');

  const formatWhatsAppMessage = () => {
    let message = `🛒 *New Order Received – Beauty Essentials*\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `Name: ${customerName}\n`;
    message += `Phone: ${phone}\n`;
    message += `Address: ${address}\n\n`;
    
    message += `🧾 *Order Summary:*\n`;
    cart.forEach(item => {
      message += `${item.name} × ${item.quantity} – PKR ${item.price * item.quantity}\n`;
    });
    
    message += `\n💵 *Total Amount:* PKR ${cartTotal}\n`;
    message += `💳 *Payment Method:* ${paymentMethod}\n`;
    
    if (notes) {
      message += `\n📝 *Notes:*\n${notes}\n`;
    }
    
    message += `\n━━━━━━━━━━━━━━━\n`;
    message += `📅 Order Date: ${new Date().toLocaleString()}\n`;
    
    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    if (!customerName || !phone || !address) {
      alert("Please fill in all required fields (Name, Phone, Address).");
      return;
    }
    const url = `https://wa.me/923343045857?text=${formatWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-serif font-bold flex items-center">
                <ShoppingBag className="w-5 h-5 mr-3 text-primary-600" />
                Your Bag
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-nude-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-8 h-8 text-primary-300" />
                  </div>
                  <p className="text-gray-500 font-medium">Your bag is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 text-primary-600 hover:text-primary-800 font-medium underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-2xl">
                        <div className="w-20 h-20 bg-nude-50 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                           <span className="text-xs text-primary-300 font-serif italic">{item.category}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm leading-tight mb-1">{item.name}</h4>
                          <p className="text-primary-600 font-medium text-sm mb-3">PKR {item.price}</p>
                          
                          <div className="flex items-center space-x-3">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary-600 hover:text-primary-600"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary-600 hover:text-primary-600"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-xs text-red-500 hover:text-red-700 ml-auto underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Checkout Form */}
                  <div className="bg-nude-50 p-6 rounded-2xl mt-8">
                    <h3 className="font-serif font-bold text-gray-900 mb-4">Delivery Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                        <input 
                          type="text" 
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" 
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input 
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" 
                          placeholder="03xx xxxxxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Full Address *</label>
                        <textarea 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none" 
                          rows={2}
                          placeholder="House, Street, Area..."
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => setPaymentMethod('Cash')}
                          className={`py-2 text-sm rounded-lg font-medium border transition-colors ${paymentMethod === 'Cash' ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
                        >
                          Cash on Delivery
                        </button>
                        <button 
                          onClick={() => setPaymentMethod('Card')}
                          className={`py-2 text-sm rounded-lg font-medium border transition-colors ${paymentMethod === 'Card' ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
                        >
                          Card Payment
                        </button>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Special Notes (Optional)</label>
                        <input 
                          type="text" 
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-white shrink-0">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600">Total</span>
                  <span className="text-2xl font-serif font-bold text-gray-900">PKR {cartTotal}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white py-4 rounded-xl font-medium text-lg flex items-center justify-center transition-colors shadow-lg shadow-green-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.012 2c5.506 0 9.988 4.478 9.988 9.984a9.964 9.964 0 01-1.332 4.992l1.332 4.86a.488.488 0 01-.157.494.498.498 0 01-.522.062l-4.706-1.564A9.946 9.946 0 0112.012 22C6.506 22 2.025 17.522 2.025 12.016 2.025 6.51 6.506 2 12.012 2zM10.875 7.42c-.22-.49-.452-.5-.636-.51-.165-.01-.355-.01-.54-.01-.186 0-.488.07-.743.34-.255.27-1.026.96-1.026 2.37 0 1.41 1.05 2.77 1.196 2.97.147.2 2.083 3.32 5.122 4.54.72.29 1.282.46 1.722.59.722.21 1.38.18 1.898.11.58-.08 1.776-.7.2025-1.39.248-.68.248-1.27.174-1.39-.074-.12-.26-.19-.548-.34-.288-.14-1.74-.83-2.008-.93-.268-.1-.462-.14-.657.14-.195.28-.755.93-.925 1.12-.17.19-.34.21-.628.07-.288-.14-1.242-.44-2.365-1.42-.873-.76-1.463-1.7-1.633-1.99-.17-.29-.018-.45.126-.59.13-.13.288-.32.432-.48.144-.16.192-.28.288-.46.096-.18.048-.34-.024-.48-.073-.15-.658-1.64-.9-2.25z" fillRule="nonzero"/>
                  </svg>
                  Order via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
