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
            mt-[18vh] mx-[10vw]
        ">
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