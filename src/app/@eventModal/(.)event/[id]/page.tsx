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
    // friday0, saturday1 などの形式からdayとindexを抽出
    const day = id.match(/[a-z]+/i)?.[0] || '';
    const index = parseInt(id.match(/\d+/)?.[0] || '0', 10);

    // 日付を先頭大文字に変換
    const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);

    const filteredEvents = EVENTS.filter(
        event => event.day === formattedDay && event.eventName !== ""
    );

    const event = filteredEvents[index];
    if (!event) return null;

    return (
        <Modal>
            <EventContent day={formattedDay} time={event.time} />
        </Modal>
    );
}
