import Image from "next/image";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { EVENTS } from "@/app/_lib/eventInfo";
import { StudentSection } from "./StudentSection";

export const EventContent = ({ day, time }: { day: string, time: string }) => {
    const event = EVENTS.find(
        item => item.day === day &&
            item.time === time &&
            item.eventName !== undefined
    );
    if (!event) return <div>Event not found</div>;

    if (event.day === "Friday") {
        day = "2/21（金）";
    } else if (event.day === "Saturday") {
        day = "2/22（土）";
    } else if (event.day === "Sunday") {
        day = "2/23（日）";
    } else {
        day = "2/24（月）";
    }

    const renderParticipant = (index: number) => {
        const nameKey = `participant${index}_name` as keyof typeof event;
        const statusKey = `participant${index}_status` as keyof typeof event;
        const profileKey = `participant${index}_profile` as keyof typeof event;
        const profile = event[profileKey] as string;
        let status = event[statusKey] as string;
        let name = event[nameKey] as string;

        if (!name) return null;

        let image = name;
        if (image.includes('(')) {
            status = image.split('(')[1].replace(')', '');
            image = image.split('(')[0];
            name = image;
        }
        const imagePath = encodeURIComponent(image.trim().split(' ').join(''));

        return (
            <div key={index}>
                <div className="flex items-end mt-2 mb-2 relative">
                    <Image
                        src={`/event/profile/${imagePath}.webp`}
                        alt={name}
                        width={100}
                        height={100}
                        className="object-contain mr-4"
                    />
                    <div className="flex flex-col text-base sm:text-xl text-black absolute bottom-[-0.3rem] ml-[7rem] ten-mincho">
                        <div className="text-sm">{status}</div>
                        <div>{name}</div>
                    </div>
                </div>
                <div className="text-xs sm:text-sm text-black mb-4 ten-mincho">{profile}</div>
            </div>
        );
    };

    const renderStudent = (index: number) => {
        const nameKey = `student${index}` as keyof typeof event;
        const name = event[nameKey] as string;
        if (!name) return null;

        return <StudentSection key={index} name={name} />;
    };

    return (
        <div className="text-black relative h-full text-justify ten-mincho">
            <div className="relative z-10 h-full flex flex-col">
                <h1 className="text-[#000f9f] text-2xl font-bold">{event.eventName}</h1>
                <div className="text-xl mb-4 border-b border-[#000f9f] pb-2">{day}&nbsp;{event.time}</div>
                {(() => {
                    const eventImagePath = event.eventName?.split(' ').join('') + '.webp';
                    return (
                        <ScrollMaskContent
                            className="h-[70vh] mb-4 pr-5 pb-4 flex-1 overflow-y-auto"
                        >
                            <div className="relative w-full aspect-[16/9] mb-4 border-[0.08px] border-black">
                                <Image
                                    src={`/event/${eventImagePath}`}
                                    alt={event.eventName ?? ''}
                                    fill
                                    className="contain"
                                />
                            </div>
                            <div className="text-sm sm:text-base text-black mb-4 ten-mincho">{event.content}</div>
                            {[1, 2, 3, 4, 5, 6].map(index => (
                                <div key={index} className="ten-mincho">
                                    {renderParticipant(index)}
                                </div>
                            ))}
                            {[1, 2, 3].map(index => (
                                <div key={index} className="ten-mincho">
                                    {renderStudent(index)}
                                </div>
                            ))}
                        </ScrollMaskContent>
                    );
                })()}
            </div>
        </div>
    );
}; 