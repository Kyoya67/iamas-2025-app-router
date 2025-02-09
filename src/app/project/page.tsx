import { PROJECT_INFO } from "@/app/_lib/projectInfo";
import OneColumDisplay from "@/app/_components/project/OneColumDisplay";
import TwoColumDisplay from "@/app/_components/project/TwoColumDisplay";
import type { Metadata } from "next";
import { ProjectImage } from "@/app/_components/project/ProjectImage";

export const metadata: Metadata = {
    title: "IAMAS 2025 プロジェクト研究展示",
}

export default function Exhibition() {
    const data = PROJECT_INFO;
    const directories = [
        'TheArtOfListening',
        'TechnologyHermeneutics',
        'WelfareTechnology',
        'CollaborativeDesignResearchProject',
        'ExperienceExtension',
        'ExtremeBiologies'
    ];

    const formattedData = data.map((item, index) => ({
        ...item,
        urlName: item.projectName.split(' ').join(''),
        directory: directories[index],
    }));

    return (
        <div className="
            w-[100vw] h-[100vh]
            relative
            overflow-x-hidden
        ">
            <div className="
                lg:opacity-100 lg:pointer-events-auto
                absolute ml-[10rem] top-[45vh]
                translate-y-[-50%]
                w-[40vw] -rotate-[1.5deg]
                transition-opacity duration-300
                opacity-0 pointer-events-none   
                ">
                <ProjectImage />
            </div>
            <OneColumDisplay formattedData={formattedData} />
            <TwoColumDisplay formattedData={formattedData} />
        </div >
    );
}