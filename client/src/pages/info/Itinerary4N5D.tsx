import { useEffect, useState } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article6_hero_sigiriya_aerial_acc21167.webp";
const SIGIRIYA_OVERVIEW = "/manus-storage/article6_sigiriya_overview_4a782e2a.webp";
const SIGIRIYA_TOP = "/manus-storage/article6_sigiriya_top_tourists_f75c454c.webp";
const SIGIRIYA_COUPLE = "/manus-storage/article6_sigiriya_couple_driver_fd86abc8.webp";
const JEEP_SAFARI = "/manus-storage/article6_jeep_safari_tourists_1e171723.webp";
const GALLE_FORT = "/manus-storage/article6_galle_fort_c1533b3a.webp";

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
            <span>8 min de lectura</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="article-breadcrumb">
        <Link href="/">Inicio</Link>
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

          {/* Overview photo */}
          <figure className="article-figure">
            <img
              src={SIGIRIYA_OVERVIEW}
              alt="Vista panorámica de la Roca de Sigiriya, Sri Lanka"
              className="article-photo"
              style={{ maxHeight: "400px" }}
            />
            <figcaption>La Roca de Sigiriya — uno de los yacimientos arqueológicos más extraordinarios de Asia y punto central de este itinerario</figcaption>
          </figure>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Resumen del itinerario de 4 noches / 5 días</caption>
              <thead>
                <tr><th style={{ textAlign: "left" }}>Detalle</th><th style={{ textAlign: "left" }}>Información</th></tr>
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
                  <tr key={det}>
                    <td style={{ textAlign: "left" }}><strong>{det}</strong></td>
                    <td style={{ textAlign: "left" }}>{info}</td>
                  </tr>
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
            Conduce hacia el norte hasta la zona de Sigiriya (aproximadamente 3–4 horas), haciendo una parada en el <strong>Templo de la Cueva de Dambulla</strong> — un Patrimonio Mundial de la UNESCO con cinco grutas que albergan más de 150 estatuas de Buda y murales antiguos.
          </p>

          <p>
            Regístrate en tu hotel en la zona de Sigiriya o Kandalama.
          </p>

          <h3 id="dia-2">Día 2 — Fortaleza de la Roca de Sigiriya</h3>

          <p>
            Comienza el día con una ascensión temprana a la <strong>Fortaleza de la Roca de Sigiriya (UNESCO)</strong>, uno de los yacimientos arqueológicos más extraordinarios de Asia. La ciudadela real del siglo V se eleva 200 metros sobre la jungla circundante, y la cima ofrece vistas panorámicas sobre las llanuras.
          </p>

          <p>
            Reserva 2,5–3 horas para la subida y bajada completas.
          </p>

          {/* Sigiriya top photo */}
          <figure className="article-figure">
            <img
              src={SIGIRIYA_TOP}
              alt="Turistas en la cima de la Roca de Sigiriya con vistas panorámicas"
              className="article-photo"
              style={{ maxHeight: "380px" }}
            />
            <figcaption>La cima de Sigiriya ofrece vistas panorámicas sobre las llanuras de la provincia central norte</figcaption>
          </figure>

          <p>
            Por la tarde, disfruta de un safari opcional en jeep en el <strong>Parque Nacional de Minneriya</strong>, famoso por sus concentraciones estacionales de elefantes — una de las más grandes del mundo.
          </p>

          {/* Jeep safari photo */}
          <figure className="article-figure">
            <img
              src={JEEP_SAFARI}
              alt="Safari en jeep privado en el Parque Nacional de Minneriya, Sri Lanka"
              className="article-photo"
              style={{ maxHeight: "360px" }}
            />
            <figcaption>Safari en jeep privado en el Parque Nacional de Minneriya — organizado por SLTCS para tu grupo exclusivamente</figcaption>
          </figure>

          <div className="article-callout-box">
            <p className="article-callout-title">🚙 Safari en Jeep Privado — Organizado por SLTCS</p>
            <p>
              SLTCS puede organizar un safari en jeep completamente privado para tu visita a Minneriya o Yala. A diferencia de los safaris en grupo compartido, tu jeep privado está reservado exclusivamente para tu grupo — sin extraños, sin horario fijo.
            </p>
            <p>
              Lo que realmente distingue la experiencia SLTCS es que tu conductor dedicado puede acompañarte dentro del jeep, proporcionando comentarios en tiempo real sobre la fauna, los hábitats y la historia del parque durante todo el safari.
            </p>
          </div>

          {/* Couple with driver photo */}
          <figure className="article-figure">
            <img
              src={SIGIRIYA_COUPLE}
              alt="Pareja con su conductor SLTCS en la cima de Sigiriya"
              className="article-photo"
              style={{ maxHeight: "360px" }}
            />
            <figcaption>Tu conductor te acompaña en los lugares turísticos — proporcionando comentarios culturales en tiempo real</figcaption>
          </figure>

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

          {/* Galle Fort photo */}
          <figure className="article-figure">
            <img
              src={GALLE_FORT}
              alt="Fuerte de Galle, Sri Lanka — patrimonio colonial holandés del siglo XVII"
              className="article-photo"
              style={{ maxHeight: "380px" }}
            />
            <figcaption>El Fuerte de Galle — una de las fortalezas coloniales mejor conservadas de Asia, declarada Patrimonio Mundial de la UNESCO</figcaption>
          </figure>

          <p>
            Tu conductor te trasladará al Aeropuerto de Colombo para tu vuelo de salida.
          </p>

          <h2 id="que-incluye">Qué Incluye Este Itinerario</h2>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Inclusiones del itinerario de 5 días</caption>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Elemento</th>
                  <th>Incluido</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Vehículo privado con aire acondicionado", true],
                  ["Conductor dedicado durante los 5 días", true],
                  ["Recogida y entrega en el aeropuerto", true],
                  ["Gasolina, peajes y alojamiento del conductor", true],
                  ["Ajustes flexibles del itinerario", true],
                  ["Reservas de hotel", false],
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
            Para un itinerario cultural de 5 días, recomendamos el <strong>Plan Silver</strong> (Conductor Turístico Altamente Valorado o Conductor Guía) o el <strong>Plan Gold</strong> (Conductor Guía Chófer dedicado con un segundo conductor de apoyo).
          </p>

          <p>
            Un Conductor Guía Chófer enriquecerá significativamente tu experiencia en Sigiriya, Kandy y Galle proporcionando comentarios culturales certificados en cada lugar.
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Precios indicativos para 5 días — Sedán (hasta 3 personas), precios en USD</caption>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Tipo de Conductor</th>
                  <th>Precio (5 días)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bronze</td>
                  <td>Conductor en Prácticas</td>
                  <td>USD 310</td>
                </tr>
                <tr>
                  <td>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      Silver
                      <span className="badge-popular">Más Popular</span>
                    </span>
                  </td>
                  <td>Conductor Turístico / Guía</td>
                  <td>USD 380</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>Chófer Guía (Altamente Valorado)</td>
                  <td>USD 480</td>
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
            <p>¿Listo para reservar tu tour de 5 días por Sri Lanka? Cuéntanos tus fechas de viaje y tamaño del grupo. Responderemos con un presupuesto personalizado en 24 horas.</p>
            <Link href="/#contact" className="article-cta-btn">OBTENER PRESUPUESTO GRATUITO</Link>
          </div>

          {/* Related articles */}
          <div className="article-related">
            <div className="article-related-title">ARTÍCULOS RELACIONADOS</div>
            <div style={{ opacity: 0.6 }}>
              <div style={{ padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="article-related-item-title">Itinerario Sri Lanka 5 Noches / 6 Días: Cultura + Naturaleza en Vehículo Privado</p>
                <p className="article-related-item-date">Próximamente — 6 junio 2026</p>
              </div>
              <div style={{ padding: "0.75rem 0" }}>
                <p className="article-related-item-title">Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla</p>
                <p className="article-related-item-date">Próximamente — 6 junio 2026</p>
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
