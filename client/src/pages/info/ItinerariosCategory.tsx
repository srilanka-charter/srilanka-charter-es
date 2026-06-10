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
    image: "/manus-storage/article7_ella_train_hero_35f57ffa.jpeg",
    date: "6 junio 2026",
    title: "Itinerario Sri Lanka 5 Noches / 6 Días: Cultura + Naturaleza en Vehículo Privado",
    desc: "Ruta de 6 días que combina los principales destinos culturales con el Parque Nacional de Yala y la costa sur. Ideal para primeros visitantes con algo más de tiempo.",
  },
  {
    slug: "/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias",
    image: "/manus-storage/article8_kandy_temple_hero_5d58fa04.jpeg",
    date: "6 junio 2026",
    title: "Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla",
    desc: "La ruta más completa de una semana: Triángulo Cultural, Kandy, tierras altas del té, Yala y la costa sur — todo en un vehículo privado con conductor.",
  },
  {
    slug: "/information/itinerarios/ruta-triangulo-cultural-sri-lanka",
    image: "/manus-storage/article9_sigiriya_aerial_hero_3827b32a.jpeg",
    date: "6 junio 2026",
    title: "Itinerario Triángulo Cultural de Sri Lanka 5–7 Días: Patrimonio UNESCO en Vehículo Privado",
    desc: "Ruta centrada en el Triángulo Cultural de Sri Lanka — Sigiriya, Polonnaruwa, Anuradhapura y Dambulla. Perfecta para los amantes de la historia y la arqueología.",
  },
  {
    slug: "/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas",
    image: "/manus-storage/article6_hero_sigiriya_aerial_acc21167.webp",
    date: "7 junio 2026",
    title: "Itinerario Sri Lanka 10 Días / 2 Semanas: La Ruta Definitiva por la Isla",
    desc: "La ruta más completa para quienes tienen dos semanas. Desde el norte cultural hasta la costa sur, pasando por las tierras altas del té y los parques nacionales.",
    comingSoon: true,
  },
];

export default function ItinerariosCategory() {
  useEffect(() => {
    document.title = "Itinerarios Sri Lanka en Conductor Privado | SLTCS";
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
          a.comingSoon ? (
            <div key={a.slug} className="category-article-card category-article-card--coming-soon">
              <div className="category-article-img" style={{ backgroundImage: `url(${a.image})` }}>
                <div className="category-coming-soon-badge">Próximamente</div>
              </div>
              <div className="category-article-body">
                <span className="category-article-date">{a.date}</span>
                <h2 className="category-article-title">{a.title}</h2>
                <p className="category-article-desc">{a.desc}</p>
              </div>
            </div>
          ) : (
            <Link key={a.slug} href={a.slug} className="category-article-card">
              <div className="category-article-img" style={{ backgroundImage: `url(${a.image})` }} />
              <div className="category-article-body">
                <span className="category-article-date">{a.date}</span>
                <h2 className="category-article-title">{a.title}</h2>
                <p className="category-article-desc">{a.desc}</p>
                <span className="category-article-read">Leer más →</span>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
}
