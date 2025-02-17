'use client'
import { useEffect } from 'react'
import type { TypekitConfig, TypekitScript } from '@/types/typekit'

export default function TypekitScript() {
  useEffect(() => {
    // クライアントサイドでのみ実行
    const config: TypekitConfig = {
      kitId: 'kzq8pff',
      scriptTimeout: 3000,
      async: true
    };

    const d = document;
    const h = d.documentElement;
    const t = setTimeout(() => {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout);

    const tk = d.createElement("script") as TypekitScript;
    let f = false;
    const s = d.getElementsByTagName("script")[0];
    h.className += " wf-loading";
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
    tk.async = true;
    tk.onload = tk.onreadystatechange = function (this: GlobalEventHandlers) {
      if (f || (tk.readyState && tk.readyState !== "complete" && tk.readyState !== "loaded")) return;
      f = true;
      clearTimeout(t);
      try {
        window.Typekit.load(config);
      } catch (e) {
        console.error('Typekit load failed:', e);
      }
    };
    s.parentNode?.insertBefore(tk, s);
  }, []);

  return (
    <link rel="stylesheet" href="https://use.typekit.net/kzq8pff.css" />
  )
} 