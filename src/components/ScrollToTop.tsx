"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#hero"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:opacity-90 transition-opacity"
    >
      <ArrowUp className="w-5 h-5" />
    </a>
  );
};

export default ScrollToTop;