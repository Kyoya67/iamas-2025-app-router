import { Metadata } from "next";
import { Accordion } from "@/app/_components/event/Accordion";
import { EventImage } from "@/app/_components/event/EventImage";
import { NonAccordion } from "@/app/_components/event/NonAccordion";
import { Schedule } from "@/app/_components/event/Schedule";
import { EventImageProvider } from "@/app/_contexts/EventImageContext";

export const metadata: Metadata = {
    title: "IAMAS 2025 イベント",
};

export default function Event() {
    const days = [
        { id: "Friday", label: "2/21（金）" },
        { id: "Saturday", label: "2/22（土）" },
        { id: "Sunday", label: "2/23（日）" },
        { id: "Monday", label: "2/24（月）" },
    ];

    return (
        <EventImageProvider>
            <div className="
                flex flex-col items-center
                text-[#000f9f]
                m-auto
                w-fit h-fit
            ">
                <div className="
                    w-[90vw] md:w-[58vw] xl:w-[29rem]
                    flex flex-col xl:flex-row
                    md:ml-[8vw] 
                    mt-[12vh] md:mt-[20vh]
                    sm:pl-[2vw]
                    relative
                    xl:ml-[40vw]
                    max-w-full
                ">
                    <div className="
                        absolute left-[-44vw] top-[8vh]
                        w-[41vw] -rotate-[1.5deg]
                        transition-opacity duration-300
                        xl:opacity-100 xl:pointer-events-auto
                        opacity-0 pointer-events-none             
                    ">
                        <EventImage />
                    </div>

                    <div className="px-4">
                        <Accordion days={days} />
                        <NonAccordion days={days} />
                        <Schedule />
                    </div>
                </div>
            </div>
        </EventImageProvider>
    );
}
