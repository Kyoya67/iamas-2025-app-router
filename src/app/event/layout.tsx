import { EventProvider } from "@/app/_contexts/EventContext";

export default function EventLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <EventProvider>{children}</EventProvider>;
}
