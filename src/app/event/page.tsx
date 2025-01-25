import { Metadata } from "next";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { EventAccordion } from "@/app/_components/EventAccordion";

export const metadata: Metadata = {
    title: "IAMAS 2025 イベント",
};

export default function Event() {
    const days = [
        { id: "friday", label: "2/21（金）" },
        { id: "saturday", label: "2/22（土）" },
        { id: "sunday", label: "2/23（日）" },
        { id: "monday", label: "2/24（月 | 振休）" },
    ];

    return (
        <div className="
            absolute inset-0 
            text-[#000f9f]
            w-[70vw] sm:w-[56vw] max-w-[40rem] 
            mx-auto mt-[10vh] p-4">
            <EventAccordion days={days} />
            <div className="hidden md:flex justify-between text-md border-b-[0.1rem] border-[#000f9f] mb-4 pb-2">
                {days.map((day) => (
                    <label
                        key={day.id}
                        className="flex items-center cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="day"
                            id={day.id}
                            className="hidden peer"
                        />
                        <div className="
                            peer-checked:bg-[#000f9f]
                            peer-checked:text-white 
                            text-[#000f9f] 
                            hover:opacity-30
                            peer-checked:hover:opacity-100
                            pl-3
                        ">
                            {day.label}
                        </div>
                    </label>
                ))}
            </div>
            <ScrollMaskContent className="h-[60vh]">
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div key={index} className="flex justify-between">
                            <div className="text-lg font-medium">12:00〜14:00</div>
                            <div className="grid grid-cols gap-2 mt-1">
                                <div>イベント名</div>
                                <div>開催場所</div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollMaskContent>
        </div>
    );
}
