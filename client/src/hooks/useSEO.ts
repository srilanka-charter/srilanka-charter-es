/**
 * useSEO.ts
 *
 * プロジェクトインストラクション準拠のSEOフック。
 * document.title などを直接操作する useEffect は使用禁止。
 * 必ずこのフックを使ってページ固有のSEOタグを設定すること。
 *
 * サーバー側（server/seoMeta.ts）でも同等のメタタグを注入しているため、
 * Googlebotは初期HTMLでメタタグを読み取れる（SSR的プリレンダリング）。
 * このフックはCSR後のSPA遷移時にメタタグを更新するために使用する。
 */

import { useEffect } from "react";

interface HreflangEntry {
  hreflang: string;
  href: string;
}

interface JsonLdObject {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

interface UseSEOOptions {
  /** ページ固有のtitle（必須） */
  title: string;
  /** ページ固有のdescription（120〜160文字推奨） */
  description: string;
  /** カノニカルURL（/から始まるパス） */
  path: string;
  /** OGP画像URL（任意） */
  ogImage?: string;
  /** noindexが必要なページはtrue */
  noindex?: boolean;
  /** JSON-LD構造化データの配列 */
  jsonLdList?: JsonLdObject[];
  /** JSON-LDのscript要素のIDプレフィックス（重複防止用） */
  jsonLdIdPrefix?: string;
  /** hreflangの上書き（指定しない場合はデフォルト4言語を自動生成） */
  hreflangs?: HreflangEntry[];
}

const BASE_ES = "https://es.srilanka-charter.com";
const BASE_EN = "https://en.srilanka-charter.com";
const BASE_FR = "https://fr.srilanka-charter.com";
const BASE_DE = "https://de.srilanka-charter.com";
const BASE_NL = "https://nl.srilanka-charter.com";
const BASE_KO = "https://ko.srilanka-charter.com";

function defaultHreflangs(path: string): HreflangEntry[] {
  return [
    { hreflang: "es", href: `${BASE_ES}${path}` },
    { hreflang: "en", href: `${BASE_EN}${path}` },
    { hreflang: "fr", href: `${BASE_FR}${path}` },
    { hreflang: "de", href: `${BASE_DE}${path}` },
    { hreflang: "nl", href: `${BASE_NL}${path}` },
    { hreflang: "ko", href: `${BASE_KO}${path}` },
    { hreflang: "x-default", href: `${BASE_EN}${path}` },
  ];
}

/**
 * ページ固有のSEOタグを設定するフック。
 * SPA遷移後にメタタグをDOMに反映する。
 */
export function useSEO({
  title,
  description,
  path,
  ogImage,
  noindex = false,
  jsonLdList,
  jsonLdIdPrefix = "page",
  hreflangs,
}: UseSEOOptions): void {
  useEffect(() => {
    // ─ title ─────────────────────────────────────────────────────────────────
    const prevTitle = document.title;
    document.title = title;

    // ─ meta description ───────────────────────────────────────────────────────
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = metaDesc?.content ?? "";
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // ─ canonical ─────────────────────────────────────────────────────────────
    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.href ?? "";
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = `${BASE_ES}${path}`;

    // ─ hreflang ──────────────────────────────────────────────────────────────
    const existingHreflangs = document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());
    const hreflangEntries = hreflangs ?? defaultHreflangs(path);
    const addedHreflangs: HTMLLinkElement[] = [];
    hreflangEntries.forEach(({ hreflang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.setAttribute("hreflang", hreflang);
      link.href = href;
      document.head.appendChild(link);
      addedHreflangs.push(link);
    });

    // ─ robots (noindex) ───────────────────────────────────────────────────────
    let robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const prevRobots = robotsMeta?.content ?? "";
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.name = "robots";
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.content = "noindex, nofollow";
    } else if (robotsMeta) {
      robotsMeta.content = "index, follow";
    }

    // ─ OGP ───────────────────────────────────────────────────────────────────
    const ogTitleEl = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescEl = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const ogUrlEl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const prevOgTitle = ogTitleEl?.content ?? "";
    const prevOgDesc = ogDescEl?.content ?? "";
    const prevOgUrl = ogUrlEl?.content ?? "";
    if (ogTitleEl) ogTitleEl.content = title;
    if (ogDescEl) ogDescEl.content = description;
    if (ogUrlEl) ogUrlEl.content = `${BASE_ES}${path}`;

    // ─ og:image ───────────────────────────────────────────────────────────────
    let ogImageEl = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
    const prevOgImage = ogImageEl?.content ?? "";
    if (ogImage) {
      if (!ogImageEl) {
        ogImageEl = document.createElement("meta");
        ogImageEl.setAttribute("property", "og:image");
        document.head.appendChild(ogImageEl);
      }
      ogImageEl.content = ogImage;
    }

    // ─ JSON-LD ────────────────────────────────────────────────────────────────
    const addedJsonLdIds: string[] = [];
    if (jsonLdList && jsonLdList.length > 0) {
      jsonLdList.forEach((ld, i) => {
        const id = `${jsonLdIdPrefix}-jsonld-${i}`;
        document.getElementById(id)?.remove();
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        script.textContent = JSON.stringify(ld);
        document.head.appendChild(script);
        addedJsonLdIds.push(id);
      });
    }

    // ─ cleanup ────────────────────────────────────────────────────────────────
    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.content = prevDesc;
      if (canonicalEl) canonicalEl.href = prevCanonical;
      addedHreflangs.forEach((el) => el.remove());
      if (robotsMeta) robotsMeta.content = prevRobots;
      if (ogTitleEl) ogTitleEl.content = prevOgTitle;
      if (ogDescEl) ogDescEl.content = prevOgDesc;
      if (ogUrlEl) ogUrlEl.content = prevOgUrl;
      if (ogImageEl) ogImageEl.content = prevOgImage;
      addedJsonLdIds.forEach((id) => document.getElementById(id)?.remove());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, ogImage, noindex, jsonLdIdPrefix]);
}
