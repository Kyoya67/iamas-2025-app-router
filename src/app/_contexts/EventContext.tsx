'use client'

import { createContext, useContext, useState, useEffect } from "react";

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

    // クライアントサイドでのみlocalStorageを使用
    useEffect(() => {
        const savedDay = localStorage.getItem('selectedDay');
        if (savedDay) {
            setSelectedDay(savedDay);
        }
    }, []);

    // 選択された日付を保存
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