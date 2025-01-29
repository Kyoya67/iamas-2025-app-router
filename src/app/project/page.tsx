import { PROJECT_INFO } from "@/app/_lib/projectInfo";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "IAMAS 2025 修士研究発表会",
}

export default function Exhibition() {
    const data = PROJECT_INFO;
    const formattedData = data.map(item => ({
        ...item,
        urlName: item.projectName.split(' ').join(''),
        displayName: item.projectName
    }));
    return (
        <div className="
            absolute inset-0 flex justify-center lg:justify-end lg:mr-[10vw]
            mt-5 md:mt-0 
        ">
            <ScrollMaskContent className="
                h-[60vh] sm:h-[55vh]
                w-[65vw] lg:w-[25vw]
                md:ml-20
                mt-[15vh]
            ">
                <div className="flex flex-col gap-y-fluid-lg lg:gap-y-10 ten-mincho">
                    {formattedData.map((item) => (
                        <div
                            key={`${item.urlName}`}
                            className="
                                px-fluid-padding-xs flex 
                                justify-left 
                            "
                        >
                            <Link
                                href={`/project/${item.urlName}`}
                            >
                                {item.displayName}
                            </Link>
                        </div>
                    ))}
                </div>
            </ScrollMaskContent>
        </div>
    );
}
