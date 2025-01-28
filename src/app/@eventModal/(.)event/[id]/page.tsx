import { EventContent } from "@/app/_components/event/EventContent";
import Modal from "../../_components/Modal";
import { EVENTS } from "@/app/_lib/eventInfo";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EventModal({ params }: Props) {
    const { id } = await params;
    const [encodedDay, indexStr] = id.split('-');
    const day = decodeURIComponent(encodedDay);
    const index = parseInt(indexStr, 10);

    // 特定の日付のイベントをフィルタリング
    const filteredEvents = EVENTS.filter(
        event => event.day === day && event.eventName !== ""
    );

    // インデックスでイベントを取得
    const event = filteredEvents[index];
    if (!event) return null;

    return (
        <Modal>
            <EventContent day={day} time={event.time} />
        </Modal>
    );
}
