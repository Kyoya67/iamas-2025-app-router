"use client";

import Script from "next/script";

export default function AdobeFontLoader() {
    return (
        <Script
            src="https://use.typekit.net/kzq8pff.js"
            strategy="beforeInteractive"
            onLoad={() => {
                try {
                    // Adobe Fontsの初期化
                    if (typeof window !== "undefined" && window.Typekit) {
                        window.Typekit.load();
                    }
                } catch (e) {
                    console.error("Failed to load Adobe Fonts:", e);
                }
            }}
        />
    );
}