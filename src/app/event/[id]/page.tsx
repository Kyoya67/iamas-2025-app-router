import { EventContent } from "@/app/_components/event/EventContent";
import { EVENTS } from "@/app/_lib/eventInfo";
import Modal from "@/app/_components/modalSet/Modal";

export function generateStaticParams() {
    const paths: { id: string }[] = [];

    ['Friday', 'Saturday', 'Sunday', 'Monday'].forEach((day) => {
        const dayEvents = EVENTS.filter(
            event => event.day === day && event.eventName !== ""
        );

        dayEvents.forEach((_, index) => {
            paths.push({
                id: day.toLowerCase() + index
            });
        });
    });

    return paths;
}

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EventModal({ params }: Props) {
    const { id } = await params;
    const day = id.match(/[a-z]+/i)?.[0] || '';
    const index = parseInt(id.match(/\d+/)?.[0] || '0', 10);

    const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);

    const filteredEvents = EVENTS.filter(
        event => event.day === formattedDay && event.eventName !== ""
    );

    const event = filteredEvents[index];
    if (!event || event.eventName === "開会式") {
        return null;
    }

    const currentIndex = index;

    const nextPath = currentIndex < filteredEvents.length - 1
        ? `/event/${day}${currentIndex + 1}`
        : null;

    const previousPath = currentIndex > 0
        ? `/event/${day}${currentIndex - 1}`
        : null;

    const isFirstEventAfterOpening = formattedDay === 'Friday' && currentIndex === 1;

    return (
        <Modal
            nextPath={nextPath}
            previousPath={isFirstEventAfterOpening ? null : previousPath}
            backPath="/event"
            modalType="event"
            day={formattedDay}
        >
            <EventContent day={formattedDay} time={event.time} />
        </Modal>
    );
}
