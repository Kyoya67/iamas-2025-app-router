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
                        absolute left-0 sm:left-2 -ml-2.5 sm:ml-4 top-1/2 -translate-y-1/2
                        w-12 sm:w-16 h-[8rem] md:h-[60vh]
                        flex items-center justify-center
                        cursor-pointer
                        pointer-events-auto
                        z-[140]
                        opacity-80 hover:opacity-100
                        transition-all
                        group
                    "
                    onClick={() => router.replace(previousPath)}
                >
                    <IoIosArrowBack
                        size={30}
                        className="
                            text-white 
                            transition-transform 
                            duration-300 
                            group-hover:scale-125
                            sm:scale-125
                            sm:group-hover:scale-150
                        "
                    />
                </div>
            )}
            {nextPath && (
                <div
                    className="
                        absolute right-0 sm:right-2 -mr-2.5 sm:mr-4 top-1/2 -translate-y-1/2
                        w-12 sm:w-16 h-[8rem] md:h-[60vh]
                        flex items-center justify-center
                        cursor-pointer
                        pointer-events-auto
                        z-[140]
                        opacity-80 hover:opacity-100
                        transition-all
                        group
                    "
                    onClick={() => router.replace(nextPath)}
                >
                    <IoIosArrowForward
                        size={30}
                        className="
                            text-white 
                            transition-transform 
                            duration-300 
                            group-hover:scale-125
                            sm:scale-125
                            sm:group-hover:scale-150
                        "
                    />
                </div>
            )}
        </>
    );
} 