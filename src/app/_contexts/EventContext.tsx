'use client'

import { createContext, useContext, useState } from "react";

type EventContextType = {
    selectedDay: string;
    setSelectedDay: (day: string) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
    const [selectedDay, setSelectedDay] = useState("Friday");

    return (
        <EventContext.Provider value={{ selectedDay, setSelectedDay }}>
            {children}
        </EventContext.Provider>
    );
}

export function useEvent() {
    const context = useContext(EventContext);
    if (context === undefined) {
        throw new Error('useEvent must be used within a EventProvider');
    }
    return context;
} 