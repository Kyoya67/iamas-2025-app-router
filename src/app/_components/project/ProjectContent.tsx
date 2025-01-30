import Image from "next/image";
import { PROJECT_INFO } from "@/app/_lib/projectInfo";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";

export default function ProjectContent({ projectName }: { projectName: string }) {
    const project = PROJECT_INFO.find(project => project.projectName === projectName);
    if (!project) {
        return <div>Project not found</div>;
    }

    const sharerText = project.assistant
        ? `${project.sharer}、${project.assistant}`
        : project.sharer;

    return (
        <div className="ten-mincho">
            <div className="text-2xl mb-1">{project.projectName}</div>
            <div className="text-black text-base mb-0">{project.representative}</div>
            <div className="text-black text-sm mb-4 border-b border-[#000f9f] pb-2">{sharerText}</div>
            <ScrollMaskContent className="text-black text-sm mb-4">
                <Image
                    src={`/project/${projectName}/1.webp`}
                    alt={project.projectName}
                    width={100}
                    height={100}
                />
                <div className="text-black text-sm mb-4">{project.projectConcept}</div>
            </ScrollMaskContent>
        </div>
    );
}