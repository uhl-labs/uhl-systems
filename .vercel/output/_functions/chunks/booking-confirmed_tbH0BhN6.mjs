import { c as createComponent } from './astro-component_YJYcoywp.mjs';
import 'piccolore';
import { l as renderComponent, n as renderHead, r as renderTemplate } from './entrypoint_BsrWr6s9.mjs';
import { $ as $$BaseHead, a as $$Header, c as $$Footer } from './Header_DwNRFZd0.mjs';

const $$BookingConfirmed = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-7xl4xpz3> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Booking Confirmed | UHL Systems", "description": "Your call with UHL Systems is confirmed.", "data-astro-cid-7xl4xpz3": true })}<meta name="robots" content="noindex, nofollow">${renderHead()}</head> <body data-astro-cid-7xl4xpz3> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-7xl4xpz3": true })} <main class="confirmed-hero px-6" data-astro-cid-7xl4xpz3> <div class="confirmed-card" data-astro-cid-7xl4xpz3> <h1 class="confirmed-headline fade-in" data-astro-cid-7xl4xpz3>You're booked. 🔥</h1> <p class="confirmed-subline fade-in fade-in-delay-1" data-astro-cid-7xl4xpz3>We'll see you soon.</p> <p class="confirmed-body fade-in fade-in-delay-2" data-astro-cid-7xl4xpz3>
Your call is confirmed. Check your email for the calendar invite.
          We'll review your answers beforehand so we can make the most of our time together.
</p> <a href="/" class="cta-primary fade-in fade-in-delay-3" data-astro-cid-7xl4xpz3>Back to Home</a> <p class="aside-note fade-in fade-in-delay-3" data-astro-cid-7xl4xpz3>
While you wait - <a href="/services/audit" data-astro-cid-7xl4xpz3>check out how the UHL Revenue Leak Map works.</a> </p> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-7xl4xpz3": true })} </body></html>`;
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/booking-confirmed.astro", void 0);

const $$file = "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/booking-confirmed.astro";
const $$url = "/booking-confirmed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BookingConfirmed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
