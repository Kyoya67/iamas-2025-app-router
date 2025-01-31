import ProjectContent from "@/app/_components/project/ProjectContent";
import { PROJECT_INFO } from "@/app/_lib/projectInfo";

interface Props {
    params: Promise<{
        name: string;
    }>;
}

export default async function ProjectPage({ params }: Props) {
    const { name } = await params;

    // modalProjectDataと同じデータを使用
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

    return (
        <div>
            <ProjectContent
                projectName={name}
                directoryName={projectData[currentIndex].directory}
                pictureNum={projectData[currentIndex].pictureNum}
            />
        </div>
    );
} 