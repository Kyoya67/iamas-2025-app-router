'use client';

import { useLanguage } from '@/app/_contexts/LanguageContext';

interface LocalizedTextProps {
    ja: string;
    en: string;
    className?: string;
}

export function LocalizedTextClient({ ja, en, className = "" }: LocalizedTextProps) {
    const { language } = useLanguage();

    return (
        <p className={className}>
            {language === 'ja' ? ja : en}
        </p>
    );
} 