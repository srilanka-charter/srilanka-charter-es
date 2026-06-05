import { useEffect, useState } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article5_hero_family_group_van_f0b07741.webp";

const TOC = [
  { id: "por-que-furgoneta", label: "Por Qué una Furgoneta Privada es la Mejor Opción" },
  { id: "cuantas-personas", label: "¿Cuántas Personas Caben en una Furgoneta?" },
  { id: "tipos-furgoneta", label: "Tipos de Furgoneta Disponibles" },
  { id: "ventajas-grupos", label: "Ventajas Específicas para Familias y Grupos" },
  { id: "elegir-plan", label: "Cómo Elegir el Plan Correcto" },
  { id: "opiniones", label: "Lo Que Dicen Familias y Grupos" },
  { id: "consejos-practicos", label: "Consejos Prácticos para Familias y Grupos" },
  { id: "como-reservar", label: "Cómo Reservar una Furgoneta para tu Grupo" },
];

export default function VanHireFamiliesGroups() {
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    document.title = "Alquiler de Furgoneta con Conductor en Sri Lanka: Familias y Grupos Pequeños | SLTCS";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Guía completa para alquilar una furgoneta con conductor en Sri Lanka para familias y grupos pequeños. Tipos de vehículo, planes y consejos prácticos 2026.");
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://es.srilanka-charter.com/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos";
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/family-group-travel/van-hire-driver-sri-lanka-families-small-groups" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/family-group-travel/van-hire-driver-sri-lanka-families-small-groups" },
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
          <span className="article-category-badge">VIAJES EN FAMILIA Y GRUPOS</span>
          <h1 className="article-hero-title">
            Alquiler de Furgoneta con Conductor en Sri Lanka: La Guía para Familias y Grupos Pequeños
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
        <Link href="/information">Información</Link>
        <span>›</span>
        <Link href="/information/viajes-familia-grupos">Viajes en Familia y Grupos</Link>
        <span>›</span>
        <span>Alquiler de Furgoneta con Conductor para Familias y Grupos</span>
      </div>

      {/* Tags */}
      <div className="article-tags">
        {["alquiler furgoneta sri lanka","viaje familia sri lanka","grupos pequeños sri lanka","conductor privado familia","furgoneta con conductor"].map(tag => (
          <span key={tag} className="article-tag">{tag}</span>
        ))}
      </div>

      {/* Layout */}
      <div className="article-layout">
        <main className="article-main">
          <p className="article-lead">
            Para familias y grupos pequeños, un charter de furgoneta privada con conductor es la forma más práctica, cómoda y rentable de explorar Sri Lanka. Esta guía explica por qué — y cómo elegir el vehículo y el plan correctos para tu grupo.
          </p>

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

          <h2 id="por-que-furgoneta">Por Qué una Furgoneta Privada es la Mejor Opción para Familias y Grupos</h2>

          <p>
            Los autobuses públicos y los taxis compartidos en Sri Lanka pueden ser económicos, pero no están diseñados para grupos con equipaje, niños pequeños o pasajeros mayores. Las rutas de autobús no siempre cubren los destinos turísticos clave, y los horarios son inflexibles.
          </p>

          <p>
            Una furgoneta privada con conductor resuelve todos estos problemas de una sola vez: tienes el vehículo exclusivamente para tu grupo, el conductor se adapta a tu ritmo, y el espacio para el equipaje es generoso. Para grupos de tres o más personas, el coste por persona de una furgoneta privada suele ser comparable o inferior al de los tours en grupo.
          </p>

          <blockquote className="article-blockquote">
            Para grupos de cuatro o más personas, el coste por persona de un charter privado es frecuentemente comparable al de un tour en grupo — con mucha más flexibilidad y privacidad.
          </blockquote>

          <h2 id="cuantas-personas">¿Cuántas Personas Caben en una Furgoneta?</h2>

          <p>
            La furgoneta estándar para grupos en Sri Lanka es la <strong>KDH Hi-Ace japonesa</strong>, que acomoda cómodamente entre 3 y 6 pasajeros con equipaje estándar. Para grupos de 7 a 9 personas, está disponible una versión de mayor capacidad.
          </p>

          <p>
            Para familias con niños pequeños o grupos que necesitan el máximo confort, el <strong>MPV de lujo japonés</strong> con asientos capitán es la opción más adecuada — especialmente para trayectos largos o para pasajeros mayores que necesitan facilidad de acceso.
          </p>

          <h2 id="tipos-furgoneta">Tipos de Furgoneta Disponibles</h2>

          <div className="article-vehicle-grid">
            <div className="article-vehicle-card">
              <h4>Furgoneta KDH Hi-Ace Japonesa</h4>
              <p><strong>Capacidad:</strong> 3–6 pasajeros</p>
              <p><strong>Mejor para:</strong> Grupos estándar, familias con equipaje abundante</p>
              <p>Posición de asiento elevada con excelente visibilidad. Amplio espacio para el equipaje en la parte trasera. Aire acondicionado. La opción más popular para grupos en Sri Lanka.</p>
            </div>
            <div className="article-vehicle-card">
              <h4>Furgoneta de Gran Capacidad</h4>
              <p><strong>Capacidad:</strong> 6–9 pasajeros</p>
              <p><strong>Mejor para:</strong> Grupos grandes, familias numerosas</p>
              <p>Ideal para grupos de 7 a 9 personas. Ofrece el mismo nivel de comodidad que la Hi-Ace estándar con mayor capacidad de asientos y equipaje.</p>
            </div>
            <div className="article-vehicle-card">
              <h4>MPV de Lujo Japonés</h4>
              <p><strong>Capacidad:</strong> 2–5 pasajeros</p>
              <p><strong>Mejor para:</strong> Familias con niños pequeños, pasajeros mayores, máximo confort</p>
              <p>Asientos capitán individuales para cada pasajero. Entrada más baja que la Hi-Ace — ideal para pasajeros con movilidad reducida. El nivel más alto de confort para trayectos largos.</p>
            </div>
          </div>

          <h2 id="ventajas-grupos">Ventajas Específicas para Familias y Grupos</h2>

          <p>
            Más allá del espacio y la comodidad, un charter privado ofrece ventajas específicas que los tours en grupo no pueden igualar:
          </p>

          <ul className="article-list">
            <li><strong>Horarios flexibles:</strong> Sal cuando quieras, haz pausas cuando las necesites, y ajusta el itinerario sobre la marcha sin depender de un grupo más grande.</li>
            <li><strong>Privacidad completa:</strong> El vehículo es exclusivamente para tu grupo — sin extraños, sin compromisos con los intereses de otros viajeros.</li>
            <li><strong>Adaptación a necesidades especiales:</strong> Sillas de bebé, paradas de descanso frecuentes, ritmo más lento para pasajeros mayores — todo se puede organizar con antelación.</li>
            <li><strong>Coste compartido:</strong> Cuanto más grande es el grupo, menor es el coste por persona. Un grupo de seis personas puede viajar en furgoneta privada por menos de lo que costaría un tour en grupo por persona.</li>
          </ul>

          <h2 id="elegir-plan">Cómo Elegir el Plan Correcto para tu Familia o Grupo</h2>

          <p>
            La elección del plan depende principalmente del tipo de experiencia que buscas:
          </p>

          <div className="article-plans-grid">
            <div className="article-plan-card">
              <div className="article-plan-badge">MEJOR VALOR</div>
              <h4>Plan Bronze</h4>
              <p className="article-plan-driver">Conductor en Prácticas</p>
              <ul>
                <li>✓ Conductor con licencia gubernamental fiable</li>
                <li>✓ Ideal para grupos cómodos navegando de forma independiente</li>
                <li>✓ Perfecto para visitantes que repiten o con itinerario fijo</li>
              </ul>
            </div>
            <div className="article-plan-card article-plan-card--popular">
              <div className="article-plan-badge article-plan-badge--popular">MÁS POPULAR</div>
              <h4>Plan Silver</h4>
              <p className="article-plan-driver">Conductor Turístico Altamente Valorado o Conductor Guía</p>
              <ul>
                <li>✓ La opción más popular para familias</li>
                <li>✓ Tu conductor te acompaña en los lugares turísticos</li>
                <li>✓ Organiza safaris y actividades incluido</li>
                <li>✓ Recomendado para primeras visitas y familias con niños</li>
              </ul>
            </div>
            <div className="article-plan-card">
              <div className="article-plan-badge">SERVICIO PREMIUM</div>
              <h4>Plan Gold</h4>
              <p className="article-plan-driver">Conductor Guía Chófer (Altamente Valorado)</p>
              <ul>
                <li>✓ Acompañamiento durante todo el itinerario</li>
                <li>✓ Sistema de apoyo dual durante todo el viaje</li>
                <li>✓ Recomendado para familias multigeneracionales o con pasajeros mayores</li>
              </ul>
            </div>
          </div>

          <h2 id="opiniones">Lo Que Dicen Familias y Grupos sobre Viajar con SLTCS</h2>

          <div className="article-reviews">
            <div className="article-review-card">
              <div className="article-review-stars">★★★★★</div>
              <p className="article-review-text">"La calma profesional y la calidez genuina de Smith hicieron que nuestras vacaciones familiares fueran verdaderamente excepcionales."</p>
              <p className="article-review-author">La Familia K · 5 pasajeros · Colombo – Ella – Yala – Mirissa</p>
              <p className="article-review-detail">Viajamos como familia de cinco — incluyendo dos niños pequeños y una abuela — y Smith manejó cada desafío logístico con eficiencia tranquila y una sonrisa constante. Su conocimiento del Parque Nacional de Yala fue sobresaliente — vimos leopardos, elefantes y cocodrilos en una sola mañana.</p>
            </div>
            <div className="article-review-card">
              <div className="article-review-stars">★★★★★</div>
              <p className="article-review-text">"Lasith fue infinitamente paciente con nuestros hijos e hizo que cada momento del viaje pareciera sin esfuerzo."</p>
              <p className="article-review-author">La Familia W · 3 pasajeros · Colombo – Sigiriya – Kandy – Galle</p>
              <p className="article-review-detail">Su manera cálida con los niños nos tranquilizó a todos, y su inglés claro significó que nunca se perdió nada en la traducción. Puntual, lleno de sugerencias reflexivas para lugares y restaurantes locales, y constantemente tranquilo al volante.</p>
            </div>
            <div className="article-review-card">
              <div className="article-review-stars">★★★★★</div>
              <p className="article-review-text">"La calidez, la rapidez de pensamiento y la consideración natural de Chamil conquistaron a cada miembro de nuestra familia."</p>
              <p className="article-review-author">La Familia D · 3 generaciones · Sigiriya – Kandy – Colombo</p>
              <p className="article-review-detail">Viajamos como tres generaciones — abuelos, padres y un niño. Chamil reunía constantemente la información más reciente sobre las condiciones de las carreteras y la seguridad, y su atención hacia nuestro hijo fue especialmente conmovedora.</p>
            </div>
          </div>

          <h2 id="consejos-practicos">Consejos Prácticos para Familias y Grupos</h2>

          <h3>Viajar con Niños Pequeños</h3>

          <p>
            Las carreteras de Sri Lanka varían considerablemente en calidad — las autopistas conectan las principales ciudades sin problemas, pero las rutas de montaña y las carreteras rurales pueden ser sinuosas y con baches. Para bebés y niños pequeños, se recomienda encarecidamente una silla de coche infantil.
          </p>

          <p>
            SLTCS puede organizar una silla adecuada bajo petición; por favor, menciona esto cuando hagas tu consulta. Planifica paradas de descanso cada dos o tres horas en los días de conducción más largos.
          </p>

          <h3>Viajar con Pasajeros Mayores</h3>

          <p>
            Para grupos que incluyen pasajeros mayores, el <strong>Plan Gold</strong> con un Conductor Guía Chófer es la opción más adecuada. Estos conductores tienen experiencia en gestionar el ritmo del itinerario para adaptarse a todos los niveles de energía.
          </p>

          <p>
            La posición de asiento elevada de la furgoneta KDH puede requerir un escalón para subir — si la movilidad es una preocupación, el MPV de lujo con entrada más baja y asientos capitán puede ser más cómodo.
          </p>

          <h3>Distribución de Costes en el Grupo</h3>

          <p>
            Una de las ventajas más significativas de un charter de furgoneta privada para grupos es el valor por persona. La tabla a continuación ilustra cómo el coste por persona disminuye a medida que aumenta el tamaño del grupo:
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Ejemplo de coste por persona — Silver Van 7 días (indicativo)</caption>
              <thead>
                <tr>
                  <th>Tamaño del Grupo</th>
                  <th>Total (Silver Van, 7 días)</th>
                  <th>Coste por Persona</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2 pasajeros", "USD 650", "USD 325"],
                  ["3 pasajeros", "USD 650", "USD 217"],
                  ["4 pasajeros", "USD 650", "USD 163"],
                  ["5 pasajeros", "USD 650", "USD 130"],
                  ["6 pasajeros", "USD 650", "USD 108"],
                ].map(([size, total, pp]) => (
                  <tr key={size}>
                    <td>{size}</td>
                    <td>{total}</td>
                    <td>{pp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="article-table-note">Basado en tarifa Silver Van 7 días indicativa. Los precios reales pueden variar según el itinerario.</p>
          </div>

          <h2 id="como-reservar">Cómo Reservar una Furgoneta para tu Grupo</h2>

          <p>
            La forma más sencilla de confirmar el vehículo y el plan correctos para tu grupo es compartir tus fechas de viaje, tamaño del grupo y un itinerario aproximado con nosotros. Proporcionaremos una estimación personalizada en español o inglés — sin obligación de reservar y sin presión para comprometerte antes de que estés listo.
          </p>

          <div className="article-steps">
            <div className="article-step"><span>1</span><p>Comparte tus fechas de viaje, tamaño del grupo y destinos</p></div>
            <div className="article-step"><span>2</span><p>Elige tu vehículo y plan de servicio preferidos</p></div>
            <div className="article-step"><span>3</span><p>Recibe una estimación detallada en 24 horas</p></div>
          </div>

          <div className="article-cta-box">
            <p>¿Listo para planificar tu viaje familiar a Sri Lanka? Obtén un presupuesto gratuito y sin compromiso.</p>
            <Link href="/#contact" className="article-cta-btn">OBTENER PRESUPUESTO GRATUITO</Link>
          </div>

          <div className="article-back-link">
            <Link href="/information/viajes-familia-grupos">← Viajes en Familia y Grupos</Link>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="article-sidebar">
          <div className="article-sidebar-category">
            <Link href="/information/viajes-familia-grupos">Viajes en Familia y Grupos</Link>
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
