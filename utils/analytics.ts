
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
};
