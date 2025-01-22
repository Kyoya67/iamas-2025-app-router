'use client'

import { useEffect } from 'react'

export default function TypekitLoader() {
    useEffect(() => {
        (function (d: Document) {
            const config = {
                kitId: 'kzq8pff',
                scriptTimeout: 3000,
                async: true
            } as const

            const h = d.documentElement

            const t = setTimeout(() => {
                h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
            }, config.scriptTimeout)

            const tk = d.createElement('script')
            let f = false
            const s = d.getElementsByTagName('script')[0]

            if (!s || !s.parentNode) return

            // Ten Mincho用のクラスを追加
            h.className += ' wf-loading wf-ten-mincho-n4-loading wf-ten-mincho-i4-loading'
            tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
            tk.async = true

            const handleLoad = () => {
                if (f) return
                f = true
                clearTimeout(t)
                try {
                    // @ts-ignore - TypeKit will be available when script loads
                    window.Typekit?.load(config)
                    // フォントの読み込みを確認
                    console.log('TypeKit loaded')
                } catch (e) {
                    console.error('TypeKit load error:', e)
                }
            }

            tk.addEventListener('load', handleLoad)
            s.parentNode.insertBefore(tk, s)

            return () => {
                tk.removeEventListener('load', handleLoad)
            }
        })(document)
    }, [])

    return null
} 