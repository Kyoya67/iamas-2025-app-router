import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { StudentLink } from "@/app/_components/master/StudentLink";
import { WorkImage } from "@/app/_components/master/WorkImage";
import { WorkProvider } from "@/app/_contexts/WorkContext"
import { MASTER_INFO } from "@/app/_lib/masterInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IAMAS 2025 修士研究発表会",
}

export default async function Master() {
    const data = MASTER_INFO;
    const midPoint = Math.ceil(data.length / 2);
    const leftColumn = data.slice(0, midPoint);
    const rightColumn = data.slice(midPoint);

    return (
        <WorkProvider>
            <div className="
                absolute inset-0 flex justify-center lg:justify-end lg:mr-[10vw]
                mt-5 md:mt-0 
            ">
                <div className="
                    absolute left-[20vw] top-[20vh]
                    w-[41vw] -rotate-[1.5deg]
                    transition-opacity duration-300
                    lg:opacity-100 lg:pointer-events-auto
                    opacity-0 pointer-events-none   
                ">
                    <WorkImage />
                </div>
                <ScrollMaskContent className="
                    h-[60vh] sm:h-[55vh]
                    mt-[15vh] lg:mt-[15vh]
                    ml-6 
                ">
                    <div className="
                        grid grid-cols-2 
                        gap-x-[3rem] sm:gap-x-[6rem] lg:gap-x-[1rem] 
                        pr-[0rem] 
                        ">
                        <div className="flex flex-col gap-y-fluid-lg lg:gap-y-[0.75rem] mr-[1vw]">
                            {leftColumn.map((item) => (
                                <div
                                    key={`left-${item.authorEnglishName}`}
                                    className="px-fluid-padding-xs flex justify-center items-center"
                                >
                                    <StudentLink
                                        href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                                        className="
                                            peer
                                            text-[#000f9f] text-fluid-base text-center 
                                            hover:opacity-70 transition-opacity ten-mincho
                                        "
                                        name={item.authorJapaneseName}
                                        englishName={item.authorEnglishName}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-y-fluid-lg lg:gap-y-[0.75rem]">
                            {rightColumn.map((item, i) => (
                                <div
                                    key={`right-${item.authorEnglishName}`}
                                    className="px-fluid-padding-xs flex justify-center items-center group/name"
                                >
                                    <StudentLink
                                        href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                                        className={`
                                            text-[#000f9f] text-fluid-base text-center hover:opacity-70 transition-opacity
                                            ${(i === 1 || i === 5 || i === 9) ? 'ovo' : 'ten-mincho'}
                                        `}
                                        name={(i === 1 || i === 5 || i === 9)
                                            ? item.authorEnglishName
                                            : item.authorJapaneseName
                                        }
                                        englishName={item.authorEnglishName}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollMaskContent>
            </div>
        </WorkProvider>
    );
}
