import { useState, useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";

// ─── SEO ─────────────────────────────────────────────────────────────────────
const PAGE_TITLE = "Preguntas Frecuentes (FAQ) | SLTCS Alquiler de Coche con Conductor en Sri Lanka";
const PAGE_DESC =
  "Respuestas a las preguntas más frecuentes sobre SLTCS: propinas, actividades, pagos, cancelaciones, presentación del conductor y más. Alquiler de coche con conductor privado en Sri Lanka.";

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
interface FaqItem {
  q: string;
  a: React.ReactNode;
  plainText: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "¿Qué tipo de servicio es SLTCS (Alquiler de Coche con Conductor en Sri Lanka)?",
    plainText:
      "SLTCS es un servicio de intermediación de transporte terrestre en línea operado por Sri Lanka Taxi Charter Service International Limited, empresa registrada en Hong Kong. Conecta a los viajeros con conductores turísticos registrados en la Autoridad de Desarrollo del Turismo de Sri Lanka (SLTDA). El contrato de transporte se establece directamente entre el cliente y el conductor. SLTCS actúa como intermediario de presentación y comunicación, y no presta el servicio de transporte por sí mismo.",
    a: (
      <>
        <p>
          SLTCS es un servicio de intermediación de transporte terrestre en
          línea operado por Sri Lanka Taxi Charter Service International
          Limited, empresa registrada en Hong Kong. Conecta a los viajeros con
          conductores turísticos registrados en la Autoridad de Desarrollo del
          Turismo de Sri Lanka (SLTDA).
        </p>
        <p className="mt-2">
          El contrato de transporte se establece directamente entre el cliente
          y el conductor. SLTCS actúa como intermediario de presentación y
          comunicación, y no presta el servicio de transporte por sí mismo.
        </p>
        <p className="mt-2 text-amber-700 bg-amber-50 rounded-lg px-3 py-2 text-xs">
          ※ Importante: No gestionamos reservas, ventas ni arreglos de
          alojamiento, atracciones turísticas, actividades, ferrocarriles, etc.
          Cualquier información proporcionada en estas FAQ es solo de
          referencia. Todos los contratos de dichos servicios se establecen
          directamente entre el cliente y el proveedor correspondiente.
        </p>
      </>
    ),
  },
  {
    q: "¿Cuánto debo dar de propina y cuándo?",
    plainText:
      "La propina orientativa es de LKR 2.000–4.000 por día (aprox. USD 6–12). Es costumbre entregarla al final del itinerario de cada día. Añadir unas palabras de agradecimiento ayuda a garantizar un servicio aún mejor en los días siguientes. La propina es totalmente opcional.",
    a: (
      <>
        <p>
          La propina orientativa es de{" "}
          <strong>LKR 2.000–4.000 por día (aprox. USD 6–12)</strong>. Es
          costumbre entregarla al final del itinerario de cada día. Añadir unas
          palabras de agradecimiento ayuda a garantizar un servicio aún mejor
          en los días siguientes.
        </p>
        <p className="mt-2">La propina es totalmente opcional.</p>
      </>
    ),
  },
  {
    q: "¿Puedo consultar en inglés sobre mi itinerario u obtener sugerencias de rutas?",
    plainText:
      "Sí. Nuestro equipo responde en inglés a todas las consultas sobre itinerarios, rutas y planificación del viaje. Podemos sugerir rutas óptimas en función de sus intereses, el tiempo disponible y las condiciones de la carretera.",
    a: (
      <p>
        Sí. Nuestro equipo responde en inglés a todas las consultas sobre
        itinerarios, rutas y planificación del viaje. Podemos sugerir rutas
        óptimas en función de sus intereses, el tiempo disponible y las
        condiciones de la carretera.
      </p>
    ),
  },
  {
    q: "¿Pueden organizar actividades como safaris o avistamiento de ballenas?",
    plainText:
      "El conductor puede llevarle hasta la entrada del parque o al punto de embarque. Sin embargo, SLTCS no gestiona las reservas de actividades. Le recomendamos reservar estas actividades con antelación a través de operadores locales o plataformas en línea.",
    a: (
      <>
        <p>
          El conductor puede llevarle hasta la entrada del parque o al punto de
          embarque. Sin embargo,{" "}
          <strong>SLTCS no gestiona las reservas de actividades</strong>.
        </p>
        <p className="mt-2">
          Le recomendamos reservar estas actividades con antelación a través de
          operadores locales o plataformas en línea.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          ※ Las tarifas de entrada a los parques nacionales, safaris,
          avistamiento de ballenas y otras actividades no están incluidas en el
          precio del charter.
        </p>
      </>
    ),
  },
  {
    q: "¿Puedo confiar en las habilidades de conducción y la puntualidad del conductor?",
    plainText:
      "Todos nuestros conductores poseen licencias oficiales de Conductor Turístico o Conductor Guía de Sri Lanka, expedidas por la SLTDA. Están formados profesionalmente, se centran en la seguridad y son muy valorados por clientes anteriores.",
    a: (
      <p>
        Todos nuestros conductores poseen{" "}
        <strong>
          licencias oficiales de Conductor Turístico o Conductor Guía de Sri
          Lanka
        </strong>
        , expedidas por la SLTDA. Están formados profesionalmente, se centran
        en la seguridad y son muy valorados por clientes anteriores.
      </p>
    ),
  },
  {
    q: "¿Se puede proporcionar silla de bebé o silla infantil?",
    plainText:
      "Sí, podemos preparar sillas infantiles bajo petición. Indíquenos el número de niños y sus edades aproximadas al realizar la consulta. Tenga en cuenta que la disponibilidad puede variar según el conductor asignado.",
    a: (
      <p>
        Sí, podemos preparar sillas infantiles bajo petición. Indíquenos el
        número de niños y sus edades aproximadas al realizar la consulta. Tenga
        en cuenta que la disponibilidad puede variar según el conductor
        asignado.
      </p>
    ),
  },
  {
    q: "¿El encuentro con el conductor se realizará sin problemas?",
    plainText:
      "Sí. Una vez confirmada su reserva, le facilitaremos los datos de contacto del conductor y las instrucciones de encuentro. El conductor le esperará en el punto acordado con un cartel con su nombre. Si surge algún problema, puede contactarnos directamente.",
    a: (
      <>
        <p>
          Sí. Una vez confirmada su reserva, le facilitaremos los datos de
          contacto del conductor y las instrucciones de encuentro. El conductor
          le esperará en el punto acordado con un cartel con su nombre.
        </p>
        <p className="mt-2">
          Si surge algún problema, puede contactarnos directamente y le
          ayudaremos a resolverlo.
        </p>
      </>
    ),
  },
  {
    q: "¿Puede el conductor proporcionar comentarios y orientación en los lugares turísticos?",
    plainText:
      "Sí. Los conductores del Plan Plata y superiores son Conductores Guía certificados por la SLTDA, con amplios conocimientos sobre la historia, la cultura y la gastronomía de Sri Lanka. Pueden explicarle los lugares de interés y llevarle a lugares ocultos que no encontrará en las guías turísticas habituales.",
    a: (
      <>
        <p>
          Sí. Los conductores del{" "}
          <strong>Plan Plata y superiores</strong> son Conductores Guía
          certificados por la SLTDA, con amplios conocimientos sobre la
          historia, la cultura y la gastronomía de Sri Lanka.
        </p>
        <p className="mt-2">
          Pueden explicarle los lugares de interés y llevarle a lugares ocultos
          que no encontrará en las guías turísticas habituales.
        </p>
      </>
    ),
  },
  {
    q: "¿Qué métodos de pago se aceptan?",
    plainText:
      "No se requiere pago anticipado. Cuando conozca a su conductor en Sri Lanka, abonará la tarifa de servicio con tarjeta de crédito. La tarifa de transporte del conductor se paga directamente al conductor en la moneda de su elección: la mitad el primer día y la otra mitad el último día.",
    a: (
      <>
        <p>
          <strong>No se requiere pago anticipado.</strong> Cuando conozca a su
          conductor en Sri Lanka, abonará la tarifa de servicio con{" "}
          <strong>tarjeta de crédito</strong>. La tarifa de transporte del
          conductor se paga directamente al conductor en la moneda de su
          elección:{" "}
          <strong>la mitad el primer día</strong> y la{" "}
          <strong>otra mitad el último día</strong>.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ※ No dude en contactarnos si tiene preguntas sobre los métodos de
          pago.
        </p>
      </>
    ),
  },
  {
    q: "¿Qué está incluido en el precio y qué no?",
    plainText:
      "Incluido: coste del vehículo (fabricación japonesa), salario, comidas y alojamiento del conductor, seguro del vehículo, peajes de autopista y tasas de aparcamiento. No incluido: propinas (opcionales), entradas a atracciones turísticas, safari, avistamiento de ballenas y otras actividades.",
    a: (
      <>
        <p className="font-semibold">Incluido:</p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
          <li>Coste del vehículo (fabricación japonesa)</li>
          <li>Salario, comidas y alojamiento del conductor</li>
          <li>Seguro del vehículo</li>
          <li>Peajes de autopista y tasas de aparcamiento</li>
        </ul>
        <p className="font-semibold mt-3">No incluido:</p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
          <li>Propinas (opcionales)</li>
          <li>Entradas a atracciones turísticas</li>
          <li>Safari, avistamiento de ballenas y otras actividades</li>
        </ul>
        <p className="mt-3 text-xs text-gray-500">
          ※ Las condiciones de transporte pueden cambiar debido a modificaciones
          del itinerario el mismo día, solicitudes adicionales o retrasos (a
          acordar entre usted y el conductor).
        </p>
      </>
    ),
  },
  {
    q: "¿Qué pasa si no puedo reservar el tren del té? ¿Pueden organizarlo?",
    plainText:
      "Le pedimos que gestione las reservas de ferrocarril por su cuenta en línea. Recomendamos utilizar 12Go.Asia para las reservas. Si no puede conseguir reserva, podemos proporcionarle información de referencia desde el punto de vista del transporte. SLTCS no gestiona reservas ni ventas de ferrocarril u otros transportes.",
    a: (
      <>
        <p>
          Le pedimos que gestione las reservas de ferrocarril por su cuenta en
          línea. Recomendamos utilizar <strong>12Go.Asia</strong> para las
          reservas.
        </p>
        <p className="mt-2">
          Si no puede conseguir reserva, podemos proporcionarle información de
          referencia desde el punto de vista del transporte, como los tramos
          donde viajar de pie también resulta agradable.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ※ SLTCS no gestiona reservas ni ventas de ferrocarril u otros
          transportes.
        </p>
      </>
    ),
  },
  {
    q: "¿Qué ocurre si el itinerario o los planes cambian en el último momento?",
    plainText:
      "No se requiere pago anticipado antes de su llegada a Sri Lanka. Hasta 7 días antes del inicio del viaje: sin cargo por cancelación. Entre 2 y 6 días antes: sin pago anticipado requerido; la cancelación se acepta hasta 7 días antes. El día anterior o el mismo día del viaje: sin reembolso por ningún motivo.",
    a: (
      <>
        <ul className="text-sm text-white space-y-2">
          <li>
            <strong>Hasta 7 días antes del inicio del viaje:</strong> Sin cargo
            por cancelación. Cualquier tarifa de servicio ya abonada será
            reembolsada (menos los costes reales como las comisiones de pago).
          </li>
          <li>
            <strong>Entre 2 y 6 días antes del inicio del viaje:</strong> No se
            requiere pago anticipado antes de su llegada a Sri Lanka. La
            cancelación se acepta hasta 7 días antes de su viaje. Incluso
            después de ese plazo, si su vuelo se cancela por guerra, condiciones
            meteorológicas u otras circunstancias ajenas a su voluntad, también
            aceptaremos su cancelación.
          </li>
          <li>
            <strong>El día anterior o el mismo día del viaje:</strong> Sin
            reembolso por ningún motivo.
          </li>
        </ul>
        <p className="mt-2 text-xs text-white/60">
          ※ Las tarifas de transporte del conductor se liquidan directamente in
          situ y, por tanto, quedan fuera del ámbito de los reembolsos de SLTCS.
        </p>
      </>
    ),
  },
  {
    q: "¿Puedo viajar aunque llegue tarde por la noche el primer día?",
    plainText:
      "En principio, sí, pero dependiendo de la disponibilidad del conductor, las consideraciones de seguridad y las condiciones de la carretera, puede que no siempre sea posible. Si necesita un traslado nocturno, consúltenos con antelación. Haremos todo lo posible para adaptarnos a sus necesidades de forma flexible.",
    a: (
      <p>
        En principio, sí, pero dependiendo de la disponibilidad del conductor,
        las consideraciones de seguridad y las condiciones de la carretera,
        puede que no siempre sea posible. Si necesita un traslado nocturno,{" "}
        <strong>consúltenos con antelación</strong>. Haremos todo lo posible
        para adaptarnos a sus necesidades de forma flexible.
      </p>
    ),
  },
  {
    q: "Cuénteme sobre la presentación del conductor.",
    plainText:
      "Para el Plan Plata y superiores, presentamos conductores turísticos registrados en la SLTDA (Autoridad de Desarrollo del Turismo de Sri Lanka). Haremos todo lo posible para atender las solicitudes de conductores de habla inglesa, pero no podemos garantizar la disponibilidad debido a las condiciones de la oferta.",
    a: (
      <p>
        Para el <strong>Plan Plata y superiores</strong>, presentamos
        conductores turísticos registrados en la SLTDA (Autoridad de Desarrollo
        del Turismo de Sri Lanka). Haremos todo lo posible para atender las
        solicitudes de conductores de habla inglesa, pero no podemos garantizar
        la disponibilidad debido a las condiciones de la oferta.
      </p>
    ),
  },
  {
    q: "¿Es necesario contratar un seguro de viaje?",
    plainText:
      "Recomendamos encarecidamente contratar un seguro de viaje. Aunque la ley de Sri Lanka exige que todos los vehículos tengan seguro, los niveles de cobertura son bajos: incluso en caso de accidente mortal, la indemnización asciende a aproximadamente USD 1.000. Contratar su propio seguro de viaje es la opción más fiable.",
    a: (
      <>
        <p>
          <strong>Recomendamos encarecidamente contratar un seguro de viaje.</strong>{" "}
          Aunque la ley de Sri Lanka exige que todos los vehículos tengan
          seguro, los niveles de cobertura son bajos: incluso en caso de
          accidente mortal, la indemnización asciende a aproximadamente USD
          1.000.
        </p>
        <p className="mt-2">
          Para cubrir gastos médicos, daños materiales y responsabilidad civil
          durante su viaje, contratar su propio seguro de viaje es la opción
          más fiable. Algunas tarjetas de crédito incluyen seguro de viaje como
          beneficio; consulte los términos y condiciones de su tarjeta.
        </p>
      </>
    ),
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(201,168,76,0.2)",
        marginBottom: "0.5rem",
      }}
    >
      <button
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.25rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          color: "#fff",
        }}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          style={{
            flexShrink: 0,
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            background: "#C9A84C",
            color: "#0d1117",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "0.875rem",
          }}
        >
          Q
        </span>
        <span style={{ flex: 1, fontWeight: 600, fontSize: "1rem", lineHeight: 1.5 }}>
          {item.q}
        </span>
        <span
          style={{
            flexShrink: 0,
            fontSize: "1.5rem",
            color: "#C9A84C",
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          ›
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "0 0 1.25rem 0",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              background: "rgba(201,168,76,0.15)",
              border: "1px solid #C9A84C",
              color: "#C9A84C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "0.875rem",
            }}
          >
            A
          </span>
          <div
            style={{
              flex: 1,
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
            }}
          >
            {item.a}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const prevDesc = meta.content;
    meta.content = PAGE_DESC;

    // JSON-LD FAQ schema
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.plainText,
        },
      })),
    };
    // ─ Canonical ─────────────────────────────────────────────────────────────────
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.href ?? '';
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://es.srilanka-charter.com/faq";
    // ─ hreflang ──────────────────────────────────────────────────────────────────
    const hreflangData = [
      { hreflang: "es", href: "https://es.srilanka-charter.com/faq" },
      { hreflang: "en", href: "https://en.srilanka-charter.com/faq" },
      { hreflang: "fr", href: "https://fr.srilanka-charter.com/faq" },
      { hreflang: "de", href: "https://de.srilanka-charter.com/faq" },
      { hreflang: "x-default", href: "https://en.srilanka-charter.com/faq" },
    ];
    const existingHreflangs = document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());
    const addedHreflangs: HTMLLinkElement[] = [];
    hreflangData.forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.setAttribute('hreflang', hreflang);
      link.href = href;
      document.head.appendChild(link);
      addedHreflangs.push(link);
    });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (meta) meta.content = prevDesc;
      document.getElementById("faq-jsonld")?.remove();
    
      addedHreflangs.forEach((el) => el.remove());
      if (canonical) canonical.href = prevCanonical;
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d1117",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar />

      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #1a1f2e 50%, #0d1117 100%)",
          padding: "8rem 1.5rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              color: "#C9A84C",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            SLTCS – ALQUILER DE COCHE CON CONDUCTOR EN SRI LANKA
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            FAQ
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1.5rem",
            }}
          >
            Preguntas Frecuentes sobre SLTCS (Alquiler de Coche con Conductor en Sri Lanka)
          </p>
          <nav style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" style={{ color: "#C9A84C", textDecoration: "none" }}>
              Inicio
            </Link>
            <span style={{ margin: "0 0.5rem" }}>/</span>
            <span>FAQ</span>
          </nav>
        </div>
      </section>

      {/* ── Intro ── */}
      <section style={{ padding: "3rem 1.5rem", background: "rgba(201,168,76,0.04)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, fontSize: "1rem" }}>
            A continuación encontrará respuestas a las preguntas más frecuentes de los clientes
            que están considerando o utilizando SLTCS (Alquiler de Coche con Conductor en Sri Lanka).
            Si tiene alguna pregunta adicional, no dude en ponerse en contacto con nosotros.
          </p>
        </div>
      </section>

      {/* ── Table of Contents ── */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#C9A84C",
              marginBottom: "1.5rem",
              borderLeft: "4px solid #C9A84C",
              paddingLeft: "0.75rem",
            }}
          >
            Índice de Contenidos
          </h2>
          <ol
            style={{
              listStyle: "decimal",
              paddingLeft: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {FAQ_ITEMS.map((item, i) => (
              <li key={i} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9375rem" }}>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#C9A84C",
                    cursor: "pointer",
                    textAlign: "left",
                    textDecoration: "underline",
                    fontSize: "0.9375rem",
                    padding: 0,
                  }}
                  onClick={() => {
                    setOpenIndex(i);
                    setTimeout(() => {
                      document
                        .getElementById(`faq-item-${i}`)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 50);
                  }}
                >
                  {item.q}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section style={{ padding: "2rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {FAQ_ITEMS.map((item, i) => (
            <div id={`faq-item-${i}`} key={i} style={{ scrollMarginTop: "5rem" }}>
              <AccordionItem
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "4rem 1.5rem",
          background: "linear-gradient(135deg, #1a1208 0%, #2a1f0a 100%)",
          textAlign: "center",
          borderTop: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "0.75rem", fontSize: "0.875rem" }}>
            Si su pregunta no está aquí respondida
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              color: "#fff",
            }}
          >
            No dude en contactarnos
          </h2>
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/#contact";
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#C9A84C",
              color: "#0d1117",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            💬 Consulta Gratuita
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#080b10",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          padding: "3rem 1.5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: "1rem", color: "#C9A84C", marginBottom: "0.5rem" }}>
              Alquiler de Coche con Conductor en Sri Lanka
              <span style={{ display: "block", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "0.25rem" }}>
                SLTCS
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
              Servicio de charter completamente privado por todo Sri Lanka con un conductor dedicado de habla inglesa.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
              NAVEGACIÓN
            </div>
            <Link href="/#planes" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>Planes</Link>
            <Link href="/#itinerario" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>Itinerario Modelo</Link>
            <Link href="/price" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>Precio</Link>
            <Link href="/faq" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>FAQ</Link>
            <Link href="/#contact" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>Contacto</Link>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            textAlign: "center",
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Copyright © Alquiler de Coche con Conductor en Sri Lanka All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
