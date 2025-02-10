'use client'

import Image from "next/image";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";
import { LocalizedTextClient } from './LocalizedTextClient';
import { LanguageProvider } from '@/app/_contexts/LanguageContext';
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { LanguageToggle } from "./LanguageToggle";
import { MASTER_INFO } from "@/app/_lib/masterInfo";

export const StudentContent = ({ name }: { name: string }) => {
    const student = MASTER_INFO.find(student =>
        student.authorEnglishName.split(' ').join('') === name
    );

    if (!student) return null;

    // YuaRidukiの場合のデフォルト画像パスを設定
    const workImagePath = student.authorEnglishName.split(' ').join('') === 'YuaRiduki'
        ? '/event/defaultIAMAS.webp'
        : `/master/work/${student.authorEnglishName.split(' ').join('')}.webp`;

    return (
        <div className="text-black relative h-full text-justify ten-mincho">
            <div className="relative z-10 h-full flex flex-col">
                <LanguageProvider>
                    <div className="absolute top-0 right-0 flex flex-col gap-y-1">
                        <div className={`
                            text-[#000f9f]
                            px-2 sm:px-4 
                            text-sm sm:text-base
                            border-[0.08rem] border-[#000f9f] 
                            ten-mincho
                            ${student.authorEnglishName.split(' ').join('') === 'YuaRiduki'
                                ? 'hidden'
                                : ''
                            }
                            `}>
                            作品
                        </div>
                        <div className="
                            text-black
                            px-2 sm:px-4
                            text-sm sm:text-base
                            border-[0.08rem] border-black 
                            ten-mincho
                        ">
                            研究
                        </div>
                    </div>
                    <div className="absolute bottom-[-0.5rem] sm:bottom-0 left-0 right-0 flex justify-between items-end">
                        <LanguageToggle />
                        <div className="text-[#000f9f] ten-mincho mr-5 sm:flex text-xs sm:text-sm">
                            <div className="mr-2">{student.place1}</div>
                            <div>{student.place2}</div>
                        </div>
                    </div>
                    <div className="mb-2 border-b border-[#000f9f] pb-4">
                        <div className="flex">
                            <div className="relative bg-black w-[4rem] h-[4rem] mr-1 sm:mr-3 flex-shrink-0">
                                <Image
                                    src={`/master/profile/${student.authorEnglishName.split(' ').join('')}.webp`}
                                    alt={student.authorEnglishName}
                                    layout="fill"
                                    objectFit="contain"
                                    className="mr-3"
                                />
                            </div>
                            <div className="flex flex-col justify-start mt-[-0.2rem]">
                                <h1 className={`
                                    leading-tight ten-mincho
                                    ${student.authorEnglishName.split(' ').join('') === 'JoannaLYU'
                                        ? 'text-base sm:text-fluid-lg'
                                        : 'text-fluid-lg'
                                    }
                                `}>
                                    {student.authorJapaneseName}
                                </h1>
                                <h2 className="text-[#000f9f] text-fluid-sm sm:text-fluid-base mt-[-0.2rem] ten-mincho">
                                    {student.authorEnglishName}
                                </h2>
                            </div>
                        </div>
                        <LocalizedTextClient
                            ja={student.profileJapanese}
                            en={student.profileEnglish}
                            className="text-xxs sm:text-sm mt-1 ten-mincho"
                        />
                    </div>
                    <ScrollMaskContent className="mb-4 pr-5 pb-4 flex-1 overflow-y-auto h-[70vh]">
                        <LocalizedTextClient
                            ja={student.workTitleJapanese}
                            en={student.workTitleEnglish}
                            className="text-xs sm:text-lg mb-2 text-[#000f9f] ten-mincho text-left"
                        />
                        <div className="mb-4 relative aspect-video w-full">
                            <Image
                                src={workImagePath}
                                alt={student.workTitleEnglish}
                                layout="fill"
                                objectFit="contain"
                                className="mix-blend-normal"
                            />
                        </div>
                        <LocalizedTextClient
                            ja={student.workDescriptionJapanese}
                            en={student.workDescriptionEnglish}
                            className="text-xs sm:text-base mb-2 ten-mincho"
                        />
                        <div className="flex flex-row gap-4">
                            {student.X_URL && (
                                <a
                                    href={student.X_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#000f9f] hover:opacity-70 transition-opacity"
                                >
                                    <FaXTwitter size={20} />
                                </a>
                            )}
                            {student.instagram_URL && (
                                <a
                                    href={student.instagram_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#000f9f] hover:opacity-70 transition-opacity"
                                >
                                    <FaInstagram size={20} />
                                </a>
                            )}
                            {student.other_URL && (
                                <a
                                    href={student.other_URL}
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