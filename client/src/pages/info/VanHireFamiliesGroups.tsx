import { useEffect, useState } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article5_hero_family_group_van_f0b07741.webp";
const INFOGRAPHIC_IMG = "/manus-storage/article5_infographic_7reasons_c8ac0296.webp";
const FAMILY_PHOTO = "/manus-storage/article5_family_group_sri_lanka_8199b752.webp";

const TOC = [
  { id: "por-que-furgoneta", label: "Por Qué una Furgoneta Privada es la Mejor Opción" },
  { id: "que-hace-furgoneta", label: "↳ ¿Qué Hace que la Furgoneta Sea el Vehículo Ideal?" },
  { id: "7-ventajas", label: "Las 7 Mayores Ventajas para Familias y Grupos" },
  { id: "precios-furgoneta", label: "Precios de Alquiler de Furgoneta para Familias (2026)" },
  { id: "elegir-plan", label: "Cómo Elegir el Plan Correcto para tu Grupo" },
  { id: "opiniones", label: "Lo Que Dicen Familias y Grupos" },
  { id: "consejos-practicos", label: "Consejos Prácticos para Familias y Grupos" },
  { id: "como-reservar", label: "Cómo Reservar una Furgoneta para tu Grupo" },
];

export default function VanHireFamiliesGroups() {
  const [tocOpen, setTocOpen] = useState(true);

  useEffect(() => {
    document.title = "Alquiler de Furgoneta con Conductor en Sri Lanka: Familias y Grupos Pequeños (2026) | SLTCS";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Guía completa para alquilar una furgoneta con conductor en Sri Lanka para familias y grupos pequeños. Tipos de vehículo, precios 2026, planes y consejos prácticos.");
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
            Alquiler de Furgoneta con Conductor en Sri Lanka para Familias y Grupos Pequeños (2026)
          </h1>
          <div className="article-hero-meta">
            <span>5 junio 2026</span>
            <span className="article-hero-dot">·</span>
            <span>9 min de lectura</span>
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
            Los autobuses públicos y los taxis compartidos en Sri Lanka pueden ser económicos, pero no están diseñados para grupos con equipaje, niños pequeños o pasajeros mayores.
          </p>

          <p>
            Una furgoneta privada con conductor resuelve todos estos problemas de una sola vez: tienes el vehículo exclusivamente para tu grupo, el conductor se adapta a tu ritmo, y el espacio para el equipaje es generoso. Para grupos de tres o más personas, el coste por persona de una furgoneta privada suele ser comparable o inferior al de los tours en grupo.
          </p>

          {/* Family photo */}
          <figure className="article-figure">
            <img
              src={FAMILY_PHOTO}
              alt="Familia viajando en Sri Lanka con conductor privado SLTCS"
              className="article-photo"
              style={{ maxHeight: "420px", objectPosition: "center" }}
            />
            <figcaption>Familias y grupos que viajan con SLTCS disfrutan de privacidad total y flexibilidad de itinerario</figcaption>
          </figure>

          <h3 id="que-hace-furgoneta">¿Qué Hace que la Furgoneta Sea el Vehículo Ideal para Grupos?</h3>

          <p>
            La furgoneta estándar para grupos en Sri Lanka es la <strong>KDH Hi-Ace japonesa</strong>, que acomoda cómodamente entre 3 y 6 pasajeros con equipaje estándar.
          </p>

          <p>
            El amplio espacio de carga trasero acomoda maletas grandes, sillitas de paseo y equipamiento deportivo con facilidad — una ventaja significativa sobre los vehículos más pequeños o los traslados compartidos.
          </p>

          <p>
            Para grupos de 6 a 9 personas, está disponible la <strong>Furgoneta Grande japonesa</strong> (MPV de lujo) a una tarifa ligeramente superior. Los precios completos para todos los tipos de vehículo y duraciones están disponibles en nuestra <Link href="/#planes" className="article-link">página de Planes</Link>.
          </p>

          {/* Infographic */}
          <figure className="article-figure">
            <img
              src={INFOGRAPHIC_IMG}
              alt="7 razones por las que las familias y grupos eligen un charter de furgoneta privada en Sri Lanka"
              className="article-infographic"
            />
            <figcaption>7 razones por las que las familias y grupos eligen un charter de furgoneta privada en Sri Lanka</figcaption>
          </figure>

          <h2 id="7-ventajas">Las 7 Mayores Ventajas para Viajeros en Familia y Grupos</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "1rem 0 1.5rem" }}>
            {[
              { num: "01", title: "Servicio Puerta a Puerta", desc: "Tu conductor te recoge en el aeropuerto y te deja en cada hotel. Sin traslados, sin navegar por calles desconocidas con equipaje." },
              { num: "02", title: "Itinerario Flexible", desc: "Para cuando los niños necesitan un descanso, cambiar de planes o añadir una parada espontánea en la playa. El itinerario se adapta a tu grupo — no al revés." },
              { num: "03", title: "Espacio para el Equipaje", desc: "El espacio de carga trasero de la furgoneta KDH acomoda maletas grandes, sillitas de paseo y equipamiento deportivo con facilidad." },
              { num: "04", title: "Seguridad para Niños", desc: "Los conductores de SLTCS tienen experiencia con familias y conducen con especial cuidado en carreteras de montaña y costeras. Las sillas de bebé se pueden organizar bajo petición." },
              { num: "05", title: "Conductor de Habla Inglesa", desc: "Cada conductor de SLTCS se comunica claramente en inglés — esencial para familias que necesitan explicar requisitos dietéticos, necesidades médicas o simplemente pedir una recomendación de restaurante." },
              { num: "06", title: "Precio de Tarifa Plana", desc: "Todos los precios de SLTCS son fijos e incluyen impuestos. La gasolina, los peajes y el alojamiento del conductor están incluidos. Sin cargos ocultos por kilometraje — especialmente importante cuando se dividen los costes en un grupo." },
              { num: "07", title: "Conocimiento Local", desc: "Un buen conductor conoce los mejores momentos para visitar los lugares populares, los atajos que evitan el tráfico, y los restaurantes locales que valen la pena. Este conocimiento es invaluable cuando viajas con niños o pasajeros mayores." },
            ].map(({ num, title, desc }) => (
              <div key={num} style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr",
                gap: "1rem",
                alignItems: "flex-start",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "rgba(201,168,76,0.5)",
                  lineHeight: 1,
                  paddingTop: "2px",
                }}>{num}</span>
                <div>
                  <strong style={{ display: "block", color: "#fff", fontSize: "0.95rem", marginBottom: "0.35rem" }}>{title}</strong>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 id="precios-furgoneta">Precios de Alquiler de Furgoneta para Familias y Grupos (2026)</h2>

          <p>
            Los precios de alquiler de furgoneta en SLTCS son de tarifa plana e incluyen impuestos. La tabla a continuación muestra los precios indicativos para las duraciones de viaje más comunes.
          </p>

          <p>
            Todos los precios están en USD; las cotizaciones también están disponibles en <strong>GBP, EUR y AUD</strong>.
          </p>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Precios SLTCS 2026 — Furgoneta (hasta 6 personas), precios en USD</caption>
              <thead>
                <tr>
                  <th>Duración</th>
                  <th>Bronze (Furgoneta)<br /><span style={{ fontWeight: 400, fontSize: "0.7rem", color: "rgba(201,168,76,0.7)" }}>Conductor en Prácticas</span></th>
                  <th>Silver (Furgoneta)<br /><span style={{ fontWeight: 400, fontSize: "0.7rem", color: "rgba(201,168,76,0.7)" }}>Conductor Turístico / Guía</span></th>
                  <th>Gold (Furgoneta)<br /><span style={{ fontWeight: 400, fontSize: "0.7rem", color: "rgba(201,168,76,0.7)" }}>Chófer Guía (Altamente Valorado)</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2 días", "USD 180", "USD 220", "USD 280"],
                  ["3 días", "USD 255", "USD 315", "USD 400"],
                  ["5 días", "USD 395", "USD 490", "USD 625"],
                  ["7 días", "USD 525", "USD 650", "USD 830"],
                  ["10 días", "USD 720", "USD 895", "USD 1,140"],
                  ["14 días", "USD 980", "USD 1,215", "USD 1,550"],
                ].map(([dur, b, s, g]) => (
                  <tr key={dur}>
                    <td>{dur}</td>
                    <td>{b}</td>
                    <td>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                        {s}
                        <span className="badge-popular">Más Popular</span>
                      </span>
                    </td>
                    <td>{g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="article-table-note">
              Los precios son indicativos y están sujetos al itinerario. Para grupos de 6 a 9 personas, la <strong>Furgoneta Grande</strong> (MPV de lujo japonés) está disponible a una tarifa ligeramente superior.
              Para obtener una cotización personalizada, visita nuestra <Link href="/#planes" className="article-link">página de Planes</Link> o <Link href="/#contact" className="article-link">contáctanos directamente</Link>.
            </p>
            <div className="article-price-table-cta">
              <p>¿Quieres un presupuesto personalizado para tu grupo?</p>
              <Link href="/#contact" className="article-price-cta-btn">SOLICITAR PRESUPUESTO GRATUITO →</Link>
            </div>
          </div>

          <h2 id="elegir-plan">Cómo Elegir el Plan Correcto para tu Familia o Grupo</h2>

          <p>
            SLTCS ofrece tres niveles de servicio. Para familias y grupos, la elección depende principalmente del tipo de experiencia que buscas:
          </p>

          <div className="article-plans-grid">
            <div className="article-plan-card">
              <div className="article-plan-badge">MEJOR VALOR</div>
              <h4>Bronze</h4>
              <p className="article-plan-driver">Conductor en Prácticas</p>
              <ul>
                <li>✓ Conductor con licencia gubernamental fiable</li>
                <li>✓ Ideal para grupos cómodos navegando de forma independiente</li>
                <li>✓ Perfecto para visitantes que repiten o con itinerario fijo</li>
              </ul>
              <p className="article-plan-desc">Conductor con licencia gubernamental. Ideal para grupos que ya conocen Sri Lanka o tienen un itinerario fijo.</p>
            </div>
            <div className="article-plan-card article-plan-card--popular">
              <div className="article-plan-badge article-plan-badge--popular">MÁS POPULAR</div>
              <h4>Silver</h4>
              <p className="article-plan-driver">Conductor Turístico Altamente Valorado o Conductor Guía</p>
              <ul>
                <li>✓ La opción más popular para familias</li>
                <li>✓ Tu conductor te acompaña en los lugares turísticos</li>
                <li>✓ Organiza safaris y actividades incluido</li>
                <li>✓ Recomendado para primeras visitas y familias con niños</li>
              </ul>
              <p className="article-plan-desc">La opción más popular para familias. Tu conductor te acompaña en los lugares turísticos y proporciona comentario cultural.</p>
            </div>
            <div className="article-plan-card">
              <div className="article-plan-badge">SERVICIO PREMIUM</div>
              <h4>Gold</h4>
              <p className="article-plan-driver">Conductor Guía Chófer (Altamente Valorado)</p>
              <ul>
                <li>✓ Acompañamiento durante todo el itinerario</li>
                <li>✓ Sistema de apoyo dual durante todo el viaje</li>
                <li>✓ Recomendado para familias multigeneracionales o con pasajeros mayores</li>
              </ul>
              <p className="article-plan-desc">Acompañamiento completo con un Conductor Guía Chófer altamente valorado. Recomendado para familias multigeneracionales.</p>
            </div>
          </div>

          <p>
            Para una comparación completa de los tres planes, visita nuestra <Link href="/#planes" className="article-link">página de Planes</Link>.
          </p>

          <h2 id="opiniones">Lo Que Dicen Familias y Grupos sobre Viajar con SLTCS</h2>

          <p>
            Los siguientes testimonios son de familias y grupos que han completado sus viajes con conductores de SLTCS.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem", margin: "1rem 0 1.5rem" }}>
            {[
              {
                stars: "★★★★★",
                text: "\"La calma profesional y la calidez genuina de Smith hicieron que nuestras vacaciones familiares fueran verdaderamente excepcionales.\"",
                author: "La Familia K · 5 pasajeros",
                route: "Colombo – Ella – Yala – Mirissa",
              },
              {
                stars: "★★★★★",
                text: "\"Lasith fue infinitamente paciente con nuestros hijos e hizo que cada momento del viaje pareciera sin esfuerzo.\"",
                author: "La Familia W · 3 pasajeros",
                route: "Colombo – Sigiriya – Kandy – Galle",
              },
              {
                stars: "★★★★★",
                text: "\"La calidez, la rapidez de pensamiento y la consideración natural de Chamil conquistaron a cada miembro de nuestra familia.\"",
                author: "La Familia D · 3 generaciones",
                route: "Sigiriya – Kandy – Colombo",
              },
            ].map((r, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "1.25rem",
              }}>
                <div style={{ color: "#c9a84c", fontSize: "0.9rem", marginBottom: "0.75rem" }}>{r.stars}</div>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "0.75rem" }}>{r.text}</p>
                <p style={{ fontSize: "0.78rem", color: "#c9a84c", fontWeight: 600, margin: 0 }}>{r.author}</p>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", margin: "2px 0 0" }}>{r.route}</p>
              </div>
            ))}
          </div>

          <h2 id="consejos-practicos">Consejos Prácticos para Familias y Grupos</h2>

          <h3>Viajar con Niños Pequeños</h3>

          <p>
            Las carreteras de Sri Lanka varían considerablemente en calidad — las autopistas conectan las principales ciudades sin problemas, pero las rutas de montaña y las carreteras rurales pueden ser sinuosas y con baches.
          </p>

          <p>
            Para bebés y niños pequeños, se recomienda encarecidamente una silla de coche infantil. SLTCS puede organizar una silla adecuada bajo petición; por favor, menciona esto cuando hagas tu consulta. Planifica paradas de descanso cada dos o tres horas en los días de conducción más largos.
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
              <caption>Ejemplo de coste por persona — Silver Furgoneta 7 días (indicativo)</caption>
              <thead>
                <tr>
                  <th>Tamaño del Grupo</th>
                  <th>Total (Silver Furgoneta, 7 días)</th>
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
            <p className="article-table-note">Basado en tarifa Silver Furgoneta 7 días indicativa. Los precios reales pueden variar según el itinerario.</p>
          </div>

          <h2 id="como-reservar">Cómo Reservar una Furgoneta para tu Grupo</h2>

          <p>
            La forma más sencilla de confirmar el vehículo y el plan correctos para tu grupo es compartir tus fechas de viaje, tamaño del grupo y un itinerario aproximado con nosotros.
          </p>

          <p>
            Proporcionaremos una estimación personalizada en español o inglés — sin obligación de reservar y sin presión para comprometerte antes de que estés listo.
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
