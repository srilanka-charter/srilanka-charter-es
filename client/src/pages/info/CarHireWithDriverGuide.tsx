import { useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article2_hero_car_hire_passengers_f0671538.webp";
const VEHICLE_IMG = "/manus-storage/vehicle_sedan_b6b21042_991971a0.png";

const RELATED = [
  {
    title: "Conductor Privado en Sri Lanka: Cómo Contratar un Conductor Seguro y Fiable para tu Viaje",
    date: "4 Jun 2026",
    href: "/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka",
  },
  {
    title: "Chófer Guía en Sri Lanka: Conductor vs Guía Turístico Explicado",
    date: "4 Jun 2026",
    href: "/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico",
  },
];

const TOC = [
  { id: "opcion1", label: "Opción 1: Alquiler de Coche sin Conductor en Sri Lanka" },
  { id: "opcion2", label: "Opción 2: Taxis y Aplicaciones de Transporte" },
  { id: "opcion3", label: "Opción 3: Trenes y Autobuses" },
  { id: "opcion4", label: "Opción 4: Alquiler de Coche con Conductor Privado (Charter)" },
  { id: "comparacion", label: "Comparación de Opciones: Referencia Rápida" },
  { id: "vehiculo", label: "¿Qué Vehículo Elegir?" },
  { id: "itinerario", label: "Planificación de un Itinerario Multi-Día con Conductor Privado" },
  { id: "que-buscar", label: "Qué Buscar al Reservar un Alquiler con Conductor" },
  { id: "costos", label: "¿Cuánto Cuesta el Alquiler de Coche con Conductor en Sri Lanka?" },
];

export default function CarHireWithDriverGuide() {
  useEffect(() => {
    document.title =
      "Alquiler de Coche con Conductor en Sri Lanka: Guía Completa para Primeras Visitas (2026) | SLTCS";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Compara todas las opciones de transporte en Sri Lanka: alquiler sin conductor, taxis, trenes y charter con conductor privado. Guía completa para primeras visitas con precios y consejos prácticos."
      );
    // canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa";
    // hreflang
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/private-driver-guide/sri-lanka-car-hire-with-driver-complete-guide" },
      { lang: "fr", url: "https://fr.srilanka-charter.com/information/guide-chauffeur-prive/sri-lanka-location-voiture-avec-chauffeur-guide-complet" },
      { lang: "de", url: "https://de.srilanka-charter.com/information/privater-fahrer-ratgeber/sri-lanka-mietwagen-mit-fahrer-vollstaendiger-ratgeber" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/private-driver-guide/sri-lanka-car-hire-with-driver-complete-guide" },
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
              "Alquiler de Coche con Conductor en Sri Lanka: Guía Completa para Primeras Visitas (2026)",
            datePublished: "2026-06-04",
            author: { "@type": "Organization", name: "SLTCS" },
            publisher: {
              "@type": "Organization",
              name: "SLTCS",
              url: "https://es.srilanka-charter.com",
            },
            inLanguage: "es",
            url: "https://es.srilanka-charter.com/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa",
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
            Alquiler de Coche con Conductor en Sri Lanka: Guía Completa para Primeras Visitas
          </h1>
          <p className="article-hero-meta">4 de junio de 2026 · 10 min de lectura</p>
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
            <span>Alquiler de Coche con Conductor: Guía Completa</span>
          </nav>

          {/* Tags */}
          <div className="article-tags">
            <span className="article-tag">Alquiler de Coche</span>
            <span className="article-tag">Conductor Privado</span>
            <span className="article-tag">Sri Lanka</span>
            <span className="article-tag">Primeras Visitas</span>
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
            Para los visitantes por primera vez a Sri Lanka, una pregunta surge pronto en el proceso de planificación: ¿cómo me muevo realmente? La isla es compacta en un mapa pero sorprendentemente extensa en la práctica — Colombo a Kandy toma aproximadamente tres horas, Kandy a Sigiriya otras dos, y Ella al Parque Nacional de Yala otras dos horas y media.
          </p>

          <p>
            Entender tus opciones de transporte antes de llegar te ahorrará tanto dinero como frustración.
          </p>

          <p>
            Esta guía compara cada opción de transporte realista para viajeros independientes — alquiler de coche sin conductor, taxis, trenes, autobuses y charters con conductor privado — y explica para qué situaciones es adecuada cada una.
          </p>

          {/* SECTION 1 */}
          <h2 id="opcion1">Opción 1: Alquiler de Coche sin Conductor en Sri Lanka</h2>

          <p>
            El alquiler de coche sin conductor está disponible en Sri Lanka, pero conlleva advertencias significativas que la mayoría de los visitantes por primera vez subestiman. Sri Lanka conduce por la izquierda, pero la señalización vial, la señalización y la disciplina de carril varían considerablemente fuera de Colombo.
          </p>

          <p>
            Las carreteras de montaña en el interior son estrechas, sinuosas y a menudo compartidas con tuk-tuks, autobuses y peatones. Conducir de noche es particularmente difícil debido a las carreteras sin iluminación y los animales que cruzan.
          </p>

          <p>
            Además, los permisos de conducir extranjeros deben ser respaldados por la Asociación Automovilística de Ceilán antes de ser válidos para conducir en Sri Lanka — un proceso que requiere una visita a su oficina en Colombo y una tarifa.
          </p>

          <p>
            Los Permisos Internacionales de Conducción no son suficientes por sí solos.
          </p>

          <p>
            Para los viajeros que tienen experiencia con el tráfico por la izquierda y planean quedarse principalmente en zonas planas y urbanas, conducir es factible. Para la mayoría de los visitantes por primera vez que cubren múltiples regiones, añade estrés en lugar de libertad.
          </p>

          {/* SECTION 2 */}
          <h2 id="opcion2">Opción 2: Taxis y Aplicaciones de Transporte</h2>

          <p>
            PickMe y Uber operan en Colombo y algunas ciudades más grandes. Para viajes urbanos cortos, son convenientes y tienen precios razonables.
          </p>

          <p>
            Sin embargo, no están diseñados para itinerarios de varios días o viajes entre ciudades, y la disponibilidad fuera de Colombo, Kandy y Galle es poco fiable. Negociar un taxi con taxímetro para una excursión de día completo es posible pero requiere conocimiento local de las tarifas justas y puede llevar a desacuerdos al final del viaje.
          </p>

          {/* SECTION 3 */}
          <h2 id="opcion3">Opción 3: Trenes y Autobuses</h2>

          <p>
            La red ferroviaria de Sri Lanka es pintoresca y económica, y la ruta Kandy–Ella en particular es ampliamente considerada como uno de los viajes en tren más hermosos de Asia. Sin embargo, la red es limitada: no conecta directamente Sigiriya, Yala, Mirissa o Trincomalee.
          </p>

          <p>
            Los autobuses cubren más terreno pero son lentos, concurridos y no tienen aire acondicionado en la mayoría de las rutas. Para los viajeros con equipaje, niños pequeños o horarios ajustados, el transporte público rara vez es la opción principal más práctica.
          </p>

          {/* SECTION 4 */}
          <h2 id="opcion4">Opción 4: Alquiler de Coche con Conductor Privado (Charter)</h2>

          <p>
            Contratar un coche con un conductor privado dedicado —a menudo llamado servicio de charter o chófer— es la opción que la mayoría de los viajeros experimentados en Sri Lanka recomiendan a los principiantes.
          </p>

          <p>
            Obtienes la flexibilidad de un vehículo privado sin el estrés de conducir tú mismo, y ganas un guía local que puede navegar, recomendar y adaptarse a tus preferencias en tiempo real.
          </p>

          <div className="article-img-wrap">
            <img
              src={VEHICLE_IMG}
              alt="Sedán compacto japonés para alquiler con conductor en Sri Lanka"
              className="article-img"
            />
            <p className="article-img-caption">
              Un charter de conductor privado significa un vehículo, un conductor y un itinerario completamente flexible — exclusivamente para tu grupo.
            </p>
          </div>

          <p>Un charter típico de conductor privado en Sri Lanka incluye:</p>

          <ul className="article-list">
            <li>Un conductor dedicado durante toda la duración de tu reserva</li>
            <li>Un vehículo con aire acondicionado y seguro adecuado al tamaño de tu grupo</li>
            <li>Combustible, aparcamiento y peajes de autopista</li>
            <li>Flexibilidad para ajustar tu itinerario cada día</li>
            <li>Comunicación en inglés durante todo el viaje</li>
          </ul>

          {/* SECTION 5 */}
          <h2 id="comparacion">Comparación de Opciones: Referencia Rápida</h2>

          <div className="article-table-wrap">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Opción de Transporte</th>
                  <th>Mejor Para</th>
                  <th>Limitaciones</th>
                  <th>Costo Típico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alquiler sin conductor</td>
                  <td>Conductores experimentados en tráfico por la izquierda, zonas urbanas</td>
                  <td>Requiere respaldo de licencia, carreteras de montaña difíciles</td>
                  <td>USD 30–60/día (solo coche)</td>
                </tr>
                <tr>
                  <td>Taxi / app de transporte</td>
                  <td>Viajes urbanos cortos en Colombo</td>
                  <td>Limitado fuera de ciudades, no apto para uso multi-día</td>
                  <td>Con taxímetro / negociado</td>
                </tr>
                <tr>
                  <td>Tren</td>
                  <td>Rutas panorámicas (Kandy–Ella)</td>
                  <td>Red limitada, sin comodidad para equipaje, horario fijo</td>
                  <td>USD 2–10/viaje</td>
                </tr>
                <tr>
                  <td>Autobús</td>
                  <td>Viajeros con presupuesto ajustado, trayectos cortos</td>
                  <td>Lento, concurrido, sin aire acondicionado en la mayoría de rutas</td>
                  <td>USD 1–5/viaje</td>
                </tr>
                <tr>
                  <td><strong>Charter con conductor privado</strong></td>
                  <td><strong>La mayoría de primeras visitas, familias, grupos</strong></td>
                  <td><strong>Mayor costo diario que el transporte público</strong></td>
                  <td><strong>USD 60–120/día todo incluido</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SECTION 6 */}
          <h2 id="vehiculo">¿Qué Vehículo Elegir?</h2>

          <p>
            El vehículo adecuado depende del tamaño de tu grupo y los requisitos de comodidad. Las tres opciones más comunes son:
          </p>

          <ul className="article-list">
            <li>
              <strong>Sedán compacto japonés</strong> — Adecuado para viajeros solos o parejas. Eficiente en combustible y cómodo para distancias diarias de hasta 200 km.
            </li>
            <li>
              <strong>Furgoneta KDH Hi-Ace</strong> — La opción estándar para grupos de 3 a 8. Posición de asiento elevada, amplio espacio para equipaje y bien adaptada a todos los tipos de carretera.
            </li>
            <li>
              <strong>MPV de lujo japonés</strong> — Opción premium con asientos tipo capitán y mayor espacio para las piernas. Ideal para familias con niños pequeños o viajeros mayores.
            </li>
          </ul>

          <p>
            Para un desglose completo de las opciones de vehículos, visita nuestra{" "}
            <a href="/#vehiculos" className="article-link">
              página de Vehículos
            </a>
            .
          </p>

          {/* SECTION 7 */}
          <h2 id="itinerario">Planificación de un Itinerario Multi-Día con Conductor Privado</h2>

          <p>
            Una de las mayores ventajas de un charter de conductor privado es la capacidad de diseñar tu propia ruta. Los destinos más populares de Sri Lanka — Sigiriya, Kandy, Ella, Yala, Galle y Mirissa — están distribuidos por toda la isla.
          </p>

          <p>
            La forma más eficiente de cubrirlos es por carretera con un vehículo dedicado.
          </p>

          <p>
            Un itinerario típico de 7 días con un conductor privado podría verse así:
          </p>

          <ul className="article-list">
            <li><strong>Día 1:</strong> Llegada al aeropuerto → Negombo o Colombo (traslado desde el aeropuerto)</li>
            <li><strong>Día 2:</strong> Colombo → Sigiriya (vía el Templo de la Cueva de Dambulla)</li>
            <li><strong>Día 3:</strong> Fortaleza de la Roca de Sigiriya → Ciudad antigua de Polonnaruwa</li>
            <li><strong>Día 4:</strong> Sigiriya → Kandy (Templo del Diente, Jardín Botánico de Peradeniya)</li>
            <li><strong>Día 5:</strong> Kandy → Ella (vía el país del té de Nuwara Eliya)</li>
            <li><strong>Día 6:</strong> Ella → Parque Nacional de Yala (safari matutino)</li>
            <li><strong>Día 7:</strong> Yala → Fuerte de Galle → Colombo o aeropuerto</li>
          </ul>

          <p>
            Consulta nuestros{" "}
            <a href="/#itinerarios" className="article-link">
              Itinerarios Modelo
            </a>{" "}
            para más rutas sugeridas, incluyendo opciones de 5 días, 10 días y el Triángulo Cultural.
          </p>

          {/* SECTION 8 */}
          <h2 id="que-buscar">Qué Buscar al Reservar un Alquiler con Conductor</h2>

          <p>
            No todos los servicios de conductor privado son iguales. Al comparar operadores, prioriza lo siguiente:
          </p>

          <ul className="article-list">
            <li>
              <strong>Conductor certificado por la SLTDA</strong> — La Autoridad de Desarrollo del Turismo de Sri Lanka emite licencias de conductor turístico a conductores que han pasado verificaciones de antecedentes y pruebas de dominio del inglés. Confirma siempre esta credencial.
            </li>
            <li>
              <strong>Presupuesto escrito con inclusiones listadas</strong> — Un operador profesional proporcionará un desglose claro de lo que cubre la tarifa diaria.
            </li>
            <li>
              <strong>Reseñas verificadas de huéspedes</strong> — Busca reseñas que mencionen nombres de conductores específicos, destinos y detalles del viaje — no valoraciones genéricas de cinco estrellas.
            </li>
            <li>
              <strong>Contacto directo con el conductor</strong> — Poder comunicarse directamente con tu conductor a través de WhatsApp antes y durante el viaje es señal de un servicio bien organizado.
            </li>
          </ul>

          {/* SECTION 9 */}
          <h2 id="costos">¿Cuánto Cuesta el Alquiler de Coche con Conductor en Sri Lanka?</h2>

          <p>
            Las tarifas diarias para un charter de conductor privado en Sri Lanka oscilan típicamente entre <strong>USD 60 y USD 120</strong>, dependiendo del tipo de vehículo, la distancia diaria y la temporada. Esta tarifa todo incluido cubre el conductor, el combustible, el aparcamiento y los peajes.
          </p>

          <p>
            No incluye las tarifas de entrada a parques nacionales o sitios patrimoniales, ni el alojamiento del conductor en viajes de varias noches.
          </p>

          <p>
            Para un desglose transparente de nuestras tarifas por tipo de vehículo y duración del viaje, visita nuestra{" "}
            <a href="/price" className="article-link">
              sección de Precios
            </a>
            .
          </p>

          <p>
            ¿Listo para planificar tu itinerario en Sri Lanka? Envíanos tus fechas de viaje, el tamaño de tu grupo y los destinos que deseas visitar — te proporcionaremos un presupuesto gratuito sin compromiso con una ruta sugerida.
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
