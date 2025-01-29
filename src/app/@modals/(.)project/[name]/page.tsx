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

    const currentIndex = PROJECT_INFO.findIndex(
        s => s.projectName.split(' ').join('') === decodeURI(name)
    );

    const nextPath = currentIndex < PROJECT_INFO.length - 1
        ? `/project/${PROJECT_INFO[currentIndex + 1].projectName.split(' ').join('')}`
        : null;

    const previousPath = currentIndex > 0
        ? `/project/${PROJECT_INFO[currentIndex - 1].projectName.split(' ').join('')}`
        : null;

    const project = PROJECT_INFO[currentIndex];
    if (!project) {
        console.error('Project not found:', { name });
        return null;
    }

    return (
        <Modal
            nextPath={nextPath}
            previousPath={previousPath}
            backPath="/project"
            modalType="project"
        >
            <ProjectContent projectName={project.projectName} />
        </Modal>
    );
}
