import { EventProvider } from "@/app/_contexts/EventContext";

export default function ModalsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <EventProvider>{children}</EventProvider>;
} 