// Single source of truth für alle Brand-Werte
// Spiegelt ~/.openclaw/workspace/BRAND.md wider
// Bei Brand-Änderungen: NUR diese Datei anpassen

export const brand = {
  company: "UHL Systems",
  tagline: "Unlock Hidden Leverage",
  url: "https://www.uhl-systems.com",
  shopUrl: "https://shop.uhl-systems.com",

  social: {
    instagram: "@uhl.systems",
    instagramUrl: "https://instagram.com/uhl.systems",
    linkedin: "Lukas Uhl",
    linkedinUrl: "https://linkedin.com/in/lukas-uhl",
  },

  calendly: {
    en: "https://calendly.com/uhl-systems/30min?redirect_url=https://uhl-systems.com/booking-confirmed",
    de: "https://calendly.com/uhl-systems/free-discovery-call-revenue-leak-check-clone-1?redirect_url=https://uhl-systems.com/de/booking-confirmed",
  },

  cta: {
    en: "https://uhl-systems.com/services/audit",
    de: "https://uhl-systems.com/de/services/audit",
  },

  analytics: {
    ga4: "G-BSX1YMRMPY",
  },

  products: [
    {
      title: "The Revenue Leak Map",
      slug: "revenue-leak-map-guide",
      price: "€97",
      checkoutUrl: "https://shop.uhl-systems.com/checkout/buy/57a6a1ca-9ee1-4009-a121-1c2b650df329",
    },
    {
      title: "Conversion Audit Checklist",
      slug: "conversion-audit-checklist",
      price: "€47",
      checkoutUrl: "https://shop.uhl-systems.com/checkout/buy/531a2a29-8a07-484a-9ef6-84798405b20e",
    },
    {
      title: "Revenue Leak Audit Template",
      slug: "revenue-leak-audit-template",
      price: "€67",
      checkoutUrl: "https://shop.uhl-systems.com/checkout/buy/e521440a-3290-4747-a404-978556264dae",
    },
    {
      title: "The 90-Day Revenue System Playbook",
      slug: "90-day-revenue-playbook",
      price: "€127",
      checkoutUrl: "", // TODO
    },
  ],
} as const;
