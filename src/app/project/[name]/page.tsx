import ProjectContent from "@/app/_components/project/ProjectContent";
import { PROJECT_INFO } from "@/app/_lib/projectInfo";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        name: string;
    }>;
}

export default async function ProjectPage({ params }: Props) {
    const { name } = await params;

    const projectData = [
        { directory: 'TheArtOfListening', pictureNum: 5 },
        { directory: 'TechnologyHermeneutics', pictureNum: 4 },
        { directory: 'WelfareTechnology', pictureNum: 5 },
        { directory: 'CollaborativeDesignResearchProject', pictureNum: 5 },
        { directory: 'ExperienceExtension', pictureNum: 5 },
        { directory: 'ExtremeBiologies', pictureNum: 5 }
    ];

    const currentIndex = PROJECT_INFO.findIndex(
        s => s.projectName.split(' ').join('') === decodeURI(name)
    );

    if (currentIndex === -1) notFound();

    return (
        <div className="
            absolute inset-0 flex justify-center 
            max-w-3xl mx-auto
        ">
            <div className="
                max-w-[28rem] lg:max-w-[45rem] h-[70vh]
                mt-[12vh] md:mt-[10vh] mx-auto 
                text-justify
                p-8">
                <ProjectContent
                    projectName={PROJECT_INFO[currentIndex].projectName}
                    directoryName={projectData[currentIndex].directory}
                    pictureNum={projectData[currentIndex].pictureNum}
                />
            </div>
        </div>
    );
} 