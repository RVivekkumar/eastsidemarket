import { useEffect } from "react";

const SITE_URL =
  typeof window !== "undefined" ? window.location.origin : "https://eastsidemarkethouston.com";
const SITE_NAME = "Eastside Market Houston";
const DEFAULT_TITLE = `${SITE_NAME} | 24/7 Gas, Groceries & Bitcoin ATM`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

function ensureMeta(nameOrProperty: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, nameOrProperty);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEO({ title, description, path = "", image }: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const fullUrl =
    path === "" || path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const imageUrl = image || `${SITE_URL}/og-image.png`;

  useEffect(() => {
    document.title = fullTitle;

    ensureMeta("description", description);
    ensureMeta("og:title", fullTitle, true);
    ensureMeta("og:description", description, true);
    ensureMeta("og:url", fullUrl, true);
    ensureMeta("og:type", "website", true);
    ensureMeta("og:site_name", SITE_NAME, true);
    ensureMeta("og:image", imageUrl, true);
    ensureMeta("og:locale", "en_US", true);

    ensureMeta("twitter:card", "summary_large_image");
    ensureMeta("twitter:title", fullTitle);
    ensureMeta("twitter:description", description);
    ensureMeta("twitter:image", imageUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [fullTitle, description, fullUrl, imageUrl]);

  return null;
}
