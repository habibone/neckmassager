import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainAgitation from './components/PainAgitation';
import SolutionIntro from './components/SolutionIntro';
import FeaturesGrid from './components/FeaturesGrid';
import ComparisonTable from './components/ComparisonTable';
import HowItWorks from './components/HowItWorks';
import UsageVideoSection from './components/UsageVideoSection';
import SafetySection from './components/SafetySection';
import GiftSection from './components/GiftSection';
import SocialProof from './components/SocialProof';
import OfferSection from './components/OfferSection';
import FaqAccordion from './components/FaqAccordion';
import CheckoutTrust from './components/CheckoutTrust';
import StickyCTA from './components/StickyCTA';
import CheckoutPage from './components/CheckoutPage';
import SuccessPage from './components/SuccessPage';
import RefundPolicy from './components/RefundPolicy';
import SocialProofNotification from './components/SocialProofNotification';
import { trackEvent } from './utils/analytics';

export type ViewState = 'funnel' | 'success';

export interface ProductOffer {
  id: string;
  name: string;
  price: number;
  qty: number;
  label: string;
}

const DEFAULT_OFFER: ProductOffer = {
  id: 'single',
  name: 'Weight Loss Vibration Machine (SKU: WB-UA1734)',
  price: 247,
  qty: 1,
  label: 'Standard Pack'
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('funnel');
  const [selectedOffer, setSelectedOffer] = useState<ProductOffer>(DEFAULT_OFFER);
  const [lastOrderDetails, setLastOrderDetails] = useState<any>(null);
  const [showPolicy, setShowPolicy] = useState(false);
  const checkoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (view === 'funnel') {
      trackEvent('funnel_view');
    }
  }, [view]);

  const scrollToCheckout = (offer?: ProductOffer, location?: string) => {
    if (offer) {
      setSelectedOffer(offer);
    }
    
    trackEvent('cta_click', {
      location: location || 'unknown',
      offer_id: (offer || selectedOffer).id
    });

    if (checkoutRef.current) {
      const offset = 80;
      const elementPosition = checkoutRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOrderConfirmed = (details: any) => {
    setLastOrderDetails(details);
    trackEvent('order_placed', {
      offer_id: selectedOffer.id,
      total_price: selectedOffer.price,
      city: details.city
    });
    setView('success');
    window.scrollTo(0, 0);
  };

  const goToHome = () => {
    setLastOrderDetails(null);
    setView('funnel');
    window.scrollTo(0, 0);
  };

  if (view === 'success') {
    return <SuccessPage orderDetails={lastOrderDetails} onBackHome={goToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-32 md:pb-0">
      <Header onCtaClick={() => scrollToCheckout(DEFAULT_OFFER, 'header')} />
      
      <main className="max-w-screen-xl mx-auto">
        <Hero onCtaClick={(offer) => scrollToCheckout(offer, 'hero')} />
        <PainAgitation />
        <SolutionIntro />
        <FeaturesGrid />
        <ComparisonTable />
        <HowItWorks />
        <UsageVideoSection />
        <SafetySection />
        <GiftSection />
        <SocialProof />
        <OfferSection onCtaClick={() => scrollToCheckout(DEFAULT_OFFER, 'bottom_offer')} />
        <FaqAccordion />
        
        <div ref={checkoutRef} id="checkout-section">
          <CheckoutPage 
            offer={selectedOffer} 
            onConfirm={handleOrderConfirmed} 
          />
        </div>

        <CheckoutTrust />
      </main>

      <footer className="bg-white border-t border-gray-100 text-gray-500 py-16 px-6 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 gradient-cta rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#111827]">VIBE<span className="text-orange-500">SLIM</span></span>
          </div>
          <p className="mb-6 max-w-lg mx-auto leading-relaxed text-gray-600 font-medium">Dedicated to bringing professional-grade fitness and therapy to your home. Wellness and health shouldn't be a struggle.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-xs font-bold uppercase tracking-widest">
            <button onClick={() => setShowPolicy(true)} className="hover:text-orange-600 transition-colors">Privacy Policy</button>
            <button onClick={() => setShowPolicy(true)} className="hover:text-orange-600 transition-colors">Refund & Replacement</button>
            <a href="#" className="hover:text-orange-600 transition-colors">Shipping</a>
            <a href="https://wa.me/971507518901" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">Contact</a>
          </div>
          <p className="text-gray-400">© 2026 VibeSlim - A Wave Byte Partner Store (SKU: WB-UA1734). All rights reserved.</p>
        </div>
      </footer>

      {showPolicy && <RefundPolicy onClose={() => setShowPolicy(false)} />}

      <SocialProofNotification />
      <StickyCTA onCtaClick={() => scrollToCheckout(DEFAULT_OFFER, 'sticky_cta')} />
    </div>
  );
};

export default App;