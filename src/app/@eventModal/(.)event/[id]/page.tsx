import { EventContent } from "@/app/_components/event/EventContent";
import { EVENTS } from "@/app/_lib/eventInfo";
import Modal from "../../_components/Modal";

interface Props {
    params: {
        id: string;
    };
}

export default function EventModal({ params }: Props) {
    const { id } = params;
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
        <Modal>
            <EventContent day={formattedDay} time={event.time} />
        </Modal>
    );
}
