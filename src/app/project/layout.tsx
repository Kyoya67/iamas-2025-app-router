import { ProjectProvider } from "@/app/_contexts/ProjectContext";

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProjectProvider initialProject="TheArtOfListening">
            {children}
        </ProjectProvider>
    );
} 