import { c as createComponent } from './astro-component_YJYcoywp.mjs';
import 'piccolore';
import { l as renderComponent, n as renderHead, r as renderTemplate } from './entrypoint_BsrWr6s9.mjs';
import { b as brand, $ as $$BaseHead, a as $$Header, c as $$Footer } from './Header_DwNRFZd0.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Privacy Policy | UHL Systems", "description": "Privacy Policy – UHL Systems" })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="mx-auto max-w-3xl px-6 py-24"> <h1 class="mb-12 font-display text-3xl font-bold tracking-tight text-text">Privacy Policy</h1> <div class="space-y-10 text-muted leading-relaxed"> <section> <h2 class="mb-3 text-lg font-semibold text-text">1. Data Controller</h2> <p>Lukas Uhl<br>Enthofstraße 1<br>85276 Pfaffenhofen, Germany</p> <p class="mt-2">Email: <a href="mailto:luke@uhl-systems.com" class="text-accent transition-colors hover:text-accent2">luke@uhl-systems.com</a></p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">2. Collection and Storage of Personal Data</h2> <p>When you visit this website, your browser automatically transmits information to the server (so-called server log files). This data is not merged with other data sources.</p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">3. Web Analytics with Google Analytics</h2> <p>This website uses Google Analytics 4 (Measurement ID: ${brand.analytics.ga4}), a web analytics service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.</p> <p class="mt-2">Google Analytics uses cookies that enable analysis of your use of the website. IP anonymization is enabled, so your IP address is truncated within the EU/EEA.</p> <p class="mt-2">Usage is based on Art. 6 (1) (f) GDPR (legitimate interest in analyzing user behavior to optimize the website).</p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">4. Disclosure to Third Parties</h2> <p>Personal data will not be shared with third parties unless required for contract fulfillment or there is a legal obligation to do so.</p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">5. Your Rights</h2> <p>You have the right to access, rectification, deletion, restriction of processing, data portability, and objection. To exercise these rights, please contact:</p> <p class="mt-2"><a href="mailto:luke@uhl-systems.com" class="text-accent transition-colors hover:text-accent2">luke@uhl-systems.com</a></p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">6. Right to Lodge a Complaint</h2> <p>You have the right to lodge a complaint with a data protection supervisory authority.</p> </section> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/privacy.astro", void 0);

const $$file = "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
