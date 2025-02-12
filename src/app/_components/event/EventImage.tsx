'use client'

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEventImage } from "@/app/_contexts/EventImageContext"
import { getClientImagePath } from '@/app/_lib/imagePath'

export const EventImage = () => {
    const { hoveredEventImage } = useEventImage();

    return (
        <div className="relative w-[80%] aspect-[16/9] ml-[8vw]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={hoveredEventImage || 'default'}
                    className="absolute top-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={getClientImagePath(hoveredEventImage?.split(' ').join('') || `/event/defaultIAMAS.webp`)}
                        alt={hoveredEventImage?.split(' ').join('') || "開会式"}
                        fill
                        className="object-contains border-[0.2px] border-[#777]"
                        priority
                    />
                </motion.div>
            </AnimatePresence>
            <div className="
                        absolute left-[-8%] top-[-17%]
                        w-[20%] aspect-square
                        z-10
                    ">
                <Image
                    src={getClientImagePath("/desktop/leftTape.webp")}
                    alt="左のテープ"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="
                        absolute right-[-7%] top-[-17%]
                        w-[20%] aspect-square
                        z-10
                    ">
                <Image
                    src={getClientImagePath("/desktop/rightTape.webp")}
                    alt="右のテープ"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
} 