'use client';

import Image from "next/image";
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/app/_contexts/LanguageContext';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";

interface StudentContentProps {
    japaneseName: string;
    englishName: string;
    profileJapanese: string;
    profileEnglish: string;
    X_URL?: string;
    instagram_URL?: string;
    other_URL?: string;
    workTitleJapanese: string;
    workTitleEnglish: string;
    workDescriptionJapanese: string;
    workDescriptionEnglish: string;
    nextPath?: string | null;
    previousPath?: string | null;
}

export function StudentContent({
    japaneseName, englishName,
    // profileJapanese, profileEnglish,
    X_URL, instagram_URL, other_URL,
    workTitleJapanese, workTitleEnglish,
    workDescriptionJapanese, workDescriptionEnglish,
    nextPath, previousPath
}: StudentContentProps) {
    const { language } = useLanguage();

    return (
        <div className="pr-3 text-black relative">
            <div className="relative z-10">
                <div className="relative">
                    <LanguageToggle />
                </div>
                <div className="flex mb-2 border-b border-[#000f9f] pb-4">
                    <div className="relative bg-black w-[4rem] h-[4rem] mr-3 flex-shrink-0">
                        <Image src={`/profile/${englishName.split(' ').join('')}.webp`}
                            alt={englishName}
                            layout="fill"
                            objectFit="contain"
                            className="mr-3"
                        />
                    </div>
                    <div className="flex flex-col justify-start mt-[-0.2rem]">
                        <h1 className="text-fluid-lg leading-tight">
                            {japaneseName}
                        </h1>
                        <h2 className="text-[#000f9f] text-fluid-base mt-[-0.2rem]">
                            {englishName}
                        </h2>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-fluid-sm mb-2">
                        {language === 'ja' ? workTitleJapanese : workTitleEnglish}
                    </p>
                    <div className="mb-4 relative aspect-video w-full">
                        <Image
                            src={`/work/${englishName.split(' ').join('')}.webp`}
                            alt={language === 'ja' ? workTitleJapanese : workTitleEnglish}
                            layout="fill"
                            objectFit="contain"
                            className="mix-blend-normal"
                        />
                    </div>
                    <p className="text-fluid-sm mb-2">
                        {language === 'ja' ? workDescriptionJapanese : workDescriptionEnglish}
                    </p>
                </div>
                <div className="flex flex-row gap-4">
                    {X_URL && (
                        <a
                            href={X_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#000f9f] hover:opacity-70 transition-opacity"
                        >
                            <FaXTwitter size={20} />
                        </a>
                    )}
                    {instagram_URL && (
                        <a
                            href={instagram_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#000f9f] hover:opacity-70 transition-opacity"
                        >
                            <FaInstagram size={20} />
                        </a>
                    )}
                    {other_URL && (
                        <a
                            href={other_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#000f9f] hover:opacity-70 transition-opacity"
                        >
                            <BiLinkExternal size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
} 