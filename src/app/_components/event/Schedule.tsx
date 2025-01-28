'use client'

import { useEvent } from "@/app/_contexts/EventContext";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { EVENTS } from "@/app/_lib/eventInfo";
import { useRouter } from "next/navigation";

export const Schedule = () => {
    const { selectedDay } = useEvent();
    const router = useRouter();
    const events = EVENTS;

    const filteredEvents = events.filter(
        event => event.day === selectedDay && event.eventName !== ""
    );

    const handleEventClick = (index: number) => {
        const eventPath = `${selectedDay.toLowerCase()}${index}`;
        router.push(`/event/${eventPath}`);
    };

    return (
        <ScrollMaskContent className="h-[50vh]">
            <div className="space-y-6 overflow-x-hidden pr-3">
                {filteredEvents.map((event, index) => (
                    <div
                        key={index}
                        onClick={() => handleEventClick(index)}
                        className="
                            flex justify-between 
                            border-b-[0.08rem] border-[#000f9f] 
                            pb-2
                            hover:opacity-70
                            transition-opacity
                            cursor-pointer
                        "
                    >
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