"use client";

import { useEffect } from "react";

const Seo = () => {
  useEffect(() => {
    document.title = "Kiruthiga Thirunavukkarasu | Full Stack Developer";
    const meta = [
      { name: "description", content: "Portfolio of Kiruthiga Thirunavukkarasu, a Full Stack Developer specializing in React, Next.js, Node.js, and cloud engineering." },
      { name: "keywords", content: "Full Stack Developer, React, Next.js, Node.js, TypeScript, Portfolio, Cloud Engineering" },
      { property: "og:title", content: "Kiruthiga Thirunavukkarasu | Full Stack Developer" },
      { property: "og:description", content: "Modern portfolio of a Full Stack Developer with premium UI and clean code." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ];
    meta.forEach((m) => {
      const selector = m.name ? `meta[name="${m.name}"]` : `meta[property="${m.property}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (m.name) el.name = m.name;
        if (m.property) el.setAttribute("property", m.property);
        document.head.appendChild(el);
      }
      el.content = m.content ?? "";
    });
  }, []);

  return null;
};

export default Seo;