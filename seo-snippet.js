// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.francisteal.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.francisteal.com/","title_tag":"Empirical Development Economics Africa | francisteal","meta_description":"Empirical development economics on African economies, poverty research and trade policy in Africa by Francis Teal, Oxford-based development economist."},{"page_url":"https://www.francisteal.com/copy-of-emprical-development-economics","title_tag":"Poverty Research & Development Policy | francisteal","meta_description":"Global and historical perspectives on inequality, poverty research and development policy in The Poor and the Plutocrats by Francis Teal."},{"page_url":"https://www.francisteal.com/about-me","title_tag":"Empirical Development Economics Africa | francisteal","meta_description":"Empirical development economics, African economies, quantitative methods in economics and economic consulting by Francis Teal, Oxford economist."},{"page_url":"https://www.francisteal.com/africa-in-the-21st-century","title_tag":"African Economies & Development Policy | francisteal","meta_description":"Analysis of African economies, trade policy in Africa, growth, inequality and poverty research in the 21st century by Francis Teal."},{"page_url":"https://www.francisteal.com/publications-cee5","title_tag":"Poverty Research African Economies | francisteal","meta_description":"Publications and data on empirical development economics, African economies, poverty research and development policy by Francis Teal."},{"page_url":"https://www.francisteal.com/publications-c686","title_tag":"Ghana Firm Data & Poverty Research | francisteal","meta_description":"Papers and data on Ghana firm data, African economies, job creation in Africa and quantitative methods in economics by Francis Teal."},{"page_url":"https://www.francisteal.com/data","title_tag":"Ghana Firm Data African Economies | francisteal","meta_description":"Public Ghana manufacturing firm census data for 1987 and 2003 for research on African economies, job creation and development policy."},{"page_url":"https://www.francisteal.com/about1","title_tag":"Nigerian Enterprise Data & Jobs | francisteal","meta_description":"Nigerian enterprise data for firms, workers and apprentices, supporting research on African economies, job creation and poverty reduction."},{"page_url":"https://www.francisteal.com/policy-briefs","title_tag":"Development Policy & Job Creation Africa | francisteal","meta_description":"Policy briefs on education, jobs in poor countries, development policy and job creation in Africa by Francis Teal."}],"keywords":["Empirical Development Economics","African Economies","Poverty Research","Development Policy","Job Creation Africa","Ghana Firm Data","Nigerian Enterprise Data","Quantitative Methods Economics","Trade Policy Africa","Economic Consulting"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.francisteal.com/#person",
  "name": "Francis Teal",
  "url": "https://www.francisteal.com/",
  "image": "https://static.wixstatic.com/media/64d23c_5c057ee2d5434d15a5c076a8c017cb18.jpg/v1/fill/w_273,h_411,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64d23c_5c057ee2d5434d15a5c076a8c017cb18.jpg",
  "jobTitle": [
    "Research Associate of the Centre for the Study of African Economies",
    "Managing Editor of Oxford Economic Papers",
    "Chief Editor of the Journal of African Economies"
  ],
  "affiliation": [
    {
      "@type": "Organization",
      "name": "Centre for the Study of African Economies",
      "department": "Department of Economics, University of Oxford"
    }
  ],
  "description": "Empirical development economist focusing on labour and development, firm and farm productivity in Africa, and applied economic policy. Research Associate of the Centre for the Study of African Economies at the University of Oxford, Managing Editor of Oxford Economic Papers, and Chief Editor of the Journal of African Economies.",
  "knowsAbout": [
    "Empirical development economics",
    "Labour and development",
    "Firm productivity in Africa",
    "Farm productivity in Africa",
    "Quantitative methods for development economics",
    "Poverty and inequality",
    "African economic growth",
    "Industrialisation in Africa"
  ],
  "sameAs": [],
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "The Poor and the Plutocrats",
      "url": "https://www.francisteal.com/copy-of-emprical-development-economics",
      "description": "A book examining inequality and its relationship to poverty and wealth from a global and historical perspective, focusing on the coexistence of very many poor people and a very few extremely rich ones."
    },
    {
      "@type": "CreativeWork",
      "name": "Africa in the 21st century: The more things change the more they stay the same?",
      "url": "https://www.francisteal.com/africa-in-the-21st-century",
      "description": "An analysis of Africa's economic performance, growth, inequality, structural change, and labour productivity, and their implications for sustained growth and poverty reduction."
    },
    {
      "@type": "CreativeWork",
      "name": "Publications and Data",
      "url": "https://www.francisteal.com/publications-cee5",
      "description": "Recent publications and links to data sets used in research on African economies, labour, and productivity."
    },
    {
      "@type": "CreativeWork",
      "name": "Papers and Data",
      "url": "https://www.francisteal.com/publications-c686",
      "description": "Recent academic papers including work on employment and value-added in Ghana's manufacturing sector, apprenticeships in Sub-Saharan Africa, and cross-country productivity differences."
    },
    {
      "@type": "Dataset",
      "name": "Ghana Manufacturing Firm Census Data for 1987 and 2003",
      "url": "https://www.francisteal.com/data",
      "description": "Publicly available census data on Ghanaian manufacturing firms for 1987 and 2003, enabled by a DFID-funded PEDL research programme."
    },
    {
      "@type": "Dataset",
      "name": "Nigeria Firm, Worker and Apprentices Data: 1998-2003",
      "url": "https://www.francisteal.com/about1",
      "description": "Survey-based firm, worker, and apprenticeship data from Nigeria for 1998–2003, including reports, questionnaires, and Stata data and do files."
    },
    {
      "@type": "CreativeWork",
      "name": "Policy Briefs: Education and Jobs in Poor Countries",
      "url": "https://www.francisteal.com/policy-briefs",
      "description": "Policy-focused material on education and jobs in poor countries."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
