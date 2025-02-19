'use client'

import { useEvent } from "@/app/_contexts/EventContext";

export const NonAccordion = ({ days }: { days: { id: string; label: string }[] }) => {
    const { selectedDay, setSelectedDay } = useEvent();

    return (
        <div className="hidden md:flex justify-between text-md border-b-[0.1rem] border-[#000f9f] pb-2">
            {days.map((day) => (
                <label
                    key={day.id}
                    className="flex items-center cursor-pointer"
                >
                    <input
                        type="radio"
                        name="day"
                        id={day.id}
                        className="hidden peer"
                        checked={day.id === selectedDay}
                        onChange={() => setSelectedDay(day.id)}
                    />
                    <div className="
                                        peer-checked:bg-[#000f9f]
                                        peer-checked:text-white 
                                        text-[#000f9f] 
                                        hover:opacity-30
                                        peer-checked:hover:opacity-100
                                        pl-3
                                    ">
                        {day.label}
                    </div>
                </label>
            ))}
        </div>
    );
}; 