'use client'

import { useEvent } from "@/app/_contexts/EventContext";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { EVENTS } from "@/app/_lib/eventInfo";
import Link from "next/link";
import { useEventImage } from "@/app/_contexts/EventImageContext";
import { getEventImagePath } from '@/app/_lib/eventUtils';

export const Schedule = () => {
    const { selectedDay } = useEvent();
    const { setHoveredEventImage } = useEventImage();
    const events = EVENTS;

    const filteredEvents = events.filter(
        event => event.day === selectedDay && event.eventName !== ""
    );

    return (
        <ScrollMaskContent className="h-[50vh]">
            <div className="space-y-6 overflow-x-hidden pr-3 ten-mincho">
                {filteredEvents.map((event, index) => {
                    const eventPath = `${selectedDay.toLowerCase()}${index}`;

                    const commonProps = {
                        className: `
                            flex justify-between 
                            border-b-[0.08rem] border-[#000f9f]         
                            pb-2
                            transition-opacity
                            ten-mincho
                        `,
                        onMouseEnter: () => setHoveredEventImage(getEventImagePath(event))
                    };

                    const content = (
                        <>
                            <div className="text-base font-medium ten-mincho">{event.time}</div>
                            <div className="grid grid-cols gap-2 mt-1 text-right">
                                <div className="text-sm ten-mincho">{event.eventName}</div>
                                <div className="text-xs ten-mincho">{event.exhibitors}</div>
                            </div>
                        </>
                    );

                    return event.eventName === "開会式" ? (
                        <div
                            key={eventPath}
                            {...commonProps}
                        >
                            {content}
                        </div>
                    ) : (
                        <Link
                            key={eventPath}
                            href={`/event/${eventPath}`}
                            prefetch={true}
                            {...commonProps}
                            className={`${commonProps.className} hover:opacity-50`}
                        >
                            {content}
                        </Link>
                    );
                })}
            </div>
        </ScrollMaskContent>
    );
};