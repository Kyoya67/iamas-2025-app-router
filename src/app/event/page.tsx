import { Metadata } from "next";
import { Accordion } from "@/app/_components/event/Accordion";
import { EventImage } from "@/app/_components/event/EventImage";
import { EventProvider } from "@/app/_contexts/EventContext";
import { NonAccordion } from "@/app/_components/event/NonAccordion";
import { Schedule } from "@/app/_components/event/Schedule";

export const metadata: Metadata = {
    title: "IAMAS 2025 イベント",
};

export default function Event() {
    const days = [
        { id: "Friday", label: "2/21（金）" },
        { id: "Saturday", label: "2/22（土）" },
        { id: "Sunday", label: "2/23（日）" },
        { id: "Monday", label: "2/24（月 | 振休）" },
    ];

    return (
        <EventProvider>
            <div className="
                absolute inset-0 
                p-fluid-padding-sm sm:p-0
                relative h-full w-full
                flex flex-col items-center
                sm:ml-[0.5rem]
                text-[#000f9f]
            ">
                <div className="
                    w-[70vw] sm:w-[56vw] xl:w-[29rem]
                    flex flex-col xl:flex-row
                    mt-[15vh]
                    relative
                    xl:ml-[40vw]
                ">
                    <div className="
                        absolute left-[-45vw] top-[5vh]
                        w-[41vw] -rotate-[1.5deg]
                        transition-opacity duration-300
                        xl:opacity-100 xl:pointer-events-auto
                        opacity-0 pointer-events-none   
                    ">
                        <EventImage />
                    </div>

                    <div className="w-full px-4">
                        <Accordion days={days} />
                        <NonAccordion days={days} />
                        <Schedule />
                    </div>
                </div>
            </div>
        </EventProvider>
    );
}
