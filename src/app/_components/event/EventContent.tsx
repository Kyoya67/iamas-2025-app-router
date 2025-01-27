'use client'

import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { useEventContent } from "@/app/_lib/api-client";
export const EventContent = ({ day, time }: { day: string, time: string }) => {
    const { event, error, isLoading } = useEventContent(day, time);
    console.log("EventContent:", day, time);

    if (error) return <div>Failed to load event data</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!event) return <div>Event not found</div>;

    return (
        <ScrollMaskContent>
            <div className="absolute inset-0 mx-auto w-[10vw] z-[100] cursor-pointer">
                <h1>{event.eventName}</h1>
                <h2>{event.exhibitors}</h2>
            </div>
        </ScrollMaskContent>
    );
}; 