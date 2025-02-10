import ProjectContent from "@/app/_components/project/ProjectContent";
import { PROJECT_INFO } from "@/app/_lib/projectInfo";
import Modal from "@/app/_components/modalSet/Modal";

interface Props {
    params: Promise<{
        name: string;
    }>;
}

export default async function ProjectModal({ params }: Props) {
    const { name } = await params;
    const modalProjectData = [
        { directory: 'TheArtOfListening', pictureNum: 5 },
        { directory: 'TechnologyHermeneutics', pictureNum: 4 },
        { directory: 'WelfareTechnology', pictureNum: 3 },
        { directory: 'CollaborativeDesignResearchProject', pictureNum: 5 },
        { directory: 'ExperienceExtension', pictureNum: 5 },
        { directory: 'ExtremeBiologies', pictureNum: 5 }
    ];

    const currentIndex = PROJECT_INFO.findIndex(
        s => s.projectName.split(' ').join('') === decodeURI(name)
    );

    const project = PROJECT_INFO[currentIndex];
    if (!project) {
        console.error('Project not found:', { name });
        return null;
    }

    const nextPath = currentIndex < PROJECT_INFO.length - 1
        ? `/project/${PROJECT_INFO[currentIndex + 1].projectName.split(' ').join('')}`
        : null;

    const previousPath = currentIndex > 0
        ? `/project/${PROJECT_INFO[currentIndex - 1].projectName.split(' ').join('')}`
        : null;

    return (
        <Modal
            nextPath={nextPath}
            previousPath={previousPath}
            backPath="/project"
            modalType="project"
        >
            <ProjectContent
                projectName={project.projectName}
                directoryName={modalProjectData[currentIndex].directory}
                pictureNum={modalProjectData[currentIndex].pictureNum}
                isModal={true}
            />
        </Modal>
    );
}
