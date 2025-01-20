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
        <div className='cursor-none'>
            {previousPath && (
                <div
                    className="
                        absolute left-1.5 top-1/2 -translate-y-1/2
                        w-8 h-8
                        flex items-center justify-center
                        rounded-full bg-white/80 
                        cursor-pointer
                        transition-all
                        hover:bg-white hover:scale-110
                        z-[1000]
                    "
                    onClick={() => router.replace(previousPath)}
                >
                    <IoIosArrowBack size={18} className="text-[#000f9f]" />
                </div>
            )}
            {nextPath && (
                <div
                    className="
                        absolute right-1.5 top-1/2 -translate-y-1/2
                        w-8 h-8
                        flex items-center justify-center
                        rounded-full bg-white/80
                        cursor-pointer
                        transition-all
                        hover:bg-white hover:scale-110
                        z-[1000]
                    "
                    onClick={() => router.replace(nextPath)}
                >
                    <IoIosArrowForward size={18} className="text-[#000f9f]" />
                </div>
            )}
        </div>
    );
} 