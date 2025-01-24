'use client'

import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface WorkContextType {
    currentWork: string
    setCurrentWork: (work: string) => void
}

const WorkContext = createContext<WorkContextType | undefined>(undefined);

export function WorkProvider({ children }: { children: ReactNode }) {
    const [currentWork, setCurrentWork] = useState<string>("AzumiShima");

    return (
        <WorkContext.Provider value={{ currentWork, setCurrentWork }}>
            {children}
        </WorkContext.Provider>
    );
}

export function useWork() {
    const context = useContext(WorkContext);
    if (context === undefined) {
        throw new Error("useWork must be used within a WorkProvider");
    }
    return context;
}