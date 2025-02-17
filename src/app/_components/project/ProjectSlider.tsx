'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getImagePath } from '@/app/_lib/imagePath';

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
                    onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
                >
                    {Array.from({ length: totalImages }, (_, i) => (
                        <SwiperSlide key={i} className="w-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={getImagePath(`/project/${directoryName}/${i}.webp`)}
                                    alt={`${projectName} image ${i + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="mix-blend-normal"
                                />
                            </div>
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