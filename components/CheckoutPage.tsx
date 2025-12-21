
import React, { useState } from 'react';
import { ProductOffer } from '../App';

interface CheckoutPageProps {
  offer: ProductOffer;
  onConfirm: () => void;
  onBack: () => void;
}

// Updated with the user's specific Google Apps Script Web App URL
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwRUzY-89O1fj4Yf6R6DBf_d9SlixxoBL9R_JRluwRcHbP-TafAZV-D1kjt5OVcJc8U/exec';

const CheckoutPage: React.FC<CheckoutPageProps> = ({ offer, onConfirm, onBack }) => {
  const [isPlacing, setIsPlacing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    city: '',
    address: '',
    email: '',
    confirmed: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmed) return alert("Please confirm your details are correct.");
    
    setIsPlacing(true);

    try {
      const payload = {
        ...formData,
        orderItem: offer.name,
        quantity: offer.qty,
        totalPrice: offer.price,
        orderDate: new Date().toISOString()
      };

      // We use no-cors because Google Apps Script redirects after a POST request,
      // which standard CORS preflight checks often fail on in simple setups.
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // With 'no-cors', the response is opaque, but if the fetch succeeds, we proceed.
      setIsPlacing(false);
      onConfirm();
    } catch (error) {
      console.error("Order submission error:", error);
      setIsPlacing(false);
      alert("There was an error placing your order. Please try again or contact us on WhatsApp.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 py-6 px-6 shadow-sm">
        <div className="max-w-xl mx-auto text-center space-y-2 relative">
          <button onClick={onBack} className="absolute left-0 top-1 text-gray-400 hover:text-gray-600 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Secure Checkout</h1>
          <p className="text-green-600 font-bold text-sm uppercase tracking-wide">Pay Cash on Delivery</p>
          
          <div className="flex justify-center space-x-4 pt-2">
             <div className="flex items-center space-x-1 text-[10px] font-bold text-gray-500 uppercase">
               <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
               <span>Cash on Delivery</span>
             </div>
             <div className="flex items-center space-x-1 text-[10px] font-bold text-gray-500 uppercase">
               <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
               <span>No Card Required</span>
             </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-xl mx-auto px-6 py-8 space-y-8 pb-32">
        {/* ORDER SUMMARY */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-gray-50">
               <img src="https://supplipure.com/wp-content/uploads/2025/12/Bionic-Heated-Neck3.png" alt="Product" className="w-full h-full object-contain p-2" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{offer.name}</h3>
              <p className="text-xs text-gray-500">Offer: {offer.label} | Size: Universal</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-black text-orange-600">{offer.price} AED</span>
                <span className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-lg font-bold">Qty: {offer.qty}</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-dashed border-gray-100 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-gray-900 font-bold">{offer.price} AED</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className="text-green-600 font-bold uppercase text-xs">Free</span>
            </div>
            <div className="flex justify-between items-center pt-2 text-lg">
              <span className="font-black text-gray-900 uppercase tracking-tighter">Total Payable</span>
              <span className="font-black text-gray-900">{offer.price} AED</span>
            </div>
          </div>
        </section>

        {/* CUSTOMER FORM */}
        <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm mr-2">1</span>
              Delivery Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                <input 
                  required
                  autoFocus
                  type="text"
                  placeholder="e.g. Ahmed bin Salem"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium"
                  value={formData.fullName}
                  onChange={e => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mobile Number *</label>
                <input 
                  required
                  type="tel"
                  placeholder="e.g. 050 123 4567"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium"
                  value={formData.mobile}
                  onChange={e => setFormData({...formData, mobile: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">City *</label>
                  <input 
                    required
                    type="text"
                    placeholder="e.g. Dubai"
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium"
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email (Optional)</label>
                  <input 
                    type="email"
                    placeholder="for order tracking"
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Delivery Address *</label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Apartment/Villa No, Street Name, Area..."
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium resize-none"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm mr-2">2</span>
              Payment Method
            </h3>
            
            <div className="p-5 bg-orange-50 border-2 border-orange-500 rounded-3xl relative">
               <div className="absolute top-4 right-4 text-orange-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
               </div>
               <div className="flex items-center space-x-3">
                  <span className="text-3xl">💵</span>
                  <div>
                    <p className="font-bold text-orange-900 uppercase tracking-tight">Cash on Delivery</p>
                    <p className="text-xs text-orange-700">Recommended: Pay only when you receive.</p>
                  </div>
               </div>
            </div>
            <p className="text-[10px] text-gray-400 leading-tight">Courier will call you to confirm your location before delivery. Please keep exact cash ready.</p>
          </div>

          <div className="flex items-start space-x-3 pt-4">
             <input 
              required
              type="checkbox" 
              id="consent" 
              className="mt-1 w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
              checked={formData.confirmed}
              onChange={e => setFormData({...formData, confirmed: e.target.checked})}
            />
             <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
               I confirm that my address and phone number are correct and I agree to receive a confirmation call/message for this COD order.
             </label>
          </div>
        </form>
      </main>

      {/* STICKY FOOTER CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur border-t border-gray-100 z-50">
        <div className="max-w-xl mx-auto">
          <button 
            type="submit"
            form="checkout-form"
            disabled={isPlacing}
            className="w-full py-5 gradient-cta text-white font-black rounded-2xl shadow-xl shadow-orange-200 hover:scale-[1.02] transition-all text-lg flex items-center justify-center disabled:opacity-70"
          >
            {isPlacing ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Placing Order...
              </span>
            ) : (
              `🛒 Confirm Order – Pay ${offer.price} AED`
            )}
          </button>
        </div>
      </div>

      {/* Trust Footer */}
      <footer className="w-full text-center py-8 pb-32 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
        🛡️ Secure SSL Checkout | We never ask for card details
      </footer>
    </div>
  );
};

export default CheckoutPage;
