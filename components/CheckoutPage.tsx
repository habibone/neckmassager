
import React, { useState, useEffect } from 'react';
import { ProductOffer } from '../App';

interface CheckoutPageProps {
  offer: ProductOffer;
  onConfirm: (orderDetails: any) => void;
}

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwRUzY-89O1fj4Yf6R6DBf_d9SlixxoBL9R_JRluwRcHbP-TafAZV-D1kjt5OVcJc8U/exec';

const CheckoutPage: React.FC<CheckoutPageProps> = ({ offer, onConfirm }) => {
  const [isPlacing, setIsPlacing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    city: '',
    address: '',
    email: '',
    confirmed: false
  });

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city && !formData.city) {
          setFormData(prev => ({ ...prev, city: data.city }));
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmed) return alert("Please confirm your details are correct.");
    
    setIsPlacing(true);

    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1);
    const year = now.getFullYear().toString().slice(-2);
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    const orderPayload = {
      fullName: formData.fullName,
      mobile: formData.mobile,
      city: formData.city,
      address: formData.address,
      email: formData.email,
      orderItem: offer.name,
      quantity: offer.qty,
      totalPrice: `${offer.price} AED`,
      orderDate: formattedDate,
      status: '🟡 Pending Confirmation'
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(orderPayload),
      });

      setIsPlacing(false);
      onConfirm(orderPayload);
    } catch (error) {
      console.error("Critical submission error:", error);
      setIsPlacing(false);
      alert("Submission error. Please check your internet or try again later.");
    }
  };

  return (
    <section className="py-24 px-4 md:px-6 bg-[#fff2e8] border-t border-orange-100/50 relative overflow-hidden">
      {/* Decorative soft glow */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-60"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-3">Order Details</h2>
          <div className="h-0.5 w-8 bg-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Order Summary */}
          <div className="space-y-8 order-2 lg:order-1">
            <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] px-1">Your Selection</h3>
            
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 space-y-8 border border-white shadow-xl shadow-orange-900/5">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-50 rounded-2xl border border-gray-100 p-3 shrink-0 flex items-center justify-center">
                  <img 
                    src="http://images.supplipure.com/wp-content/uploads/2026/01/viberation-palate-new.webp" 
                    className="w-full h-full object-contain mix-blend-multiply" 
                    alt="Product" 
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-gray-900 text-sm leading-snug uppercase tracking-tight">{offer.name}</h4>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Quantity: {offer.qty}</p>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-gray-100/50">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-gray-900">{offer.price} AED</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Shipping (UAE)</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <span className="text-sm font-black text-gray-900 uppercase tracking-[0.1em]">Grand Total</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-gray-900 tracking-tighter">{offer.price} <span className="text-xs ml-1">AED</span></span>
                  </div>
                </div>
              </div>

              <div className="bg-[#fcfcfc] rounded-2xl p-4 flex items-center space-x-4 border border-gray-50">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Cash on Delivery</p>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Pay at your doorstep</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Shipping Form */}
          <div className="space-y-8 order-1 lg:order-2">
            <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] px-1">Delivery Information</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <input 
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-0 focus:border-orange-400 outline-none transition-all font-bold text-gray-900 text-sm placeholder:text-gray-300 placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px] shadow-sm"
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input 
                    required
                    type="tel"
                    placeholder="Mobile No"
                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-0 focus:border-orange-400 outline-none transition-all font-bold text-gray-900 text-sm placeholder:text-gray-300 placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px] shadow-sm"
                    value={formData.mobile}
                    onChange={e => setFormData({...formData, mobile: e.target.value})}
                  />
                  <input 
                    required
                    type="text"
                    placeholder="City / Area"
                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-0 focus:border-orange-400 outline-none transition-all font-bold text-gray-900 text-sm placeholder:text-gray-300 placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px] shadow-sm"
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                  />
                </div>

                <textarea 
                  required
                  rows={3}
                  placeholder="Address (Villa/Building No, Street Name...)"
                  className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-0 focus:border-orange-400 outline-none transition-all font-bold text-gray-900 text-sm placeholder:text-gray-300 placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px] resize-none shadow-sm"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-start space-x-3 px-1">
                <div className="flex items-center h-5">
                  <input 
                    required
                    type="checkbox" 
                    id="consent-final" 
                    className="w-5 h-5 rounded-md border-gray-200 text-orange-500 focus:ring-0 cursor-pointer"
                    checked={formData.confirmed}
                    onChange={e => setFormData({...formData, confirmed: e.target.checked})}
                  />
                </div>
                <label htmlFor="consent-final" className="text-[10px] text-gray-500 font-bold leading-relaxed select-none uppercase tracking-wide cursor-pointer">
                  I verify my address is correct for <span className="text-gray-900">COD Shipping</span>.
                </label>
              </div>

              <button 
                type="submit"
                disabled={isPlacing}
                className="w-full py-6 gradient-cta text-white font-black rounded-3xl shadow-xl shadow-orange-200 hover:scale-[1.01] active:scale-[0.98] transition-all text-sm uppercase tracking-[0.2em] flex items-center justify-center disabled:opacity-50"
              >
                {isPlacing ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  <span>Place My Order</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
