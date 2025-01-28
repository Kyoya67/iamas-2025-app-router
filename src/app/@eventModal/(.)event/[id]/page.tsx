import { EventContent } from "@/app/_components/event/EventContent";
import Modal from "../../_components/Modal";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EventModal({ params }: Props) {
    const { id } = await params;
    const [encodedDay, ...rest] = id.split('-');
    const encodedTime = rest.join('-');
    const day = decodeURIComponent(encodedDay);
    let time = decodeURIComponent(encodedTime);

    if (!time.includes('-')) {
        time = `${time}-`;
    }

    return (
        <Modal >
            <EventContent day={day} time={time} />
        </Modal>
    );
}
