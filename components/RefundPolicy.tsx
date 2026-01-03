import React from 'react';

interface RefundPolicyProps {
  onClose: () => void;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl max-h-[85vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">Refund & Replacement Policy</h2>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Wave Byte Official Policy</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 text-gray-600 text-sm leading-relaxed">
          <p className="font-medium">
            Thank you for choosing Wave Byte. We are dedicated to delivering a reliable and high-quality service experience. This Replacement Policy outlines the terms and conditions under which you may request a product replacement. By purchasing through Wave Byte or any of its partner stores, you acknowledge and agree to the terms stated herein.
          </p>

          <section className="space-y-3">
            <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest flex items-center">
              <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-md flex items-center justify-center text-[10px] mr-3 font-black">1</span>
              Replacement Eligibility
            </h3>
            <div className="pl-9 space-y-4">
              <div>
                <p className="font-bold text-gray-800 mb-1">1.1 Product Condition</p>
                <p>Wave Byte guarantees that all products are shipped in their original condition. If you receive a product that is incorrect, defective, damaged, or broken upon delivery, you may be eligible for a free replacement, subject to the conditions of this policy.</p>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">1.2 Reporting Period</p>
                <p>To be eligible for a replacement, you must report the issue to our customer support team within 24 to 48 hours from the time of delivery. Any requests received after this window will not be considered for replacement.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest flex items-center">
              <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-md flex items-center justify-center text-[10px] mr-3 font-black">2</span>
              Replacement Request Process
            </h3>
            <div className="pl-9 space-y-2">
              <p className="font-bold text-gray-800">2.1 Step 1: Initiation</p>
              <p>To initiate a replacement request, you are required to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Send a clear video evidencing the issue (i.e., incorrect, damaged, or faulty product) via WhatsApp to our customer support team at +971 50 751 8901 within the designated time frame.</li>
              </ul>
              <p className="bg-gray-50 p-4 rounded-xl italic border-l-4 border-orange-500 text-[12px]">
                Note: In many cases, issues arise due to improper product usage. Our support team may offer troubleshooting guidance before confirming eligibility for replacement.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest flex items-center">
              <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-md flex items-center justify-center text-[10px] mr-3 font-black">3</span>
              Replacement Options
            </h3>
            <div className="pl-9 space-y-4">
              <div>
                <p className="font-bold text-gray-800 mb-1">Option A – Customer-Initiated Return</p>
                <p>You may ship the product—including the original product box and all included accessories—to our designated warehouse address:</p>
                <p className="font-bold mt-2 text-gray-900">Wave Byte<br/>Warehouse No. 13, Street No. 4 – 4th Street, Al Khabaisi, Dubai, UAE.</p>
                <p className="mt-2">Upon receipt and inspection of the returned product, a replacement unit will be dispatched within 24 hours, free of charge.</p>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">Option B – Courier Pickup</p>
                <p>Alternatively, Wave Byte can coordinate a courier pickup from your location. A replacement will be processed and dispatched within 24 to 48 hours of successful pickup. The product must be securely packed in its original packaging, including all accessories.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest flex items-center">
              <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-md flex items-center justify-center text-[10px] mr-3 font-black">4</span>
              Important Terms
            </h3>
            <div className="pl-9 space-y-3">
              <p><span className="font-bold text-gray-800">Change of Mind:</span> Replacements will not be offered in cases of buyer's remorse or change of mind.</p>
              <p><span className="font-bold text-gray-800">Product Condition:</span> Returned items must be in their original, unused condition with all original packaging and accessories included. Failure to comply may result in the rejection of the replacement request.</p>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest flex items-center">
              <span className="w-6 h-6 bg-red-100 text-red-600 rounded-md flex items-center justify-center text-[10px] mr-3 font-black">5</span>
              Refund Policy
            </h3>
            <div className="pl-9">
              <p className="font-black text-red-600 uppercase">Please note that Wave Byte does not offer refunds under any circumstances. Only valid replacement claims will be processed in accordance with this policy.</p>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest">Contact Information</h3>
            <div className="pl-0 space-y-2">
              <p>If you have any questions regarding this policy or need assistance with a replacement request, please contact us:</p>
              <div className="bg-orange-50 p-6 rounded-2xl space-y-2 border border-orange-100">
                <p className="font-bold text-gray-900">WhatsApp: <a href="https://wa.me/971507518901" className="text-orange-600">+971 50 751 8901</a></p>
                <p className="font-bold text-gray-900">Warehouse Address: <br/><span className="font-medium text-gray-600">Warehouse No. 13, Street No. 4 – 4th Street, Al Khabaisi, Dubai, UAE</span></p>
              </div>
              <p className="text-xs font-bold text-gray-400 italic">Kindly retain your order number and store name for quicker assistance.</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-gray-900 text-white font-black rounded-xl uppercase text-xs tracking-widest hover:bg-orange-600 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;