'use client'

import { createContext, useContext, useState } from "react";

type EventContextType = {
    selectedDay: string;
    setSelectedDay: (day: string) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children, initialDay = 'Friday' }: {
    children: React.ReactNode;
    initialDay?: string;
}) {
    const [selectedDay, setSelectedDay] = useState(initialDay);

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