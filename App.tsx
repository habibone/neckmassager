
import React, { useState, useEffect } from 'react';
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
import AiAssistant from './components/AiAssistant';
import CheckoutPage from './components/CheckoutPage';
import SuccessPage from './components/SuccessPage';
import SocialProofNotification from './components/SocialProofNotification';
import ExitReminder from './components/ExitReminder';
import { trackEvent } from './utils/analytics';

export type ViewState = 'funnel' | 'checkout' | 'success';

export interface ProductOffer {
  id: string;
  name: string;
  price: number;
  qty: number;
  label: string;
}

const DEFAULT_OFFER: ProductOffer = {
  id: 'single',
  name: 'ReliefPulse™ Bionic Massager',
  price: 300,
  qty: 1,
  label: 'Standard Pack'
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('funnel');
  const [selectedOffer, setSelectedOffer] = useState<ProductOffer>(DEFAULT_OFFER);
  const [lastOrderDetails, setLastOrderDetails] = useState<any>(null);
  const [showAi, setShowAi] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (view === 'funnel') {
      trackEvent('funnel_view');
    }
  }, [view]);

  const goToCheckout = (offer?: ProductOffer, location?: string) => {
    const activeOffer = offer || DEFAULT_OFFER;
    setSelectedOffer(activeOffer);
    
    trackEvent('initiate_checkout', {
      location: location || 'unknown',
      offer_id: activeOffer.id,
      offer_price: activeOffer.price
    });
    
    setView('checkout');
  };

  const handleOrderConfirmed = (details: any) => {
    setLastOrderDetails(details);
    trackEvent('order_placed', {
      offer_id: selectedOffer.id,
      total_price: selectedOffer.price,
      city: details.city
    });
    setView('success');
  };

  const goToHome = () => {
    setLastOrderDetails(null);
    setView('funnel');
  };

  const toggleAi = () => {
    const newState = !showAi;
    setShowAi(newState);
    if (newState) trackEvent('ai_assistant_open');
  };

  if (view === 'checkout') {
    return <CheckoutPage offer={selectedOffer} onConfirm={handleOrderConfirmed} onBack={goToHome} />;
  }

  if (view === 'success') {
    return <SuccessPage orderDetails={lastOrderDetails} onBackHome={goToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-32 md:pb-0">
      <Header onCtaClick={() => goToCheckout(DEFAULT_OFFER, 'header')} />
      
      <main className="max-w-screen-xl mx-auto">
        <Hero onCtaClick={(offer) => goToCheckout(offer, 'hero')} />
        <PainAgitation />
        <SolutionIntro />
        <FeaturesGrid />
        <ComparisonTable />
        <HowItWorks />
        <UsageVideoSection />
        <SafetySection />
        <GiftSection />
        <SocialProof />
        <OfferSection onCtaClick={() => goToCheckout(DEFAULT_OFFER, 'bottom_offer')} />
        <FaqAccordion />
        <CheckoutTrust />
      </main>

      <footer className="bg-[#111827] text-gray-400 py-16 px-6 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 gradient-cta rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">RELIEF<span className="text-orange-500">PULSE</span></span>
          </div>
          <p className="mb-6 max-w-lg mx-auto leading-relaxed">Dedicated to bringing professional-grade therapy to your home, office, and travels. Pain relief shouldn't be a luxury.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-gray-600">© {new Date().getFullYear()} ReliefPulse. All rights reserved.</p>
        </div>
      </footer>

      {view === 'funnel' && (
        <>
          <SocialProofNotification />
          <ExitReminder />
        </>
      )}

      <StickyCTA onCtaClick={() => goToCheckout(DEFAULT_OFFER, 'sticky_cta')} />
      
      <div className="fixed bottom-32 right-6 z-40 md:bottom-10">
        <button 
          onClick={toggleAi}
          className="w-14 h-14 gradient-cta rounded-full shadow-2xl flex items-center justify-center text-white transform hover:scale-110 transition-transform ring-4 ring-orange-500/20"
        >
          {showAi ? (
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          )}
        </button>
      </div>

      {showAi && <AiAssistant onClose={() => setShowAi(false)} />}
    </div>
  );
};

export default App;
