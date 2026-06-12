import { useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/art_besttime_hero_sunset_palms_89793f4f.webp";
const WEATHER_CHART_IMG = "/manus-storage/art_besttime_weather_chart_219ac80c.webp";
const SIGIRIYA_IMG = "/manus-storage/art_besttime_sigiriya_aerial_95a69386.webp";
const ELEPHANT_IMG = "/manus-storage/art_besttime_elephant_gathering_ca88770c.webp";
const TEA_IMG = "/manus-storage/art_besttime_tea_highlands_e87bd152.webp";

const RELATED = [
  {
    title: "Itinerario Sri Lanka 5 Noches 6 Días: Ruta Completa con Conductor Privado",
    date: "10 Jun 2026",
    href: "/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias",
  },
  {
    title: "Itinerario Sri Lanka 10 Días / 2 Semanas: La Ruta Completa",
    date: "11 Jun 2026",
    href: "/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas",
  },
];

const TOC = [
  { id: "dos-monzones", label: "Los Dos Sistemas de Monzón de Sri Lanka" },
  { id: "yala", label: "↳ El Monzón Yala (Suroeste): Mayo a Septiembre" },
  { id: "maha", label: "↳ El Monzón Maha (Noreste): Octubre a Enero" },
  { id: "temporada-alta", label: "Temporada Alta: Diciembre a Marzo" },
  { id: "que-esperar", label: "↳ Qué Esperar en Temporada Alta" },
  { id: "temporada-media", label: "Temporada Media: Abril y Octubre–Noviembre" },
  { id: "costa-este", label: "Costa Este: Mejor de Abril a Septiembre" },
  { id: "tierras-altas", label: "Tierras Altas del Té: Todo el Año, Mejor en Enero–Marzo" },
  { id: "resumen-mensual", label: "Resumen Mes a Mes" },
  { id: "conductor-privado", label: "Por Qué un Conductor Privado Tiene Sentido en Cualquier Temporada" },
];

export default function BestTimeToVisit() {
  useEffect(() => {
    document.title =
      "Cuándo Visitar Sri Lanka: Guía del Clima Mes a Mes (2026) | SLTCS";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Descubre cuándo es el mejor momento para visitar Sri Lanka. Guía completa del clima mes a mes, los dos sistemas de monzón, temporada alta y baja, playas, safaris y tierras altas del té."
      );
    // canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://es.srilanka-charter.com/information/consejos-viaje-seguridad/mejor-epoca-para-visitar-sri-lanka";

    // hreflang
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/consejos-viaje-seguridad/mejor-epoca-para-visitar-sri-lanka" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/travel-tips-safety/best-time-to-visit-sri-lanka" },
      { lang: "fr", url: "https://fr.srilanka-charter.com/information/conseils-voyage-securite/meilleure-periode-visiter-sri-lanka" },
      { lang: "de", url: "https://de.srilanka-charter.com/information/reisetipps-sicherheit/beste-reisezeit-sri-lanka" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/travel-tips-safety/best-time-to-visit-sri-lanka" },
    ];
    const addedLinks: HTMLLinkElement[] = [];
    hreflangs.forEach(({ lang, url }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
      addedLinks.push(link);
    });
    return () => {
      addedLinks.forEach((l) => l.remove());
    };
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
            headline: "Cuándo Visitar Sri Lanka: Guía del Clima Mes a Mes (2026)",
            datePublished: "2026-06-13",
            dateModified: "2026-06-13",
            author: { "@type": "Organization", name: "SLTCS" },
            publisher: {
              "@type": "Organization",
              name: "SLTCS",
              url: "https://es.srilanka-charter.com",
            },
            inLanguage: "es",
            url: "https://es.srilanka-charter.com/information/consejos-viaje-seguridad/mejor-epoca-para-visitar-sri-lanka",
            image: HERO_IMG,
            description:
              "Descubre cuándo es el mejor momento para visitar Sri Lanka. Guía completa del clima mes a mes, los dos sistemas de monzón, temporada alta y baja, playas, safaris y tierras altas del té.",
          }),
        }}
      />

      {/* NAV */}
      <ArticleNav />

      {/* HERO */}
      <div className="article-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <span className="article-category-badge">CONSEJOS DE VIAJE Y SEGURIDAD</span>
          <h1 className="article-hero-title">
            Cuándo Visitar Sri Lanka: Guía del Clima Mes a Mes
          </h1>
          <p className="article-hero-meta">13 de junio de 2026 · 10 min de lectura</p>
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
            <Link href="/information/consejos-viaje-seguridad">Consejos de Viaje y Seguridad</Link>
            <span>›</span>
            <span>Mejor Época para Visitar Sri Lanka</span>
          </nav>

          {/* Tags */}
          <div className="article-tags">
            <span className="article-tag">Sri Lanka</span>
            <span className="article-tag">Planificación de Viaje</span>
            <span className="article-tag">Clima</span>
            <span className="article-tag">Mejor Época para Visitar</span>
            <span className="article-tag">Monzón</span>
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
            Sri Lanka es uno de los pocos destinos de Asia donde la pregunta «¿cuándo debo ir?» no tiene una respuesta única — y eso es, en realidad, una buena noticia.
          </p>

          <p>
            Gracias a dos sistemas de monzón distintos que actúan en lados opuestos de la isla, Sri Lanka ofrece un clima excelente en algún lugar durante todos los meses del año. La clave está en saber qué costa y qué región priorizar según cuándo viajes.
          </p>

          <p>
            Esta guía desglosa el clima de Sri Lanka mes a mes, explica los dos sistemas de monzón y te ayuda a elegir el mejor momento para playas, safaris de vida silvestre, senderismo en las tierras altas y turismo cultural — tanto si planeas escapar del invierno como si buscas una aventura de verano.
          </p>


          {/* SECTION 1 */}
          <h2 id="dos-monzones">Los Dos Sistemas de Monzón de Sri Lanka</h2>

          <p>
            El clima de Sri Lanka está gobernado por dos sistemas de monzón que afectan a diferentes partes de la isla en distintas épocas del año. Comprender esto es la base para planificar cualquier viaje.
          </p>


          <h3 id="yala">El Monzón Yala (Suroeste): Mayo a Septiembre</h3>

          <p>
            El monzón Yala llega desde el suroeste y trae lluvias intensas a la <strong>costa oeste, la costa sur y las tierras altas</strong> — incluidas Colombo, Galle, Mirissa, Bentota, Ella y Nuwara Eliya. Esta es la temporada baja para estas regiones, con alta humedad y frecuentes aguaceros por la tarde.
          </p>

          <p>
            Sin embargo, el mismo monzón deja la <strong>costa este y el norte</strong> en gran medida secos y soleados. Trincomalee, Arugam Bay y Nilaveli disfrutan de su mejor clima durante estos meses, lo que los convierte en destinos ideales para una visita de mayo a septiembre.
          </p>


          <h3 id="maha">El Monzón Maha (Noreste): Octubre a Enero</h3>

          <p>
            El monzón Maha llega desde el noreste e invierte el patrón. Trae lluvia a la <strong>costa este y el norte</strong>, mientras que las <strong>costas oeste y sur entran en su temporada seca</strong>. A finales de noviembre, las playas de la costa oeste están en su mejor momento — cielos despejados, mares tranquilos y temperaturas cálidas.
          </p>

          <p>
            Octubre es un mes intermonsónico y puede traer lluvias cortas e intensas en toda la isla. A mediados de noviembre, las condiciones mejoran rápidamente, y de diciembre a marzo se considera ampliamente la temporada alta de Sri Lanka.
          </p>

          {/* Weather Chart Image */}
          <figure className="article-figure">
            <img
              src={WEATHER_CHART_IMG}
              alt="Tabla del clima de Sri Lanka mes a mes: costa oeste y sur vs costa este"
              className="article-photo"
            />
            <figcaption className="article-caption">
              Los dos sistemas de monzón de Sri Lanka significan que siempre hay un excelente clima disponible en algún lugar de la isla.
            </figcaption>
          </figure>


          {/* SECTION 2 */}
          <h2 id="temporada-alta">Temporada Alta: Diciembre a Marzo</h2>

          <p>
            El período de <strong>diciembre a marzo</strong> es la época más popular para visitar Sri Lanka, y con razón. Las costas oeste y sur disfrutan de su clima más seco y soleado. Las temperaturas en la costa promedian 28–32 °C, el mar está tranquilo e ideal para nadar, y el Triángulo Cultural — Sigiriya, Dambulla, Anuradhapura — está en su momento más accesible.
          </p>

          <p>
            Esta es también la mejor época para los safaris de vida silvestre en los Parques Nacionales de Yala y Udawalawe, ya que la menor vegetación facilita el avistamiento de animales y las condiciones secas mantienen los caminos transitables.
          </p>


          <h3 id="que-esperar">Qué Esperar en Temporada Alta</h3>

          <p>
            Espera tarifas de hotel más altas, carreteras más concurridas y más competencia por el alojamiento popular. Reservar con bastante antelación — especialmente para diciembre y enero — es muy recomendable.
          </p>

          <p>
            Un charter con conductor privado es especialmente valioso durante la temporada alta, ya que elimina el estrés de navegar por el transporte público abarrotado y te da la flexibilidad de salir temprano y evitar el calor del mediodía.
          </p>

          {/* Sigiriya Image */}
          <figure className="article-figure">
            <img
              src={SIGIRIYA_IMG}
              alt="La Fortaleza de la Roca de Sigiriya vista desde el aire en temporada seca"
              className="article-photo"
            />
            <figcaption className="article-caption">
              La Fortaleza de la Roca de Sigiriya se visita mejor entre diciembre y abril, cuando las condiciones secas hacen que la subida sea cómoda y las vistas estén en su punto más claro.
            </figcaption>
          </figure>


          {/* SECTION 3 */}
          <h2 id="temporada-media">Temporada Media: Abril y Octubre–Noviembre</h2>

          <p>
            Abril es un mes de transición. El monzón Yala aún no ha llegado, por lo que las costas oeste y sur todavía disfrutan de un clima razonable — aunque la humedad comienza a aumentar. Es un buen momento para visitar si quieres evitar las multitudes y los precios de la temporada alta mientras aún disfrutas de las playas de la costa sur y el Triángulo Cultural.
          </p>

          <p>
            Octubre y noviembre son igualmente transicionales. Octubre puede ser impredecible en toda la isla, pero a mediados de noviembre la costa oeste se está secando y el ambiente es notablemente más fresco. Los viajeros de temporada media a menudo encuentran la mejor combinación de buen clima, precios más bajos y menos multitudes.
          </p>


          {/* SECTION 4 */}
          <h2 id="costa-este">Costa Este: Mejor de Abril a Septiembre</h2>

          <p>
            Mientras el resto de Sri Lanka gestiona el monzón Yala, la <strong>costa este está en su mejor momento absoluto</strong>. Trincomalee ofrece algunas de las mejores playas de Asia durante junio y julio. Arugam Bay se convierte en un destino de surf de clase mundial desde mayo en adelante. Nilaveli y Passekudah son ideales para el snorkel y el buceo.
          </p>

          <p>
            La costa este sigue siendo menos desarrollada que el sur, lo que significa menos multitudes, precios más bajos y una experiencia más auténtica. Si viajas entre mayo y septiembre, incorporar la costa este a tu itinerario es muy recomendable.
          </p>

          {/* Elephant Gathering Image */}
          <figure className="article-figure">
            <img
              src={ELEPHANT_IMG}
              alt="La famosa Reunión de Elefantes en el Parque Nacional de Minneriya, de junio a septiembre"
              className="article-photo"
            />
            <figcaption className="article-caption">
              La famosa Reunión de Elefantes en el Parque Nacional de Minneriya tiene lugar de junio a septiembre — uno de los mayores espectáculos de vida silvestre de Asia.
            </figcaption>
          </figure>


          {/* SECTION 5 */}
          <h2 id="tierras-altas">Tierras Altas del Té: Todo el Año, Mejor en Enero–Marzo</h2>

          <p>
            Ella, Nuwara Eliya y las tierras altas del té se encuentran en altitud y tienen su propio microclima. Las temperaturas son más frescas durante todo el año (15–22 °C), y el paisaje es exuberante independientemente de la temporada. Sin embargo, las tierras altas son más agradables de <strong>enero a marzo</strong>, cuando las precipitaciones están en su punto más bajo y las vistas de las montañas están en su punto más claro.
          </p>

          <p>
            El famoso trayecto en tren de Kandy a Ella — una de las rutas ferroviarias más escénicas del mundo — se puede disfrutar en cualquier época del año, pero las vistas sobre las plantaciones de té son más dramáticas en la temporada seca, cuando la niebla se levanta a media mañana.
          </p>

          {/* Tea Highlands Image */}
          <figure className="article-figure">
            <img
              src={TEA_IMG}
              alt="Las tierras altas del té de Nuwara Eliya con plantaciones en terrazas bajo cielos despejados"
              className="article-photo"
            />
            <figcaption className="article-caption">
              Las tierras altas del té de Nuwara Eliya están en su momento más fotogénico de enero a marzo, cuando los cielos despejados revelan toda la extensión de las plantaciones en terrazas.
            </figcaption>
          </figure>


          {/* SECTION 6 */}
          <h2 id="resumen-mensual">Resumen Mes a Mes</h2>

          <p>
            La siguiente tabla resume las condiciones típicas para las principales regiones de Sri Lanka a lo largo del año. Utilízala como punto de partida para planificar tu itinerario.
          </p>

          <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.08)" }}>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.15)", fontWeight: 600 }}>Mes</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.15)", fontWeight: 600 }}>Costa Oeste y Sur</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.15)", fontWeight: 600 }}>Costa Este</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.15)", fontWeight: 600 }}>Tierras Altas</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.15)", fontWeight: 600 }}>Triángulo Cultural</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mes: "Enero", oeste: "Temporada Alta", este: "Monzón", altas: "Mejor", cultural: "Mejor" },
                  { mes: "Febrero", oeste: "Temporada Alta", este: "Monzón", altas: "Mejor", cultural: "Mejor" },
                  { mes: "Marzo", oeste: "Temporada Alta", este: "Mejorando", altas: "Mejor", cultural: "Mejor" },
                  { mes: "Abril", oeste: "Temporada Media", este: "Bueno", altas: "Bueno", cultural: "Bueno" },
                  { mes: "Mayo", oeste: "Monzón", este: "Temporada Alta", altas: "Monzón", cultural: "Bueno" },
                  { mes: "Junio", oeste: "Monzón", este: "Temporada Alta", altas: "Monzón", cultural: "Bueno" },
                  { mes: "Julio", oeste: "Monzón", este: "Temporada Alta", altas: "Monzón", cultural: "Bueno" },
                  { mes: "Agosto", oeste: "Monzón", este: "Temporada Alta", altas: "Monzón", cultural: "Bueno" },
                  { mes: "Septiembre", oeste: "Monzón", este: "Temporada Alta", altas: "Monzón", cultural: "Bueno" },
                  { mes: "Octubre", oeste: "Temporada Media", este: "Temporada Media", altas: "Temporada Media", cultural: "Temporada Media" },
                  { mes: "Noviembre", oeste: "Mejorando", este: "Monzón", altas: "Mejorando", cultural: "Mejorando" },
                  { mes: "Diciembre", oeste: "Temporada Alta", este: "Monzón", altas: "Bueno", cultural: "Mejor" },
                ].map((row, i) => {
                  const getBg = (val: string) => {
                    if (val === "Temporada Alta" || val === "Mejor") return "rgba(212,175,55,0.2)";
                    if (val === "Temporada Media" || val === "Bueno") return "rgba(180,180,180,0.15)";
                    if (val === "Mejorando") return "rgba(100,180,100,0.15)";
                    return "rgba(80,80,80,0.1)";
                  };
                  const getColor = (val: string) => {
                    if (val === "Temporada Alta" || val === "Mejor") return "#d4af37";
                    if (val === "Temporada Media" || val === "Bueno") return "#aaa";
                    if (val === "Mejorando") return "#6db56d";
                    return "#888";
                  };
                  return (
                    <tr key={row.mes} style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                      <td style={{ padding: "0.5rem 0.8rem", fontWeight: 600 }}>{row.mes}</td>
                      {[row.oeste, row.este, row.altas, row.cultural].map((val, j) => (
                        <td key={j} style={{ padding: "0.5rem 0.8rem", textAlign: "center", background: getBg(val), color: getColor(val), fontSize: "0.82rem", fontWeight: 500 }}>{val}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>


          {/* SECTION 7 */}
          <h2 id="conductor-privado">Por Qué un Conductor Privado Tiene Sentido en Cualquier Temporada</h2>

          <p>
            Una de las ventajas más prácticas de viajar por Sri Lanka con un conductor privado es la capacidad de adaptar tu itinerario al clima en tiempo real. Si una playa está experimentando lluvia inesperada, tu conductor puede sugerir un destino alternativo en el interior. Si una carretera de montaña está despejada y la luz es perfecta, puedes detenerte todo el tiempo que quieras.
          </p>

          <p>
            El transporte público en Sri Lanka — autobuses y trenes — sigue rutas y horarios fijos. Un charter privado te da la libertad de moverte entre la costa oeste, las tierras altas, el Triángulo Cultural y la costa este en una secuencia que tenga sentido geográfico y meteorológico para tus fechas de viaje.
          </p>

          <p>
            Los conductores de SLTCS tienen experiencia navegando por todas las regiones de la isla en todas las temporadas. Tanto si viajas en plena temporada alta como si exploras la costa este en julio, tu conductor conocerá las carreteras, las condiciones y las mejores alternativas si los planes necesitan cambiar.
          </p>

          {/* CTA */}
          <div className="article-cta-box">
            <div className="article-cta-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="article-cta-content">
              <div className="article-cta-title">Planifica tu Viaje Según el Mejor Clima</div>
              <p className="article-cta-text">
                Cuéntanos tus fechas de viaje y las regiones que prefieres, y te sugeriremos el itinerario ideal para la temporada. Consulta gratuita, sin compromiso.
              </p>
              <Link href="/contact" className="article-cta-button">
                Obtén una Sugerencia de Itinerario Gratuita
              </Link>
            </div>
          </div>


          {/* FAQ */}
          <h2>Preguntas Frecuentes</h2>

          <details className="article-faq-item">
            <summary className="article-faq-question">
              ¿Cuál es el mejor mes para visitar Sri Lanka?
            </summary>
            <div className="article-faq-answer">
              <p>
                Enero y febrero se consideran ampliamente los mejores meses en general. Las costas oeste y sur están en plena temporada seca, el Triángulo Cultural está en su momento más accesible y las tierras altas están despejadas y frescas. Si solo puedes visitar una vez, apunta a enero o febrero.
              </p>
            </div>
          </details>

          <details className="article-faq-item">
            <summary className="article-faq-question">
              ¿Vale la pena visitar Sri Lanka durante el monzón?
            </summary>
            <div className="article-faq-answer">
              <p>
                Sí, con la planificación adecuada. El monzón Yala (mayo–septiembre) afecta a la costa oeste y sur, pero deja la costa este en condiciones excelentes. El monzón Maha (octubre–enero) hace lo contrario. Viajar durante el monzón con un conductor privado te permite adaptarte al clima en tiempo real y visitar regiones que no se ven afectadas.
              </p>
            </div>
          </details>

          <details className="article-faq-item">
            <summary className="article-faq-question">
              ¿Llueve todos los días durante el monzón?
            </summary>
            <div className="article-faq-answer">
              <p>
                No. Las lluvias monzónicas suelen ser aguaceros intensos y breves, a menudo por la tarde, seguidos de períodos soleados. Las mañanas suelen ser despejadas. Con un conductor privado, puedes planificar las actividades al aire libre por la mañana y los traslados en coche por la tarde.
              </p>
            </div>
          </details>

          <details className="article-faq-item">
            <summary className="article-faq-question">
              ¿Cuándo es el mejor momento para ver elefantes en Sri Lanka?
            </summary>
            <div className="article-faq-answer">
              <p>
                La famosa Reunión de Elefantes en el Parque Nacional de Minneriya tiene lugar de junio a septiembre, cuando cientos de elefantes se congregan alrededor del embalse. Para los Parques Nacionales de Yala y Udawalawe, la temporada seca (diciembre–marzo) ofrece las mejores condiciones de avistamiento.
              </p>
            </div>
          </details>

          <details className="article-faq-item">
            <summary className="article-faq-question">
              ¿Cuál es el mejor momento para visitar el Triángulo Cultural (Sigiriya, Anuradhapura)?
            </summary>
            <div className="article-faq-answer">
              <p>
                De diciembre a abril es el período óptimo. Las condiciones secas hacen que la subida a Sigiriya sea cómoda, las vistas son más claras y las carreteras están en mejores condiciones. Sin embargo, el Triángulo Cultural es visitable durante todo el año, ya que recibe menos precipitaciones que las costas.
              </p>
            </div>
          </details>

          <details className="article-faq-item">
            <summary className="article-faq-question">
              ¿Es diciembre un buen momento para visitar Sri Lanka?
            </summary>
            <div className="article-faq-answer">
              <p>
                Sí, diciembre es excelente para la costa oeste y sur, el Triángulo Cultural y las tierras altas. Es el comienzo de la temporada alta, con clima seco y soleado. Ten en cuenta que es también la época más concurrida, especialmente alrededor de Navidad y Año Nuevo, por lo que se recomienda reservar con antelación.
              </p>
            </div>
          </details>


          {/* RELATED */}
          <div className="article-related">
            <div className="article-related-title">Artículos Relacionados</div>
            <div className="article-related-list">
              {RELATED.map((r) => (
                <Link key={r.href} href={r.href} className="article-related-item">
                  <div className="article-related-item-title">{r.title}</div>
                  <div className="article-related-item-date">{r.date}</div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="article-sidebar">
          <div className="article-sidebar-cta">
            <p className="article-sidebar-cta-text">
              ¿Listo para planificar tu viaje a Sri Lanka?
            </p>
            <p className="article-sidebar-cta-sub">
              Obtén una cotización gratuita y sin compromiso.
            </p>
            <Link href="/contact" className="article-sidebar-cta-btn">
              CONSULTA GRATUITA
            </Link>
          </div>

          <div className="article-sidebar-nav">
            <Link href="/information/consejos-viaje-seguridad" className="article-sidebar-back">
              ← Consejos de Viaje y Seguridad
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
