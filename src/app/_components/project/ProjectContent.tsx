'use client'
import { PROJECT_INFO } from "@/app/_lib/projectInfo";
import { useState } from "react";
import { ProjectDetails } from "./ProjectDetails";

type ProjectContentProps = {
    projectName: string;
    directoryName: string;
    pictureNum: number;
    isModal?: boolean;
};

export default function ProjectContent({
    projectName,
    directoryName,
    pictureNum,
    isModal = false
}: ProjectContentProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const project = PROJECT_INFO.find(project => project.projectName === projectName);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className={`
            text-black relative h-full 
            ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'} 
            ten-mincho
        `}>
            <div className="relative z-10 h-full flex flex-col">
                <ProjectDetails
                    project={project}
                    directoryName={directoryName}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                    pictureNum={pictureNum}
                    isModal={isModal}
                />
            </div>
        </div>
    );
}