'use client'

import { ProjectDisplayProps } from "@/app/_types/project";
import Link from "next/link";
import { useProject } from "@/app/_contexts/ProjectContext";

export default function TwoColumDisplay({ formattedData }: ProjectDisplayProps) {
    const { setHoveredProject } = useProject();

    return (
        <div className="
            hidden lg:block
            absolute right-[-1.5rem]
            mx-[10vw]
            top-[45vh]
            translate-y-[-50%]
        ">
            <h1 className="
                    text-black
                    text-base sm:text-xl lg:text-2xl
                    ten-mincho
                    border-b border-black
                ">
                プロジェクト研究展示
            </h1>
            <div className="
                    text-[#000f9f]
                    text-xs sm:text-sm lg:text-base
                    ten-mincho mb-6
                ">
                22-24日 | 13:00 ~ 14:00
            </div>
            <div className="w-[25vw] flex flex-col gap-y-6">
                {formattedData.map((item) => (
                    <Link
                        key={item.urlName}
                        href={`/project/${item.urlName}`}
                        className="
                            text-xl hover:text-[#000f9f]
                            transition-colors duration-300
                        "
                        onMouseEnter={() => setHoveredProject(item.directory)}
                    >
                        {item.projectName}
                    </Link>
                ))}
            </div>
        </div>
    );
}