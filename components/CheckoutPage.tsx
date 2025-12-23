
import React, { useState } from 'react';
import { ProductOffer } from '../App';

interface CheckoutPageProps {
  offer: ProductOffer;
  onConfirm: (orderDetails: any) => void;
  onBack: () => void;
}

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

    // Manual date formatting: dd/mm/yy HH:mm:ss
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
      status: '🟡 Pending Confirmation' // Initial COD status
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 py-6 px-6 shadow-sm">
        <div className="max-w-xl mx-auto text-center space-y-2 relative">
          <button onClick={onBack} className="absolute left-0 top-1 text-gray-400 hover:text-gray-600 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase">Secure Checkout</h1>
          <p className="text-green-600 font-bold text-sm uppercase tracking-wide">Cash on Delivery (COD)</p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-xl mx-auto px-6 py-8 space-y-8 pb-32">
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex-shrink-0 border border-gray-50">
               <img src="https://supplipure.com/wp-content/uploads/2025/12/Bionic-Heated-Neck3.png" alt="Product" className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-sm">{offer.name}</h3>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-black text-orange-600">{offer.price} AED</span>
                <span className="text-[10px] bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-bold">QTY: {offer.qty}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-dashed border-gray-100 flex justify-between items-center">
            <span className="font-bold text-gray-900 uppercase text-xs tracking-widest">Total to Pay on Delivery</span>
            <span className="font-black text-xl text-gray-900">{offer.price} AED</span>
          </div>
        </section>

        <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">Delivery Address</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Your Full Name</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Abdullah Ahmed"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium"
                  value={formData.fullName}
                  onChange={e => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Mobile Number (Active)</label>
                <input 
                  required
                  type="tel"
                  placeholder="05x xxx xxxx"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium"
                  value={formData.mobile}
                  onChange={e => setFormData({...formData, mobile: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">City</label>
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
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Email (Optional)</label>
                  <input 
                    type="email"
                    placeholder="For tracking"
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Full Shipping Address</label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Villa/Apartment No, Street, Landmark..."
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium resize-none"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="p-5 bg-orange-50 border border-orange-100 rounded-3xl flex items-center space-x-4">
             <span className="text-3xl">🚚</span>
             <div>
               <p className="font-black text-orange-900 text-sm uppercase">Free Express Delivery</p>
               <p className="text-[10px] text-orange-700 font-bold">Estimated Arrival: 2-3 Business Days</p>
             </div>
          </div>

          <div className="flex items-start space-x-3 bg-gray-100/50 p-4 rounded-2xl">
             <input 
              required
              type="checkbox" 
              id="consent" 
              className="mt-1 w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
              checked={formData.confirmed}
              onChange={e => setFormData({...formData, confirmed: e.target.checked})}
            />
             <label htmlFor="consent" className="text-[10px] font-bold text-gray-500 leading-normal cursor-pointer select-none">
               I AGREE TO PAY CASH ON DELIVERY. I confirm my phone number is correct for the delivery man to reach me.
             </label>
          </div>
        </form>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 z-50">
        <div className="max-w-xl mx-auto">
          <button 
            type="submit"
            form="checkout-form"
            disabled={isPlacing}
            className="w-full py-5 gradient-cta text-white font-black rounded-2xl shadow-xl shadow-orange-200 hover:scale-[1.01] active:scale-95 transition-all text-lg flex items-center justify-center disabled:opacity-70 disabled:grayscale"
          >
            {isPlacing ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Processing...
              </span>
            ) : (
              `PLACE COD ORDER - ${offer.price} AED`
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
