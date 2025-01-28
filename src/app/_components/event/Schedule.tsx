'use client'

import { useEvent } from "@/app/_contexts/EventContext";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { EVENTS } from "@/app/_lib/eventInfo";
import Link from "next/link";

export const Schedule = () => {
    const { selectedDay } = useEvent();
    const events = EVENTS;

    const filteredEvents = events.filter(
        event => event.day === selectedDay && event.eventName !== ""
    );

    return (
        <ScrollMaskContent className="h-[50vh]">
            <div className="space-y-6 overflow-x-hidden pr-3">
                {filteredEvents.map((event, index) => {
                    return (
                        <Link
                            href={`/event/${encodeURIComponent(selectedDay)}-${index}`}
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