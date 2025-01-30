'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface NavigationArrowsProps {
    nextPath?: string | null;
    previousPath?: string | null;
}

export function NavigationArrows({ nextPath, previousPath }: NavigationArrowsProps) {
    const router = useRouter();

    return (
        <>
            {previousPath && (
                <div
                    className="
                        absolute left-1 sm:left-3 top-1/2 -translate-y-1/2
                        w-8 h-[8rem] md:h-[60vh]
                        flex items-center justify-center
                        cursor-pointer
                        pointer-events-auto
                        z-[140]
                    "
                    onClick={() => router.replace(previousPath)}
                >
                    <div className="
                        w-8 h-8 md:w-10 md:h-10
                        flex items-center justify-center
                        rounded-full bg-white/80 
                        transition-all
                        hover:bg-white hover:scale-110
                    ">
                        <IoIosArrowBack size={18} className="text-[#000f9f]" />
                    </div>
                </div>
            )}
            {nextPath && (
                <div
                    className="
                        absolute right-1 sm:right-3 top-1/2 -translate-y-1/2
                        w-8 h-[8rem] md:h-[60vh]
                        flex items-center justify-center
                        cursor-pointer
                        pointer-events-auto
                        z-[140]
                    "
                    onClick={() => router.replace(nextPath)}
                >
                    <div className="
                        w-8 h-8 md:w-10 md:h-10
                        flex items-center justify-center
                        rounded-full bg-white/80
                        transition-all
                        hover:bg-white hover:scale-110
                    ">
                        <IoIosArrowForward size={18} className="text-[#000f9f]" />
                    </div>
                </div>
            )}
        </>
    );
} 