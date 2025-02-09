'use client'

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

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
    const pathname = usePathname();

    // クライアントサイドでのみlocalStorageを使用
    useEffect(() => {
        const savedDay = localStorage.getItem('selectedDay');
        if (savedDay) {
            setSelectedDay(savedDay);
        }
    }, []);

    // イベントページ以外では金曜日に戻す
    useEffect(() => {
        if (!pathname.startsWith('/event')) {
            setSelectedDay('Friday');
            localStorage.removeItem('selectedDay');
        }
    }, [pathname]);

    // 選択された日付を保存
    useEffect(() => {
        if (pathname.startsWith('/event')) {
            localStorage.setItem('selectedDay', selectedDay);
        }
    }, [selectedDay, pathname]);

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