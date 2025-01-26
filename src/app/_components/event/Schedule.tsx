'use client'

import { useEvent } from "@/app/_contexts/EventContext";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import useSWR from 'swr';

type Event = {
    eventName: string;
    exhibitors: string;
    day: string;
    time: string;
    content: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const Schedule = () => {
    const { selectedDay } = useEvent();
    const { data: events = [], error } = useSWR<Event[]>('/api/events', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 3600000,
        fallbackData: [],
        suspense: true,
    })

    const filteredEvents = events.filter(
        event => event.day === selectedDay && event.eventName !== ""
    );

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ScrollMaskContent className="h-[50vh]">
            <div className="space-y-6 overflow-x-hidden">
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