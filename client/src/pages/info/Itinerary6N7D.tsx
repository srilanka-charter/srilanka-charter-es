import { useState, useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article8_kandy_temple_hero_5d58fa04.jpeg";

const TOC = [
  { id: "descripcion-general", label: "Descripción General: 6 Noches / 7 Días Experiencia Completa" },
  { id: "dia-a-dia", label: "Itinerario Día a Día" },
  { id: "dia-1", label: "↳ Día 1 — Llegada → Triángulo Cultural" },
  { id: "dia-2", label: "↳ Día 2 — Sigiriya y Polonnaruwa" },
  { id: "dia-3", label: "↳ Día 3 — Kandy" },
  { id: "dia-4", label: "↳ Día 4 — Nuwara Eliya: Tierras Altas del Té" },
  { id: "dia-5", label: "↳ Día 5 — Ella y el Puente de los Nueve Arcos" },
  { id: "dia-6", label: "↳ Día 6 — Safari en el Parque Nacional de Yala" },
  { id: "dia-7", label: "↳ Día 7 — Fuerte de Galle → Salida" },
  { id: "que-incluye", label: "Qué Incluye Este Itinerario" },
  { id: "planes-recomendados", label: "Planes SLTCS Recomendados" },
];

export default function Itinerary6N7D() {
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    document.title = "Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla en Vehículo Privado (2026) | SLTCS";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Itinerario completo de 6 noches y 7 días por Sri Lanka en conductor privado. Sigiriya, Polonnaruwa, Kandy, Ella, Yala y Galle — la experiencia más completa de la isla.");
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias";
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-6-nights-7-days-itinerary" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-6-nights-7-days-itinerary" },
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
            Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla en Vehículo Privado
          </h1>
          <div className="article-hero-meta">
            <span>6 junio 2026</span>
            <span className="article-hero-dot">·</span>
            <span>10 min de lectura</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="article-breadcrumb">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <span>Itinerario Sri Lanka 6 Noches / 7 Días</span>
      </div>

      {/* Tags */}
      <div className="article-tags">
        {["6 noches 7 días", "sigiriya", "polonnaruwa", "kandy", "ella", "yala", "galle", "familias"].map(tag => (
          <span key={tag} className="article-tag">{tag}</span>
        ))}
      </div>

      <div className="article-layout">
        <main className="article-main">

          {/* TOC */}
          <div className="article-toc">
            <button className="article-toc-toggle" onClick={() => setTocOpen(o => !o)}>
              TABLA DE CONTENIDOS {tocOpen ? "▲" : "▼"}
            </button>
            {tocOpen && (
              <ul className="article-toc-list">
                {TOC.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <h2 id="descripcion-general">Descripción General: 6 Noches / 7 Días Experiencia Completa</h2>

          <figure className="article-figure">
            <img src={HERO_IMG} alt="Templo del Diente Sagrado de Kandy al atardecer reflejado en el lago" loading="lazy" />
            <figcaption>El Templo del Diente Sagrado de Kandy al atardecer — uno de los lugares más sagrados del budismo</figcaption>
          </figure>

          <p>
            Este itinerario de 7 días en vehículo privado es la opción más popular entre familias y viajeros que desean una introducción completa a Sri Lanka.
          </p>

          <p>
            A lo largo de siete días, explorarás el antiguo Triángulo Cultural, la sagrada ciudad de Kandy, las dramáticas tierras altas del té, el pintoresco pueblo de Ella, el rico Parque Nacional de Yala y el histórico Fuerte de Galle — una experiencia verdaderamente completa de la isla.
          </p>

          <div className="article-overview-table">
            <table className="article-price-table">
              <thead>
                <tr>
                  <th>Detalle</th>
                  <th>Información</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Duración</td><td>7 Días / 6 Noches</td></tr>
                <tr><td>Enfoque</td><td>Experiencia Completa de la Isla</td></tr>
                <tr><td>Destinos Principales</td><td>Sigiriya, Polonnaruwa, Kandy, Nuwara Eliya, Ella, Yala, Galle</td></tr>
                <tr><td>Ideal Para</td><td>Familias y exploradores exhaustivos</td></tr>
                <tr><td>Punto de Inicio / Fin</td><td>Aeropuerto de Colombo (BIA)</td></tr>
                <tr><td>Plan Recomendado</td><td>Silver o Gold</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="dia-a-dia">Itinerario Día a Día</h2>

          <h3 id="dia-1">Día 1 — Llegada → Triángulo Cultural</h3>

          <p>
            Llegada al Aeropuerto de Colombo. Conduce hacia el norte a través del <strong>Templo Rupestre de Dambulla</strong> (Patrimonio UNESCO) hasta la zona de Sigiriya o Kandalama (aproximadamente 3–4 horas).
          </p>

          <p>
            Check-in en tu hotel.
          </p>

          <h3 id="dia-2">Día 2 — Sigiriya y Polonnaruwa</h3>

          <p>
            Escala la <strong>Fortaleza de la Roca de Sigiriya</strong> (Patrimonio UNESCO) por la mañana. Por la tarde, traslado a la antigua ciudad de <strong>Polonnaruwa</strong> (Patrimonio UNESCO) — una capital medieval notablemente bien conservada con templos, palacios y colosales estatuas de Buda.
          </p>

          <p>
            Regreso al hotel.
          </p>

          <h3 id="dia-3">Día 3 — Kandy</h3>

          <p>
            Conduce a <strong>Kandy</strong> a través de un jardín de especias en Matale. Visita el <strong>Templo del Diente Sagrado</strong> (Patrimonio UNESCO) y disfruta de una actuación de danza tradicional kandiana por la tarde.
          </p>

          <h3 id="dia-4">Día 4 — Nuwara Eliya: Tierras Altas del Té</h3>

          <p>
            Pintoresco recorrido en montaña hasta <strong>Nuwara Eliya</strong> a través de exuberantes plantaciones de té. Disfruta de una experiencia de recolección de té y del té de la tarde en un hotel de plantación de época colonial.
          </p>

          <p>
            Explora el encantador pueblo, a menudo llamado "La Pequeña Inglaterra" por su clima fresco y arquitectura colonial británica.
          </p>

          <h3 id="dia-5">Día 5 — Ella y el Puente de los Nueve Arcos</h3>

          <p>
            Viaja a <strong>Ella</strong> y sube (o fotografía) el icónico tren de las tierras del té. Visita el <strong>Puente de los Nueve Arcos</strong> y sube al <strong>Pequeño Pico de Adán</strong> para disfrutar de vistas panorámicas del valle.
          </p>

          <p>
            Noche en Ella.
          </p>

          <h3 id="dia-6">Día 6 — Safari en el Parque Nacional de Yala</h3>

          <p>
            Safari en jeep de día completo en el <strong>Parque Nacional de Yala</strong> — la reserva de vida silvestre más importante de Sri Lanka. Busca leopardos, elefantes, osos perezosos, cocodrilos y más de 200 especies de aves.
          </p>

          <p>
            Noche cerca de Yala o Tissamaharama.
          </p>

          <div className="article-tip-box">
            <p className="article-tip-title">🚙 Safari Privado en Jeep — Organizado por SLTCS</p>
            <p>
              SLTCS puede organizar un <strong>safari privado en jeep</strong> para tu visita a Yala. A diferencia de los safaris en grupo compartido, tu jeep privado está reservado exclusivamente para tu grupo — sin extraños, sin horario fijo.
            </p>
            <p>
              Lo que realmente distingue la experiencia SLTCS es que <strong>tu conductor dedicado puede acompañarte dentro del jeep</strong>, proporcionando comentarios en tiempo real sobre la vida silvestre, los hábitats y la historia del parque durante todo el safari.
            </p>
            <p>
              ¿Interesado en un safari privado en jeep? <Link href="/#contact" className="article-link">Contáctanos</Link> al hacer tu consulta y lo incluiremos en tu presupuesto personalizado.
            </p>
          </div>

          <h3 id="dia-7">Día 7 — Fuerte de Galle → Salida</h3>

          <p>
            Visita matutina al <strong>Fuerte de Galle</strong> (Patrimonio UNESCO) — pasea por las murallas, explora los callejones boutique y disfruta de un último café con vistas al océano. Parada opcional en la <strong>playa de Mirissa</strong>.
          </p>

          <p>
            Traslado al Aeropuerto de Colombo para tu vuelo de regreso.
          </p>

          <h2 id="que-incluye">Qué Incluye Este Itinerario</h2>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <thead>
                <tr>
                  <th>Elemento</th>
                  <th>Incluido</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Vehículo privado con aire acondicionado</td><td>✓ Sí</td></tr>
                <tr><td>Conductor dedicado durante los 7 días</td><td>✓ Sí</td></tr>
                <tr><td>Recogida y traslado al aeropuerto</td><td>✓ Sí</td></tr>
                <tr><td>Ajustes flexibles del itinerario</td><td>✓ Sí</td></tr>
                <tr><td>Reservas de hotel</td><td>No incluido (podemos recomendar)</td></tr>
                <tr><td>Tarifa del safari en jeep de Yala</td><td>No incluido (se paga por separado)</td></tr>
                <tr><td>Comidas</td><td>No incluido</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="planes-recomendados">Planes SLTCS Recomendados</h2>

          <p>
            Para un itinerario de 7 días de experiencia completa de la isla, recomendamos el <strong>Plan Silver</strong> o el <strong>Plan Gold</strong>.
          </p>

          <p>
            El Plan Gold incluye un Conductor Guía Chófer dedicado más un segundo conductor de apoyo — ideal para familias con niños o viajeros que desean máxima flexibilidad y profundidad cultural.
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Precios indicativos para 7 días — Sedán (hasta 3 personas), precios en USD</caption>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Tipo de Conductor</th>
                  <th>Precio (7 días)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bronze</td>
                  <td>Conductor en Prácticas</td>
                  <td>USD 410</td>
                </tr>
                <tr>
                  <td>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      Silver
                      <span className="badge-popular">Más Popular</span>
                    </span>
                  </td>
                  <td>Conductor Turístico / Guía</td>
                  <td>USD 510</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>Chófer Guía (Altamente Valorado)</td>
                  <td>USD 640</td>
                </tr>
              </tbody>
            </table>
            <p className="article-table-note">
              Para grupos de 3 o más personas, considera la furgoneta KDH. Consulta nuestra <Link href="/#planes" className="article-link">página de Planes</Link> para ver todos los precios y tipos de vehículo.
            </p>
            <div className="article-price-table-cta">
              <p>¿Quieres un presupuesto para este itinerario?</p>
              <Link href="/#contact" className="article-price-cta-btn">SOLICITAR PRESUPUESTO GRATUITO →</Link>
            </div>
          </div>

          <div className="article-cta-box">
            <p>¿Listo para reservar tu tour de 7 días por Sri Lanka? Cuéntanos tus fechas de viaje y tamaño del grupo. Responderemos con un presupuesto personalizado en 24 horas.</p>
            <Link href="/#contact" className="article-cta-btn">OBTENER PRESUPUESTO GRATUITO</Link>
          </div>

          {/* Related articles */}
          <div className="article-related">
            <div className="article-related-title">ARTÍCULOS RELACIONADOS</div>
            <div>
              <div style={{ padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <Link href="/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias" className="article-related-link">
                  <p className="article-related-item-title">Itinerario Sri Lanka 4 Noches / 5 Días: Los Destinos Culturales Más Emblemáticos</p>
                  <p className="article-related-item-date">5 junio 2026</p>
                </Link>
              </div>
              <div style={{ padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <Link href="/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias" className="article-related-link">
                  <p className="article-related-item-title">Itinerario Sri Lanka 5 Noches / 6 Días: Cultura + Naturaleza en Vehículo Privado</p>
                  <p className="article-related-item-date">6 junio 2026</p>
                </Link>
              </div>
              <div style={{ padding: "0.75rem 0" }}>
                <Link href="/information/itinerarios/ruta-triangulo-cultural-sri-lanka" className="article-related-link">
                  <p className="article-related-item-title">Itinerario Triángulo Cultural de Sri Lanka 5–7 Días: Patrimonio UNESCO</p>
                  <p className="article-related-item-date">6 junio 2026</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="article-back-link">
            <Link href="/">← Volver al Inicio</Link>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="article-sidebar">
          <div className="article-sidebar-category">
            <Link href="/#itinerarios">Itinerarios</Link>
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
