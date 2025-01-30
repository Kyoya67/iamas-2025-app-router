'use client'

import { createContext, useContext, useState, useEffect } from "react";

type EventContextType = {
    selectedDay: string;
    setSelectedDay: (day: string) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
    const [selectedDay, setSelectedDay] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('selectedDay') || "Friday";
        }
        return "Friday";
    });

    useEffect(() => {
        localStorage.setItem('selectedDay', selectedDay);
    }, [selectedDay]);

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