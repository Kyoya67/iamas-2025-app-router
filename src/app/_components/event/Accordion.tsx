'use client'

import { useState } from "react";
import { useEvent } from "@/app/_contexts/EventContext";

export const Accordion = ({ days }: { days: { id: string; label: string }[] }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { selectedDay, setSelectedDay } = useEvent();

    return (
        <div className="md:hidden mt-[6.5vh] relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left text-lg border-b-[0.1rem] border-[#000f9f] pb-2 flex"
            >
                <div className="flex border-[0.1rem] border-[#000f9f] bg-white px-2">
                    <span>{days.find(day => day.id === selectedDay)?.label}</span>
                    <span className={`transition-transform duration-200 ${isOpen ? '' : '-rotate-[90deg]'}`}>▼</span>
                </div>
            </button>

            {isOpen && (
                <div className="
                        absolute top-full left-0 right-0 z-50
                        bg-white 
                        p-2 space-y-2
                        border border-[#000f9f]/10
                    ">
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
                                onChange={() => {
                                    setSelectedDay(day.id);
                                    setIsOpen(false);
                                }}
                            />
                            <div className="
                                    w-full
                                    peer-checked:bg-[#000f9f]
                                    peer-checked:text-white 
                                    text-[#000f9f]
                                    hover:bg-[#000f9f]/5
                                    peer-checked:hover:bg-[#000f9f]
                                    px-4 py-2
                                    border-b-[0.08rem] border-[#000f9f] border-opacity-50
                                ">
                                {day.label}
                            </div>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}; 