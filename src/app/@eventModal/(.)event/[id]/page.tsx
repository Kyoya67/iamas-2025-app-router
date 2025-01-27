import { EventContent } from "@/app/_components/event/EventContent";
import Modal from "../../_components/Modal";

interface Props {
    params: {
        id: string;
    }
}

export default async function EventModal({ params }: Props) {
    const id = await params.id;
    const [encodedDay, encodedTime] = id.split('-');
    const day = decodeURIComponent(encodedDay);
    const time = decodeURIComponent(encodedTime) + '-';
    console.log(day, time);

    console.log('Decoded:', { day, time });

    return (
        <Modal>
            <EventContent day={day} time={time} />
        </Modal>
    );
} 