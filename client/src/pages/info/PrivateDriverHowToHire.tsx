import { useEffect, useState } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article1_hero_driver_beach_van_18d6666e.webp";
const VEHICLE_IMG = "/manus-storage/vehicle_van_70a807f8_233a386f.png";

const RELATED = [
  {
    title: "Alquiler de Coche con Conductor en Sri Lanka: Guía Completa para Primeras Visitas",
    date: "4 Jun 2026",
    href: "/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa",
  },
  {
    title: "Chófer Guía en Sri Lanka: Conductor vs Guía Turístico Explicado",
    date: "4 Jun 2026",
    href: "/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico",
  },
];

const TOC = [
  { id: "que-es", label: '¿Qué Significa "Conductor Privado" en Sri Lanka?' },
  { id: "incluido", label: "¿Qué Incluye Normalmente la Tarifa Diaria?" },
  { id: "verificar", label: "Cómo Verificar que un Conductor es Legítimo" },
  { id: "vehiculo", label: "¿Qué Tipo de Vehículo Elegir?" },
  { id: "costos", label: "Cómo Comparar Costos sin Ser Engañado" },
  { id: "preguntas", label: "Preguntas que Hacer Antes de Reservar" },
  { id: "traslados", label: "Traslados al Aeropuerto vs Charters Multi-Día" },
  { id: "resumen", label: "Resumen: Qué Hace a un Buen Servicio de Conductor Privado" },
];

export default function PrivateDriverHowToHire() {
  useEffect(() => {
    document.title =
      "Conductor Privado en Sri Lanka: Cómo Contratar un Conductor Seguro y Fiable (2026) | SLTCS";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Guía completa para contratar un conductor privado en Sri Lanka. Aprende a verificar licencias SLTDA, qué incluye la tarifa diaria, qué preguntas hacer y cómo evitar errores comunes."
      );
    // canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka";
    // hreflang
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/private-driver-guide/sri-lanka-private-driver-how-to-hire" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/private-driver-guide/sri-lanka-private-driver-how-to-hire" },
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
              "Conductor Privado en Sri Lanka: Cómo Contratar un Conductor Seguro y Fiable (2026)",
            datePublished: "2026-06-04",
            author: { "@type": "Organization", name: "SLTCS" },
            publisher: {
              "@type": "Organization",
              name: "SLTCS",
              url: "https://es.srilanka-charter.com",
            },
            inLanguage: "es",
            url: "https://es.srilanka-charter.com/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka",
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
            Conductor Privado en Sri Lanka: Cómo Contratar un Conductor Seguro y Fiable para tu Viaje
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
            <span>Conductor Privado en Sri Lanka: Cómo Contratar</span>
          </nav>

          {/* Tags */}
          <div className="article-tags">
            <span className="article-tag">Conductor Privado</span>
            <span className="article-tag">Sri Lanka</span>
            <span className="article-tag">Alquiler de Coche</span>
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
            Sri Lanka es uno de los destinos más gratificantes de Asia: templos antiguos, tierras altas de té brumosas, parques nacionales llenos de leopardos y playas vírgenes, todo en una sola isla. Pero desplazarse entre estos lugares es donde la mayoría de los viajeros encuentran su primer obstáculo.
          </p>

          <p>
            Los autobuses son lentos y concurridos, los trenes solo cubren algunas rutas, y conducir por carreteras de montaña estrechas es realmente complicado. Contratar un conductor privado es, para la mayoría de los visitantes, la mejor decisión que toman antes de llegar.
          </p>

          <p>
            Esta guía explica exactamente en qué consiste un servicio de conductor privado en Sri Lanka, cómo verificar que tu conductor es legítimo, qué preguntas hacer antes de reservar y cómo evitar los errores comunes que sorprenden a los visitantes por primera vez.
          </p>

          {/* SECTION 1 */}
          <h2 id="que-es">¿Qué Significa "Conductor Privado" en Sri Lanka?</h2>

          <p>
            El término se usa de forma imprecisa, por lo que vale la pena ser exactos. Un <strong>conductor privado</strong> —a veces llamado chófer o conductor de charter— significa un conductor dedicado y un vehículo asignado exclusivamente a tu grupo durante toda la duración de tu viaje.
          </p>

          <p>
            No compartes el vehículo con otros pasajeros. Tú estableces el itinerario, el ritmo y las paradas.
          </p>

          <p>
            Esto es fundamentalmente diferente de un taxi, que opera sobre una base medida por viaje, o de un tour en grupo, donde sigues un horario fijo con desconocidos.
          </p>

          <p>
            Con un conductor privado, si quieres pasar una hora extra en la Fortaleza de la Roca de Sigiriya o hacer una parada no planificada en un jardín de especias al borde de la carretera, simplemente lo pides.
          </p>

          {/* SECTION 2 */}
          <h2 id="incluido">¿Qué Incluye Normalmente la Tarifa Diaria?</h2>

          <p>
            Un servicio de conductor privado de buena reputación en Sri Lanka incluirá lo siguiente en la tarifa diaria cotizada:
          </p>

          <ul className="article-list">
            <li>Los honorarios del conductor y las horas de trabajo (normalmente de 08:00 a 20:00, con flexibilidad)</li>
            <li>Costos de combustible para el itinerario acordado</li>
            <li>Mantenimiento del vehículo y seguro</li>
            <li>Tarifas de aparcamiento en sitios turísticos</li>
            <li>Peajes de autopista</li>
          </ul>

          <p>
            Los elementos que <strong>no están incluidos</strong> —y que debes aclarar de antemano— típicamente incluyen las tarifas de entrada a parques nacionales y sitios patrimoniales, el alojamiento del conductor en viajes de varios días (generalmente una pensión modesta cerca de la tuya) y las comidas del conductor.
          </p>

          <p>
            Estas son prácticas estándar en toda la industria y no deberían ser una sorpresa si se divulgan claramente al momento de la reserva.
          </p>

          {/* SECTION 3 */}
          <h2 id="verificar">Cómo Verificar que un Conductor es Legítimo</h2>

          <p>
            El sector turístico de Sri Lanka está regulado por la <strong>Autoridad de Desarrollo del Turismo de Sri Lanka (SLTDA)</strong>. Los conductores turísticos con licencia poseen una licencia de conductor turístico emitida por el gobierno, que es diferente de una licencia de conducir ordinaria y requiere una verificación de antecedentes, una prueba de dominio del inglés y conocimiento de los destinos turísticos.
          </p>

          <blockquote className="article-blockquote">
            Una licencia de conductor turístico SLTDA certificada por el gobierno es la credencial clave a verificar antes de reservar tu conductor privado en Sri Lanka.
          </blockquote>

          <p>Al evaluar un conductor u operador, busca lo siguiente:</p>

          <div className="article-table-wrap">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Qué Verificar</th>
                  <th>Por Qué Importa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Licencia de conductor turístico SLTDA</td>
                  <td>Confirma que el conductor ha pasado la verificación gubernamental y está legalmente autorizado para transportar turistas</td>
                </tr>
                <tr>
                  <td>Capacidad de comunicación en inglés</td>
                  <td>Esencial para navegar cambios, emergencias y recomendaciones locales</td>
                </tr>
                <tr>
                  <td>Registro del vehículo y seguro</td>
                  <td>Asegura que el vehículo esté en condiciones de circular y cubierto por responsabilidad de pasajeros</td>
                </tr>
                <tr>
                  <td>Reseñas verificadas de huéspedes</td>
                  <td>Busca reseñas que mencionen destinos específicos y nombres de conductores, no elogios genéricos</td>
                </tr>
                <tr>
                  <td>Presupuesto escrito claro</td>
                  <td>Un operador profesional proporcionará un desglose escrito de lo que está y no está incluido</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SECTION 4 */}
          <h2 id="vehiculo">¿Qué Tipo de Vehículo Elegir?</h2>

          <p>
            El vehículo adecuado depende del tamaño de tu grupo y las prioridades de comodidad. Las tres opciones más comunes en Sri Lanka son:
          </p>

          <div className="article-img-wrap">
            <img
              src={VEHICLE_IMG}
              alt="Furgoneta KDH Hi-Ace para grupos de 3 a 8 pasajeros en Sri Lanka"
              className="article-img"
            />
            <p className="article-img-caption">
              Furgoneta KDH Hi-Ace (grupos de 3–8), sedán compacto japonés (solo/pareja), MPV de lujo (comodidad premium). Todos los vehículos tienen aire acondicionado y seguro.
            </p>
          </div>

          <ul className="article-list">
            <li>
              <strong>Sedán compacto japonés</strong> — Ideal para viajeros solos o parejas. Eficiente en combustible y cómodo para distancias de hasta 200 km por día. Aire acondicionado.
            </li>
            <li>
              <strong>Furgoneta KDH Hi-Ace</strong> — La opción estándar para grupos de 3 a 8 pasajeros. Amplio espacio para equipaje, posición de asiento elevada para las vistas y bien adaptada a las carreteras de montaña. Aire acondicionado.
            </li>
            <li>
              <strong>MPV de lujo japonés</strong> — Opción premium para quienes desean asientos tipo capitán, mayor espacio para las piernas y un viaje más silencioso. Adecuado para familias con niños pequeños o viajeros mayores que priorizan la comodidad.
            </li>
          </ul>

          <p>
            Para más detalles sobre las opciones de vehículos y lo que incluye cada uno, consulta nuestra{" "}
            <a href="/#vehiculos" className="article-link">
              página de Vehículos
            </a>
            .
          </p>

          {/* SECTION 5 */}
          <h2 id="costos">Cómo Comparar Costos sin Ser Engañado</h2>

          <p>
            Las tarifas diarias para un conductor privado en Sri Lanka oscilan típicamente entre <strong>USD 60 y USD 120</strong> dependiendo del tipo de vehículo, la distancia y la temporada. Si recibes un presupuesto significativamente por debajo de este rango, vale la pena preguntar qué se ha excluido.
          </p>

          <p>
            Las omisiones comunes en los presupuestos bajos incluyen recargos de combustible para días de larga distancia, alojamiento del conductor en viajes de varias noches y peajes de autopista.
          </p>

          <p>
            Los operadores más transparentes proporcionan una tarifa diaria fija con una lista escrita clara de inclusiones y exclusiones. Esto protege a ambas partes y evita las conversaciones incómodas que surgen cuando aparecen cargos inesperados al final de un viaje.
          </p>

          <p>
            Para un desglose completo de precios, visita nuestra{" "}
            <a href="/price" className="article-link">
              sección de Costos y Precios
            </a>
            .
          </p>

          {/* SECTION 6 */}
          <h2 id="preguntas">Preguntas que Hacer Antes de Reservar</h2>

          <p>Antes de confirmar cualquier reserva, considera hacer las siguientes preguntas:</p>

          <ol className="article-list article-list-ol">
            <li>¿El conductor tiene licencia SLTDA?</li>
            <li>¿El vehículo tiene aire acondicionado y seguro para pasajeros turistas?</li>
            <li>¿Cuál es la tarifa diaria y qué incluye?</li>
            <li>¿El alojamiento y las comidas del conductor están incluidos o son adicionales?</li>
            <li>¿Cuál es la política de cancelación?</li>
            <li>¿Se puede ajustar el itinerario después de la salida?</li>
            <li>¿Hay un número de WhatsApp o contacto directo con el conductor?</li>
          </ol>

          <p>
            Un operador profesional responderá a todas estas preguntas sin dudarlo. Las respuestas vagas o evasivas a cualquiera de estas preguntas son una señal de advertencia.
          </p>

          {/* SECTION 7 */}
          <h2 id="traslados">Traslados al Aeropuerto vs Charters Multi-Día</h2>

          <p>
            Los servicios de conductor privado en Sri Lanka están disponibles tanto para traslados de un solo día como para charters extendidos de varios días. Para traslados al aeropuerto —por ejemplo, desde el Aeropuerto Internacional de Bandaranaike (CMB) a Colombo, Negombo, Kandy o Sigiriya— un conductor privado proporciona una alternativa de precio fijo y sin estrés a los taxis con taxímetro o los shuttles compartidos.
          </p>

          <p>
            Esto es particularmente valioso para llegadas nocturnas o familias con equipaje.
          </p>

          <p>
            Para itinerarios de varios días, un conductor privado se convierte en tu guía, navegador y contacto local en uno. El conductor normalmente sabrá qué carreteras evitar durante la temporada de monzones, qué miradores valen la pena el desvío y qué restaurantes locales son genuinamente buenos en lugar de tener precios turísticos.
          </p>

          <p>
            Consulta nuestros{" "}
            <a href="/#itinerarios" className="article-link">
              itinerarios modelo
            </a>{" "}
            para ver rutas de ejemplo.
          </p>

          {/* SECTION 8 */}
          <h2 id="resumen">Resumen: Qué Hace a un Buen Servicio de Conductor Privado</h2>

          <div className="article-table-wrap">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Qué Buscar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Licencia</td>
                  <td>Licencia de conductor turístico SLTDA certificada por el gobierno</td>
                </tr>
                <tr>
                  <td>Idioma</td>
                  <td>Comunicación fluida en inglés</td>
                </tr>
                <tr>
                  <td>Transparencia</td>
                  <td>Presupuesto escrito con inclusiones y exclusiones claras</td>
                </tr>
                <tr>
                  <td>Flexibilidad</td>
                  <td>Itinerario ajustable durante el viaje</td>
                </tr>
                <tr>
                  <td>Estado del vehículo</td>
                  <td>Aire acondicionado, asegurado y bien mantenido</td>
                </tr>
                <tr>
                  <td>Reseñas</td>
                  <td>Comentarios verificados de huéspedes que mencionan conductores y destinos específicos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            ¿Listo para planificar tu viaje a Sri Lanka? Envíanos tus fechas de viaje, el tamaño de tu grupo y los destinos que deseas visitar — te proporcionaremos un presupuesto gratuito sin compromiso con un itinerario sugerido.
          </p>

          <div className="article-cta-wrap">
            <a href="/#contacto" className="article-cta-btn">
              Obtener Presupuesto Gratuito
            </a>
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
