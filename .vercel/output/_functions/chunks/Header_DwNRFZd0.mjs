import { c as createComponent } from './astro-component_YJYcoywp.mjs';
import 'piccolore';
import { w as createRenderInstruction, r as renderTemplate, x as defineScriptVars, h as addAttribute, u as unescapeHTML, m as maybeRenderHead, s as spreadAttributes, y as renderSlot, l as renderComponent } from './entrypoint_BsrWr6s9.mjs';
import 'clsx';
import { S as SITE_TITLE } from './consts_XQtJJK65.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const brand = {
  company: "UHL Systems",
  tagline: "Unlock Hidden Leverage",
  url: {
    www: "https://www.uhl-systems.com",
    shop: "https://shop.uhl-systems.com"},
  social: {
    instagram: "@uhl.systems",
    instagramUrl: "https://instagram.com/uhl.systems"},
  strategyCall: {
    checkoutUrl: "https://shop.uhl-systems.com/checkout/buy/92492d9e-27cc-4337-8949-0be8c44c91bb"},
  analytics: {
    ga4: "G-BSX1YMRMPY"
  },
  products: [
    {
      title: "The Revenue Leak Map",
      slug: "revenue-leak-map-guide",
      price: "€97",
      checkoutUrl: "https://shop.uhl-systems.com/checkout/buy/57a6a1ca-9ee1-4009-a121-1c2b650df329"
    },
    {
      title: "Conversion Audit Checklist",
      slug: "conversion-audit-checklist",
      price: "€47",
      checkoutUrl: "https://shop.uhl-systems.com/checkout/buy/e521440a-3290-4747-a404-978556264dae"
    },
    {
      title: "Revenue Leak Audit Template",
      slug: "revenue-leak-audit-template",
      price: "€147",
      checkoutUrl: "https://shop.uhl-systems.com/checkout/buy/5b65085e-6265-4d66-bee1-8333a595a70e"
    },
    {
      title: "The 90-Day Revenue System Playbook",
      slug: "90-day-revenue-playbook",
      price: "€197",
      checkoutUrl: "https://shop.uhl-systems.com/checkout/buy/531a2a29-8a07-484a-9ef6-84798405b20e"
    }
  ]};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/og-default.png", isHomepage = false } = Astro2.props;
  return renderTemplate(_b || (_b = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"', "", '><meta name="generator"', '><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><!-- Schema.org Organization markup (homepage only) -->", "<!-- Google Analytics --><script async", "><\/script><script>(function(){", '\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag("js", new Date());\n  gtag("config", ga4Id);\n})();<\/script>'])), addAttribute(SITE_TITLE, "title"), addAttribute(new URL("rss.xml", Astro2.site), "href"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), isHomepage ? `${brand.company} - ${brand.tagline}` : title, addAttribute(isHomepage ? `${brand.company} - ${brand.tagline}` : title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), isHomepage && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brand.company,
    "url": brand.url.www,
    "description": "Revenue systems architecture and optimization for digital businesses.",
    "foundingDate": "2026",
    "sameAs": [brand.social.instagramUrl]
  }))), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${brand.analytics.ga4}`, "src"), defineScriptVars({ ga4Id: brand.analytics.ga4 }));
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const currentPath = Astro2.url.pathname;
  const isDE = currentPath.startsWith("/de");
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-border bg-bg py-16"> <div class="mx-auto max-w-6xl px-6"> <div class="flex flex-col items-center gap-8 md:flex-row md:justify-between"> <div class="text-center md:text-left"> <p class="font-display text-lg font-bold tracking-tight text-text">UHL Systems</p> <p class="mt-1 text-sm text-muted-dark">Unlock Hidden Leverage.</p> </div> <div class="flex items-center gap-6"> <a${addAttribute(brand.social.instagramUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> ${brand.social.instagram} </a> <a href="https://linkedin.com/in/lukas-uhl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
LinkedIn
</a> </div> </div> <div class="mt-10 flex flex-col items-center gap-3 border-t border-border pt-6 text-center text-sm text-muted-dark"> <div class="flex flex-wrap justify-center gap-4"> <a${addAttribute(isDE ? "/de/services" : "/services", "href")} class="transition-colors hover:text-text">Services</a> <a${addAttribute(isDE ? "/de/services/audit" : "/services/audit", "href")} class="transition-colors hover:text-text">Revenue Leak Audit</a> <a${addAttribute(isDE ? "/de/shop" : "/shop", "href")} class="transition-colors hover:text-text">Shop</a> <a${addAttribute(isDE ? "/de/blog" : "/blog", "href")} class="transition-colors hover:text-text">Blog</a> <a${addAttribute(isDE ? "/de/about" : "/about", "href")} class="transition-colors hover:text-text">About</a> </div> <div class="flex flex-wrap justify-center gap-4"> <a${addAttribute(isDE ? "/de/impressum" : "/impressum", "href")} class="transition-colors hover:text-text">Impressum</a> <a${addAttribute(isDE ? "/de/privacy" : "/privacy", "href")} class="transition-colors hover:text-text">${isDE ? "Datenschutz" : "Privacy"}</a> </div> <p>&copy; ${year} UHL Labs &middot; uhl-systems.com</p> </div> </div> </footer>`;
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/components/Footer.astro", void 0);

const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "text-sm tracking-wide transition-colors duration-200",
    isActive ? "text-accent font-medium" : "text-muted hover:text-text",
    className
  ], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  const isDE = currentPath.startsWith("/de");
  const langSwitchLabel = isDE ? "EN" : "DE";
  function getLangSwitchHref(path) {
    if (isDE) {
      return path.replace(/^\/de/, "") || "/";
    } else {
      return `/de${path === "/" ? "" : path}`;
    }
  }
  const langSwitchHref = getLangSwitchHref(currentPath);
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md" data-astro-cid-3ef6ksr2> <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center gap-2 text-text no-underline hover:text-text" data-astro-cid-3ef6ksr2> <span class="font-display text-lg font-bold tracking-tight" data-astro-cid-3ef6ksr2>UHL</span> <span class="text-sm font-light tracking-widest text-muted uppercase" data-astro-cid-3ef6ksr2>Systems</span> </a> <!-- Desktop nav --> <div class="hidden items-center gap-8 md:flex" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": isDE ? "/de" : "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": isDE ? "/de/services" : "/services", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Services` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": isDE ? "/de/blog" : "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": isDE ? "/de/about" : "/about", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`About` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": isDE ? "/de/shop" : "/shop", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Shop` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "#contact", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Contact` })} <a${addAttribute(langSwitchHref, "href")} class="rounded-full border border-border px-3 py-1 font-mono text-xs tracking-wider text-muted transition-all hover:border-accent hover:text-text" data-astro-cid-3ef6ksr2>${langSwitchLabel}</a> </div> <!-- Mobile: lang switch + hamburger --> <div class="flex items-center gap-3 md:hidden" data-astro-cid-3ef6ksr2> <a${addAttribute(langSwitchHref, "href")} class="rounded-full border border-border px-3 py-1 font-mono text-xs tracking-wider text-muted transition-all hover:border-accent hover:text-text" data-astro-cid-3ef6ksr2>${langSwitchLabel}</a> <button id="mobile-menu-btn" type="button" class="flex h-11 w-11 items-center justify-center rounded-lg text-muted transition-colors hover:text-text" aria-label="Open menu" aria-expanded="false" data-astro-cid-3ef6ksr2> <svg id="menu-icon-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2><line x1="3" x2="21" y1="6" y2="6" data-astro-cid-3ef6ksr2></line><line x1="3" x2="21" y1="12" y2="12" data-astro-cid-3ef6ksr2></line><line x1="3" x2="21" y1="18" y2="18" data-astro-cid-3ef6ksr2></line></svg> <svg id="menu-icon-close" class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2><line x1="18" x2="6" y1="6" y2="18" data-astro-cid-3ef6ksr2></line><line x1="6" x2="18" y1="6" y2="18" data-astro-cid-3ef6ksr2></line></svg> </button> </div> </nav> <!-- Mobile menu drawer --> <div id="mobile-menu" class="hidden border-t border-border bg-bg/95 backdrop-blur-md md:hidden" data-astro-cid-3ef6ksr2> <div class="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" data-astro-cid-3ef6ksr2> <a${addAttribute(isDE ? "/de" : "/", "href")} class="mobile-nav-link" data-astro-cid-3ef6ksr2>Home</a> <a${addAttribute(isDE ? "/de/services" : "/services", "href")} class="mobile-nav-link" data-astro-cid-3ef6ksr2>Services</a> <a${addAttribute(isDE ? "/de/blog" : "/blog", "href")} class="mobile-nav-link" data-astro-cid-3ef6ksr2>Blog</a> <a${addAttribute(isDE ? "/de/about" : "/about", "href")} class="mobile-nav-link" data-astro-cid-3ef6ksr2>About</a> <a${addAttribute(isDE ? "/de/shop" : "/shop", "href")} class="mobile-nav-link" data-astro-cid-3ef6ksr2>Shop</a> <a href="#contact" class="mobile-nav-link" data-astro-cid-3ef6ksr2>Contact</a> </div> </div> </header> <!-- Spacer for fixed header --> <div class="h-16" data-astro-cid-3ef6ksr2></div>  ${renderScript($$result, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/components/Header.astro", void 0);

export { $$BaseHead as $, $$Header as a, brand as b, $$Footer as c, renderScript as r };
