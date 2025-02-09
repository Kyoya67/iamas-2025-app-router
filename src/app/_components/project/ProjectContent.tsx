'use client'

import Image from "next/image";
import { PROJECT_INFO } from "@/app/_lib/projectInfo";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { useState } from "react";

export default function ProjectContent({ projectName, directoryName, pictureNum }: { projectName: string, directoryName: string, pictureNum: number }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const project = PROJECT_INFO.find(project => project.projectName === projectName);
    const totalImages = pictureNum;

    if (!project) {
        return <div>Project not found</div>;
    }

    const sharerText = project.assistant
        ? `${project.sharer}、${project.assistant}`
        : project.sharer;

    const captions = [
        project.caption0,
        project.caption1,
        project.caption2,
        project.caption3,
        project.caption4,
    ];

    const renderMedia = () => {
        if (directoryName === 'TechnologyHermeneutics' && currentImageIndex === 2) {
            return (
                <a href="https://www.youtube.com/watch?v=EYPqyaAdxVg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full aspect-[16/9]"
                >
                    <Image
                        src={`https://img.youtube.com/vi/EYPqyaAdxVg/maxresdefault.jpg`}
                        alt="シンポジウム動画"
                        width={500}
                        height={300}
                        className="object-cover aspect-[16/9] w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#000f9f]/80 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                        </div>
                    </div>
                </a>
            );
        }

        return (
            <Image
                src={`/project/${directoryName}/${currentImageIndex}.webp`}
                alt={project.projectName}
                width={500}
                height={300}
                className="object-cover aspect-[16/9] w-full"
            />
        );
    };

    const activities = Array.from({ length: 10 }, (_, i) => i + 1)
        .map(i => ({
            name: project[`activityName${i}` as keyof typeof project],
            subtitle: project[`activityName${i}Subtitle` as keyof typeof project],
            content: project[`activityContent${i}` as keyof typeof project]
        }));

    const renderActivityName = (name: string, subtitle: string) => {
        const urlRegex = /(.*?)\((https?:\/\/[^\s)]+)\)(.*)/;
        const match = name.match(urlRegex);

        if (match) {
            //eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [_, beforeUrl, url, afterUrl] = match;
            return (
                <div className="font-bold text-[0.75rem] sm:text-base mb-2 text-left">
                    {beforeUrl}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#000f9f] hover:opacity-70"
                    >
                        ({url})
                    </a>
                    {afterUrl}
                </div>
            );
        }

        return (
            <div className="
                mb-2
                font-bold
                text-[0.75rem] sm:text-base text-left
                whitespace-pre-wrap
                sm:whitespace-normal
                leading-tight
                ">
                <div>
                    {name}
                </div>
                <span>
                    {subtitle}
                </span>
            </div>
        );
    };

    return (
        <div className={`
            text-black relative h-full 
            ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'} 
            ten-mincho select-text
        `}>
            <div className="relative z-10 h-full flex flex-col">
                <div className="text-lg sm:text-2xl mb-1 text-[#000f9f] ten-mincho text-left">{project.projectName}</div>
                <div className="md:flex justify-between border-b border-[#000f9f] mb-3 pb-1">
                    <div className={`
                        ${directoryName === 'ExtremeBiologies' ? 'sm:flex' : 'flex'} 
                        items-end w-[3/4]
                        ${directoryName === 'ExtremeBiologies' ? 'flex-col gap-y-1' : ''}
                    `}>
                        <div className="relative bottom-[-0.05rem] text-sm sm:text-base mr-2 ten-mincho">{project.representative}</div>
                        <div className="text-xs sm:text-sm ten-mincho">{sharerText}</div>
                    </div>
                    <div className="relative">
                        <div className="flex text-[#000f9f] text-xs sm:text-sm">
                            <div className="mr-2">センタービル12F</div>
                            <div>レセプションルーム</div>
                        </div>
                    </div>
                </div>
                <ScrollMaskContent className="text-black text-sm mb-4 h-[70vh] mb-4 pr-5 pb-4 flex-1 overflow-y-auto">
                    <div className="relative mb-4">
                        {renderMedia()}
                        {captions[currentImageIndex] && (
                            <p className="
                                text-xs sm:text-base text-center text-[#000f9f] 
                                mt-3 mb-2 ten-mincho
                                whitespace-pre-wrap
                                md:whitespace-normal 
                                leading-tight">
                                {captions[currentImageIndex]}
                            </p>
                        )}
                        <div className="flex flex-col items-center">
                            <div className={`flex gap-4 mb-2 sm:gap-5 sm:mb-3 ${captions[currentImageIndex] ? 'mt-0' : 'mt-4'
                                }`}>
                                {[...Array(totalImages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${currentImageIndex === index ? 'bg-[#000f9f]' : 'bg-[#000f9f]/30'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="font-bold text-base sm:text-xl mb-2 ten-mincho text-[#000f9f]">研究概要</div>
                    <div className={`text-xs sm:text-sm mb-4 whitespace-pre-wrap ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'} ten-mincho`}>
                        {project.projectConcept}
                    </div>

                    <div className="font-bold text-base sm:text-xl mb-2 ten-mincho text-[#000f9f]">本年度の活動内容</div>
                    {project.wholeActivityContent1 && (
                        <div className="ten-mincho">
                            <div className={`text-xs sm:text-sm mb-3 whitespace-pre-wrap ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                {project.wholeActivityContent1}
                            </div>
                            {project.wholeActivityContent2 &&
                                <div className={`text-xs sm:text-sm mb-3 whitespace-pre-wrap ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                    {project.wholeActivityContent2}
                                </div>
                            }
                            {project.wholeActivityContent3 &&
                                <div className={`text-xs sm:text-sm mb-3 whitespace-pre-wrap ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                    {project.wholeActivityContent3}
                                </div>
                            }
                        </div>
                    )}

                    {activities.length > 0 && (
                        <div className="ten-mincho">
                            {activities.map((activity, index) => (
                                <div key={index} className="mb-4">
                                    {activity.name && renderActivityName(activity.name, activity.subtitle || '')}
                                    {activity.content && (
                                        <div className={`text-xs sm:text-sm ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                            {activity.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </ScrollMaskContent>
            </div>
        </div>
    );
}