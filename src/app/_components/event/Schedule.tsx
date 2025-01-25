'use client'

import { useEvent } from "@/app/_contexts/EventContext";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { useEffect, useState } from "react";

type Event = {
    eventName: string;
    exhibitors: string;
    day: string;
    time: string;
    content: string;
}

export const Schedule = () => {
    const { selectedDay } = useEvent();
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        };

        fetchEvents();
    }, []);

    const filteredEvents = events.filter(event =>
        event.day === selectedDay && event.eventName !== ""
    );

    return (
        <ScrollMaskContent className="h-[50vh]">
            <div className="space-y-6">
                {filteredEvents.map((event, index) => (
                    <div key={index} className="flex justify-between border-b-[0.08rem] border-[#000f9f] pb-2">
                        <div className="text-base font-medium">{event.time}</div>
                        <div className="grid grid-cols gap-2 mt-1 text-right">
                            <div className="text-sm">{event.eventName}</div>
                            <div className="text-xs">{event.exhibitors}</div>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollMaskContent>
    );
};