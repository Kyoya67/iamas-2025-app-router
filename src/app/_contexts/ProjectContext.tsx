'use client'

import { createContext, useContext, useState } from "react";

type ProjectContextType = {
    hoveredProject: string;
    setHoveredProject: (project: string) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children, initialProject = 'TheArtOfListening' }: {
    children: React.ReactNode;
    initialProject?: string;
}) {
    const [hoveredProject, setHoveredProject] = useState(initialProject);

    return (
        <ProjectContext.Provider value={{ hoveredProject, setHoveredProject }}>
            {children}
        </ProjectContext.Provider>
    );
}

export function useProject() {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error('useProject must be used within a ProjectProvider');
    }
    return context;
} 