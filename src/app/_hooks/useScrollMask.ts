'use client';

import { useEffect, useRef } from 'react';

export const useScrollMask = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        const handleScroll = () => {
            const isAtBottom =
                Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 1;

            if (isAtBottom) {
                element.classList.add('at-bottom');
            } else {
                element.classList.remove('at-bottom');
            }
        };

        element.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollRef;
}; 