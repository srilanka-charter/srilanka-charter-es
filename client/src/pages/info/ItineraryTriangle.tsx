import { useState, useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article9_sigiriya_aerial_hero_3827b32a.jpeg";

const TOC = [
  { id: "descripcion-general", label: "Descripción General: Triángulo Cultural 5–7 Días" },
  { id: "que-es-triangulo", label: "¿Qué es el Triángulo Cultural de Sri Lanka?" },
  { id: "sitios-patrimonio", label: "Los 5 Sitios Patrimonio UNESCO del Triángulo" },
  { id: "dia-a-dia", label: "Itinerario Día a Día (Versión 5 Días)" },
  { id: "dia-1", label: "↳ Día 1 — Llegada → Anuradhapura" },
  { id: "dia-2", label: "↳ Día 2 — Sigiriya y Dambulla" },
  { id: "dia-3", label: "↳ Día 3 — Polonnaruwa" },
  { id: "dia-4", label: "↳ Día 4 — Kandy" },
  { id: "dia-5", label: "↳ Día 5 — Kandy → Salida" },
  { id: "extension-7-dias", label: "Extensión a 7 Días" },
  { id: "planes-recomendados", label: "Planes SLTCS Recomendados" },
];

export default function ItineraryTriangle() {
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    document.title = "Itinerario Triángulo Cultural de Sri Lanka 5–7 Días: Patrimonio UNESCO en Vehículo Privado (2026) | SLTCS";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Itinerario completo del Triángulo Cultural de Sri Lanka en 5 a 7 días en conductor privado. Anuradhapura, Sigiriya, Dambulla, Polonnaruwa y Kandy — los 5 sitios Patrimonio UNESCO del norte.");
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/itinerarios/ruta-triangulo-cultural-sri-lanka";
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/itinerarios/ruta-triangulo-cultural-sri-lanka" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-5-7-days-cultural-triangle-itinerary" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/model-itinerary/sri-lanka-5-7-days-cultural-triangle-itinerary" },
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
            Itinerario Triángulo Cultural de Sri Lanka 5–7 Días: Patrimonio UNESCO en Vehículo Privado
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
        <span>Triángulo Cultural de Sri Lanka</span>
      </div>

      {/* Tags */}
      <div className="article-tags">
        {["triángulo cultural", "anuradhapura", "sigiriya", "polonnaruwa", "kandy", "patrimonio unesco", "historia"].map(tag => (
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

          <h2 id="descripcion-general">Descripción General: Triángulo Cultural 5–7 Días</h2>

          <figure className="article-figure">
            <img src={HERO_IMG} alt="Vista aérea de la Fortaleza de la Roca de Sigiriya rodeada de jungla tropical" loading="lazy" />
            <figcaption>Vista aérea de la Fortaleza de la Roca de Sigiriya — el corazón del Triángulo Cultural de Sri Lanka</figcaption>
          </figure>

          <p>
            El Triángulo Cultural de Sri Lanka es una región en la parte centro-norte de la isla que contiene una extraordinaria concentración de sitios Patrimonio Mundial de la UNESCO — antiguas capitales, fortalezas rupestres, templos sagrados y santuarios de cuevas que juntos narran la historia de más de 2.000 años de civilización cingalesa.
          </p>

          <p>
            Este itinerario está diseñado para los amantes de la historia y la cultura que desean explorar estos sitios en profundidad, en lugar de recorrerlos superficialmente. El plan puede completarse en 5 días a un ritmo moderado, o extenderse a 7 días para una experiencia más relajada y completa.
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
                <tr><td>Duración</td><td>5–7 Días</td></tr>
                <tr><td>Enfoque</td><td>Sitios Patrimonio UNESCO y Safari</td></tr>
                <tr><td>Destinos Principales</td><td>Anuradhapura, Sigiriya, Dambulla, Polonnaruwa, Kandy</td></tr>
                <tr><td>Ideal Para</td><td>Entusiastas de la historia y la cultura</td></tr>
                <tr><td>Punto de Inicio / Fin</td><td>Aeropuerto de Colombo (BIA)</td></tr>
                <tr><td>Plan Recomendado</td><td>Silver o Gold</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="que-es-triangulo">¿Qué es el Triángulo Cultural de Sri Lanka?</h2>

          <p>
            El término "Triángulo Cultural" se refiere a la región triangular formada por las ciudades de <strong>Anuradhapura</strong>, <strong>Polonnaruwa</strong> y <strong>Kandy</strong>. Dentro de este triángulo se encuentran algunos de los sitios arqueológicos más importantes de Asia.
          </p>

          <p>
            Un Conductor Guía Chófer es <strong>fuertemente recomendado</strong> para este itinerario, ya que el contexto histórico proporcionado en cada sitio enriquece significativamente la experiencia.
          </p>

          <h2 id="sitios-patrimonio">Los 5 Sitios Patrimonio UNESCO del Triángulo</h2>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <thead>
                <tr>
                  <th>Sitio</th>
                  <th>Tipo</th>
                  <th>Año UNESCO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ciudad Sagrada de Anuradhapura</strong></td>
                  <td>Antigua capital (siglo III a.C.)</td>
                  <td>1982</td>
                </tr>
                <tr>
                  <td><strong>Ciudad Antigua de Polonnaruwa</strong></td>
                  <td>Capital medieval (siglo X–XIII d.C.)</td>
                  <td>1982</td>
                </tr>
                <tr>
                  <td><strong>Ciudad Antigua de Sigiriya</strong></td>
                  <td>Fortaleza rupestre (siglo V d.C.)</td>
                  <td>1982</td>
                </tr>
                <tr>
                  <td><strong>Templo Rupestre de Dambulla</strong></td>
                  <td>Complejo de cuevas budistas</td>
                  <td>1991</td>
                </tr>
                <tr>
                  <td><strong>Ciudad Sagrada de Kandy</strong></td>
                  <td>Último reino cingalés</td>
                  <td>1988</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="dia-a-dia">Itinerario Día a Día (Versión 5 Días)</h2>

          <h3 id="dia-1">Día 1 — Llegada → Anuradhapura</h3>

          <p>
            Llegada al Aeropuerto de Colombo. Conduce hacia el norte hasta <strong>Anuradhapura</strong> (aproximadamente 4–5 horas). Anuradhapura fue la primera capital de Sri Lanka y uno de los centros de poder más antiguos del mundo antiguo.
          </p>

          <p>
            Visita vespertina al <strong>Sri Maha Bodhi</strong> — el árbol de higuera sagrado más antiguo del mundo, plantado en el siglo III a.C. a partir de una rama del árbol de la iluminación de Buda.
          </p>

          <h3 id="dia-2">Día 2 — Sigiriya y Dambulla</h3>

          <p>
            Traslado a la zona de Sigiriya. Escala la <strong>Fortaleza de la Roca de Sigiriya</strong> por la mañana — una antigua ciudadela construida en la cima de una roca de 200 metros de altura, decorada con famosos frescos de doncellas celestiales.
          </p>

          <p>
            Por la tarde, visita el <strong>Templo Rupestre de Dambulla</strong> — cinco cuevas que albergan más de 150 estatuas de Buda y pinturas murales que datan del siglo I a.C.
          </p>

          <h3 id="dia-3">Día 3 — Polonnaruwa</h3>

          <p>
            Exploración de la <strong>Ciudad Antigua de Polonnaruwa</strong> — la capital medieval de Sri Lanka, notablemente bien conservada. Los puntos destacados incluyen el <strong>Gal Vihara</strong> (cuatro colosales estatuas de Buda talladas en la roca), el Palacio Real y el Templo de Vatadage.
          </p>

          <p>
            Tarde libre para explorar a tu propio ritmo.
          </p>

          <h3 id="dia-4">Día 4 — Kandy</h3>

          <p>
            Conduce a <strong>Kandy</strong>, la última capital del reino cingalés y hogar del <strong>Templo del Diente Sagrado</strong> (Patrimonio UNESCO). El templo alberga la reliquia del diente de Buda, el objeto sagrado más venerado del budismo theravada.
          </p>

          <p>
            Visita los <strong>Jardines Botánicos de Peradeniya</strong> y disfruta de una actuación de danza tradicional kandiana por la tarde.
          </p>

          <h3 id="dia-5">Día 5 — Kandy → Salida</h3>

          <p>
            Mañana libre en Kandy para compras o visitas adicionales. Traslado al Aeropuerto de Colombo para tu vuelo de regreso (aproximadamente 3 horas).
          </p>

          <h2 id="extension-7-dias">Extensión a 7 Días</h2>

          <p>
            Para una experiencia más relajada y completa, el itinerario puede extenderse a 7 días con las siguientes adiciones:
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <thead>
                <tr>
                  <th>Día Adicional</th>
                  <th>Actividad Recomendada</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Día 2 (extendido)</td>
                  <td>Safari en jeep en el Parque Nacional de Minneriya o Kaudulla (manadas de elefantes)</td>
                </tr>
                <tr>
                  <td>Día 6 (nuevo)</td>
                  <td>Excursión a Nuwara Eliya — plantaciones de té y paisajes de tierras altas</td>
                </tr>
                <tr>
                  <td>Día 7 (nuevo)</td>
                  <td>Fuerte de Galle (Patrimonio UNESCO) antes de la salida</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="planes-recomendados">Planes SLTCS Recomendados</h2>

          <p>
            Para un itinerario centrado en el Triángulo Cultural, recomendamos especialmente el <strong>Plan Gold</strong> — un Conductor Guía Chófer con profundo conocimiento de la historia budista y cingalesa enriquecerá enormemente tu visita a cada sitio.
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Precios indicativos para 5 días — Sedán (hasta 3 personas), precios en USD</caption>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Tipo de Conductor</th>
                  <th>Precio (5 días)</th>
                  <th>Precio (7 días)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bronze</td>
                  <td>Conductor en Prácticas</td>
                  <td>USD 310</td>
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
                  <td>USD 380</td>
                  <td>USD 510</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>Chófer Guía (Altamente Valorado)</td>
                  <td>USD 480</td>
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
            <p>¿Listo para explorar el Triángulo Cultural de Sri Lanka? Cuéntanos tus fechas de viaje y tamaño del grupo. Responderemos con un presupuesto personalizado en 24 horas.</p>
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
