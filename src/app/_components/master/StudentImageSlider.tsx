'use client'

import Image from "next/image";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type StudentImageSliderProps = {
    workImagePath: string;
    thumbnailPath: string;
    interviewLink: string | undefined;
    workTitleEnglish: string;
    authorEnglishName: string;
};

export function StudentImageSlider({
    workImagePath,
    thumbnailPath,
    interviewLink,
    workTitleEnglish,
    authorEnglishName
}: StudentImageSliderProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!interviewLink) {
        return (
            <div className="aspect-[16/9] relative">
                <Image
                    src={workImagePath}
                    alt={workTitleEnglish}
                    layout="fill"
                    objectFit="cover"
                    className="mix-blend-normal"
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-y-2">
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    el: '.swiper-custom-pagination',
                }}
                className="aspect-[16/9] w-full"
                onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
            >
                <SwiperSlide className="w-full">
                    <div className="relative w-full h-full">
                        <Image
                            src={workImagePath}
                            alt={workTitleEnglish}
                            layout="fill"
                            objectFit="cover"
                            className="mix-blend-normal"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <a
                        href={interviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block w-full h-full group"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={thumbnailPath}
                                alt={`${authorEnglishName} thumbnail`}
                                layout="fill"
                                objectFit="cover"
                                className="mix-blend-normal"
                            />
                        </div>
                        <div className="
                            absolute inset-0 
                            bg-black/50 
                            opacity-0 
                            group-hover:opacity-100 
                            transition-opacity 
                            duration-300 
                            flex 
                            items-center 
                            justify-center
                        ">
                            <span className="hidden sm:inline text-white text-sm sm:text-base">
                                インタビュー動画へ
                            </span>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
            <div className="text-xs text-sm text-center text-[#000f9f] ten-mincho sm:hidden">
                {currentImageIndex === 1 ? "インタビュー動画へ" : ""}
            </div>
            <div className="swiper-custom-pagination flex justify-center" />
        </div>
    );
} 