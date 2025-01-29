import ProjectContent from "@/app/_components/project/ProjectContent";

interface Props {
    params: Promise<{
        name: string;
    }>;
}

export default async function ProjectPage({ params }: Props) {
    const { name } = await params;

    return (
        <div>
            <ProjectContent projectName={name} />
        </div>
    );
} 