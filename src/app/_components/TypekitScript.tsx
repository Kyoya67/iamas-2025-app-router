'use client'

import Script from 'next/script'

export default function TypekitScript() {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/kzq8pff.css" />
      <Script
        id="typekit"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                    try {
                        Typekit.load({
                            kitId: 'kzq8pff',
                            scriptTimeout: 3000,
                            async: true
                        });
                    } catch(e) {
                        console.error('Typekit load failed:', e);
                    }
                    `
        }}
      />
    </>
  )
} 