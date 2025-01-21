'use client';

import { useLanguage } from '@/app/_contexts/LanguageContext';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex gap-2 absolute bottom-[-4.5rem] sm:bottom-[-1.3rem] right-0">
            <button
                onClick={() => setLanguage('ja')}
                className={`
                    px-2 py-1 text-fluid-sm
                    ${language === 'ja'
                        ? 'text-[#000f9f] border-b border-[#000f9f]'
                        : 'text-gray-400'
                    }
                `}
            >
                JP
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`
                    px-2 py-1 text-fluid-sm
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