import { c as createComponent } from './astro-component_CqfK0dkZ.mjs';
import 'piccolore';
import { l as renderComponent, n as renderHead, h as addAttribute, r as renderTemplate } from './entrypoint_f67E6snO.mjs';
import { g as getCollection } from './_astro_content_Csae_TgN.mjs';
import { $ as $$BaseHead, a as $$Header, c as $$Footer } from './Header_DYEwGRk6.mjs';
import { $ as $$FormattedDate } from './FormattedDate_CyfVqaeV.mjs';
import { S as SITE_TITLE } from './consts_XQtJJK65.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const cutoff = /* @__PURE__ */ new Date("2026-01-01");
  const posts = (await getCollection("blog")).filter((post) => post.data.pubDate >= cutoff).filter((post) => post.data.lang === "de").sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`<html lang="de"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Blog - ${SITE_TITLE}`, "description": "Einblicke in Revenue-Systeme, Conversion-Architektur und die Skalierung digitaler Unternehmen." })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="mx-auto max-w-4xl px-6 py-16"> <div class="mb-12"> <p class="mb-2 font-mono text-sm tracking-widest text-accent uppercase">Einblicke</p> <h1 class="font-display text-3xl font-bold text-text md:text-4xl">Blog</h1> </div> ${posts.length > 0 ? renderTemplate`<div class="grid gap-6 md:grid-cols-2"> ${posts.map((post, i) => renderTemplate`<a${addAttribute(`/de/blog/${post.id}/`, "href")}${addAttribute([
    "group block rounded-xl border border-border bg-bg2 overflow-hidden transition-all duration-300 hover:border-accent/30 hover:bg-bg3 no-underline",
    i === 0 && "md:col-span-2"
  ], "class:list")}> ${post.data.heroImage && renderTemplate`<div class="overflow-hidden"> <img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" loading="lazy"> </div>`} <div class="p-6"> <p class="mb-2 font-mono text-xs text-muted-dark"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </p> <h2${addAttribute([
    "font-semibold text-text group-hover:text-accent transition-colors",
    i === 0 ? "text-2xl" : "text-lg"
  ], "class:list")}> ${post.data.title} </h2> ${post.data.description && renderTemplate`<p class="mt-2 text-sm text-muted line-clamp-2">${post.data.description}</p>`} </div> </a>`)} </div>` : renderTemplate`<div class="rounded-xl border border-border bg-bg2 p-16 text-center"> <p class="font-mono text-sm tracking-widest text-accent uppercase">Bald verfuegbar</p> <p class="mt-4 text-lg text-muted">Revenue-Einblicke & Systems Thinking</p> <p class="mt-2 text-sm text-muted-dark">Neue Artikel ueber den Aufbau von Revenue-Systemen, die sich vervielfachen.</p> </div>`} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/de/blog/index.astro", void 0);

const $$file = "/Users/lukasuhl/Projects/uhl-labs/uhl-systems/src/pages/de/blog/index.astro";
const $$url = "/de/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
