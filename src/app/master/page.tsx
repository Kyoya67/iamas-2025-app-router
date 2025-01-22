import type { Metadata } from "next";
import Link from "next/link";
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
            absolute inset-0 flex justify-center 
            mt-5 md:mt-0
        ">
            <ScrollMaskContent className="
                h-[60vh] sm:h-[55vh]
                mt-[15vh]
                ml-6
            ">
                <div className="grid grid-cols-2 gap-x-[3rem] sm:gap-x-[6rem] gap-y-fluid-lg pr-6">
                    <div className="flex flex-col gap-y-fluid-lg">
                        {leftColumn.map((item) => (
                            <div key={`left-${item.authorEnglishName}`} className="px-fluid-padding-xs flex justify-center items-center">
                                <Link
                                    href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                                    className="text-[#000f9f] text-fluid-base text-center hover:opacity-70 transition-opacity ten-mincho"
                                    prefetch={false}
                                >
                                    {item.authorJapaneseName}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-fluid-lg">
                        {rightColumn.map((item, i) => (
                            <div key={`right-${item.authorEnglishName}`} className="px-fluid-padding-xs flex justify-center items-center">
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
