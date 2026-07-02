import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const HERO_IMG = "/manus-storage/article4_hero_cost_booking_35c88786.webp";
const INFOGRAPHIC_IMG = "/manus-storage/infographic_daily_rate_es_55cf2598.png";

const TOC = [
  { id: "por-que-importa", label: "Por Qué Importa la Etapa de Reserva" },
  { id: "checklist-7-puntos", label: "La Lista de Verificación de 7 Puntos" },
  { id: "punto-1", label: "↳ 1. Licencia de Conductor Turístico" },
  { id: "punto-2", label: "↳ 2. Seguro de Terceros" },
  { id: "punto-3", label: "↳ 3. Comunicación en Español" },
  { id: "punto-4", label: "↳ 4. Estado y Tipo de Vehículo" },
  { id: "punto-5", label: "↳ 5. Qué Incluye (y Qué No) el Precio" },
  { id: "punto-6", label: "↳ 6. Condiciones de Cancelación" },
  { id: "punto-7", label: "↳ 7. Opiniones de Viajeros Verificados" },
  { id: "cuanto-cuesta", label: "¿Cuánto Cuesta Contratar un Conductor?" },
  { id: "senales-alerta", label: "Señales de Alerta" },
  { id: "como-obtener-presupuesto", label: "Cómo Obtener un Presupuesto Exacto" },
];

export default function DriverHireCostsChecklist() {
  const [tocOpen, setTocOpen] = useState(true);

  useSEO({
    title: "Contratar Conductor en Sri Lanka: Costes, Seguridad y Lista de Verificación (2026) | SLTCS",
    description: "Guía completa sobre costes y seguridad para contratar un conductor privado en Sri Lanka. Lista de verificación de 7 puntos antes de reservar, precios transparentes 2026.",
    path: "/information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist",
    hreflangs: [
      { hreflang: "es", href: "https://es.srilanka-charter.com/information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist" },
      { hreflang: "en", href: "https://en.srilanka-charter.com/information/cost-booking-guide/driver-hire-sri-lanka-costs-safety-checklist" },
      { hreflang: "fr", href: "https://fr.srilanka-charter.com/information/guide-cout-reservation/location-chauffeur-sri-lanka-couts-securite-checklist" },
      { hreflang: "de", href: "https://de.srilanka-charter.com/information/kosten-buchung/fahrermiete-sri-lanka-kosten-sicherheit-checkliste" },
      { hreflang: "x-default", href: "https://en.srilanka-charter.com/information/cost-booking-guide/driver-hire-sri-lanka-costs-safety-checklist" },
    ],
  });

  return (
    <div className="sltcs-page">
      <ArticleNav />

      {/* Hero */}
      <div className="article-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <span className="article-category-badge">GUÍA DE COSTES Y RESERVA</span>
          <h1 className="article-hero-title">
            Contratar Conductor en Sri Lanka: Costes, Seguridad y Lista de Verificación Antes de Reservar
          </h1>
          <div className="article-hero-meta">
            <span>4 junio 2026</span>
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
        <Link href="/information/guia-costes-reserva">Guía de Costes y Reserva</Link>
        <span>›</span>
        <span>Contratar Conductor en Sri Lanka: Costes, Seguridad y Checklist</span>
      </div>

      {/* Tags */}
      <div className="article-tags">
        {["alquiler conductor sri lanka","coste conductor privado","lista de verificación reserva","seguridad conductor","alquiler coche sri lanka"].map(tag => (
          <span key={tag} className="article-tag">{tag}</span>
        ))}
      </div>

      {/* Layout */}
      <div className="article-layout">
        {/* Main */}
        <main className="article-main">
          <p className="article-lead">
            Contratar un conductor privado es una de las decisiones más inteligentes que puedes tomar para un viaje a Sri Lanka — pero no todos los servicios de conductor son iguales. Antes de confirmar una reserva, hay siete aspectos que todo viajero debería verificar.
          </p>

          <p>
            Esta guía te explica cada uno de ellos, junto con un desglose transparente de lo que realmente cuesta contratar un conductor en Sri Lanka en 2026.
          </p>

          <blockquote className="article-blockquote">
            Una pequeña preparación antes de reservar puede ahorrarte sorpresas costosas en la carretera.
          </blockquote>

          {/* TOC */}
          <div className="article-toc">
            <button className="article-toc-toggle" onClick={() => setTocOpen(v => !v)}>
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

          <h2 id="por-que-importa">Por Qué Importa la Etapa de Reserva</h2>

          <p>
            Sri Lanka tiene un mercado amplio y variado de servicios de conductor — desde conductores autónomos hasta operadores charter establecidos. La diferencia de calidad entre las mejores y peores opciones es significativa.
          </p>

          <p>
            Los viajeros que reservan sin verificar los detalles correctos a menudo encuentran problemas difíciles de resolver una vez que ya están en el país: conductores que hablan poco inglés o español, vehículos que no coinciden con lo anunciado, o facturas finales que no se parecen al presupuesto original.
          </p>

          <p>
            La buena noticia es que la mayoría de estos problemas son completamente evitables. La lista de verificación a continuación cubre los siete aspectos más importantes que debes comprobar antes de pagar un depósito.
          </p>

          <h2 id="checklist-7-puntos">La Lista de Verificación de 7 Puntos</h2>

          <p className="article-section-caption">
            7 verificaciones esenciales antes de reservar un conductor privado en Sri Lanka — tu lista de seguridad y reserva
          </p>

          <h3 id="punto-1">1. Licencia de Conductor Turístico Emitida por el Gobierno</h3>

          <p>
            En Sri Lanka, los conductores que transportan turistas están legalmente obligados a poseer una <strong>Licencia de Conductor Turístico</strong> emitida por la Autoridad de Desarrollo del Turismo de Sri Lanka (SLTDA). Esta es diferente a un permiso de conducir estándar y requiere que el conductor supere verificaciones de antecedentes y una evaluación formal.
          </p>

          <p>
            Siempre solicita ver este documento — o confirma que el operador puede proporcionarlo cuando lo pidas.
          </p>

          <blockquote className="article-blockquote">
            Una Licencia de Conductor Turístico SLTDA válida es el requisito mínimo para cualquier conductor que transporte turistas internacionales.
          </blockquote>

          <h3 id="punto-2">2. Cobertura de Seguro de Terceros</h3>

          <p>
            Confirma que el vehículo tiene seguro de terceros válido. Aunque la cobertura básica de terceros es legalmente obligatoria en Sri Lanka, el nivel de cobertura varía.
          </p>

          <p>
            Los operadores de confianza llevan un seguro integral que cubre a los pasajeros en caso de accidente. Pregunta específicamente si se incluye la responsabilidad civil hacia los pasajeros.
          </p>

          <h3 id="punto-3">3. Capacidad de Comunicación en Español o Inglés</h3>

          <p>
            Este es uno de los factores que se pasa por alto con más frecuencia — y uno de los que más impacto tiene en tu experiencia diaria. Un conductor que no puede comunicarse en español o inglés hace difícil ajustar tu itinerario, hacer preguntas sobre los lugares locales o manejar situaciones inesperadas.
          </p>

          <p>
            Al hacer una consulta, envía un mensaje en español o inglés y evalúa la respuesta directamente. Un operador profesional responderá con prontitud en un idioma claro.
          </p>

          <h3 id="punto-4">4. Estado y Tipo de Vehículo</h3>

          <p>
            Pide el vehículo específico que se asignará a tu viaje, no solo una categoría. Confirma la antigüedad aproximada del vehículo y si tiene aire acondicionado en funcionamiento — esencial en el calor de Sri Lanka.
          </p>

          <p>
            Para grupos de cuatro o más personas, una <strong>furgoneta japonesa KDH Hi-Ace</strong> es la opción estándar, que ofrece generoso espacio para el equipaje y una posición de asiento elevada. Para parejas o viajeros individuales, un <strong>sedán compacto japonés</strong> es cómodo y más económico.
          </p>

          <p>
            Para grupos más grandes o familias con niños pequeños, un <strong>MPV japonés de lujo</strong> con asientos capitán proporciona el máximo confort.
          </p>

          <h3 id="punto-5">5. Qué Incluye (y Qué No) el Precio</h3>

          <p>
            Siempre solicita un desglose escrito de lo que cubre el precio cotizado. Preguntas clave que debes hacer:
          </p>

          <ul className="article-list">
            <li>¿Está incluida la gasolina, o se cobra por separado?</li>
            <li>¿Están incluidos los peajes de autopista y las tarifas de aparcamiento?</li>
            <li>¿Está incluido el alojamiento del conductor en viajes de varios días?</li>
            <li>¿Hay límites de kilometraje que puedan generar cargos adicionales?</li>
            <li>¿Están incluidas las tarifas de entrada a parques nacionales o lugares culturales?</li>
          </ul>

          <p>
            En SLTCS, todos los precios son de <strong>tarifa plana e incluyen impuestos</strong>. La gasolina, los peajes y el alojamiento del conductor están cubiertos dentro del precio cotizado para los itinerarios estándar.
          </p>

          <p>
            No hay cargos ocultos por kilometraje. Las únicas adiciones posibles son las tarifas de entrada a atracciones específicas, que se pagan directamente en la puerta.
          </p>

          <h3 id="punto-6">6. Condiciones de Cancelación y Modificación</h3>

          <p>
            Los planes de viaje cambian. Antes de reservar, confirma la política del operador sobre cancelaciones, cambios de fecha y modificaciones del itinerario. Un servicio de confianza tendrá condiciones claras y escritas.
          </p>

          <p>
            Ten cuidado con los operadores que exigen el pago completo por adelantado sin flexibilidad de cancelación — esta es una señal de alerta común en el segmento de menor coste del mercado.
          </p>

          <h3 id="punto-7">7. Opiniones de Viajeros Verificados</h3>

          <p>
            Busca opiniones en plataformas independientes — Google, TripAdvisor o foros de viajes — en lugar de confiar únicamente en los testimonios que aparecen en el propio sitio web del operador. Presta atención a los comentarios sobre puntualidad, comunicación y si el precio final coincidió con el presupuesto.
          </p>

          <h2 id="cuanto-cuesta">¿Cuánto Cuesta Contratar un Conductor en Sri Lanka?</h2>

          <p>
            Los precios para el alquiler de conductor privado en Sri Lanka varían considerablemente dependiendo del operador, el nivel de cualificación del conductor, el tipo de vehículo y la duración del viaje.
          </p>

          <p>
            La tabla a continuación muestra los precios actuales de tarifa plana de SLTCS (USD, impuestos incluidos) para las duraciones de viaje más comunes.
          </p>

          {/* Infographic */}
          <figure className="article-figure">
            <img
              src={INFOGRAPHIC_IMG}
              alt="Lo que cubre tu tarifa diaria — 5 inclusiones estándar en un charter de conductor privado en Sri Lanka"
              className="article-infographic"
            />
            <figcaption>Lo que cubre tu tarifa diaria — 5 inclusiones estándar en un charter de conductor privado en Sri Lanka</figcaption>
          </figure>

          <div className="article-price-table-wrapper">
            <table className="article-price-table">
              <caption>Guía de Precios SLTCS 2026 — Sedán (1–3 personas), precios en USD</caption>
              <thead>
                <tr>
                  <th>Duración</th>
                  <th>Bronze</th>
                  <th>Silver <span className="badge-popular">Más Popular</span></th>
                  <th>Gold</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2 días", "$270", "$310", "$350"],
                  ["3 días", "$340", "$400", "$460"],
                  ["5 días", "$480", "$580", "$680"],
                  ["7 días", "$560", "$700", "$840"],
                  ["10 días", "$750", "$950", "$1,150"],
                  ["14 días", "$1,050", "$1,330", "$1,610"],
                ].map(([dur, b, s, g]) => (
                  <tr key={dur}>
                    <td>{dur}</td>
                    <td>{b}</td>
                    <td>{s}</td>
                    <td>{g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="article-table-note">
              Todos los precios incluyen impuestos y se aplican a itinerarios estándar con conductores de habla inglesa. Las cotizaciones también están disponibles en GBP, EUR y AUD.
            </p>
            <div className="article-price-table-cta">
              <p>¿Quieres un presupuesto exacto para tu itinerario?</p>
              <Link href="/#contact" className="article-price-cta-btn">SOLICITAR PRESUPUESTO GRATUITO →</Link>
            </div>
          </div>

          <h3>Entendiendo los Tres Planes</h3>

          <p>SLTCS ofrece tres niveles de servicio, cada uno adecuado para un estilo de viaje diferente:</p>

          <div className="article-plans-grid">
            <div className="article-plan-card">
              <div className="article-plan-badge">MEJOR VALOR</div>
              <h4>Plan Bronze</h4>
              <p className="article-plan-driver">Conductor en Prácticas</p>
              <ul>
                <li>✓ Servicio de traslado completo incluido</li>
                <li>✓ Apoyo de coordinador de habla hispana/inglesa</li>
                <li>✓ Opción más económica</li>
                <li>✓ Ideal para viajeros independientes</li>
              </ul>
              <p className="article-plan-desc">Ideal para viajeros cómodos navegando de forma independiente.</p>
            </div>
            <div className="article-plan-card article-plan-card--popular">
              <div className="article-plan-badge article-plan-badge--popular">MÁS POPULAR</div>
              <h4>Plan Silver</h4>
              <p className="article-plan-driver">Conductor Turístico Altamente Valorado o Conductor Guía</p>
              <ul>
                <li>✓ Acompañamiento y guía en lugares turísticos</li>
                <li>✓ Organización de safaris y actividades incluida</li>
                <li>✓ Servicio de guía sin coste adicional</li>
                <li>✓ Mejor equilibrio entre valor y experiencia</li>
              </ul>
              <p className="article-plan-desc">La opción recomendada para la mayoría de los visitantes por primera vez a Sri Lanka.</p>
            </div>
            <div className="article-plan-card">
              <div className="article-plan-badge">SERVICIO PREMIUM</div>
              <h4>Plan Gold</h4>
              <p className="article-plan-driver">Conductor Guía Chófer (Altamente Valorado)</p>
              <ul>
                <li>✓ Acompañamiento durante todo el itinerario</li>
                <li>✓ Sistema de apoyo dual durante todo el viaje</li>
                <li>✓ Servicio prioritario y atención personalizada</li>
                <li>✓ El mayor nivel de cuidado para cada viajero</li>
              </ul>
              <p className="article-plan-desc">Recomendado para viajeros que desean la experiencia personal más refinada.</p>
            </div>
          </div>

          <h2 id="senales-alerta">Señales de Alerta</h2>

          <p className="article-section-caption">
            5 señales de alerta a tener en cuenta al comparar servicios de alquiler de conductor en Sri Lanka
          </p>

          <div className="article-warning-list">
            <div className="article-warning-item">
              <span className="article-warning-icon">⚠</span>
              <div>
                <strong>Precios por Kilometraje</strong>
                <p>Algunos operadores anuncian una tarifa diaria baja pero aplican cargos por kilómetro por encima de un límite establecido. Se ha sabido que los conductores reportan distancias infladas, resultando en facturas finales muy por encima del presupuesto original.</p>
              </div>
            </div>
            <div className="article-warning-item">
              <span className="article-warning-icon">⚠</span>
              <div>
                <strong>Sin Apoyo en Español o Inglés en la Etapa de Consulta</strong>
                <p>Si el operador no puede comunicarse claramente en español o inglés antes de que reserves, esto no mejorará una vez que estés en el país.</p>
              </div>
            </div>
            <div className="article-warning-item">
              <span className="article-warning-icon">⚠</span>
              <div>
                <strong>Presión para Visitar Tiendas o Restaurantes</strong>
                <p>Algunos conductores reciben comisiones de establecimientos específicos y desviarán tu itinerario en consecuencia. Este es un problema bien documentado en el sector turístico de Sri Lanka.</p>
              </div>
            </div>
            <div className="article-warning-item">
              <span className="article-warning-icon">⚠</span>
              <div>
                <strong>Sin Confirmación por Escrito</strong>
                <p>Cualquier operador de confianza proporcionará un presupuesto escrito con las inclusiones detalladas. Los acuerdos solo verbales no te dejan ningún recurso si el servicio no coincide con las expectativas.</p>
              </div>
            </div>
          </div>

          <h2 id="como-obtener-presupuesto">Cómo Obtener un Presupuesto Exacto</h2>

          <p>
            La forma más fiable de obtener un precio exacto para tu viaje específico es compartir tu itinerario — incluso uno aproximado — directamente con el operador. En SLTCS, proporcionamos estimaciones gratuitas y personalizadas en español o inglés basadas en tus fechas de viaje, tamaño del grupo, vehículo preferido y los destinos que deseas visitar.
          </p>

          <p>
            No hay obligación de reservar, y no hay presión para comprometerse antes de que estés listo.
          </p>

          <div className="article-steps">
            <div className="article-step"><span>1</span><p>Comparte tus fechas de viaje y tamaño del grupo</p></div>
            <div className="article-step"><span>2</span><p>Indícanos tu vehículo preferido y destinos</p></div>
            <div className="article-step"><span>3</span><p>Recibe una estimación detallada en 24 horas</p></div>
          </div>

          <div className="article-cta-box">
            <p>¿Listo para planificar tu viaje a Sri Lanka? Obtén un presupuesto gratuito y sin compromiso.</p>
            <Link href="/#contact" className="article-cta-btn">OBTENER PRESUPUESTO GRATUITO</Link>
          </div>

          {/* Back link */}
          <div className="article-back-link">
            <Link href="/information/guia-costes-reserva">← Guía de Costes y Reserva</Link>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="article-sidebar">
          <div className="article-sidebar-category">
            <Link href="/information/guia-costes-reserva">Guía de Costes y Reserva</Link>
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
