'use client'

import { useEvent } from "@/app/_contexts/EventContext";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { EVENTS } from "@/app/_lib/eventInfo";
import Link from "next/link";
import { useEventImage } from "@/app/_contexts/EventImageContext";

export const Schedule = () => {
    const { selectedDay } = useEvent();
    const { setHoveredEventImage } = useEventImage();
    const events = EVENTS;

    const filteredEvents = events.filter(
        event => event.day === selectedDay && event.eventName !== ""
    );

    return (
        <ScrollMaskContent className="h-[50vh]">
            <div className="space-y-6 overflow-x-hidden pr-3 ten-mincho">
                {filteredEvents.map((event, index) => {
                    const eventPath = `${selectedDay.toLowerCase()}${index}`;

                    if (event.eventName === "開会式") {
                        return (
                            <div
                                key={eventPath}
                                className="
                                    flex justify-between 
                                    border-b-[0.08rem] border-[#000f9f] 
                                    pb-2
                                    transition-opacity
                                    ten-mincho
                                "
                                onMouseEnter={() => setHoveredEventImage('/event/defaultIAMAS.webp')}
                            >
                                <div className="text-base font-medium ten-mincho">{event.time}</div>
                                <div className="grid grid-cols gap-2 mt-1 text-right">
                                    <div className="text-sm ten-mincho">{event.eventName}</div>
                                    <div className="text-xs ten-mincho">{event.exhibitors}</div>
                                </div>
                            </div>
                        );
                    }

                    // 開会式以外の場合は通常通りLinkを返す
                    return (
                        <Link
                            href={`/event/${eventPath}`}
                            key={eventPath}
                            prefetch={true}
                            className="
                                flex justify-between 
                                border-b-[0.08rem] border-[#000f9f] 
                                pb-2
                                hover:opacity-50
                                transition-opacity
                                ten-mincho
                            "
                            onMouseEnter={() => {
                                let imagePath = event.eventName
                                    ?.replace(/\n/g, ' ')
                                    .trim()
                                    .split(' ')
                                    .join('')

                                // 開会式、レセプション・パーティー、プロジェクト関連イベントの場合はデフォルト画像を使用
                                if (event.eventName === "開会式" ||
                                    event.eventName === "レセプション・パーティー" ||
                                    event.eventName === "プロジェクト展示コアタイム" ||
                                    event.eventName === "プロジェクト口頭発表"
                                ) {
                                    setHoveredEventImage('/event/defaultIAMAS.webp')
                                    return
                                }

                                // クリティカルサイクリングの場合は特別処理
                                if (event.eventName?.includes('クリティカルサイクリング')) {
                                    imagePath = 'クリティカルサイクリング'
                                }
                                // IAMAS JUNCTIONの場合は番号付きの画像を参照
                                else if (event.eventName === 'IAMAS JUNCTION') {
                                    // 全日程のIAMAS JUNCTIONイベントを取得
                                    const allJunctionEvents = EVENTS.filter(e =>
                                        e.eventName === 'IAMAS JUNCTION'
                                    )
                                    // 時間でソート
                                    const sortedJunctionEvents = allJunctionEvents.sort((a, b) => {
                                        if (a.day !== b.day) {
                                            const days = ['Friday', 'Saturday', 'Sunday', 'Monday']
                                            return days.indexOf(a.day) - days.indexOf(b.day)
                                        }
                                        return a.time.localeCompare(b.time)
                                    })
                                    // 現在のイベントのインデックスを取得
                                    const junctionIndex = sortedJunctionEvents.findIndex(e =>
                                        e.day === event.day && e.time === event.time
                                    )
                                    imagePath = `IAMASJUNCTION${junctionIndex}`
                                }
                                // スラッシュを含むイベント名の場合は特別処理
                                else if (event.eventName.includes('/')) {
                                    imagePath = event.eventName.replace(/\//g, '')
                                }

                                setHoveredEventImage(`/event/${imagePath}.webp`)
                            }}
                        >
                            <div className="text-base font-medium ten-mincho">{event.time}</div>
                            <div className="grid grid-cols gap-2 mt-1 text-right">
                                <div className="text-sm ten-mincho">{event.eventName}</div>
                                <div className="text-xs ten-mincho">{event.exhibitors}</div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </ScrollMaskContent>
    );
};