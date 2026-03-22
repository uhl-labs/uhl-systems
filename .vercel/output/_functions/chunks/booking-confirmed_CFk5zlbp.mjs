import { c as createComponent } from './astro-component_CqfK0dkZ.mjs';
import 'piccolore';
import { l as renderComponent, n as renderHead, r as renderTemplate } from './entrypoint_f67E6snO.mjs';
import { $ as $$BaseHead, a as $$Header, c as $$Footer } from './Header_DYEwGRk6.mjs';

const $$BookingConfirmed = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="de" data-astro-cid-67vfk2ss> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Buchung bestätigt | UHL Systems", "description": "Dein Call mit UHL Systems ist bestätigt.", "data-astro-cid-67vfk2ss": true })}<meta name="robots" content="noindex, nofollow">${renderHead()}</head> <body data-astro-cid-67vfk2ss> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-67vfk2ss": true })} <main class="confirmed-hero px-6" data-astro-cid-67vfk2ss> <div class="confirmed-card" data-astro-cid-67vfk2ss> <h1 class="confirmed-headline fade-in" data-astro-cid-67vfk2ss>Du bist gebucht. 🔥</h1> <p class="confirmed-subline fade-in fade-in-delay-1" data-astro-cid-67vfk2ss>Wir sehen uns bald.</p> <p class="confirmed-body fade-in fade-in-delay-2" data-astro-cid-67vfk2ss>
Dein Call ist bestätigt. Schau in dein E-Mail-Postfach für die Kalendereinladung.
          Wir schauen uns deine Antworten vorher an, damit wir die gemeinsame Zeit optimal nutzen können.
</p> <a href="/de/" class="cta-primary fade-in fade-in-delay-3" data-astro-cid-67vfk2ss>Zurück zur Startseite</a> <p class="aside-note fade-in fade-in-delay-3" data-astro-cid-67vfk2ss>
Schon mal reinlesen - <a href="/services/audit" data-astro-cid-67vfk2ss>so funktioniert die UHL Revenue Leak Map.</a> </p> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-67vfk2ss": true })} </body></html>`;
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/de/booking-confirmed.astro", void 0);

const $$file = "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/de/booking-confirmed.astro";
const $$url = "/de/booking-confirmed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BookingConfirmed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
