'use client'

import { useEvent } from "@/app/_contexts/EventContext";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { useEventData } from "@/app/_lib/api-client";
import { EVENTS } from "@/app/_lib/constants";
import Link from "next/link";

export const Schedule = () => {
    const { selectedDay } = useEvent();
    // const { data: events, error } = useEventData();
    const events = EVENTS;

    if (!events || !Array.isArray(events)) {
        return <div>Loading...</div>;
    }

    const filteredEvents = events.filter(
        event => event.day === selectedDay && event.eventName !== ""
    );

    return (
        <ScrollMaskContent className="h-[50vh]">
            <div className="space-y-6 overflow-x-hidden">
                {filteredEvents.map((event, index) => {
                    const cleanTime = event.time.replace(/-$/, '');
                    return (
                        <Link
                            href={`/event/${encodeURIComponent(selectedDay)}-${encodeURIComponent(cleanTime)}`}
                            key={index}
                            className="
                                flex justify-between 
                                border-b-[0.08rem] border-[#000f9f] 
                                pb-2
                                hover:opacity-70
                                transition-opacity
                            "
                        >
                            <div className="text-base font-medium">{event.time}</div>
                            <div className="grid grid-cols gap-2 mt-1 text-right">
                                <div className="text-sm">{event.eventName}</div>
                                <div className="text-xs">{event.exhibitors}</div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </ScrollMaskContent>
    );
};