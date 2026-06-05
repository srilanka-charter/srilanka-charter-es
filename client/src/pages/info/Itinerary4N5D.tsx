import { useEffect, useState } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article6_hero_sigiriya_aerial_acc21167.webp";

const TOC = [
  { id: "descripcion-general", label: "Descripción General del Itinerario" },
  { id: "dia-a-dia", label: "Itinerario Día a Día" },
  { id: "dia-1", label: "↳ Día 1 — Llegada → Sigiriya" },
  { id: "dia-2", label: "↳ Día 2 — Fortaleza de la Roca de Sigiriya" },
  { id: "dia-3", label: "↳ Día 3 — Kandy: Templo del Diente" },
  { id: "dia-4", label: "↳ Día 4 — Nuwara Eliya → Galle" },
  { id: "dia-5", label: "↳ Día 5 — Fuerte de Galle → Salida" },
  { id: "que-incluye", label: "Qué Incluye Este Itinerario" },
  { id: "planes-recomendados", label: "Planes SLTCS Recomendados" },
];

export default function Itinerary4N5D() {
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    document.title = "Itinerario Sri Lanka 4 Noches / 5 Días: Ruta Cultural en Vehículo Privado | SLTCS";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Itinerario completo de 4 noches y 5 días por Sri Lanka en conductor privado. Sigiriya, Kandy, Nuwara Eliya y Galle — los destinos UNESCO más emblemáticos.");
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias";
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-4-nights-5-days-itinerary" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-4-nights-5-days-itinerary" },
    ];
    hreflangs.forEach(({ lang, url }) => {
      let el = document.querySelector(`link[hreflang="${lang}"]`) as HTMLLinkElement | null;
      if (!el) { el = document.createElement("link"); el.rel = "alternate"; el.setAttribute("hreflang", lang); document.head.appendChild(el); }
      el.href = url;
    });
    return () => { document.querySelectorAll('link[hreflang]').forEach(el => el.remove()); };
  }, []);

  return (
    <div className="sltcs-page">
      <ArticleNav />

      {/* Hero */}
      <div className="article-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <span className="article-category-badge">ITINERARIOS</span>
          <h1 className="article-hero-title">
            Itinerario Sri Lanka 4 Noches / 5 Días: Los Destinos Culturales Más Emblemáticos en Vehículo Privado
          </h1>
          <div className="article-hero-meta">
            <span>5 junio 2026</span>
            <span className="article-hero-dot">·</span>
            <span>7 min de lectura</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="article-breadcrumb">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <Link href="/information">Información</Link>
        <span>›</span>
        <Link href="/information/itinerarios">Itinerarios</Link>
        <span>›</span>
        <span>Itinerario Sri Lanka 4 Noches / 5 Días</span>
      </div>

      {/* Tags */}
      <div className="article-tags">
        {["itinerario sri lanka 5 días","ruta cultural sri lanka","sigiriya kandy galle","conductor privado sri lanka","viaje sri lanka primera vez"].map(tag => (
          <span key={tag} className="article-tag">{tag}</span>
        ))}
      </div>

      {/* Layout */}
      <div className="article-layout">
        <main className="article-main">
          <p className="article-lead">
            En cinco días, puedes visitar cuatro de los lugares más celebrados de Sri Lanka declarados Patrimonio Mundial de la UNESCO, recorrer impresionantes paisajes de las tierras altas y llegar a la histórica costa sur — todo desde la comodidad de un vehículo privado con aire acondicionado y un conductor dedicado.
          </p>

          <blockquote className="article-blockquote">
            Todos los itinerarios de SLTCS son flexibles por diseño. Si quieres quedarte más tiempo en Sigiriya, saltarte una parada o añadir un desvío espontáneo, tu conductor se adaptará. Este plan es un punto de partida, no un horario rígido.
          </blockquote>

          {/* TOC */}
          <div className="article-toc">
            <button className="article-toc-toggle" onClick={() => setTocOpen(v => !v)}>
              TABLA DE CONTENIDOS <span>{tocOpen ? "▲" : "▼"}</span>
            </button>
            {tocOpen && (
              <ul className="article-toc-list">
                {TOC.map(item => (
                  <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
                ))}
              </ul>
            )}
          </div>

          <h2 id="descripcion-general">Descripción General del Itinerario</h2>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Resumen del itinerario de 4 noches / 5 días</caption>
              <thead>
                <tr><th>Detalle</th><th>Información</th></tr>
              </thead>
              <tbody>
                {[
                  ["Duración", "5 Días / 4 Noches"],
                  ["Enfoque", "Destacados Culturales"],
                  ["Destinos Principales", "Sigiriya, Kandy, Nuwara Eliya, Galle"],
                  ["Ideal Para", "Primeros visitantes con tiempo limitado"],
                  ["Punto de Inicio / Fin", "Aeropuerto de Colombo (BIA)"],
                  ["Plan Recomendado", "Silver o Gold"],
                ].map(([det, info]) => (
                  <tr key={det}><td><strong>{det}</strong></td><td>{info}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="dia-a-dia">Itinerario Día a Día</h2>

          <h3 id="dia-1">Día 1 — Llegada → Sigiriya</h3>

          <p>
            Llega al Aeropuerto Internacional de Bandaranaike (BIA) en Colombo. Tu conductor te recibirá en la sala de llegadas con un cartel con tu nombre.
          </p>

          <p>
            Conduce hacia el norte hasta la zona de Sigiriya (aproximadamente 3–4 horas), haciendo una parada en el <strong>Templo de la Cueva de Dambulla</strong> — un Patrimonio Mundial de la UNESCO con cinco grutas que albergan más de 150 estatuas de Buda y murales antiguos. Regístrate en tu hotel en la zona de Sigiriya o Kandalama.
          </p>

          <h3 id="dia-2">Día 2 — Fortaleza de la Roca de Sigiriya</h3>

          <p>
            Comienza el día con una ascensión temprana a la <strong>Fortaleza de la Roca de Sigiriya (UNESCO)</strong>, uno de los yacimientos arqueológicos más extraordinarios de Asia. La ciudadela real del siglo V se eleva 200 metros sobre la jungla circundante, y la cima ofrece vistas panorámicas sobre las llanuras.
          </p>

          <p>
            Reserva 2,5–3 horas para la subida y bajada completas.
          </p>

          <p>
            Por la tarde, disfruta de un safari opcional en jeep en el <strong>Parque Nacional de Minneriya</strong>, famoso por sus concentraciones estacionales de elefantes — una de las más grandes del mundo. Regresa a tu hotel por la noche.
          </p>

          <div className="article-highlight-box">
            <h4>🚙 Safari en Jeep Privado — Organizado por SLTCS</h4>
            <p>
              SLTCS puede organizar un safari en jeep completamente privado para tu visita a Minneriya o Yala. A diferencia de los safaris en grupo compartido, tu jeep privado está reservado exclusivamente para tu grupo — sin extraños, sin horario fijo.
            </p>
            <p>
              Lo que realmente distingue la experiencia SLTCS es que tu conductor dedicado puede acompañarte dentro del jeep, proporcionando comentarios en tiempo real sobre la fauna, los hábitats y la historia del parque durante todo el safari.
            </p>
          </div>

          <h3 id="dia-3">Día 3 — Kandy: Templo del Diente</h3>

          <p>
            Conduce hasta Kandy (aproximadamente 2,5 horas), haciendo una parada en un jardín de especias tradicional en Matale. Visita el <strong>Templo de la Reliquia del Sagrado Diente (UNESCO)</strong>, el lugar budista más sagrado de Sri Lanka, que alberga una reliquia del Buda.
          </p>

          <p>
            Por la noche, asiste a una actuación de danza cultural de Kandy — un vibrante espectáculo de percusión tradicional y bailarines con trajes.
          </p>

          <h3 id="dia-4">Día 4 — Nuwara Eliya → Galle</h3>

          <p>
            Parte de Kandy para un pintoresco trayecto a través de ondulantes plantaciones de té hasta <strong>Nuwara Eliya</strong> — la 'Pequeña Inglaterra' de Sri Lanka, situada a 1.868 metros sobre el nivel del mar. Para en una fábrica de té para una visita guiada y degustación.
          </p>

          <p>
            Continúa hacia el sur a través de las tierras altas y baja hasta la costa, llegando al <strong>Fuerte de Galle (UNESCO)</strong> en la costa sur a última hora de la tarde.
          </p>

          <h3 id="dia-5">Día 5 — Fuerte de Galle → Salida</h3>

          <p>
            Pasa la mañana explorando el <strong>Fuerte de Galle</strong> — una fortificación colonial holandesa notablemente bien conservada del siglo XVII. Pasea por las murallas, explora las tiendas boutique y galerías dentro de las murallas del fuerte, y toma un café con vistas al Océano Índico.
          </p>

          <p>
            Tu conductor te trasladará al Aeropuerto de Colombo para tu vuelo de salida.
          </p>

          <h2 id="que-incluye">Qué Incluye Este Itinerario</h2>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Inclusiones del itinerario de 5 días</caption>
              <thead>
                <tr><th>Elemento</th><th>Incluido</th></tr>
              </thead>
              <tbody>
                {[
                  ["Vehículo privado con aire acondicionado", "✓ Sí"],
                  ["Conductor dedicado durante los 5 días", "✓ Sí"],
                  ["Recogida y entrega en el aeropuerto", "✓ Sí"],
                  ["Ajustes flexibles del itinerario", "✓ Sí"],
                  ["Reservas de hotel", "No incluido (podemos recomendar)"],
                  ["Tarifas de entrada a los lugares", "No incluido (se pagan por separado)"],
                  ["Comidas", "No incluido"],
                ].map(([item, inc]) => (
                  <tr key={item}><td>{item}</td><td>{inc}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="planes-recomendados">Planes SLTCS Recomendados</h2>

          <p>
            Para un itinerario cultural de 5 días, recomendamos el <strong>Plan Silver</strong> (Conductor Turístico Altamente Valorado o Conductor Guía) o el <strong>Plan Gold</strong> (Conductor Guía Chófer dedicado con un segundo conductor de apoyo).
          </p>

          <p>
            Un Conductor Guía Chófer enriquecerá significativamente tu experiencia en Sigiriya, Kandy y Galle proporcionando comentarios culturales certificados en cada lugar.
          </p>

          <div className="article-cta-box">
            <p>¿Listo para reservar tu tour de 5 días por Sri Lanka? Cuéntanos tus fechas de viaje y tamaño del grupo. Responderemos con un presupuesto personalizado en 24 horas.</p>
            <Link href="/#contact" className="article-cta-btn">OBTENER PRESUPUESTO GRATUITO</Link>
          </div>

          {/* Related articles */}
          <div className="article-related">
            <h3>Artículos Relacionados</h3>
            <div className="article-related-grid">
              <div className="article-related-card" style={{ opacity: 0.6, cursor: "default" }}>
                <p>Itinerario Sri Lanka 5 Noches / 6 Días: Cultura + Naturaleza en Vehículo Privado</p>
                <span style={{ color: "#c9a84c", fontSize: "0.7rem", fontWeight: 700 }}>Próximamente — 6 junio 2026</span>
              </div>
              <div className="article-related-card" style={{ opacity: 0.6, cursor: "default" }}>
                <p>Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla</p>
                <span style={{ color: "#c9a84c", fontSize: "0.7rem", fontWeight: 700 }}>Próximamente — 6 junio 2026</span>
              </div>
            </div>
          </div>

          <div className="article-back-link">
            <Link href="/information/itinerarios">← Itinerarios</Link>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="article-sidebar">
          <div className="article-sidebar-category">
            <Link href="/information/itinerarios">Itinerarios</Link>
          </div>
          <div className="article-sidebar-cta">
            <p>¿Listo para planificar tu viaje a Sri Lanka? Obtén un presupuesto gratuito y sin compromiso.</p>
            <Link href="/#contact" className="article-sidebar-cta-btn">CONSULTA GRATUITA</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
