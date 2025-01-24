'use client'

import { useWork } from "@/app/_contexts/WorkContext"
import Image from "next/image"

export const WorkImage = () => {
    const { currentWork } = useWork()

    return (
        <div className="relative w-full aspect-[16/9] ml-6">
            <div className="absolute top-0 w-full h-full">
                <Image
                    src={`/work/${currentWork}.webp`}
                    alt={`${currentWork}の作品`}
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div className="
                        absolute left-[-5%] top-[-15%]
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
                        absolute right-[-5%] top-[-15%]
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