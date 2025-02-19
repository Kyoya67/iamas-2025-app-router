'use client'

import Image from "next/image";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaYoutube } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import { getImagePath } from "@/app/_lib/imagePath";

type ProjectImageSliderProps = {
    directoryName: string;
    totalImages: number;
    projectName: string;
    captions: (string | undefined)[];
    onSlideChange?: (index: number) => void;
};

export function ProjectImageSlider({
    directoryName,
    totalImages,
    projectName,
    captions,
    onSlideChange
}: ProjectImageSliderProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const renderSlideContent = (index: number) => {
        if (directoryName === 'TechnologyHermeneutics' && index === 2) {
            return (
                <a
                    href="https://www.youtube.com/watch?v=EYPqyaAdxVg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full h-full"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="https://img.youtube.com/vi/EYPqyaAdxVg/maxresdefault.jpg"
                            alt="シンポジウム動画"
                            layout="fill"
                            objectFit="cover"
                            className="mix-blend-normal"
                        />
                        <div className="
                            absolute inset-0 
                            bg-black/30
                            flex 
                            items-center 
                            justify-center
                        ">
                            <FaYoutube className="text-[#000f9f] w-16 h-16" />
                        </div>
                    </div>
                </a>
            );
        }

        return (
            <div className="relative w-full h-full">
                <Image
                    src={getImagePath(`/project/${directoryName}/${index}.webp`)}
                    alt={`${projectName} image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="mix-blend-normal"
                />
            </div>
        );
    };

    return (
        <div className="mb-4 relative w-full">
            <div className="flex flex-col gap-y-2">
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        el: '.swiper-custom-pagination',
                    }}
                    className="aspect-[16/9] w-full"
                    onSlideChange={(swiper) => {
                        setCurrentImageIndex(swiper.activeIndex);
                        onSlideChange?.(swiper.activeIndex);
                    }}
                >
                    {Array.from({ length: totalImages }, (_, i) => (
                        <SwiperSlide key={i} className="w-full">
                            {renderSlideContent(i)}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {captions[currentImageIndex] && (
                    <div className="text-xs sm:text-sm text-center text-[#000f9f] ten-mincho mt-2 mb-1 mx-auto whitespace-pre-wrap min-[800px]:whitespace-normal">
                        {captions[currentImageIndex]}
                    </div>
                )}
                <div className="swiper-custom-pagination flex justify-center" />
            </div>
        </div>
    );
} 