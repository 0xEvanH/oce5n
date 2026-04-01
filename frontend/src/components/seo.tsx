import { useEffect } from "react";

/**
 * OCE5N Esports — SEO Component
 * Drop-in <SEO /> on every page/route to control meta tags dynamically.
 * No external dependency required — pure DOM manipulation.
 *
 * Usage:
 *   <SEO
 *     title="OCE5N Esports | Home"
 *     description="Multi-Media Gaming Team based in Columbus, Ohio. Since 2022."
 *     path="/"
 *   />
 */

const SITE = {
  name: "OCE5N",
  url: "https://oce5n.com",
  twitter: "@OCE5NS",
  logo: "https://oce5n.com/og-image.png",
  themeColor: "#0ff",
  locale: "en_US",
};

const DEFAULT_SEO = {
  title: "OCE5N",
  description:
    "OCE5N is a multi-media esports & gaming team based in Columbus, Ohio. Competing, creating, and building community since 2022. Powered by SocialSight, Hypertune & Sonix.",
  keywords:
    "OCE5N, Oce5n Esports, The71Percent, gaming team, esports, Columbus Ohio, Fortnite, FNCS, tournament, competitive gaming, multi-media gaming",
  image: "https://oce5n.com/og-image.png",
  type: "website",
};

function setMeta(attr: string, value: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

interface ArticleMetadata {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function SEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  image = DEFAULT_SEO.image,
  type = DEFAULT_SEO.type,
  path = "/",
  noIndex = false,
  article = null,
}: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  path?: string;
  noIndex?: boolean;
  article?: ArticleMetadata | null;
}) {
  const canonicalUrl = `${SITE.url}${path}`;

  useEffect(() => {
    document.title = title;

    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "theme-color", SITE.themeColor);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("name", "author", SITE.name);

    setLink("canonical", canonicalUrl);

    setMeta("property", "og:site_name", SITE.name);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:type", type);
    setMeta("property", "og:locale", SITE.locale);

    if (article) {
      setMeta("property", "article:published_time", article.publishedTime ?? "");
      setMeta("property", "article:modified_time", article.modifiedTime ?? "");
      setMeta("property", "article:author", article.author ?? SITE.name);
      setMeta("property", "article:section", article.section ?? "Esports");
      (article.tags ?? []).forEach((tag: string) => {
        const el = document.createElement("meta");
        el.setAttribute("property", "article:tag");
        el.setAttribute("content", tag);
        document.head.appendChild(el);
      });
    }

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:site", SITE.twitter);
    setMeta("name", "twitter:creator", SITE.twitter);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    let ldScript = document.getElementById("ld-json-oce5n") as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement("script");
      ldScript.id = "ld-json-oce5n";
      ldScript.type = "application/ld+json";
      document.head.appendChild(ldScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://oce5n.com/#organization",
          name: "OCE5N Esports",
          alternateName: ["Oce5n", "OCE5NS", "#The71Percent"],
          url: "https://oce5n.com",
          logo: { "@type": "ImageObject", url: "https://oce5n.com/og-image.png" },
          description:
            "Multi-Media Gaming Team based in Columbus, Ohio. Competing and creating since 2022.",
          foundingDate: "2022",
          location: { "@type": "Place", name: "Columbus, Ohio, USA" },
          sameAs: ["https://twitter.com/OCE5NS", "https://oce5n.com"],
        },
        {
          "@type": "WebSite",
          "@id": "https://oce5n.com/#website",
          url: "https://oce5n.com",
          name: "OCE5N Esports",
          publisher: { "@id": "https://oce5n.com/#organization" },
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          isPartOf: { "@id": "https://oce5n.com/#website" },
          about: { "@id": "https://oce5n.com/#organization" },
        },
      ],
    };

    ldScript.textContent = JSON.stringify(structuredData, null, 2);
  }, [title, description, keywords, image, type, path, noIndex, article, canonicalUrl]);

  return null;
}