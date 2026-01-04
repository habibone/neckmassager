
/**
 * Funnel Performance Tracking Utility
 * In a real-world scenario, these would push to GA4, FB Pixel, or a custom backend.
 */

type EventName = 
  | 'funnel_view'
  | 'cta_click'
  | 'initiate_checkout'
  | 'order_placed'
  | 'upsell_view'
  | 'upsell_accepted'
  | 'upsell_declined'
  | 'order_confirmed_whatsapp'
  | 'order_confirmed_call'
  | 'ai_assistant_open'
  | 'ai_assistant_message';

interface EventProperties {
  location?: string;
  offer_id?: string;
  offer_price?: number;
  city?: string;
  [key: string]: any;
}

export const trackEvent = (eventName: EventName, properties?: EventProperties) => {
  const timestamp = new Date().toISOString();
  const payload = {
    event: eventName,
    timestamp,
    properties: {
      ...properties,
      url: window.location.href,
      userAgent: navigator.userAgent,
    }
  };

  // Log to console for debugging/demonstration
  console.log(`[Analytics] ${eventName.toUpperCase()}:`, payload);

  // Example: Push to dataLayer for GTM
  if (typeof (window as any).dataLayer !== 'undefined') {
    (window as any).dataLayer.push(payload);
  }

  // Meta Pixel Tracking
  if (typeof (window as any).fbq !== 'undefined') {
    const fbq = (window as any).fbq;
    
    switch (eventName) {
      case 'funnel_view':
        fbq('track', 'ViewContent', {
          content_name: 'VibeSlim Landing Page',
          content_category: 'Fitness Equipment'
        });
        break;
      case 'cta_click':
        fbq('track', 'AddToCart', {
          content_name: 'Weight Loss Vibration Machine',
          value: 247,
          currency: 'AED'
        });
        break;
      case 'initiate_checkout':
        fbq('track', 'InitiateCheckout');
        break;
      case 'order_placed':
        fbq('track', 'Purchase', {
          value: properties?.offer_price || 247,
          currency: 'AED',
          content_name: 'Weight Loss Vibration Machine',
          content_type: 'product'
        });
        break;
      case 'order_confirmed_whatsapp':
        fbq('track', 'Lead', {
          content_name: 'WhatsApp Confirmation',
          status: 'verified'
        });
        break;
      case 'ai_assistant_message':
        fbq('track', 'Contact');
        break;
      default:
        // Other events can be tracked as custom events if needed
        fbq('trackCustom', eventName, properties);
        break;
    }
  }
};