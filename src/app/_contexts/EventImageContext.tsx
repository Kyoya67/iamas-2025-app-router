'use client'

import { createContext, useContext, useState } from 'react';

type EventImageContextType = {
    hoveredEventImage: string | null;
    setHoveredEventImage: (image: string | null) => void;
};

const EventImageContext = createContext<EventImageContextType | undefined>(undefined);

export const EventImageProvider = ({ children }: { children: React.ReactNode }) => {
    const [hoveredEventImage, setHoveredEventImage] = useState<string | null>(null);

    return (
        <EventImageContext.Provider value={{ hoveredEventImage, setHoveredEventImage }}>
            {children}
        </EventImageContext.Provider>
    );
};

export const useEventImage = () => {
    const context = useContext(EventImageContext);
    if (context === undefined) {
        throw new Error('useEventImage must be used within a EventImageProvider');
    }
    return context;
}; 