import Image from "next/image";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { EVENTS } from "@/app/_lib/eventInfo";
import { StudentSection } from "./StudentSection";

export const EventContent = ({ day, time }: { day: string, time: string }) => {
    const event = EVENTS.find(
        item => item.day === day &&
            item.time === time &&
            item.eventName !== ""
    );
    if (!event) return <div>Event not found</div>;

    if (event.day === "Friday") {
        day = "2/21" + " " + event.day;
    } else if (event.day === "Saturday") {
        day = "2/22" + " " + event.day;
    } else if (event.day === "Sunday") {
        day = "2/23" + " " + event.day;
    } else {
        day = "2/24" + " " + event.day;
    }

    const renderParticipant = (index: number) => {
        const nameKey = `participant${index}_name` as keyof typeof event;
        const profileKey = `participant${index}_profile` as keyof typeof event;
        const name = event[nameKey] as string;
        const profile = event[profileKey] as string;

        if (!name) return null;

        return (
            <div key={index}>
                <div className="flex items-end mb-5">
                    <Image
                        src={`/event/profile/${name}.webp`}
                        alt={name}
                        width={100}
                        height={100}
                        className="object-contain mr-4"
                    />
                    <div className="text-xl text-black">{name}</div>
                </div>
                <div className="text-sm text-black mb-4">{profile}</div>
            </div>
        );
    };

    const renderStudent = (index: number) => {
        const nameKey = `student${index}` as keyof typeof event;
        const name = event[nameKey] as string;
        console.log(name);
        if (!name) return null;

        return <StudentSection key={index} name={name} />;
    };

    return (
        <div className="h-full">
            <h1 className="text-2xl font-bold">{event.eventName}</h1>
            <div className="text-xl mb-4 text-black border-b border-[#000f9f] pb-2">{day}&nbsp;{event.time}</div>
            <ScrollMaskContent
                className="h-[80%] mb-4 pr-5 pb-4 flex-1 overflow-y-auto"
            >
                <div className="relative w-full aspect-[16/9] mb-4 border-[0.08px] border-black">
                    <Image
                        src={'/event/NxPC.webp'}
                        alt={event.eventName}
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="text-base text-black mb-4">{event.content}</div>
                {[1, 2, 3, 4, 5, 6].map(index => renderParticipant(index))}
                {[1, 2, 3].map(index => renderStudent(index))}
            </ScrollMaskContent>
        </div>
    );
}; 