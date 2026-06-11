import { useState, useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/art7_ella_train_hero_587a6e16.webp";
const ELLA_TRAIN_BODY = "/manus-storage/art7_ella_train_body_0b0ac31a.webp";
const ROUTE_MAP_FULL = "/manus-storage/art7_route_map_full_730e3d57.webp";
const SIGIRIYA_TOP_DRIVER = "/manus-storage/art7_sigiriya_top_driver_f79c47fe.webp";
const NINE_ARCHES_BRIDGE = "/manus-storage/art7_nine_arches_bridge_47491b83.webp";
const YALA_FAMILY_JEEP = "/manus-storage/art7_yala_family_jeep_bcfc9c70.webp";

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
      { lang: "fr", url: "https://fr.srilanka-charter.com/information/itineraires/sri-lanka-itineraire-5-nuits-6-jours" },
      { lang: "de", url: "https://de.srilanka-charter.com/information/beispielreiserouten/sri-lanka-5-naechte-6-tage-reiseroute" },
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

          <p className="article-lead">
            En seis días, puedes combinar los mejores destinos culturales y naturales de Sri Lanka — desde la fortaleza rupestre de Sigiriya hasta el safari de leopardos en Yala, pasando por las tierras altas del té y el icónico Puente de los Nueve Arcos en Ella — todo en un vehículo privado con aire acondicionado y un conductor dedicado.
          </p>

          <blockquote className="article-blockquote">
            Todos los itinerarios de SLTCS son flexibles por diseño. Si quieres quedarte más tiempo en Ella, saltarte una parada o añadir un desvío espontáneo, tu conductor se adaptará. Este plan es un punto de partida, no un horario rígido.
          </blockquote>

          {/* TOC */}
          <div className="article-toc">
            <button className="article-toc-toggle" onClick={() => setTocOpen(o => !o)}>
              TABLA DE CONTENIDOS <span>{tocOpen ? "▲" : "▼"}</span>
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
            <img
              src={ELLA_TRAIN_BODY}
              alt="Tren de las tierras altas de Sri Lanka cruzando el Puente de los Nueve Arcos en Ella"
              className="article-photo"
              loading="lazy"
            />
            <figcaption>El icónico tren de las tierras altas cruzando el Puente de los Nueve Arcos en Ella — una de las imágenes más emblemáticas de Sri Lanka</figcaption>
          </figure>

          <p>
            Este itinerario de 6 días en vehículo privado logra el equilibrio ideal entre exploración cultural y aventura en la naturaleza. Escalarás Sigiriya, explorarás la sagrada ciudad de Kandy, viajarás por las tierras altas del té hasta Ella, realizarás un safari de vida silvestre de día completo en Yala y terminarás en el histórico Fuerte de Galle — todo en un vehículo privado con aire acondicionado y un conductor dedicado.
          </p>

          <p>
            Este plan es especialmente popular entre parejas y grupos pequeños que desean experimentar tanto la profundidad cultural como la belleza natural de Sri Lanka sin sentirse apresurados.
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Resumen del itinerario de 5 noches / 6 días</caption>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Detalle</th>
                  <th style={{ textAlign: "left" }}>Información</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Duración", "6 Días / 5 Noches"],
                  ["Enfoque", "Cultura + Naturaleza"],
                  ["Destinos Principales", "Sigiriya, Kandy, Ella, Yala, Galle"],
                  ["Ideal Para", "Parejas y grupos pequeños"],
                  ["Punto de Inicio / Fin", "Aeropuerto de Colombo (BIA)"],
                  ["Plan Recomendado", "Silver o Gold"],
                ].map(([det, info]) => (
                  <tr key={det}>
                    <td style={{ textAlign: "left" }}><strong>{det}</strong></td>
                    <td style={{ textAlign: "left" }}>{info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="article-figure">
            <img
              src={ROUTE_MAP_FULL}
              alt="Mapa ilustrado de la ruta de 5 noches y 6 días por Sri Lanka con los días marcados"
              className="article-photo"
              loading="lazy"
            />
            <figcaption>Mapa de la ruta — Colombo → Sigiriya → Kandy → Ella → Yala → Galle → Colombo</figcaption>
          </figure>

          <h2 id="dia-a-dia">Itinerario Día a Día</h2>

          <h3 id="dia-1">Día 1 — Llegada → Sigiriya</h3>

          <p>
            Llegada al Aeropuerto Internacional de Bandaranaike (BIA) en Colombo. Tu conductor te recibirá en la terminal de llegadas con un cartel con tu nombre y te trasladará al norte hacia la zona de Sigiriya (aproximadamente 3–4 horas).
          </p>

          <p>
            En el camino, haz una parada en el <strong>Templo Rupestre de Dambulla</strong> (Patrimonio UNESCO) — cinco grutas excavadas en la roca que albergan más de 150 estatuas de Buda y murales del siglo I a.C. Check-in en tu hotel en la zona de Sigiriya o Kandalama.
          </p>

          <h3 id="dia-2">Día 2 — Fortaleza de la Roca de Sigiriya y Safari</h3>

          <p>
            Comienza el día con una ascensión temprana a la <strong>Fortaleza de la Roca de Sigiriya</strong> (Patrimonio UNESCO) — la ciudadela real del siglo V que se eleva 200 metros sobre la jungla. La cima ofrece vistas panorámicas impresionantes y las famosas pinturas al fresco del Muro del Espejo.
          </p>

          <p>
            Reserva entre 2,5 y 3 horas para la subida y bajada completa.
          </p>

          <figure className="article-figure">
            <img
              src={SIGIRIYA_TOP_DRIVER}
              alt="Conductor SLTCS con turistas en la cima de la Roca de Sigiriya"
              className="article-photo"
              loading="lazy"
            />
            <figcaption>Tu conductor SLTCS puede acompañarte hasta la cima de Sigiriya, compartiendo la historia y el contexto cultural del lugar</figcaption>
          </figure>

          <p>
            Por la tarde, realiza un safari en jeep en el <strong>Parque Nacional de Minneriya o Kaudulla</strong>, donde podrás encontrarte con grandes manadas de elefantes salvajes congregándose alrededor de los antiguos embalses.
          </p>

          <div className="article-callout-box">
            <p className="article-callout-title">🚙 Safari en Jeep Privado — Organizado por SLTCS</p>
            <p>
              SLTCS puede organizar un safari en jeep completamente privado para tu visita a Minneriya o Yala. A diferencia de los safaris en grupo compartido, tu jeep privado está reservado exclusivamente para tu grupo — sin extraños, sin horario fijo.
            </p>
            <p>
              Lo que realmente distingue la experiencia SLTCS es que tu conductor dedicado puede acompañarte dentro del jeep, proporcionando comentarios en tiempo real sobre la fauna, los hábitats y la historia del parque durante todo el safari. Indícanos en tu consulta si deseas incluir el safari privado y lo añadiremos a tu presupuesto.
            </p>
          </div>

          <h3 id="dia-3">Día 3 — Kandy</h3>

          <p>
            Viaje a <strong>Kandy</strong> (aproximadamente 2,5 horas) a través del Jardín de Especias de Matale. Visita el <strong>Templo de la Reliquia del Sagrado Diente</strong> (Patrimonio UNESCO), el lugar budista más sagrado de Sri Lanka, que alberga una reliquia del Buda.
          </p>

          <p>
            Por la tarde, explora los <strong>Jardines Botánicos Reales de Peradeniya</strong>, que albergan más de 4.000 especies de plantas, incluida una famosa avenida de palmas reales. Por la noche, asiste a una actuación de danza cultural de Kandy.
          </p>

          <h3 id="dia-4">Día 4 — Nuwara Eliya y Ella</h3>

          <p>
            Conduce a través de las impresionantes <strong>tierras altas del té</strong> hasta Nuwara Eliya — la 'Pequeña Inglaterra' de Sri Lanka, situada a 1.868 metros sobre el nivel del mar. Visita una fábrica de té para una visita guiada y degustación.
          </p>

          <p>
            Continúa hasta <strong>Ella</strong> — un encantador pueblo de montaña famoso por el <strong>Puente de los Nueve Arcos</strong>, un viaducto de la época colonial rodeado de jungla y terrazas de té.
          </p>

          <figure className="article-figure">
            <img
              src={NINE_ARCHES_BRIDGE}
              alt="Vista aérea del Puente de los Nueve Arcos en Ella, Sri Lanka, rodeado de plantaciones de té"
              className="article-photo"
              loading="lazy"
            />
            <figcaption>El Puente de los Nueve Arcos en Ella — uno de los viaductos ferroviarios más fotografiados de Asia, construido en la era colonial sin una sola pieza de acero</figcaption>
          </figure>

          <h3 id="dia-5">Día 5 — Safari en el Parque Nacional de Yala</h3>

          <p>
            Traslado a la zona de Yala (aproximadamente 2 horas desde Ella). Pasa el día completo en un <strong>safari en jeep en el Parque Nacional de Yala</strong> — la reserva de vida silvestre más famosa de Sri Lanka y hogar de la mayor densidad de leopardos del mundo.
          </p>

          <p>
            También podrás avistar elefantes, osos perezosos, cocodrilos y cientos de especies de aves. Noche cerca de Yala o Tissamaharama.
          </p>

          <figure className="article-figure">
            <img
              src={YALA_FAMILY_JEEP}
              alt="Familia disfrutando de un safari en jeep privado en el Parque Nacional de Yala, Sri Lanka"
              className="article-photo"
              loading="lazy"
            />
            <figcaption>Safari en jeep privado en el Parque Nacional de Yala — organizado exclusivamente para tu grupo por SLTCS</figcaption>
          </figure>

          <h3 id="dia-6">Día 6 — Fuerte de Galle → Salida</h3>

          <p>
            Conduce hasta el <strong>Fuerte de Galle</strong> (Patrimonio UNESCO) en la costa sur. Pasa la mañana explorando las murallas coloniales holandesas del siglo XVII, las tiendas boutique y las vistas al océano Índico.
          </p>

          <p>
            Tu conductor te trasladará luego al Aeropuerto de Colombo para tu vuelo de regreso.
          </p>

          <h2 id="que-incluye">Qué Incluye Este Itinerario</h2>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Inclusiones del itinerario de 6 días</caption>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Elemento</th>
                  <th>Incluido</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Vehículo privado con aire acondicionado", true],
                  ["Conductor dedicado durante los 6 días", true],
                  ["Recogida y traslado al aeropuerto", true],
                  ["Gasolina, peajes y alojamiento del conductor", true],
                  ["Ajustes flexibles del itinerario", true],
                  ["Reservas de hotel", false],
                  ["Tarifa del safari en jeep de Yala", false],
                  ["Tarifas de entrada a los lugares", false],
                  ["Comidas", false],
                ].map(([item, inc]) => (
                  <tr key={item as string}>
                    <td style={{ textAlign: "left" }}>{item as string}</td>
                    <td>
                      {inc
                        ? <span className="article-included-yes">✓ Sí</span>
                        : <span className="article-included-no">No incluido</span>
                      }
                    </td>
                  </tr>
                ))}
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
