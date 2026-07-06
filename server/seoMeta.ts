/**
 * server/seoMeta.ts
 *
 * URL ごとのページ固有メタタグ定義と、index.html への注入ロジック。
 * Express が各リクエストに対して index.html を返す前にこのモジュールで
 * <title>・<meta description>・<link canonical>・<link hreflang>・JSON-LD を
 * 静的に注入することで、Googlebot が初期 HTML でメタタグを読み取れるようにする。
 */

const BASE_ES = "https://es.srilanka-charter.com";
const BASE_EN = "https://en.srilanka-charter.com";
const BASE_FR = "https://fr.srilanka-charter.com";
const BASE_DE = "https://de.srilanka-charter.com";

interface HreflangEntry {
  hreflang: string;
  href: string;
}

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  hreflangs: HreflangEntry[];
  jsonLd?: object[];
}

function hreflangSet(path: string): HreflangEntry[] {
  return [
    { hreflang: "es", href: `${BASE_ES}${path}` },
    { hreflang: "en", href: `${BASE_EN}${path}` },
    { hreflang: "fr", href: `${BASE_FR}${path}` },
    { hreflang: "de", href: `${BASE_DE}${path}` },
    { hreflang: "x-default", href: `${BASE_EN}${path}` },
  ];
}

const PAGE_META_MAP: Record<string, PageMeta> = {
  "/": {
    title: "SLTCS｜Alquiler de coche con conductor privado en Sri Lanka",
    description:
      "Alquiler de coche con conductor privado en Sri Lanka. Chófer certificado, totalmente privado y flexible. Itinerarios a medida para viajeros hispanohablantes.",
    canonical: `${BASE_ES}/`,
    hreflangs: [
      { hreflang: "es", href: `${BASE_ES}/` },
      { hreflang: "en", href: `${BASE_EN}/` },
      { hreflang: "fr", href: `${BASE_FR}/` },
      { hreflang: "de", href: `${BASE_DE}/` },
      { hreflang: "ru", href: "https://ru.srilanka-charter.com/" },
      { hreflang: "nl", href: "https://nl.srilanka-charter.com/" },
      { hreflang: "ms", href: "https://ms.srilanka-charter.com/" },
      { hreflang: "sv", href: "https://sv.srilanka-charter.com/" },
      { hreflang: "ja", href: "https://sltcs.srilanka-charter.com/" },
      { hreflang: "x-default", href: `${BASE_EN}/` },
    ],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "SLTCS — Sri Lanka Charter Service",
        description:
          "Servicio de alquiler de coche con conductor privado en Sri Lanka para viajeros hispanohablantes.",
        url: `${BASE_ES}/`,
        image: `${BASE_ES}/og-image.jpg`,
        telephone: "+94-77-XXX-XXXX",
        address: {
          "@type": "PostalAddress",
          addressCountry: "LK",
        },
        priceRange: "$$",
        currenciesAccepted: "USD, EUR, GBP, AUD",
        paymentAccepted: "Cash, Credit Card",
        areaServed: "Sri Lanka",
        serviceType: "Private Driver Charter",
      },
    ],
  },
  "/price": {
    title: "Precios de Alquiler de Coche con Conductor en Sri Lanka | SLTCS",
    description:
      "Precios de alquiler de coche con conductor en Sri Lanka. Planes Bronce, Plata y Oro desde $270. Sedán, Furgoneta y Van Grande. Precios en USD, GBP, EUR y AUD.",
    canonical: `${BASE_ES}/price`,
    hreflangs: hreflangSet("/price"),
  },
  "/faq": {
    title:
      "Preguntas Frecuentes (FAQ) | SLTCS Alquiler de Coche con Conductor en Sri Lanka",
    description:
      "Respuestas a las preguntas más frecuentes sobre SLTCS: propinas, actividades, pagos, cancelaciones, presentación del conductor y más. Alquiler de coche con conductor privado en Sri Lanka.",
    canonical: `${BASE_ES}/faq`,
    hreflangs: hreflangSet("/faq"),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cuánto cuesta contratar un conductor privado en Sri Lanka?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El precio varía según el plan y el vehículo. Los planes comienzan desde $270 para el Plan Bronce con sedán. Consulta nuestra página de precios para más detalles.",
            },
          },
          {
            "@type": "Question",
            name: "¿El conductor habla español?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nuestros conductores hablan inglés con fluidez. Para viajeros hispanohablantes, la comunicación se realiza principalmente en inglés, aunque podemos coordinar con anticipación.",
            },
          },
        ],
      },
    ],
  },
  "/voice": {
    title: "Opiniones de Clientes | Conductor Privado Sri Lanka | SLTCS",
    description:
      "Opiniones reales de viajeros que han explorado Sri Lanka con conductores privados de SLTCS. Puntuación general 4.9 — Conductor 5.0 · Vehículo 4.8 · Operador 4.8.",
    canonical: `${BASE_ES}/voice`,
    hreflangs: [
      { hreflang: "es", href: `${BASE_ES}/voice` },
      { hreflang: "en", href: `${BASE_EN}/voice` },
      { hreflang: "fr", href: "https://fr.srilanka-charter.com/voice" },
      { hreflang: "de", href: "https://de.srilanka-charter.com/voice" },
      { hreflang: "nl", href: "https://nl.srilanka-charter.com/voice" },
      { hreflang: "x-default", href: `${BASE_EN}/voice` },
    ],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "SLTCS – Alquiler de Coche con Conductor en Sri Lanka",
        url: `${BASE_ES}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "22",
        },
      },
    ],
  },
  "/information/guia-conductor-privado": {
    title: "Guía de Conductor Privado en Sri Lanka | SLTCS",
    description:
      "Todo lo que necesitas saber sobre contratar un conductor privado en Sri Lanka — desde elegir el servicio adecuado hasta entender qué incluye tu charter.",
    canonical: `${BASE_ES}/information/guia-conductor-privado`,
    hreflangs: hreflangSet("/information/guia-conductor-privado"),
  },
  "/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka":
    {
      title:
        "Cómo Contratar un Conductor Privado en Sri Lanka: Guía Paso a Paso (2026) | SLTCS",
      description:
        "Guía completa para contratar un conductor privado en Sri Lanka. Aprende a verificar licencias SLTDA, qué incluye la tarifa diaria, qué preguntas hacer y cómo evitar errores comunes.",
      canonical: `${BASE_ES}/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka`,
      hreflangs: hreflangSet(
        "/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka"
      ),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Cómo Contratar un Conductor Privado en Sri Lanka: Guía Paso a Paso (2026)",
          description:
            "Guía completa para contratar un conductor privado en Sri Lanka. Aprende a verificar licencias SLTDA, qué incluye la tarifa diaria, qué preguntas hacer y cómo evitar errores comunes.",
          author: { "@type": "Organization", name: "SLTCS" },
          publisher: {
            "@type": "Organization",
            name: "SLTCS",
            url: BASE_ES,
          },
          url: `${BASE_ES}/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka`,
          inLanguage: "es",
        },
      ],
    },
  "/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa":
    {
      title:
        "Alquiler de Coche con Conductor en Sri Lanka: Guía Completa (2026) | SLTCS",
      description:
        "Compara todas las opciones de transporte en Sri Lanka: alquiler sin conductor, taxis, trenes y charter con conductor privado. Guía completa para primeras visitas con precios y consejos prácticos.",
      canonical: `${BASE_ES}/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa`,
      hreflangs: hreflangSet(
        "/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa"
      ),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Alquiler de Coche con Conductor en Sri Lanka: Guía Completa (2026)",
          description:
            "Compara todas las opciones de transporte en Sri Lanka: alquiler sin conductor, taxis, trenes y charter con conductor privado.",
          author: { "@type": "Organization", name: "SLTCS" },
          publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
          url: `${BASE_ES}/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa`,
          inLanguage: "es",
        },
      ],
    },
  "/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico":
    {
      title:
        "Chófer Guía vs Guía Turístico en Sri Lanka: ¿Cuál Necesitas? (2026) | SLTCS",
      description:
        "Descubre la diferencia entre Conductor Turístico, Chófer Guía y Guía Nacional en Sri Lanka. Guía completa para elegir el tipo de conductor adecuado para tu viaje con SLTCS.",
      canonical: `${BASE_ES}/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico`,
      hreflangs: hreflangSet(
        "/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico"
      ),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Chófer Guía vs Guía Turístico en Sri Lanka: ¿Cuál Necesitas? (2026)",
          description:
            "Descubre la diferencia entre Conductor Turístico, Chófer Guía y Guía Nacional en Sri Lanka.",
          author: { "@type": "Organization", name: "SLTCS" },
          publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
          url: `${BASE_ES}/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico`,
          inLanguage: "es",
        },
      ],
    },
  "/information/guia-costes-reserva": {
    title: "Guía de Costes y Reserva — Sri Lanka Conductor Privado | SLTCS",
    description:
      "Precios transparentes, listas de verificación y todo lo que necesitas saber antes de reservar tu conductor privado en Sri Lanka.",
    canonical: `${BASE_ES}/information/guia-costes-reserva`,
    hreflangs: hreflangSet("/information/guia-costes-reserva"),
  },
  "/information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist":
    {
      title:
        "Contratar Conductor en Sri Lanka: Costes, Seguridad y Lista de Verificación (2026) | SLTCS",
      description:
        "Guía completa sobre costes y seguridad para contratar un conductor privado en Sri Lanka. Lista de verificación de 7 puntos antes de reservar, precios transparentes 2026.",
      canonical: `${BASE_ES}/information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist`,
      hreflangs: hreflangSet(
        "/information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist"
      ),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Contratar Conductor en Sri Lanka: Costes, Seguridad y Lista de Verificación (2026)",
          description:
            "Guía completa sobre costes y seguridad para contratar un conductor privado en Sri Lanka.",
          author: { "@type": "Organization", name: "SLTCS" },
          publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
          url: `${BASE_ES}/information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist`,
          inLanguage: "es",
        },
      ],
    },
  "/information/viajes-familia-grupos": {
    title: "Viajes en Familia y Grupos — Sri Lanka Conductor Privado | SLTCS",
    description:
      "Guías prácticas para familias y grupos pequeños que viajan a Sri Lanka en vehículo privado con conductor.",
    canonical: `${BASE_ES}/information/viajes-familia-grupos`,
    hreflangs: hreflangSet("/information/viajes-familia-grupos"),
  },
  "/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos":
    {
      title:
        "Alquiler de Furgoneta con Conductor en Sri Lanka: Familias y Grupos Pequeños (2026) | SLTCS",
      description:
        "Guía completa para alquilar una furgoneta con conductor en Sri Lanka para familias y grupos pequeños. Tipos de vehículo, precios 2026, planes y consejos prácticos.",
      canonical: `${BASE_ES}/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos`,
      hreflangs: hreflangSet(
        "/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos"
      ),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Alquiler de Furgoneta con Conductor en Sri Lanka: Familias y Grupos Pequeños (2026)",
          description:
            "Guía completa para alquilar una furgoneta con conductor en Sri Lanka para familias y grupos pequeños.",
          author: { "@type": "Organization", name: "SLTCS" },
          publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
          url: `${BASE_ES}/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos`,
          inLanguage: "es",
        },
      ],
    },
  "/information/itinerarios": {
    title: "Itinerarios Sri Lanka en Conductor Privado | SLTCS",
    description:
      "Itinerarios modelo para explorar Sri Lanka en vehículo privado con conductor — desde 5 días hasta 2 semanas.",
    canonical: `${BASE_ES}/information/itinerarios`,
    hreflangs: hreflangSet("/information/itinerarios"),
  },
  "/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias": {
    title:
      "Itinerario Sri Lanka 4 Noches / 5 Días: Ruta Cultural en Vehículo Privado | SLTCS",
    description:
      "Itinerario completo de 4 noches y 5 días por Sri Lanka en conductor privado. Sigiriya, Kandy, Nuwara Eliya y Galle — los destinos UNESCO más emblemáticos.",
    canonical: `${BASE_ES}/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias`,
    hreflangs: hreflangSet(
      "/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias"
    ),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Itinerario Sri Lanka 4 Noches / 5 Días: Ruta Cultural en Vehículo Privado",
        description:
          "Itinerario completo de 4 noches y 5 días por Sri Lanka en conductor privado.",
        author: { "@type": "Organization", name: "SLTCS" },
        publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
        url: `${BASE_ES}/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias`,
        inLanguage: "es",
      },
    ],
  },
  "/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias": {
    title:
      "Itinerario Sri Lanka 5 Noches / 6 Días: Cultura + Naturaleza en Vehículo Privado (2026) | SLTCS",
    description:
      "Itinerario completo de 5 noches y 6 días por Sri Lanka en conductor privado. Sigiriya, Kandy, Ella, Yala y Galle — la combinación perfecta de cultura y naturaleza.",
    canonical: `${BASE_ES}/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias`,
    hreflangs: hreflangSet(
      "/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias"
    ),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Itinerario Sri Lanka 5 Noches / 6 Días: Cultura + Naturaleza en Vehículo Privado (2026)",
        description:
          "Itinerario completo de 5 noches y 6 días por Sri Lanka en conductor privado.",
        author: { "@type": "Organization", name: "SLTCS" },
        publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
        url: `${BASE_ES}/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias`,
        inLanguage: "es",
      },
    ],
  },
  "/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias": {
    title:
      "Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla en Vehículo Privado (2026) | SLTCS",
    description:
      "Itinerario completo de 6 noches y 7 días por Sri Lanka en conductor privado. Sigiriya, Kandy, Nuwara Eliya, Ella, Yala y Galle — la experiencia más completa de la isla.",
    canonical: `${BASE_ES}/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias`,
    hreflangs: hreflangSet(
      "/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias"
    ),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Itinerario Sri Lanka 6 Noches / 7 Días: Experiencia Completa de la Isla en Vehículo Privado (2026)",
        description:
          "Itinerario completo de 6 noches y 7 días por Sri Lanka en conductor privado.",
        author: { "@type": "Organization", name: "SLTCS" },
        publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
        url: `${BASE_ES}/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias`,
        inLanguage: "es",
      },
    ],
  },
  "/information/itinerarios/ruta-triangulo-cultural-sri-lanka": {
    title:
      "Itinerario Triángulo Cultural de Sri Lanka 5–7 Días: Patrimonio UNESCO en Vehículo Privado (2026) | SLTCS",
    description:
      "Itinerario completo del Triángulo Cultural de Sri Lanka en 5 a 7 días en conductor privado. Anuradhapura, Sigiriya, Dambulla, Polonnaruwa y Kandy — los 5 sitios Patrimonio UNESCO del norte.",
    canonical: `${BASE_ES}/information/itinerarios/ruta-triangulo-cultural-sri-lanka`,
    hreflangs: hreflangSet(
      "/information/itinerarios/ruta-triangulo-cultural-sri-lanka"
    ),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Itinerario Triángulo Cultural de Sri Lanka 5–7 Días: Patrimonio UNESCO en Vehículo Privado (2026)",
        description:
          "Itinerario completo del Triángulo Cultural de Sri Lanka en 5 a 7 días en conductor privado.",
        author: { "@type": "Organization", name: "SLTCS" },
        publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
        url: `${BASE_ES}/information/itinerarios/ruta-triangulo-cultural-sri-lanka`,
        inLanguage: "es",
      },
    ],
  },
  "/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas": {
    title:
      "Itinerario Sri Lanka 10 Días / 2 Semanas: La Ruta Definitiva por la Isla (2026) | SLTCS",
    description:
      "Itinerario completo de Sri Lanka en 10 días a 2 semanas en conductor privado. Sigiriya, Kandy, tren del té, Ella, Yala y Galle — la ruta definitiva para primeros visitantes que quieren la experiencia completa.",
    canonical: `${BASE_ES}/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas`,
    hreflangs: hreflangSet(
      "/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas"
    ),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Itinerario Sri Lanka 10 Días / 2 Semanas: La Ruta Definitiva por la Isla (2026)",
        description:
          "Itinerario completo de Sri Lanka en 10 días a 2 semanas en conductor privado.",
        author: { "@type": "Organization", name: "SLTCS" },
        publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
        url: `${BASE_ES}/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas`,
        inLanguage: "es",
      },
    ],
  },
  "/information/consejos-viaje-seguridad": {
    title:
      "Consejos de Viaje y Seguridad — Sri Lanka Conductor Privado | SLTCS",
    description:
      "Guías prácticas sobre clima, seguridad y consejos de viaje para planificar tu viaje a Sri Lanka con conductor privado.",
    canonical: `${BASE_ES}/information/consejos-viaje-seguridad`,
    hreflangs: hreflangSet("/information/consejos-viaje-seguridad"),
  },
  "/information/consejos-viaje-seguridad/mejor-epoca-visitar-sri-lanka": {
    title:
      "Cuándo Visitar Sri Lanka: Guía del Clima Mes a Mes (2026) | SLTCS",
    description:
      "Descubre cuándo es el mejor momento para visitar Sri Lanka. Guía completa del clima mes a mes, los dos sistemas de monzón, temporada alta y baja, playas, safaris y tierras altas del té.",
    canonical: `${BASE_ES}/information/consejos-viaje-seguridad/mejor-epoca-visitar-sri-lanka`,
    hreflangs: hreflangSet(
      "/information/consejos-viaje-seguridad/mejor-epoca-visitar-sri-lanka"
    ),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Cuándo Visitar Sri Lanka: Guía del Clima Mes a Mes (2026)",
        description:
          "Descubre cuándo es el mejor momento para visitar Sri Lanka. Guía completa del clima mes a mes, los dos sistemas de monzón.",
        author: { "@type": "Organization", name: "SLTCS" },
        publisher: { "@type": "Organization", name: "SLTCS", url: BASE_ES },
        url: `${BASE_ES}/information/consejos-viaje-seguridad/mejor-epoca-visitar-sri-lanka`,
        inLanguage: "es",
      },
    ],
  },
};

/** noindex を付与するパス（検索インデックス不要ページ） */
const NOINDEX_PATHS = new Set(["/gracias", "/404"]);

/**
 * index.html の <head> 内にページ固有のメタタグを注入して返す。
 * 該当するページ定義がない場合は元の HTML をそのまま返す。
 */
export function injectPageMeta(html: string, urlPath: string): string {
  // クエリ文字列・末尾スラッシュを正規化（ルート "/" は除く）
  const normalizedPath =
    urlPath.split("?")[0].replace(/\/$/, "") || "/";

  const meta = PAGE_META_MAP[normalizedPath];
  const isNoindex = NOINDEX_PATHS.has(normalizedPath);

  // ─ 既存の canonical / hreflang / meta description を除去（index.html に書かれているデフォルト値を上書き）
  let result = html
    .replace(/<link rel="canonical"[^>]*>/gi, "")
    .replace(/<link rel="alternate" hreflang[^>]*>/gi, "")
    .replace(/<meta name="description"[^>]*>/gi, "");

  if (!meta && !isNoindex) {
    return result;
  }

  const titleTag = meta
    ? `<title>${escapeHtml(meta.title)}</title>`
    : `<title>SLTCS｜Alquiler de coche con conductor privado en Sri Lanka</title>`;

  const descTag = meta
    ? `<meta name="description" content="${escapeHtml(meta.description)}" />`
    : "";

  const canonicalTag = meta
    ? `<link rel="canonical" href="${meta.canonical}" />`
    : "";

  const hreflangTags = meta
    ? meta.hreflangs
        .map(
          (h) =>
            `<link rel="alternate" hreflang="${h.hreflang}" href="${h.href}" />`
        )
        .join("\n    ")
    : "";

  const noindexTag = isNoindex
    ? `<meta name="robots" content="noindex, nofollow" />`
    : "";

  const jsonLdTags =
    meta?.jsonLd
      ?.map(
        (ld) =>
          `<script type="application/ld+json">${JSON.stringify(ld)}</script>`
      )
      .join("\n    ") ?? "";

  // OGP タグも更新
  const ogTitleTag = meta
    ? `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
    : "";
  const ogDescTag = meta
    ? `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
    : "";
  const ogUrlTag = meta
    ? `<meta property="og:url" content="${meta.canonical}" />`
    : "";

  const injected = [
    titleTag,
    descTag,
    canonicalTag,
    hreflangTags,
    noindexTag,
    jsonLdTags,
    ogTitleTag,
    ogDescTag,
    ogUrlTag,
  ]
    .filter(Boolean)
    .join("\n    ");

  // 既存の <title> タグを置換し、その直後に追加タグを注入
  result = result.replace(
    /<title>[^<]*<\/title>/i,
    `${injected}`
  );

  // OGP の既存タグを除去（重複防止）
  result = result
    .replace(/<meta property="og:title"[^>]*>/gi, "")
    .replace(/<meta property="og:description"[^>]*>/gi, "")
    .replace(/<meta property="og:url"[^>]*>/gi, "");

  return result;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
