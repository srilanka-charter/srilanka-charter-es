import { useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const ARTICLES = [
  {
    slug: "/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias",
    image: "/manus-storage/article6_hero_sigiriya_aerial_acc21167.webp",
    date: "5 junio 2026",
    title: "Itinerario Sri Lanka 4 Noches / 5 Días: Los Destinos Culturales Más Emblemáticos en Vehículo Privado",
    desc: "Itinerario completo de 4 noches y 5 días por Sri Lanka en conductor privado. Sigiriya, Kandy, Nuwara Eliya y Galle — los destinos UNESCO más emblemáticos.",
  },
  {
    slug: "/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias",
    image: "/manus-storage/art7_ella_train_hero_587a6e16.webp",
    date: "6 junio 2026",
    title: "Itinerario Sri Lanka 5 Noches / 6 Días: Cultura + Naturaleza en Vehículo Privado",
    desc: "Ruta de 6 días que combina los principales destinos culturales con el Parque Nacional de Yala y la costa sur. Ideal para primeros visitantes con algo más de tiempo.",
  },
  {
    slug: "/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias",
    image: "/manus-storage/art8_kandy_temple_hero_e2c882c2.webp",
    date: "6 junio 2026",
    title: "Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla",
    desc: "La ruta más completa de una semana: Triángulo Cultural, Kandy, tierras altas del té, Yala y la costa sur — todo en un vehículo privado con conductor.",
  },
  {
    slug: "/information/itinerarios/ruta-triangulo-cultural-sri-lanka",
    image: "/manus-storage/art9_sigiriya_aerial_hero_c9f842e7.webp",
    date: "6 junio 2026",
    title: "Itinerario Triángulo Cultural de Sri Lanka 5–7 Días: Patrimonio UNESCO en Vehículo Privado",
    desc: "Ruta centrada en el Triángulo Cultural de Sri Lanka — Sigiriya, Polonnaruwa, Anuradhapura y Dambulla. Perfecta para los amantes de la historia y la arqueología.",
  },
  {
    slug: "/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas",
    image: "/manus-storage/art10_van_coastal_road_hero_6a19696b.webp",
    date: "7 junio 2026",
    title: "Itinerario Sri Lanka 10 Días / 2 Semanas: La Ruta Definitiva por la Isla",
    desc: "La ruta más completa para quienes tienen dos semanas. Desde el norte cultural hasta la costa sur, pasando por las tierras altas del té y los parques nacionales.",
  },
];

export default function ItinerariosCategory() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Itinerarios Sri Lanka en Conductor Privado | SLTCS";
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement("meta"); metaDesc.name = "description"; document.head.appendChild(metaDesc); }
    const prevDesc = metaDesc.content;
    metaDesc.content = "Itinerarios modelo para explorar Sri Lanka en vehículo privado con conductor — desde 5 días hasta 2 semanas.";
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.href ?? '';
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/itinerarios";
    // ─ hreflang ──────────────────────────────────────────────────────────────────
    const hreflangData = [
      { hreflang: "es", href: "https://es.srilanka-charter.com/information/itinerarios" },
      { hreflang: "en", href: "https://en.srilanka-charter.com/information/model-itinerary" },
      { hreflang: "fr", href: "https://fr.srilanka-charter.com/information/itineraires" },
      { hreflang: "de", href: "https://de.srilanka-charter.com/information/beispielreiserouten" },
      { hreflang: "x-default", href: "https://en.srilanka-charter.com/information/model-itinerary" },
    ];
    const existingHreflangs = document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());
    const addedHreflangs: HTMLLinkElement[] = [];
    hreflangData.forEach(({ hreflang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.setAttribute("hreflang", hreflang);
      link.href = href;
      document.head.appendChild(link);
      addedHreflangs.push(link);
    });
    return () => {
      document.title = prevTitle;
      metaDesc!.content = prevDesc;
      canonical!.href = prevCanonical;
      addedHreflangs.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div className="sltcs-page">
      <ArticleNav />
      <div className="category-hero">
        <div className="category-hero-overlay" />
        <div className="category-hero-content">
          <h1>Itinerarios</h1>
          <p>Rutas modelo para explorar Sri Lanka en vehículo privado con conductor — desde 5 días hasta 2 semanas.</p>
        </div>
      </div>
      <div className="article-breadcrumb">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <Link href="/information">Información</Link>
        <span>›</span>
        <span>Itinerarios</span>
      </div>
      <div className="category-articles-grid">
        {ARTICLES.map(a => (
          <Link key={a.slug} href={a.slug} className="category-article-card">
            <div className="category-article-img" style={{ backgroundImage: `url(${a.image})` }} />
            <div className="category-article-body">
              <span className="category-article-date">{a.date}</span>
              <h2 className="category-article-title">{a.title}</h2>
              <p className="category-article-desc">{a.desc}</p>
              <span className="category-article-read">Leer más →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
