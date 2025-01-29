import { EventContent } from "@/app/_components/event/EventContent";
import { EVENTS } from "@/app/_lib/eventInfo";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EventModal({ params }: Props) {
    try {
        const { id } = await params;
        const day = id.match(/[a-z]+/i)?.[0] || '';
        const index = parseInt(id.match(/\d+/)?.[0] || '0', 10);

        const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);

        const filteredEvents = EVENTS.filter(
            event => event.day === formattedDay && event.eventName !== ""
        );

        const event = filteredEvents[index];
        if (!event) {
            console.error('Event not found:', { id, formattedDay, index });
            return null;
        }

        return (
            <div className="absolute inset-0">
                <div className="
                        w-[80%] md:w-[55%] max-w-[40rem] h-[70vh]
                        mt-[12vh] md:mt-[10vh] mx-auto 
                        text-justify
                        p-8
                    ">
                    <EventContent day={formattedDay} time={event.time} />
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error in EventModal:', error);
        return null;
    }
}
