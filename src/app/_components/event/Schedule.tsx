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
        <ScrollMaskContent className="h-[50vh] pt-3 xl:w-[33vw]">
            <div className="space-y-6 overflow-x-hidden pr-3 ten-mincho">
                {filteredEvents.map((event, index) => {
                    const eventPath = `${selectedDay.toLowerCase()}${index}`;

                    const dystopiaCyclingEvent = "なぜ私たちは自らの校舎をディストピアと呼ぶのか：\nサイクリングツアー";
                    const longTitleEvent = "技術/手法の実験の積み重ねから\n生まれる視覚表現を紐解く";
                    const dystopiaTalkEvent = "なぜ私たちは自らの校舎を\nディストピアと呼ぶのか：トーク";
                    const projectEvent = "プロジェクト研究：\n展示コアタイム";

                    const getEventClass = (eventName: string) => {
                        const baseClass = 'text-sm ten-mincho';
                        const whitespaceClass = getWhitespaceClass(eventName);
                        const sizeClass = eventName === projectEvent ? 'text-[0.79rem] sm:text-sm' : '';

                        return `${baseClass} ${whitespaceClass} ${sizeClass}`;
                    };

                    const getExhibitorsClass = (eventName: string) => {
                        const baseClass = 'text-xs ten-mincho whitespace-pre-wrap';
                        const sizeClass = eventName.includes("プロジェクト研究") ? 'text-[0.649rem] sm:text-sm' : '';

                        return `${baseClass} ${sizeClass}`;
                    };

                    const getWhitespaceClass = (eventName: string) => {
                        if (eventName === dystopiaCyclingEvent) {
                            return 'text-[0.7rem] whitespace-pre-wrap sm:text-[0.8rem] sm:!whitespace-pre-line';
                        }
                        if (eventName === longTitleEvent) {
                            return 'whitespace-pre-wrap min-[940px]:whitespace-normal xl:whitespace-pre-wrap';
                        }
                        if (eventName === dystopiaTalkEvent) {
                            return 'whitespace-pre-wrap min-[580px]:whitespace-normal md:whitespace-pre-wrap min-[950px]:whitespace-normal xl:whitespace-pre-wrap';
                        }
                        return 'whitespace-pre-wrap sm:whitespace-normal';
                    };

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
                            <div className="text-sm sm:text-base font-medium ten-mincho">{event.time}</div>
                            <div className="grid grid-cols gap-2 mt-1 text-right">
                                <div className={`max-w-[220px] sm:max-w-none ml-auto ${getEventClass(event.eventName)}`}>
                                    {event.eventName}
                                </div>
                                <div className={`max-w-[220px] sm:max-w-none ml-auto ${getExhibitorsClass(event.eventName)}`}>
                                    {event.exhibitors}
                                </div>
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