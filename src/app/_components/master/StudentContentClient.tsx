'use client';

import { useLanguage } from '@/app/_contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface StudentContentClientProps {
    workTitleJapanese: string;
    workTitleEnglish: string;
    workDescriptionJapanese: string;
    workDescriptionEnglish: string;
}

export function StudentContentClient({
    workTitleJapanese,
    workTitleEnglish,
    workDescriptionJapanese,
    workDescriptionEnglish,
}: StudentContentClientProps) {
    const { language } = useLanguage();

    return (
        <>
            <div className="relative">
                <LanguageToggle />
            </div>
            <div className="mb-4">
                <p className="text-fluid-sm mb-2 text-justify">
                    {language === 'ja' ? workTitleJapanese : workTitleEnglish}
                </p>
            </div>
        </>
    );
} 