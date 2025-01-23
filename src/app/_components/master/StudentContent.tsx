import Image from "next/image";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";
import { LocalizedTextClient } from './LocalizedTextClient';
import { LanguageProvider } from '@/app/_contexts/LanguageContext';
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { LanguageToggle } from "./LanguageToggle";

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
    profileJapanese, profileEnglish,
    X_URL, instagram_URL, other_URL,
    workTitleJapanese, workTitleEnglish,
    workDescriptionJapanese, workDescriptionEnglish,
}: StudentContentProps) {
    return (
        <div className="text-black relative h-full text-justify ten-mincho">
            <div className="relative z-10 h-full flex flex-col">
                <LanguageProvider>
                    <div className="absolute top-0 right-0 flex flex-col gap-y-1">
                        <div className="text-[#000f9f] cursor-pointer hover:opacity-70 px-4 border-[0.08rem] border-[#000f9f]">作品</div>
                        <div className="text-black cursor-pointer hover:opacity-70 px-4 border-[0.08rem] border-black">研究</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center">
                        <div className="ml-[-0.5rem] mb-[-1.3rem]">
                            <LanguageToggle />
                        </div>
                        <div className="text-[#000f9f] mb-[-1.3rem]">
                            センタービル4F会議室
                        </div>
                    </div>
                    <div className="mb-2 border-b border-[#000f9f] pb-4">
                        <div className="flex">
                            <div className="relative bg-black w-[4rem] h-[4rem] mr-1 sm:mr-3 flex-shrink-0">
                                <Image
                                    src={`/profile/${englishName.split(' ').join('')}.webp`}
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
                                <h2 className="text-[#000f9f] text-fluid-sm sm:text-fluid-base mt-[-0.2rem]">
                                    {englishName}
                                </h2>
                            </div>
                        </div>
                        <LocalizedTextClient
                            ja={profileJapanese}
                            en={profileEnglish}
                            className="text-fluid-xs mt-1"
                        />
                    </div>
                    <ScrollMaskContent className="mb-4 pr-3 pb-4 flex-1 overflow-y-auto">
                        <LocalizedTextClient
                            ja={workTitleJapanese}
                            en={workTitleEnglish}
                            className="text-sm sm:text-fluid-base mb-2 text-[#000f9f]"
                        />
                        <div className="mb-4 relative aspect-video w-full">
                            <Image
                                src={`/work/${englishName.split(' ').join('')}.webp`}
                                alt={workTitleEnglish}
                                layout="fill"
                                objectFit="contain"
                                className="mix-blend-normal"
                            />
                        </div>
                        <LocalizedTextClient
                            ja={workDescriptionJapanese}
                            en={workDescriptionEnglish}
                            className="text-fluid-sm mb-2"
                        />
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
                    </ScrollMaskContent>
                </LanguageProvider>
            </div>
        </div>
    );
} 