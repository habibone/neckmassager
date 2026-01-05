import React, { useEffect, useState } from 'react';
import { trackEvent } from '../utils/analytics';

interface SuccessPageProps {
  orderDetails: any;
  onBackHome: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ orderDetails, onBackHome }) => {
  const [refCode, setRefCode] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const finalTotal = parseInt(orderDetails.totalPrice);

  useEffect(() => {
    // Generate a professional reference code
    setRefCode(`VS-${Math.floor(100000 + Math.random() * 900000)}`);
    window.scrollTo(0, 0);
  }, []);

  const businessPhone = "923703730897";
  const whatsappMsg = encodeURIComponent(
    `YES, I confirm my COD order for the Weight Loss Vibration Machine (Ref: ${refCode}).`
  );

  const whatsappUrl = `https://wa.me/${businessPhone}?text=${whatsappMsg}`;

  const handleWhatsAppConfirm = () => {
    setIsConfirmed(true);
    trackEvent('order_confirmed_whatsapp', { reference: refCode });
    window.open(whatsappUrl, '_blank');
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
              ⚠️ {isConfirmed ? 'Status: Verification Sent' : 'Status: Awaiting Verification'}
            </p>
          </div>
        </div>

        {/* VERIFICATION ACTION HUB */}
        <div className="bg-white rounded-[2rem] p-6 shadow-2xl shadow-gray-200 border border-gray-100 space-y-6">
          <p className="text-center text-sm font-bold text-gray-500 px-2 leading-relaxed">
            Your COD order is placed. Only <span className="text-green-600">CONFIRMED</span> orders move to shipping. Please confirm via WhatsApp to proceed:
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
              <span className="text-[9px] opacity-90 mt-1 font-bold uppercase tracking-widest">Instant Verification</span>
            </button>
          </div>
        </div>

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
                  <span className="text-lg font-black text-orange-600">
                    {finalTotal} AED (COD)
                  </span>
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
             <div className={`absolute top-4 left-0 h-0.5 bg-green-500 z-0 transition-all duration-1000 ease-out`} style={{width: (isConfirmed) ? '50%' : '5%'}}></div>
            
            {[
              { label: 'Placed', active: true },
              { label: 'Verified', active: isConfirmed },
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