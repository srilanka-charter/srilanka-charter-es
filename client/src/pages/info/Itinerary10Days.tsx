import { useState, useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/art10_van_coastal_road_hero_6a19696b.webp";
const ROUTE_MAP = "/manus-storage/art10_route_map_10day_7f6f79b9.webp";
const NINE_ARCHES = "/manus-storage/art10_nine_arches_bridge_train_ffbd92f0.webp";
const MIRISSA_BEACH = "/manus-storage/art10_mirissa_beach_aerial_1b1a07ee.webp";

const TOC = [
  { id: "descripcion-general", label: "Descripción General: 10 Días / 2 Semanas" },
  { id: "dia-a-dia", label: "Itinerario Día a Día" },
  { id: "dia-1", label: "↳ Día 1 — Aeropuerto → Anuradhapura → Sigiriya" },
  { id: "dia-2", label: "↳ Día 2 — Roca de Sigiriya y Safari en Minneriya" },
  { id: "dia-3", label: "↳ Día 3 — Kandy: Jardín de Especias y Templo" },
  { id: "dia-4", label: "↳ Día 4 — Nuwara Eliya: Tierras Altas del Té" },
  { id: "dia-5", label: "↳ Día 5 — Tren del Té → Puente de los Nueve Arcos → Ella" },
  { id: "dia-6", label: "↳ Día 6 — Visitas en Ella → Yala" },
  { id: "dia-7", label: "↳ Día 7 — Safari en Yala → Playa de Mirissa" },
  { id: "dia-8", label: "↳ Día 8 — Fuerte de Galle y Día de Playa" },
  { id: "dia-9", label: "↳ Día 9 — Negombo: Ayurveda y Descanso" },
  { id: "dia-10", label: "↳ Día 10 — Colombo → Aeropuerto" },
  { id: "extensiones", label: "Extensiones Opcionales (Días 11–14)" },
  { id: "planes-recomendados", label: "Planes SLTCS Recomendados" },
];

export default function Itinerary10Days() {
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    document.title = "Itinerario Sri Lanka 10 Días / 2 Semanas: La Ruta Definitiva por la Isla (2026) | SLTCS";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Itinerario completo de Sri Lanka en 10 días a 2 semanas en conductor privado. Sigiriya, Kandy, tren del té, Ella, Yala y Galle — la ruta definitiva para primeros visitantes que quieren la experiencia completa.");
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas";
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-10-days-2-weeks-itinerary" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-10-days-2-weeks-itinerary" },
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
            Itinerario Sri Lanka 10 Días / 2 Semanas: La Ruta Definitiva por la Isla
          </h1>
          <div className="article-hero-meta">
            <span>7 junio 2026</span>
            <span className="article-hero-dot">·</span>
            <span>12 min de lectura</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="article-breadcrumb">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <Link href="/information/itinerarios">Itinerarios</Link>
        <span>›</span>
        <span>10 Días / 2 Semanas</span>
      </div>

      {/* Tags */}
      <div className="article-tags">
        {["10 días", "2 semanas", "plan clásico", "sigiriya", "kandy", "ella", "yala", "galle", "playa"].map(tag => (
          <span key={tag} className="article-tag">{tag}</span>
        ))}
      </div>

      <div className="article-layout">
        <main className="article-main">

          <p className="article-lead">
            Este es el itinerario que recomendamos con más frecuencia a los primeros visitantes que tienen el tiempo suficiente para experimentar Sri Lanka de verdad. En 10 a 14 días, recorrerás desde el antiguo Triángulo Cultural hasta la sagrada ciudad de Kandy, subirás a las dramáticas tierras altas del té, cruzarás hacia el sur rico en fauna salvaje y terminarás en las playas de la costa sur — todo en un vehículo privado con un conductor dedicado.
          </p>

          <blockquote className="article-blockquote">
            Para este itinerario de 10 a 14 días, recomendamos encarecidamente el <strong>Plan Gold</strong> con un Conductor Guía Chófer certificado. A lo largo de un viaje más largo, el valor de tener un guía experto que da vida a cada destino se vuelve aún más evidente.
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

          <h2 id="descripcion-general">Descripción General: 10 Días / 2 Semanas</h2>

          <figure className="article-figure">
            <img
              src={ROUTE_MAP}
              alt="Mapa del itinerario de 10 días por Sri Lanka: Anuradhapura, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Galle, Negombo, Colombo"
              className="article-photo"
              loading="lazy"
            />
            <figcaption>Mapa del itinerario de 10 días — desde el Triángulo Cultural del norte hasta las playas del sur, pasando por las tierras altas del té</figcaption>
          </figure>

          <p>
            Este plan puede completarse en 10 días a un ritmo cómodo, o extenderse a 14 días añadiendo noches extra en tus destinos favoritos, incorporando un retiro de Ayurveda, o explorando destinos adicionales como Trincomalee en la costa este.
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Resumen del itinerario de 10 días / 2 semanas</caption>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Detalle</th>
                  <th style={{ textAlign: "left" }}>Información</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Duración", "10–14 Días"],
                  ["Enfoque", "Experiencia Completa de la Isla"],
                  ["Destinos Principales", "Sigiriya, Kandy, Tren del Té, Ella, Yala, Galle, Playa"],
                  ["Ideal Para", "Primeros visitantes que quieren la experiencia completa"],
                  ["Punto de Inicio / Fin", "Aeropuerto de Colombo (BIA)"],
                  ["Plan Recomendado", "Gold"],
                ].map(([det, info]) => (
                  <tr key={det}>
                    <td style={{ textAlign: "left" }}><strong>{det}</strong></td>
                    <td style={{ textAlign: "left" }}>{info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="dia-a-dia">Itinerario Día a Día</h2>

          <h3 id="dia-1">Día 1 — Aeropuerto → Anuradhapura → Sigiriya</h3>

          <p>
            Salida desde el Aeropuerto de Colombo o Negombo. Conduce hacia el norte hasta la antigua capital de <strong>Anuradhapura</strong> (aproximadamente 3,5–4 horas).
          </p>

          <p>
            Explora el Sitio Patrimonio Mundial de la UNESCO — el sagrado <strong>Sri Maha Bodhi</strong> (el árbol documentado más antiguo del mundo), la gran <strong>Stupa de Ruwanwelisaya</strong> y las extensas ruinas antiguas de esta ciudad de 2.500 años de antigüedad.
          </p>

          <p>
            Continúa hasta la zona de Sigiriya (aproximadamente 1,5 horas) y haz el check-in en tu hotel.
          </p>

          <h3 id="dia-2">Día 2 — Roca de Sigiriya y Safari en Jeep en Minneriya</h3>

          <p>
            Ascenso matutino a la <strong>Fortaleza de la Roca de Sigiriya</strong> (UNESCO) — reserva 2,5–3 horas para el ascenso y descenso completo, disfrutando de los antiguos jardines de agua, los famosos frescos de las doncellas celestiales y las impresionantes vistas panorámicas desde la meseta de la cima.
          </p>

          <p>
            Por la tarde, dirígete al <strong>Parque Nacional de Minneriya</strong> para un emocionante safari en jeep. Minneriya es famoso por <em>La Reunión</em> — uno de los mayores espectáculos de vida salvaje de Asia, donde cientos de elefantes salvajes se congregan alrededor del antiguo embalse.
          </p>

          <p>
            Noche en Sigiriya.
          </p>

          <h3 id="dia-3">Día 3 — Kandy: Jardín de Especias y Templo</h3>

          <p>
            Conduce a <strong>Kandy</strong> pasando por un jardín de especias en Matale (aproximadamente 3 horas). Visita la <strong>Fábrica de Té Geragama</strong> y el <strong>Templo del Diente Sagrado</strong> (UNESCO).
          </p>

          <p>
            Actuación de danza kandiana por la tarde.
          </p>

          <h3 id="dia-4">Día 4 — Nuwara Eliya: Tierras Altas del Té</h3>

          <p>
            Pintoresco recorrido en montaña hasta <strong>Nuwara Eliya</strong> a través de exuberantes plantaciones de té. Experiencia de recolección de té y té de la tarde en un hotel de plantación colonial.
          </p>

          <p>
            Explora el encantador pueblo de la 'Pequeña Inglaterra'.
          </p>

          <h3 id="dia-5">Día 5 — Tren del Té → Puente de los Nueve Arcos → Ella</h3>

          <p>
            Sube al icónico <strong>tren del país del té</strong> para un viaje impresionante a través de montañas neblinosas. Fotografía el famoso <strong>Puente de los Nueve Arcos</strong>.
          </p>

          <figure className="article-figure">
            <img
              src={NINE_ARCHES}
              alt="Tren pasando por el Puente de los Nueve Arcos en Ella, Sri Lanka, rodeado de vegetación exuberante"
              className="article-photo"
              loading="lazy"
            />
            <figcaption>El Puente de los Nueve Arcos en Ella — uno de los lugares más fotografiados de Sri Lanka, especialmente cuando pasa el tren del té</figcaption>
          </figure>

          <p>
            Llega a <strong>Ella</strong>.
          </p>

          <h3 id="dia-6">Día 6 — Visitas en Ella → Yala</h3>

          <p>
            Caminata matutina al <strong>Pequeño Pico de Adán</strong> y a la Roca de Ella para vistas panorámicas. Traslado por la tarde a la zona de Yala (aproximadamente 2 horas).
          </p>

          <p>
            Check-in en un lodge de safari.
          </p>

          <h3 id="dia-7">Día 7 — Safari en Yala → Playa de Mirissa</h3>

          <p>
            Safari en jeep por la mañana temprano en el <strong>Parque Nacional de Yala</strong> — el parque de vida salvaje más famoso de Sri Lanka, hogar de la mayor densidad de leopardos del mundo.
          </p>

          <p>
            Traslado por la tarde al resort de playa de <strong>Mirissa</strong>.
          </p>

          <figure className="article-figure">
            <img
              src={MIRISSA_BEACH}
              alt="Vista aérea de la playa de Mirissa en Sri Lanka, con aguas turquesas y palmeras"
              className="article-photo"
              loading="lazy"
            />
            <figcaption>La playa de Mirissa — el destino de playa más popular de la costa sur de Sri Lanka, perfecto para relajarse tras el safari en Yala</figcaption>
          </figure>

          <h3 id="dia-8">Día 8 — Fuerte de Galle y Día de Playa</h3>

          <p>
            Visita matutina al <strong>Fuerte de Galle</strong> incluido en la lista del Patrimonio UNESCO — murallas coloniales holandesas, tiendas boutique y vistas al océano. Tarde libre en la playa de Mirissa.
          </p>

          <p>
            Avistamiento de ballenas opcional (temporada: noviembre–abril).
          </p>

          <h3 id="dia-9">Día 9 — Negombo: Ayurveda y Descanso</h3>

          <p>
            Traslado a <strong>Negombo</strong> en la costa oeste (aproximadamente 3–4 horas). Check-in en un hotel de Ayurveda para tratamientos tradicionales y relajación antes de tu partida.
          </p>

          <h3 id="dia-10">Día 10 — Colombo → Aeropuerto</h3>

          <p>
            Exploración matutina de <strong>Colombo</strong> — Templo Gangaramaya, Mercado de Pettah y el vibrante Galle Face Green. Traslado al Aeropuerto de Colombo (BIA) para tu vuelo de regreso.
          </p>

          <h2 id="extensiones">Extensiones Opcionales (Días 11–14)</h2>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Opciones de extensión para la versión de 2 semanas</caption>
              <thead>
                <tr>
                  <th>Extensión</th>
                  <th>Duración</th>
                  <th>Atractivos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Costa Este de Trincomalee</strong></td>
                  <td>2–3 días</td>
                  <td>Playas vírgenes, snorkel en Pigeon Island, avistamiento de ballenas</td>
                </tr>
                <tr>
                  <td><strong>Polonnaruwa en Profundidad</strong></td>
                  <td>1 día</td>
                  <td>Capital medieval, templo rupestre Gal Vihara, embalses antiguos</td>
                </tr>
                <tr>
                  <td><strong>Retiro de Ayurveda</strong></td>
                  <td>2–4 días</td>
                  <td>Tratamientos tradicionales, yoga, relajación antes de la partida</td>
                </tr>
                <tr>
                  <td><strong>Jaffna (Norte Lejano)</strong></td>
                  <td>2–3 días</td>
                  <td>Cultura tamil, Templo Nallur Kandaswamy, gastronomía única</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="planes-recomendados">Planes SLTCS Recomendados</h2>

          <p>
            Para un itinerario de 10 a 14 días, recomendamos encarecidamente el <strong>Plan Gold</strong> — un Conductor Guía Chófer dedicado con un segundo conductor de apoyo. A lo largo de un viaje más largo, el valor de tener un guía experto y certificado que da vida a cada destino se vuelve aún más evidente. El segundo conductor de apoyo también garantiza la máxima flexibilidad y seguridad en los días de viaje más largos.
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Precios indicativos — Sedán (hasta 3 personas), precios en USD</caption>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Tipo de Conductor</th>
                  <th>Precio (10 días)</th>
                  <th>Precio (14 días)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bronze</td>
                  <td>Conductor en Prácticas</td>
                  <td>USD 560</td>
                  <td>USD 750</td>
                </tr>
                <tr>
                  <td>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      Silver
                      <span className="badge-popular">Más Popular</span>
                    </span>
                  </td>
                  <td>Conductor Turístico / Guía</td>
                  <td>USD 700</td>
                  <td>USD 940</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>Chófer Guía (Altamente Valorado)</td>
                  <td>USD 890</td>
                  <td>USD 1,200</td>
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
            <p>¿Listo para planificar tu viaje de ensueño a Sri Lanka? Cuéntanos tus fechas de viaje y tamaño del grupo. Responderemos con un itinerario personalizado de 10 a 14 días y un presupuesto en 24 horas.</p>
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
                <Link href="/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias" className="article-related-link">
                  <p className="article-related-item-title">Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla</p>
                  <p className="article-related-item-date">6 junio 2026</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="article-back-link">
            <Link href="/information/itinerarios">← Volver a Itinerarios</Link>
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
