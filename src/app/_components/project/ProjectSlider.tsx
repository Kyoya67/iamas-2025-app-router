'use client';

import Image from "next/image";

type ProjectSliderProps = {
    directoryName: string;
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
    totalImages: number;
    projectName: string;
    captions: (string | undefined)[];
};

export function ProjectSlider({
    directoryName,
    currentImageIndex,
    setCurrentImageIndex,
    totalImages,
    projectName,
    captions
}: ProjectSliderProps) {
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
                alt={projectName}
                width={500}
                height={300}
                className="object-cover aspect-[16/9] w-full"
            />
        );
    };

    return (
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
                <div className={`flex gap-4 mb-2 sm:gap-5 sm:mb-3 ${captions[currentImageIndex] ? 'mt-0' : 'mt-4'}`}>
                    {[...Array(totalImages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${currentImageIndex === index ? 'bg-[#000f9f]' : 'bg-[#000f9f]/30'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
} 