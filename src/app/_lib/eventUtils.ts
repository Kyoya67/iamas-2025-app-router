import { EVENTS } from './eventInfo';

const isDefaultImageEvent = (eventName: string): boolean => {
    const defaultImageEvents = [
        "開会式",
        "レセプション",
        "プロジェクト研究：展示コアタイム",
        "プロジェクト研究：口頭発表"
    ];

    return defaultImageEvents.includes(eventName);
};

export const getEventImagePath = (event: { eventName: string; day?: string; time?: string }): string => {
    let imagePath = event.eventName
        .replace(/\n/g, ' ')
        .trim()
        .split(' ')
        .join('');

    if (isDefaultImageEvent(event.eventName)) {
        return '/event/defaultIAMAS.webp';
    }

    if (event.eventName.includes('クリティカルサイクリング')) {
        return '/event/クリティカルサイクリング.webp';
    }

    if (event.eventName === 'IAMAS JUNCTION') {
        const allJunctionEvents = EVENTS.filter(e => e.eventName === 'IAMAS JUNCTION');
        const sortedJunctionEvents = allJunctionEvents.sort((a, b) => {
            if (a.day !== b.day) {
                const days = ['Friday', 'Saturday', 'Sunday', 'Monday'];
                return days.indexOf(a.day) - days.indexOf(b.day);
            }
            return a.time.localeCompare(b.time);
        });
        const junctionIndex = sortedJunctionEvents.findIndex(e =>
            e.day === event.day && e.time === event.time
        );
        return `/event/IAMASJUNCTION${junctionIndex}.webp`;
    }

    if (event.eventName.includes('/')) {
        imagePath = event.eventName.replace(/\//g, '');
    }

    return `/event/${imagePath}.webp`;
}; 