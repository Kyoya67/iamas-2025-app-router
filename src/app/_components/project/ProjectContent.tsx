import { PROJECT_INFO } from "@/app/_lib/projectInfo";

export default function ProjectContent({ projectName }: { projectName: string }) {
    const project = PROJECT_INFO.find(project => project.projectName === projectName);
    if (!project) {
        return <div>Project not found</div>;
    }
    return (
        <div>
            <h1>{project.projectName}</h1>
        </div>
    );
}