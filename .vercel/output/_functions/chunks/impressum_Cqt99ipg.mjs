import { c as createComponent } from './astro-component_CqfK0dkZ.mjs';
import 'piccolore';
import { l as renderComponent, n as renderHead, r as renderTemplate } from './entrypoint_f67E6snO.mjs';
import { $ as $$BaseHead, a as $$Header, c as $$Footer } from './Header_DYEwGRk6.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Legal Notice | UHL Systems", "description": "Legal Notice – Information pursuant to § 5 TMG" })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="mx-auto max-w-3xl px-6 py-24"> <h1 class="mb-12 font-display text-3xl font-bold tracking-tight text-text">Legal Notice (Impressum)</h1> <div class="space-y-8 text-muted"> <section> <p class="mb-1 text-sm uppercase tracking-widest text-muted-dark">Information pursuant to § 5 TMG</p> <p class="text-text">Lukas Uhl</p> <p>UHL Labs</p> <p>Enthofstraße 1</p> <p>85276 Pfaffenhofen, Germany</p> </section> <section> <p class="mb-1 text-sm uppercase tracking-widest text-muted-dark">Contact</p> <p>Email: <a href="mailto:luke@uhl-systems.com" class="text-accent transition-colors hover:text-accent2">luke@uhl-systems.com</a></p> <p>Web: <a href="https://www.uhl-systems.com" class="text-accent transition-colors hover:text-accent2">www.uhl-systems.com</a></p> </section> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/impressum.astro", void 0);

const $$file = "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/impressum.astro";
const $$url = "/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Impressum,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
