'use client'

import Image from "next/image";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";
import { LocalizedTextClient } from './LocalizedTextClient';
import { LanguageProvider } from '@/app/_contexts/LanguageContext';
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { LanguageToggle } from "./LanguageToggle";
import { useStudentByName } from '@/app/_lib/api-client';

export const StudentContent = ({ name }: { name: string }) => {
    const { student, error, isLoading } = useStudentByName(name);
    console.log("StudentContent", name);

    if (error) return <div>Failed to load student data</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!student) return <div>Student not found</div>;

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
                                    src={`/profile/${student.authorEnglishName.split(' ').join('')}.webp`}
                                    alt={student.authorEnglishName}
                                    layout="fill"
                                    objectFit="contain"
                                    className="mr-3"
                                />
                            </div>
                            <div className="flex flex-col justify-start mt-[-0.2rem]">
                                <h1 className="text-fluid-lg leading-tight">
                                    {student.authorJapaneseName}
                                </h1>
                                <h2 className="text-[#000f9f] text-fluid-sm sm:text-fluid-base mt-[-0.2rem]">
                                    {student.authorEnglishName}
                                </h2>
                            </div>
                        </div>
                        <LocalizedTextClient
                            ja={student.profileJapanese}
                            en={student.profileEnglish}
                            className="text-fluid-xs mt-1"
                        />
                    </div>
                    <ScrollMaskContent className="mb-4 pr-5 pb-4 flex-1 overflow-y-auto">
                        <LocalizedTextClient
                            ja={student.workTitleJapanese}
                            en={student.workTitleEnglish}
                            className="text-sm sm:text-fluid-base mb-2 text-[#000f9f]"
                        />
                        <div className="mb-4 relative aspect-video w-full">
                            <Image
                                src={`/work/${student.authorEnglishName.split(' ').join('')}.webp`}
                                alt={student.workTitleEnglish}
                                layout="fill"
                                objectFit="contain"
                                className="mix-blend-normal"
                            />
                        </div>
                        <LocalizedTextClient
                            ja={student.workDescriptionJapanese}
                            en={student.workDescriptionEnglish}
                            className="text-fluid-sm mb-2"
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