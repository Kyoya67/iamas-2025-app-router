'use client'

import { useEvent } from "@/app/_contexts/EventContext";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";

export const Schedule = () => {
    const { selectedDay } = useEvent();

    return (
        <ScrollMaskContent className="h-[50vh]">
            <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="flex justify-between">
                        <div className="text-lg font-medium">12:00〜14:00</div>
                        <div className="grid grid-cols gap-2 mt-1">
                            <div>イベント名 - {selectedDay}</div>
                            <div>開催場所</div>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollMaskContent>
    );
};