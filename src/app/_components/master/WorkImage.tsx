'use client'

import { useWork } from "@/app/_contexts/WorkContext"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

export const WorkImage = () => {
    const { currentWork } = useWork()

    return (
        <div className="relative w-full aspect-[16/9] ml-6">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentWork}
                    className="absolute top-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={`/work/${currentWork}.webp`}
                        alt={`${currentWork}の作品`}
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