'use client';

import { useLanguage } from '@/app/_contexts/LanguageContext';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex gap-1 min-[500px]:gap-2">
            <button
                onClick={() => setLanguage('ja')}
                className={`
                    text-sm min-[500px]:text-base
                    ${language === 'ja'
                        ? 'text-[#000f9f] border-b border-[#000f9f]'
                        : 'text-gray-400'
                    }
                `}
            >
                JP
            </button>
            <span className="text-gray-400 text-fluid-sm">&nbsp;</span>
            <button
                onClick={() => setLanguage('en')}
                className={`
                    text-sm min-[500px]:text-base
                    ${language === 'en'
                        ? 'text-[#000f9f] border-b border-[#000f9f]'
                        : 'text-gray-400'
                    }
                `}
            >
                EN
            </button>
        </div>
    );
} 