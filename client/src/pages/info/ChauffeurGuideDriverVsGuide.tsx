import { useEffect, useState } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article3_hero_chauffeur_sigiriya_781e24c7.webp";
const VEHICLE_IMG = "/manus-storage/vehicle_van_70a807f8_233a386f.png";

const RELATED = [
  {
    title: "Conductor Privado en Sri Lanka: Cómo Contratar un Conductor Seguro y Fiable para tu Viaje",
    date: "4 Jun 2026",
    href: "/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka",
  },
  {
    title: "Alquiler de Coche con Conductor en Sri Lanka: Guía Completa para Primeras Visitas",
    date: "4 Jun 2026",
    href: "/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa",
  },
];

const TOC = [
  { id: "tres-tipos", label: "Los Tres Tipos de Conductor en Sri Lanka — De un Vistazo" },
  { id: "conductor-turistico", label: "Conductor Turístico: Transporte Fiable, Comentario Mínimo" },
  { id: "chofer-guia", label: "Chófer Guía: Lo Mejor de Ambos Mundos" },
  { id: "guia-nacional", label: "Guía Nacional: Experiencia Especializada para Tours Complejos" },
  { id: "cual-elegir", label: "¿Qué Tipo de Conductor es el Adecuado para tu Viaje?" },
  { id: "seleccion", label: "Cómo SLTCS Selecciona y Certifica a sus Conductores" },
  { id: "planes", label: "Entendiendo la Estructura de Planes de SLTCS" },
  { id: "faq", label: "Preguntas Frecuentes" },
];

const FAQ_ITEMS = [
  {
    id: "faq1",
    q: "¿Puedo solicitar un Chófer Guía en el Plan Bronce?",
    a: "El Plan Bronce está diseñado en torno a Conductores Turísticos experimentados. Si deseas un Chófer Guía certificado, el Plan Plata o el Plan Oro es la opción adecuada. Puedes comparar los tres planes en nuestra página de Planes.",
  },
  {
    id: "faq2",
    q: "¿Es un Chófer Guía lo mismo que un guía turístico?",
    a: "No exactamente. Un Chófer Guía es principalmente tu conductor — es responsable de tu transporte durante todo el viaje. Su papel como guía es complementario: proporcionan contexto cultural y comentario en los sitios que visitas, pero no lideran tours de grupos grandes ni reemplazan a un guía especialista para programas arqueológicos en profundidad. Para la mayoría de los viajeros independientes, esta combinación es ideal.",
  },
  {
    id: "faq3",
    q: "¿Hablan inglés con fluidez los Chóferes Guía?",
    a: "Todos los Chóferes Guía que trabajan con SLTCS han sido evaluados para la fluidez en inglés como parte de nuestro proceso interno de selección. La comunicación fluida en inglés es un requisito fundamental para los planes Plata y Oro. Si tienes requisitos de idioma específicos, por favor mencíonalo cuando envíes tu consulta.",
  },
  {
    id: "faq4",
    q: "¿Cuánto más cuesta un Chófer Guía comparado con un Conductor Turístico?",
    a: "La diferencia de precio entre los planes Bronce y Plata refleja la calificación adicional y la experiencia del conductor. Para un desglose completo de tarifas por tipo de vehículo y duración, visita la página de Precios.",
  },
];

export default function ChauffeurGuideDriverVsGuide() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  useEffect(() => {
    document.title =
      "Chófer Guía en Sri Lanka: Conductor Turístico vs Guía Nacional Explicado (2026) | SLTCS";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Descubre la diferencia entre Conductor Turístico, Chófer Guía y Guía Nacional en Sri Lanka. Guía completa para elegir el tipo de conductor adecuado para tu viaje con SLTCS."
      );
    // canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico";
    // hreflang
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/private-driver-guide/chauffeur-guide-sri-lanka-driver-vs-tourist-guide" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/private-driver-guide/chauffeur-guide-sri-lanka-driver-vs-tourist-guide" },
    ];
    const addedLinks: HTMLLinkElement[] = [];
    hreflangs.forEach(({ lang, url }) => {
      const link = document.createElement("link");
      link.rel = "alternate"; link.hreflang = lang; link.href = url;
      document.head.appendChild(link);
      addedLinks.push(link);
    });
    return () => { addedLinks.forEach((l) => l.remove()); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Chófer Guía en Sri Lanka: Conductor Turístico vs Guía Nacional Explicado (2026)",
            datePublished: "2026-06-04",
            author: { "@type": "Organization", name: "SLTCS" },
            publisher: {
              "@type": "Organization",
              name: "SLTCS",
              url: "https://es.srilanka-charter.com",
            },
            inLanguage: "es",
            url: "https://es.srilanka-charter.com/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico",
          }),
        }}
      />

      {/* NAV */}
      <ArticleNav />

      {/* HERO */}
      <div className="article-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <span className="article-category-badge">GUÍA DE CONDUCTOR PRIVADO</span>
          <h1 className="article-hero-title">
            Chófer Guía en Sri Lanka: Conductor vs Guía Turístico Explicado
          </h1>
          <p className="article-hero-meta">4 de junio de 2026 · 9 min de lectura</p>
        </div>
      </div>

      <div className="article-layout">
        {/* MAIN */}
        <main className="article-main">
          {/* Breadcrumb */}
          <nav className="article-breadcrumb">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <Link href="/information">Información</Link>
            <span>›</span>
            <Link href="/information/guia-conductor-privado">Guía de Conductor Privado</Link>
            <span>›</span>
            <span>Chófer Guía: Conductor vs Guía Turístico</span>
          </nav>

          {/* Tags */}
          <div className="article-tags">
            <span className="article-tag">Chófer Guía</span>
            <span className="article-tag">Conductor Turístico</span>
            <span className="article-tag">Conductor Privado</span>
            <span className="article-tag">Sri Lanka</span>
            <span className="article-tag">Planificación de Viaje</span>
          </div>

          {/* TOC */}
          <div className="article-toc">
            <div className="article-toc-title">TABLA DE CONTENIDOS</div>
            {TOC.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="article-toc-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* INTRO */}
          <p>
            Cuando comienzas a investigar el transporte privado en Sri Lanka, rápidamente encontrarás varios títulos diferentes: <strong>Conductor Turístico</strong>, <strong>Chófer Guía</strong> y <strong>Guía Nacional</strong>. Estos no son términos intercambiables — cada uno representa un nivel diferente de calificación, un alcance diferente de servicio y un precio diferente.
          </p>

          <p>
            Entender la distinción antes de reservar puede marcar la diferencia entre un buen viaje y uno genuinamente excepcional.
          </p>

          {/* SECTION 1 */}
          <h2 id="tres-tipos">Los Tres Tipos de Conductor en Sri Lanka — De un Vistazo</h2>

          <p>
            La industria turística de Sri Lanka está regulada por la <strong>Autoridad de Desarrollo del Turismo de Sri Lanka (SLTDA)</strong>, que emite diferentes categorías de licencias a conductores y guías.
          </p>

          <p>
            Las tres categorías más relevantes para los viajeros que contratan transporte privado se describen a continuación.
          </p>

          <div className="article-table-wrap">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Tipo de Conductor</th>
                  <th>Función Principal</th>
                  <th>Capacidad de Guía</th>
                  <th>Nivel de Inglés</th>
                  <th>Mejor Para</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Conductor Turístico</strong></td>
                  <td>Transporte seguro y fiable</td>
                  <td>Conocimiento local básico</td>
                  <td>Conversacional</td>
                  <td>Viajeros que prefieren la exploración autoguiada</td>
                </tr>
                <tr>
                  <td><strong>Chófer Guía</strong></td>
                  <td>Transporte + comentario cultural</td>
                  <td>Guía certificado en sitios principales</td>
                  <td>Fluido</td>
                  <td>Primeras visitas, parejas, familias que quieren profundidad</td>
                </tr>
                <tr>
                  <td><strong>Guía Nacional</strong></td>
                  <td>Liderazgo completo de tour guiado</td>
                  <td>Completo — historia, arqueología, ecología</td>
                  <td>Fluido / profesional</td>
                  <td>Grupos grandes, tours culturales o de vida silvestre especializados</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SECTION 2 */}
          <h2 id="conductor-turistico">Conductor Turístico: Transporte Fiable, Comentario Mínimo</h2>

          <p>
            Un Conductor Turístico posee una licencia de vehículo turístico emitida por el gobierno y está autorizado para transportar visitantes por todo Sri Lanka. Su responsabilidad principal es la conducción segura y puntual — no el guiado.
          </p>

          <p>
            La mayoría de los Conductores Turísticos tienen un conocimiento funcional del inglés y pueden recomendar restaurantes o ayudar con la logística básica, pero no están capacitados ni certificados para proporcionar comentario histórico o cultural en los sitios.
          </p>

          <p>
            Esta categoría es adecuada para los viajeros que ya han investigado los destinos que planean visitar, prefieren explorar de forma independiente en cada parada, o viajan con un líder de tour separado.
          </p>

          <p>
            También es el tipo de conductor más común ofrecido por los operadores de bajo coste y las plataformas de transporte.
          </p>

          <p>
            En SLTCS, todos los conductores — independientemente de la categoría — poseen una licencia válida de vehículo turístico emitida por el gobierno y han sido individualmente verificados.
          </p>

          {/* SECTION 3 */}
          <h2 id="chofer-guia">Chófer Guía: Lo Mejor de Ambos Mundos</h2>

          <p>
            Un Chófer Guía posee una certificación adicional emitida por la SLTDA que les califica para proporcionar comentario guiado en sitios turísticos.
          </p>

          <p>
            Esta es la opción más popular entre los viajeros independientes del Reino Unido, Australia y Europa que quieren más que un conductor — quieren a alguien que pueda dar vida al país.
          </p>

          <div className="article-img-wrap">
            <img
              src={VEHICLE_IMG}
              alt="Chófer Guía con furgoneta en Sri Lanka"
              className="article-img"
            />
            <p className="article-img-caption">
              Un Chófer Guía combina transporte privado con comentario cultural certificado por la SLTDA en los principales sitios turísticos.
            </p>
          </div>

          <h3>Qué Proporciona un Chófer Guía</h3>

          <div className="article-table-wrap">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Elemento del Servicio</th>
                  <th>Conductor Turístico</th>
                  <th>Chófer Guía</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Recogida y entrega en el aeropuerto</td>
                  <td>Sí</td>
                  <td>Sí</td>
                </tr>
                <tr>
                  <td>Charter multi-día por toda la isla</td>
                  <td>Sí</td>
                  <td>Sí</td>
                </tr>
                <tr>
                  <td>Ajustes flexibles del itinerario</td>
                  <td>Sí</td>
                  <td>Sí</td>
                </tr>
                <tr>
                  <td>Comentario cultural e histórico en los sitios</td>
                  <td>Limitado</td>
                  <td>Sí — certificado por la SLTDA</td>
                </tr>
                <tr>
                  <td>Recomendaciones de restaurantes y experiencias locales</td>
                  <td>Básico</td>
                  <td>Detallado, personalizado</td>
                </tr>
                <tr>
                  <td>Asistencia con compra de entradas y logística</td>
                  <td>Limitado</td>
                  <td>Sí</td>
                </tr>
                <tr>
                  <td>Asesoramiento en la planificación del itinerario antes del viaje</td>
                  <td>Raramente</td>
                  <td>Sí</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Un Chófer Guía es la elección correcta si quieres entender lo que estás viendo — no solo visitar una lista de sitios. En Sigiriya, explicarán la ingeniería hidráulica de los antiguos jardines de agua.
          </p>

          <p>
            En el Templo del Diente en Kandy, describirán la importancia de la reliquia y la forma correcta de observar la ceremonia vespertina. En Yala, identificarán la vida silvestre y explicarán el ecosistema.
          </p>

          <p>
            SLTCS ofrece Chóferes Guía en el{" "}
            <a href="/#planes" className="article-link">
              Plan Plata
            </a>{" "}
            (Conductor Turístico Altamente Valorado o Chófer Guía) y el{" "}
            <a href="/#planes" className="article-link">
              Plan Oro
            </a>{" "}
            (Chófer Guía dedicado con un segundo conductor de apoyo para itinerarios más largos).
          </p>

          {/* SECTION 4 */}
          <h2 id="guia-nacional">Guía Nacional: Experiencia Especializada para Tours Complejos</h2>

          <p>
            Un Guía Nacional posee el nivel más alto de certificación de guía en Sri Lanka, emitido tras un riguroso programa de formación de varios años que cubre historia, arqueología, ecología y múltiples idiomas.
          </p>

          <p>
            Los Guías Nacionales son típicamente contratados para tours de grupos grandes, programas culturales especializados o itinerarios de alto nivel que requieren una experiencia profunda en múltiples disciplinas.
          </p>

          <p>
            Para la mayoría de los viajeros independientes que reservan un charter de coche o furgoneta privado, un Guía Nacional no es necesario — y el costo adicional rara vez está justificado a menos que el itinerario esté específicamente enfocado en profundidad arqueológica.
          </p>

          <p>
            Un Chófer Guía bien calificado proporciona más que suficiente contexto cultural para la gran mayoría de los itinerarios en Sri Lanka.
          </p>

          {/* SECTION 5 */}
          <h2 id="cual-elegir">¿Qué Tipo de Conductor es el Adecuado para tu Viaje?</h2>

          <p>
            La elección correcta depende de cómo prefieres viajar, la duración de tu itinerario y cuánta profundidad quieres de cada destino. La tabla a continuación resume los escenarios más comunes.
          </p>

          <div className="article-table-wrap">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Estilo de Viaje</th>
                  <th>Tipo de Conductor Recomendado</th>
                  <th>Plan SLTCS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primera visita, quiere contexto cultural</td>
                  <td>Chófer Guía</td>
                  <td>Plata u Oro</td>
                </tr>
                <tr>
                  <td>Visita repetida, prefiere exploración autoguiada</td>
                  <td>Conductor Turístico</td>
                  <td>Bronce</td>
                </tr>
                <tr>
                  <td>Familia con niños, necesita flexibilidad y paciencia</td>
                  <td>Chófer Guía</td>
                  <td>Plata u Oro</td>
                </tr>
                <tr>
                  <td>Pareja en viaje de luna de miel o aniversario</td>
                  <td>Chófer Guía</td>
                  <td>Oro</td>
                </tr>
                <tr>
                  <td>Grupo de amigos, ritmo relajado</td>
                  <td>Conductor Turístico o Chófer Guía</td>
                  <td>Bronce o Plata</td>
                </tr>
                <tr>
                  <td>Viajeros mayores, la comodidad y el cuidado son prioritarios</td>
                  <td>Chófer Guía</td>
                  <td>Oro</td>
                </tr>
                <tr>
                  <td>Enfoque cultural o arqueológico especializado</td>
                  <td>Guía Nacional + Conductor</td>
                  <td>Contáctanos para un presupuesto personalizado</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SECTION 6 */}
          <h2 id="seleccion">Cómo SLTCS Selecciona y Certifica a sus Conductores</h2>

          <p>
            Cada conductor que trabaja con SLTCS posee una licencia válida de vehículo turístico emitida por el gobierno como requisito mínimo. Los Chóferes Guía en los planes Plata y Oro poseen certificación de guía SLTDA adicional y han sido evaluados individualmente para la fluidez en inglés, el conocimiento cultural y los estándares de servicio.
          </p>

          <p>
            Más allá de las calificaciones formales, SLTCS aplica su propio sistema de valoración interno basado en los comentarios de los huéspedes después de cada charter. Los conductores son valorados en puntualidad, limpieza del vehículo, conocimiento de la ruta, comunicación y calidad del comentario cultural.
          </p>

          <p>
            Solo los conductores que mantienen valoraciones consistentemente altas en todas las categorías son ofrecidos a los nuevos huéspedes.
          </p>

          {/* SECTION 7 */}
          <h2 id="planes">Entendiendo la Estructura de Planes de SLTCS</h2>

          <p>
            SLTCS organiza su servicio en tres planes, cada uno reflejando una categoría de conductor diferente y un nivel de apoyo diferente.
          </p>

          <p>
            El plan que elijas determina no solo el tipo de conductor, sino también las opciones de vehículo disponibles y la experiencia general de tu charter.
          </p>

          <div className="plans-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", margin: "1.5rem 0" }}>
            <div className="plan-card" style={{ border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px", padding: "1.25rem", background: "rgba(201,168,76,0.05)" }}>
              <div style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "0.5rem" }}>Plan Bronce</div>
              <div style={{ fontWeight: 600, marginBottom: "0.75rem" }}>Conductor Turístico Experimentado</div>
              <ul style={{ fontSize: "0.875rem", paddingLeft: "1.25rem", lineHeight: 1.7 }}>
                <li>Conductor de vehículo turístico con licencia gubernamental</li>
                <li>Sedán o furgoneta disponible</li>
                <li>Itinerario flexible, comunicación en inglés</li>
                <li>Mejor para viajeros independientes y autoguiados</li>
              </ul>
              <a href="/#planes" className="article-cta-btn" style={{ display: "block", textAlign: "center", marginTop: "1rem", fontSize: "0.8rem", padding: "0.5rem 1rem" }}>Ver Plan Bronce</a>
            </div>
            <div className="plan-card" style={{ border: "2px solid #c9a84c", borderRadius: "8px", padding: "1.25rem", background: "rgba(201,168,76,0.08)", position: "relative" }}>
              <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", background: "#c9a84c", color: "#1a1a1a", fontSize: "0.7rem", fontWeight: 700, padding: "2px 10px", borderRadius: "20px", whiteSpace: "nowrap" }}>MÁS POPULAR</div>
              <div style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "0.5rem" }}>Plan Plata</div>
              <div style={{ fontWeight: 600, marginBottom: "0.75rem" }}>Conductor Turístico Altamente Valorado o Chófer Guía</div>
              <ul style={{ fontSize: "0.875rem", paddingLeft: "1.25rem", lineHeight: 1.7 }}>
                <li>Guía certificado por la SLTDA en sitios principales</li>
                <li>Sedán, furgoneta o furgoneta grande disponible</li>
                <li>Comentario cultural, recomendaciones de restaurantes</li>
                <li>Mejor para primeras visitas y familias</li>
              </ul>
              <a href="/#planes" className="article-cta-btn" style={{ display: "block", textAlign: "center", marginTop: "1rem", fontSize: "0.8rem", padding: "0.5rem 1rem" }}>Ver Plan Plata</a>
            </div>
            <div className="plan-card" style={{ border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px", padding: "1.25rem", background: "rgba(201,168,76,0.05)" }}>
              <div style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "0.5rem" }}>Plan Oro</div>
              <div style={{ fontWeight: 600, marginBottom: "0.75rem" }}>Chófer Guía Dedicado + Conductor de Apoyo</div>
              <ul style={{ fontSize: "0.875rem", paddingLeft: "1.25rem", lineHeight: 1.7 }}>
                <li>Sistema de dos conductores para itinerarios más largos</li>
                <li>MPV de lujo o furgoneta grande disponible</li>
                <li>Servicio premium, planificación completa del itinerario</li>
                <li>Mejor para parejas, mayores y viajes premium</li>
              </ul>
              <a href="/#planes" className="article-cta-btn" style={{ display: "block", textAlign: "center", marginTop: "1rem", fontSize: "0.8rem", padding: "0.5rem 1rem" }}>Ver Plan Oro</a>
            </div>
          </div>

          {/* SECTION 8 - FAQ */}
          <h2 id="faq">Preguntas Frecuentes</h2>

          <div className="article-faq">
            {FAQ_ITEMS.map((item) => (
              <div key={item.id} className="article-faq-item">
                <button
                  className="article-faq-q"
                  onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                >
                  <span>{item.q}</span>
                  <span className="article-faq-icon">{openFaq === item.id ? "−" : "+"}</span>
                </button>
                {openFaq === item.id && (
                  <div className="article-faq-a">{item.a}</div>
                )}
              </div>
            ))}
          </div>

          <div className="article-cta-box">
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>¿No Estás Seguro de Qué Plan es el Adecuado para Ti?</p>
            <p>
              Comparte tus fechas de viaje, el tamaño de tu grupo y un itinerario aproximado — recomendaremos el tipo de conductor más adecuado y proporcionaremos un presupuesto personalizado en inglés en 24 horas. Sin compromiso, sin presión.
            </p>
            <div className="article-cta-wrap">
              <a href="/#contacto" className="article-cta-btn">
                Obtener Presupuesto Gratuito
              </a>
            </div>
          </div>

          {/* BACK LINK */}
          <div className="article-back-link">
            <Link href="/information/guia-conductor-privado">← Guía de Conductor Privado</Link>
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="article-sidebar">
          <div className="article-sidebar-category">
            <Link href="/information/guia-conductor-privado">Guía de Conductor Privado</Link>
          </div>

          <div className="article-related">
            <div className="article-related-title">Artículos Relacionados</div>
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="article-related-item">
                <div className="article-related-item-title">{r.title}</div>
                <div className="article-related-item-date">{r.date}</div>
              </Link>
            ))}
          </div>

          <div className="article-sidebar-cta">
            <p>¿Listo para planificar tu viaje a Sri Lanka? Obtén un presupuesto gratuito sin compromiso.</p>
            <a href="/#contacto" className="article-cta-btn">
              CONSULTA GRATUITA
            </a>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="sltcs-footer">
        <div className="footer-inner">
          <div className="footer-logo">SLTCS</div>
          <p className="footer-copy">
            © 2026 Sri Lanka Travel Charter Service. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
