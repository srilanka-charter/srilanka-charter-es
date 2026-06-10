import { useState, useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article7_ella_train_hero_35f57ffa.jpeg";
const ROUTE_MAP = "/manus-storage/article7_route_map_5n6d_full_78b3567b.png";

const TOC = [
  { id: "descripcion-general", label: "Descripción General: 5 Noches / 6 Días Cultura + Naturaleza" },
  { id: "dia-a-dia", label: "Itinerario Día a Día" },
  { id: "dia-1", label: "↳ Día 1 — Llegada → Sigiriya" },
  { id: "dia-2", label: "↳ Día 2 — Fortaleza de la Roca de Sigiriya y Safari" },
  { id: "dia-3", label: "↳ Día 3 — Kandy" },
  { id: "dia-4", label: "↳ Día 4 — Nuwara Eliya y Ella" },
  { id: "dia-5", label: "↳ Día 5 — Safari en el Parque Nacional de Yala" },
  { id: "dia-6", label: "↳ Día 6 — Fuerte de Galle → Salida" },
  { id: "que-incluye", label: "Qué Incluye Este Itinerario" },
  { id: "planes-recomendados", label: "Planes SLTCS Recomendados" },
];

export default function Itinerary5N6D() {
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    document.title = "Itinerario Sri Lanka 5 Noches / 6 Días: Cultura + Naturaleza en Vehículo Privado (2026) | SLTCS";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Itinerario completo de 5 noches y 6 días por Sri Lanka en conductor privado. Sigiriya, Kandy, Ella, Yala y Galle — la combinación perfecta de cultura y naturaleza.");
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias";
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-5-nights-6-days-itinerary" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-5-nights-6-days-itinerary" },
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
            Itinerario Sri Lanka 5 Noches / 6 Días: Cultura + Naturaleza en Vehículo Privado
          </h1>
          <div className="article-hero-meta">
            <span>6 junio 2026</span>
            <span className="article-hero-dot">·</span>
            <span>9 min de lectura</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="article-breadcrumb">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <span>Itinerario Sri Lanka 5 Noches / 6 Días</span>
      </div>

      {/* Tags */}
      <div className="article-tags">
        {["5 noches 6 días", "sigiriya", "kandy", "ella", "yala", "conductor privado", "parejas"].map(tag => (
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

          <h2 id="descripcion-general">Descripción General: 5 Noches / 6 Días Cultura + Naturaleza</h2>

          <figure className="article-figure">
            <img src={HERO_IMG} alt="Tren de las tierras altas de Sri Lanka cruzando el Puente de los Nueve Arcos en Ella" loading="lazy" />
            <figcaption>El icónico tren de las tierras altas de Sri Lanka cruzando el Puente de los Nueve Arcos en Ella</figcaption>
          </figure>

          <p>
            Este itinerario de 6 días en vehículo privado logra el equilibrio ideal entre exploración cultural y aventura en la naturaleza. Escalarás Sigiriya, explorarás la sagrada ciudad de Kandy, viajarás por las tierras altas del té hasta Ella, realizarás un safari de vida silvestre de día completo en Yala y terminarás en el histórico Fuerte de Galle — todo en un vehículo privado con aire acondicionado y un conductor dedicado.
          </p>

          <p>
            Este plan es especialmente popular entre parejas y grupos pequeños que desean experimentar tanto la profundidad cultural como la belleza natural de Sri Lanka sin sentirse apresurados.
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
                <tr><td>Duración</td><td>6 Días / 5 Noches</td></tr>
                <tr><td>Enfoque</td><td>Cultura + Naturaleza</td></tr>
                <tr><td>Destinos Principales</td><td>Sigiriya, Kandy, Ella, Yala, Galle</td></tr>
                <tr><td>Ideal Para</td><td>Parejas y grupos pequeños</td></tr>
                <tr><td>Punto de Inicio / Fin</td><td>Aeropuerto de Colombo (BIA)</td></tr>
                <tr><td>Plan Recomendado</td><td>Silver o Gold</td></tr>
              </tbody>
            </table>
          </div>

          <figure className="article-figure">
            <img src={ROUTE_MAP} alt="Mapa ilustrado de la ruta de 5 noches y 6 días por Sri Lanka" loading="lazy" />
            <figcaption>Mapa ilustrado de la ruta — Sigiriya → Kandy → Ella → Yala → Galle</figcaption>
          </figure>

          <h2 id="dia-a-dia">Itinerario Día a Día</h2>

          <h3 id="dia-1">Día 1 — Llegada → Sigiriya</h3>

          <p>
            Llegada al Aeropuerto de Colombo. Tu conductor te recibirá en la terminal de llegadas y te trasladará al norte hacia la zona de Sigiriya (aproximadamente 3–4 horas), con parada en el <strong>Templo Rupestre de Dambulla</strong> (Patrimonio UNESCO) en el camino.
          </p>

          <p>
            Check-in en tu hotel en la zona de Sigiriya o Kandalama.
          </p>

          <h3 id="dia-2">Día 2 — Fortaleza de la Roca de Sigiriya y Safari</h3>

          <p>
            Escala la <strong>Fortaleza de la Roca de Sigiriya</strong> (Patrimonio UNESCO) por la mañana — reserva entre 2,5 y 3 horas para la subida y bajada completa.
          </p>

          <p>
            Por la tarde, realiza un safari en jeep en el <strong>Parque Nacional de Minneriya o Kaudulla</strong>, donde podrás encontrarte con grandes manadas de elefantes salvajes congregándose alrededor de los antiguos embalses.
          </p>

          <h3 id="dia-3">Día 3 — Kandy</h3>

          <p>
            Viaje a <strong>Kandy</strong> a través del Jardín de Especias de Matale. Visita el <strong>Templo del Diente Sagrado</strong> (Patrimonio UNESCO) y los hermosos <strong>Jardines Botánicos de Peradeniya</strong>, que albergan más de 4.000 especies de plantas, incluida una famosa avenida de palmas reales.
          </p>

          <p>
            Tarde libre en el centro de Kandy.
          </p>

          <h3 id="dia-4">Día 4 — Nuwara Eliya y Ella</h3>

          <p>
            Conduce a través de las impresionantes <strong>tierras altas del té</strong> hasta Nuwara Eliya. Visita una fábrica de té y disfruta del té de la tarde con vistas a la plantación.
          </p>

          <p>
            Continúa hasta <strong>Ella</strong> — un encantador pueblo de montaña famoso por el <strong>Puente de los Nueve Arcos</strong>, un viaducto de la época colonial rodeado de jungla y terrazas de té. Noche en Ella.
          </p>

          <h3 id="dia-5">Día 5 — Safari en el Parque Nacional de Yala</h3>

          <p>
            Traslado a la zona de Yala (aproximadamente 2 horas desde Ella). Pasa el día completo en un <strong>safari en jeep en el Parque Nacional de Yala</strong> — la reserva de vida silvestre más famosa de Sri Lanka y hogar de la mayor densidad de leopardos del mundo.
          </p>

          <p>
            También podrás avistar elefantes, osos perezosos, cocodrilos y cientos de especies de aves. Noche cerca de Yala o Tissamaharama.
          </p>

          <h3 id="dia-6">Día 6 — Fuerte de Galle → Salida</h3>

          <p>
            Conduce hasta el <strong>Fuerte de Galle</strong> (Patrimonio UNESCO) en la costa sur. Pasa la mañana explorando las murallas coloniales holandesas, las tiendas boutique y las vistas al océano.
          </p>

          <p>
            Tu conductor te trasladará luego al Aeropuerto de Colombo para tu vuelo de regreso.
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
                <tr><td>Conductor dedicado durante los 6 días</td><td>✓ Sí</td></tr>
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
            Para un itinerario de 6 días de cultura y naturaleza, recomendamos el <strong>Plan Silver</strong> o el <strong>Plan Gold</strong>.
          </p>

          <p>
            Un Conductor Guía Chófer del Plan Gold proporcionará comentarios certificados en Sigiriya, Kandy y Galle, y puede ayudar a coordinar la logística del safari en Yala.
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Precios indicativos para 6 días — Sedán (hasta 3 personas), precios en USD</caption>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Tipo de Conductor</th>
                  <th>Precio (6 días)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bronze</td>
                  <td>Conductor en Prácticas</td>
                  <td>USD 360</td>
                </tr>
                <tr>
                  <td>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      Silver
                      <span className="badge-popular">Más Popular</span>
                    </span>
                  </td>
                  <td>Conductor Turístico / Guía</td>
                  <td>USD 450</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>Chófer Guía (Altamente Valorado)</td>
                  <td>USD 560</td>
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
            <p>¿Listo para reservar tu tour de 6 días por Sri Lanka? Cuéntanos tus fechas de viaje y tamaño del grupo. Responderemos con un presupuesto personalizado en 24 horas.</p>
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
                <Link href="/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias" className="article-related-link">
                  <p className="article-related-item-title">Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla</p>
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
