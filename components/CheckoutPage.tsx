
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
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">Step 2: Complete Your Order</h2>
          <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest">Fast Delivery & Cash on Delivery Across UAE</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Order Summary Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Your Order Items</h3>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-gray-200">
                   <img src="http://images.supplipure.com/wp-content/uploads/2026/01/Whisk_39d8f2bf76d6e7fad0b4599c9d691e20dr.png" alt="VibeSlim Pro" className="w-full h-full object-contain p-2" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{offer.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-orange-600">{offer.price} AED</span>
                    <span className="text-[10px] bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-black">QTY: {offer.qty}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-dashed border-gray-200 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="text-gray-900 font-bold">{offer.price} AED</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Shipping</span>
                  <span className="text-emerald-600 font-bold uppercase text-[10px]">Free</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-black text-gray-900 uppercase text-xs tracking-widest">Total to Pay</span>
                  <span className="font-black text-2xl text-gray-900">{offer.price} AED</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 space-y-4">
              <div className="flex items-center space-x-3 text-emerald-800">
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm font-black uppercase tracking-tight">Cash on Delivery</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-800">
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm font-black uppercase tracking-tight">Open & Inspect Parcel</span>
              </div>
              <p className="text-[10px] text-emerald-700 font-medium leading-relaxed italic">Pay the driver only when your machine is delivered and you are happy with the package.</p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-2xl space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Shipping Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      required
                      type="text"
                      placeholder="e.g. Abdullah Ahmed"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-semibold"
                      value={formData.fullName}
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Mobile Number</label>
                    <input 
                      required
                      type="tel"
                      placeholder="05x xxx xxxx"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-semibold"
                      value={formData.mobile}
                      onChange={e => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">City</label>
                    <input 
                      required
                      type="text"
                      placeholder="e.g. Dubai"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-semibold"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Shipping Address</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Villa/Apartment No, Street, Landmark..."
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-semibold resize-none"
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-orange-50 border border-orange-100 rounded-3xl flex items-center space-x-5">
                 <div className="text-3xl animate-bounce">🚚</div>
                 <div>
                   <p className="font-black text-orange-900 text-sm uppercase tracking-tight">Free Express Delivery</p>
                   <p className="text-[10px] text-orange-700 font-bold uppercase tracking-wider">Estimated Arrival: 2-3 Business Days</p>
                 </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                   <input 
                    required
                    type="checkbox" 
                    id="consent" 
                    className="mt-1 w-6 h-6 rounded-lg border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                    checked={formData.confirmed}
                    onChange={e => setFormData({...formData, confirmed: e.target.checked})}
                  />
                   <label htmlFor="consent" className="text-[11px] font-bold text-gray-500 leading-relaxed cursor-pointer select-none">
                     I confirm that I want to receive this order via <span className="text-gray-900">Cash on Delivery</span>. I agree to be available at the provided mobile number for delivery.
                   </label>
                </div>

                <button 
                  type="submit"
                  disabled={isPlacing}
                  className="w-full py-6 gradient-cta text-white font-black rounded-2xl shadow-2xl shadow-orange-200 hover:scale-[1.02] active:scale-95 transition-all text-xl flex flex-col items-center justify-center disabled:opacity-70 disabled:grayscale uppercase tracking-tight"
                >
                  {isPlacing ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Placing Your Order...
                    </span>
                  ) : (
                    <>
                      <span>Complete My Order</span>
                      <span className="text-xs opacity-90 mt-1 font-bold">Total to Pay: {offer.price} AED</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
