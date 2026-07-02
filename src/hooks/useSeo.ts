import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description?: string;
  /** JSON-LD structured data object, injected as a <script> tag. */
  jsonLd?: Record<string, unknown>;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Lightweight client-side SEO for an SPA: title, description, OG tags + JSON-LD. */
export default function useSeo({ title, description, jsonLd }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title.includes('BYD Nepal') ? title : `${title} | BYD Nepal`;
    document.title = fullTitle;
    setMeta('property', 'og:title', fullTitle);
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
    }

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      script.dataset.seo = 'jsonld';
      document.head.appendChild(script);
    }
    return () => {
      if (script) script.remove();
    };
  }, [title, description, jsonLd]);
}
