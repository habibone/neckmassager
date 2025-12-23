
import React, { useEffect, useState } from 'react';
import { trackEvent } from '../utils/analytics';

interface SuccessPageProps {
  orderDetails: any;
  onBackHome: () => void;
}

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwRUzY-89O1fj4Yf6R6DBf_d9SlixxoBL9R_JRluwRcHbP-TafAZV-D1kjt5OVcJc8U/exec';

const SuccessPage: React.FC<SuccessPageProps> = ({ orderDetails, onBackHome }) => {
  const [refCode, setRefCode] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [callRequested, setCallRequested] = useState(false);
  const [upsellStatus, setUpsellStatus] = useState<'pending' | 'accepted' | 'declined'>('pending');
  const [isUpdating, setIsUpdating] = useState(false);
  
  const basePrice = parseInt(orderDetails.totalPrice);
  const upsellPrice = 19;
  const finalTotal = upsellStatus === 'accepted' ? basePrice + upsellPrice : basePrice;

  useEffect(() => {
    // Generate a professional reference code
    setRefCode(`RP-${Math.floor(100000 + Math.random() * 900000)}`);
    window.scrollTo(0, 0);
    trackEvent('upsell_view');
  }, []);

  const businessPhone = "+16072351747";
  const whatsappMsg = encodeURIComponent(
    `YES, I confirm my COD order for the ReliefPulse™ Massager (Ref: ${refCode}).`
  );

  const whatsappUrl = `https://wa.me/${businessPhone.replace('+', '')}?text=${whatsappMsg}`;

  const handleWhatsAppConfirm = () => {
    setIsConfirmed(true);
    trackEvent('order_confirmed_whatsapp', { reference: refCode });
    window.open(whatsappUrl, '_blank');
  };

  const handleCallRequest = () => {
    setCallRequested(true);
    trackEvent('order_confirmed_call', { reference: refCode });
    window.location.href = `tel:${businessPhone}`;
  };

  const handleAcceptUpsell = async () => {
    setIsUpdating(true);
    trackEvent('upsell_accepted', { price: upsellPrice });
    
    // Log the upsell acceptance to the sheet
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          ...orderDetails,
          orderItem: `${orderDetails.orderItem} + [UPSELL: 1-Year Warranty]`,
          totalPrice: `${basePrice + upsellPrice} AED`,
          status: '✨ Upsell Accepted - Pending Confirmation'
        }),
      });
      setUpsellStatus('accepted');
    } catch (e) {
      console.error("Upsell update failed", e);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeclineUpsell = () => {
    setUpsellStatus('declined');
    trackEvent('upsell_declined');
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center py-8 px-4">
      <div className="max-w-lg w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
        
        {/* TOP STATUS HEADER */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tighter uppercase leading-tight">
            Order Received! <br/>
            <span className="text-red-600">Please Confirm to Avoid Cancellation</span>
          </h1>
          <div className="inline-block bg-orange-100 px-4 py-1.5 rounded-full border border-orange-200">
            <p className="text-orange-800 font-black text-[10px] uppercase tracking-widest leading-none">
              ⚠️ {isConfirmed || callRequested ? 'Status: Verification Sent' : 'Status: Awaiting Verification'}
            </p>
          </div>
        </div>

        {/* VERIFICATION ACTION HUB */}
        <div className="bg-white rounded-[2rem] p-6 shadow-2xl shadow-gray-200 border border-gray-100 space-y-4">
          <p className="text-center text-sm font-bold text-gray-500 px-2 leading-relaxed">
            Your COD order is placed. Only <span className="text-green-600">CONFIRMED</span> orders move to shipping. Choose one option below:
          </p>
          
          <div className="space-y-3">
            <button 
              onClick={handleWhatsAppConfirm}
              className="w-full py-5 bg-[#25D366] text-white font-black rounded-2xl shadow-lg shadow-green-100 flex flex-col items-center justify-center hover:scale-[1.02] active:scale-95 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
              <span className="flex items-center space-x-3 text-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>CONFIRM VIA WHATSAPP</span>
              </span>
              <span className="text-[9px] opacity-90 mt-1 font-bold uppercase tracking-widest">Recommended Choice</span>
            </button>

            <button 
              onClick={handleCallRequest}
              className="w-full py-5 bg-gray-100 text-gray-900 font-black rounded-2xl border-2 border-gray-200 flex flex-col items-center justify-center hover:bg-gray-200 transition-all active:scale-95"
            >
              <span className="flex items-center space-x-3 text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>REQUEST CONFIRMATION CALL</span>
              </span>
            </button>
          </div>
        </div>

        {/* Feature #7: Post-Checkout Upsell */}
        {upsellStatus !== 'declined' && (
          <div className={`bg-amber-50 border-2 border-dashed ${upsellStatus === 'accepted' ? 'border-green-500 bg-green-50' : 'border-amber-300'} rounded-[2rem] p-6 space-y-4 transition-all duration-500 overflow-hidden relative`}>
            {upsellStatus === 'pending' ? (
              <>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="font-black text-gray-900 uppercase text-sm tracking-tight">Special Add-On for Your Order</h3>
                    <p className="text-[10px] text-amber-800 font-bold">Add this now and receive it in the same delivery.</p>
                  </div>
                  <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-sm">+19 AED</span>
                </div>
                
                <div className="flex items-start space-x-4 py-2">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-black text-gray-800">1-Year Replacement Assurance</p>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-medium">If your device stops working for any reason, we'll send a brand new one—no questions asked.</p>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <button 
                    onClick={handleAcceptUpsell}
                    disabled={isUpdating}
                    className="w-full py-4 bg-[#111827] text-white font-black rounded-xl text-xs uppercase tracking-widest shadow-lg hover:bg-black transition-all flex items-center justify-center"
                  >
                    {isUpdating ? 'Adding...' : 'Yes, Add to My Order'}
                  </button>
                  <button 
                    onClick={handleDeclineUpsell}
                    className="w-full text-center text-[10px] text-gray-400 font-bold uppercase hover:text-gray-600 transition-colors"
                  >
                    No thanks, continue with basic order
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3 py-2 text-green-700 animate-in zoom-in duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <div className="space-y-0.5">
                  <p className="font-black uppercase text-sm">Assurance Added!</p>
                  <p className="text-[10px] font-bold">Replacement warranty linked to Order {refCode}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ORDER SUMMARY BOX */}
        <div className="space-y-3">
          <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm space-y-3">
             <div className="flex justify-between items-center text-xs">
               <span className="text-gray-500 font-bold uppercase tracking-wider">Reference:</span>
               <span className="font-black text-gray-900 bg-gray-50 px-2 py-1 rounded-lg border border-gray-200">{refCode}</span>
             </div>
             <div className="flex justify-between items-center text-xs">
               <span className="text-gray-500 font-bold uppercase tracking-wider">Amount to Pay:</span>
               <div className="text-right">
                  <span className="text-lg font-black text-orange-600 transition-all duration-500">
                    {finalTotal} AED (COD)
                  </span>
                  {upsellStatus === 'accepted' && (
                    <p className="text-[9px] text-green-600 font-bold uppercase tracking-tighter">+ Warranty Included</p>
                  )}
               </div>
             </div>
             <div className="pt-3 border-t border-gray-100 flex flex-col text-xs space-y-1">
               <p className="text-gray-400 font-bold">SHIPPING TO:</p>
               <p className="text-gray-800 font-black">{orderDetails.fullName}, {orderDetails.address}, {orderDetails.city}</p>
             </div>
          </div>
        </div>

        {/* TRACKING VISUALIZER */}
        <div className="px-6 py-2">
          <div className="flex justify-between relative">
             <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
             <div className={`absolute top-4 left-0 h-0.5 bg-green-500 z-0 transition-all duration-1000 ease-out`} style={{width: (isConfirmed || callRequested) ? '50%' : '5%'}}></div>
            
            {[
              { label: 'Placed', active: true },
              { label: 'Verified', active: isConfirmed || callRequested },
              { label: 'Shipped', active: false }
            ].map((step, idx) => (
              <div key={step.label} className="flex flex-col items-center z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-colors duration-500 ${step.active ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                  {step.active ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <span className="text-[10px] font-bold">{idx + 1}</span>
                  )}
                </div>
                <span className={`text-[9px] font-black uppercase mt-2 tracking-widest ${step.active ? 'text-green-600' : 'text-gray-400'}`}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={onBackHome}
          className="w-full py-4 text-gray-400 font-bold hover:text-gray-900 transition-colors uppercase text-[10px] tracking-[0.3em] bg-transparent"
        >
          Return to Store
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
