import { EventContent } from "@/app/_components/event/EventContent";
import { EVENTS } from "@/app/_lib/eventInfo";
import Modal from "../../_components/Modal";

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

    // 現在のイベントのインデックスを取得
    const currentIndex = index;

    // 次のパスを計算
    const nextPath = currentIndex < filteredEvents.length - 1
        ? `/event/${day}${currentIndex + 1}`
        : null;

    // 前のパスを計算
    const previousPath = currentIndex > 0
        ? `/event/${day}${currentIndex - 1}`
        : null;

    const event = filteredEvents[index];
    if (!event) {
        console.error('Event not found:', { id, formattedDay, index });
        return null;
    }

    return (
        <Modal nextPath={nextPath} previousPath={previousPath}>
            <EventContent day={formattedDay} time={event.time} />
        </Modal>
    );
}
