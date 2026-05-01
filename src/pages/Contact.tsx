import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email/message
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="bg-nude-50 min-h-screen">
      <div className="bg-primary-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            Get in <span className="text-primary-600 italic">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-700 font-light max-w-2xl mx-auto"
          >
            We'd love to hear from you. Book an appointment, ask a question, or simply say hello.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600 shrink-0 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Location</h4>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      AQ Super Market Ground, 195 Precinct 19,<br/>
                      Bahria Town, Karachi, 75000, Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600 shrink-0 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone & WhatsApp</h4>
                    <p className="text-gray-600 mt-1">0334 3045857</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600 shrink-0 mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Working Hours</h4>
                    <ul className="text-gray-600 mt-1 space-y-1">
                      <li><span className="font-medium mr-2">Monday:</span> 1:00 PM – 12:00 AM</li>
                      <li><span className="font-medium mr-2">Tuesday:</span> 12:00 PM – 8:00 PM</li>
                      <li><span className="font-medium mr-2">Wednesday:</span> 12:00 PM – 8:00 PM</li>
                      <li><span className="font-medium mr-2">Thursday:</span> 1:00 PM – 12:00 AM</li>
                      <li><span className="font-medium mr-2">Friday:</span> 12:00 AM – 12:00 PM / 2:00 PM – 1:00 AM</li>
                      <li className="text-primary-600"><span className="font-medium text-gray-600 mr-2">Sat - Sun:</span> Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md h-80 bg-gray-200 border-4 border-white">
              {/* Note: Replacing direct iframe with image map approach or reliable iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115858.94056265005!2d67.19973216839353!3d25.048039233159982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347c61f2ce5f5%3A0xe5e791e32717dd37!2sBahria%20Town%20Karachi!5e0!3m2!1sen!2s!4v1714571212345!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-primary-50"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="03xx xxxxxxx"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message / Appointment Request</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="I would like to book a facial..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex justify-center items-center"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
