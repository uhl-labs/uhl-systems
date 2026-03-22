import { c as createComponent } from './astro-component_CqfK0dkZ.mjs';
import 'piccolore';
import { l as renderComponent, n as renderHead, r as renderTemplate } from './entrypoint_f67E6snO.mjs';
import { b as brand, $ as $$BaseHead, a as $$Header, c as $$Footer } from './Header_DYEwGRk6.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="de"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Datenschutz | UHL Systems", "description": "Datenschutzerklärung – UHL Systems" })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="mx-auto max-w-3xl px-6 py-24"> <h1 class="mb-12 font-display text-3xl font-bold tracking-tight text-text">Datenschutzerklärung</h1> <div class="space-y-10 text-muted leading-relaxed"> <section> <h2 class="mb-3 text-lg font-semibold text-text">1. Verantwortlicher</h2> <p>Lukas Uhl<br>Enthofstraße 1<br>85276 Pfaffenhofen</p> <p class="mt-2">E-Mail: <a href="mailto:luke@uhl-systems.com" class="text-accent transition-colors hover:text-accent2">luke@uhl-systems.com</a></p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">2. Erhebung und Speicherung personenbezogener Daten</h2> <p>Beim Besuch dieser Website werden durch den Browser automatisch Informationen an den Server übermittelt (sog. Server-Logfiles). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">3. Webanalyse mit Google Analytics</h2> <p>Diese Website nutzt Google Analytics 4 (Mess-ID: ${brand.analytics.ga4}), einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p> <p class="mt-2">Google Analytics verwendet Cookies, die eine Analyse der Nutzung der Website ermöglichen. Die IP-Anonymisierung ist aktiviert, sodass Ihre IP-Adresse innerhalb der EU/EWR gekürzt wird.</p> <p class="mt-2">Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Analyse des Nutzerverhaltens zur Optimierung des Webauftritts).</p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">4. Weitergabe an Dritte</h2> <p>Personenbezogene Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist zur Vertragserfüllung erforderlich oder es besteht eine gesetzliche Verpflichtung.</p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">5. Ihre Rechte</h2> <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zur Ausübung dieser Rechte wenden Sie sich an:</p> <p class="mt-2"><a href="mailto:luke@uhl-systems.com" class="text-accent transition-colors hover:text-accent2">luke@uhl-systems.com</a></p> </section> <section> <h2 class="mb-3 text-lg font-semibold text-text">6. Beschwerderecht</h2> <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</p> </section> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/de/privacy.astro", void 0);

const $$file = "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/de/privacy.astro";
const $$url = "/de/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
