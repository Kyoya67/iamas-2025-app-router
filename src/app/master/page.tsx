import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { STUDENT_NAMES } from "@/app/_lib/constants";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";

export const metadata: Metadata = {
    title: "IAMAS 2025 修士研究発表会",
}

export default async function Master() {
    const data = STUDENT_NAMES;
    const midPoint = Math.ceil(data.length / 2);
    const leftColumn = data.slice(0, midPoint);
    const rightColumn = data.slice(midPoint);

    return (
        <div className="
            absolute inset-0 flex justify-center lg:justify-end lg:mr-[10vw]
            mt-5 md:mt-0 
        ">
            <div className="
                hidden lg:block
                absolute left-[20vw] top-[20vh]
                w-[41vw]
                -rotate-[1.5deg]
            ">
                <div className="relative w-full aspect-[16/9] ml-6">
                    <div className="absolute top-0 w-full h-full">
                        <Image
                            src={`/work/AzumiShima.webp`}
                            alt={`AzumiShimaの作品`}
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
                            src={`/desktop/leftTape.webp`}
                            alt={"左のテープ"}
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
                            src={`/desktop/rightTape.webp`}
                            alt={"右のテープ"}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
            <ScrollMaskContent className="
                h-[60vh] sm:h-[55vh]
                mt-[15vh] lg:mt-[20vh]
                ml-6 
            ">
                <div className="
                    grid grid-cols-2 
                    gap-x-[3rem] sm:gap-x-[6rem] lg:gap-x-[1rem] 
                    pr-6
                ">
                    <div className="flex flex-col gap-y-fluid-lg lg:gap-y-[0.6rem]">
                        {leftColumn.map((item) => (
                            <div
                                key={`left-${item.authorEnglishName}`}
                                className="px-fluid-padding-xs flex justify-center items-center"
                            >
                                <Link
                                    href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                                    className="
                                        peer
                                        text-[#000f9f] text-fluid-base text-center 
                                        hover:opacity-70 transition-opacity ten-mincho
                                    "
                                    prefetch={false}
                                >
                                    {item.authorJapaneseName}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-fluid-lg lg:gap-y-[0.5rem]">
                        {rightColumn.map((item, i) => (
                            <div
                                key={`right-${item.authorEnglishName}`}
                                className="px-fluid-padding-xs flex justify-center items-center group/name"
                            >
                                <Link
                                    href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                                    className={`
                                        text-[#000f9f] text-fluid-base text-center hover:opacity-70 transition-opacity
                                        ${(i === 1 || i === 5 || i === 9) ? 'ovo' : 'ten-mincho'}
                                    `}
                                    prefetch={false}
                                >
                                    {(i === 1 || i === 5 || i === 9)
                                        ? item.authorEnglishName
                                        : item.authorJapaneseName
                                    }
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollMaskContent>
        </div>
    );
}
