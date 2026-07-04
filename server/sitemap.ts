import { Express } from "express";

const BASE_URL = "https://es.srilanka-charter.com";

const URLS = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/price", changefreq: "monthly", priority: "0.8" },
  { loc: "/faq", changefreq: "monthly", priority: "0.7" },
  { loc: "/voice", changefreq: "monthly", priority: "0.9" },
  // Information category pages
  { loc: "/information/guia-conductor-privado", changefreq: "monthly", priority: "0.8" },
  { loc: "/information/guia-costes-reserva", changefreq: "monthly", priority: "0.8" },
  { loc: "/information/viajes-familia-grupos", changefreq: "monthly", priority: "0.8" },
  { loc: "/information/itinerarios", changefreq: "weekly", priority: "0.9" },
  // Private Driver Guide articles
  { loc: "/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka", changefreq: "monthly", priority: "0.7" },
  { loc: "/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa", changefreq: "monthly", priority: "0.7" },
  { loc: "/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico", changefreq: "monthly", priority: "0.7" },
  // Cost & Booking Guide articles
  { loc: "/information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist", changefreq: "monthly", priority: "0.7" },
  // Family & Group Travel articles
  { loc: "/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos", changefreq: "monthly", priority: "0.7" },
  // Itinerary articles
  { loc: "/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias", changefreq: "monthly", priority: "0.8" },
  { loc: "/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias", changefreq: "monthly", priority: "0.8" },
  { loc: "/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias", changefreq: "monthly", priority: "0.8" },
  { loc: "/information/itinerarios/ruta-triangulo-cultural-sri-lanka", changefreq: "monthly", priority: "0.8" },
  { loc: "/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas", changefreq: "monthly", priority: "0.8" },
  // Travel Tips & Safety category and articles
  { loc: "/information/consejos-viaje-seguridad", changefreq: "monthly", priority: "0.8" },
  { loc: "/information/consejos-viaje-seguridad/mejor-epoca-para-visitar-sri-lanka", changefreq: "monthly", priority: "0.8" },
];

export function registerSitemapRoute(app: Express) {
  app.get("/sitemap.xml", (_req, res) => {
    const today = new Date().toISOString().split("T")[0];

    const urlEntries = URLS.map(
      ({ loc, changefreq, priority }) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    ).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">${urlEntries}
</urlset>`;

    res.set("Content-Type", "application/xml; charset=utf-8");
    res.set("Cache-Control", "public, max-age=86400"); // 24時間キャッシュ
    res.send(xml);
  });
}
