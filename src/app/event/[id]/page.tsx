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
        // friday0, saturday1 などの形式からdayとindexを抽出
        const day = id.match(/[a-z]+/i)?.[0] || '';
        const index = parseInt(id.match(/\d+/)?.[0] || '0', 10);

        // 日付を先頭大文字に変換
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
            <div className="fixed inset-0 pointer-events-none z-[130] text-justify">
                <div className="relative w-full h-full">
                    <div className="
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[80%] max-w-[40rem] h-[80vh] sm:h-[90vh] texture-bg rounded-md
                        text-left
                        p-8
                        pointer-events-auto
                        overflow-hidden
                        ten-mincho
                    ">
                        <EventContent day={formattedDay} time={event.time} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error in EventModal:', error);
        return null;
    }
}
