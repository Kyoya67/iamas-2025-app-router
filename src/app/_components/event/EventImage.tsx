'use client'

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

export const EventImage = () => {

    return (
        <div className="relative w-[80%] aspect-[16/9] ml-[8vw]">
            <AnimatePresence mode="wait">
                <motion.div
                    className="absolute top-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={`/event/NxPC.webp`}
                        alt={`$の作品`}
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
                    src="/desktop/leftTape.webp"
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
                    src="/desktop/rightTape.webp"
                    alt="右のテープ"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
} 