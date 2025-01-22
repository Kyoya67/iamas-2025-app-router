'use client';

import { useScrollMask } from '@/app/_hooks/useScrollMask';

interface ScrollMaskContentProps {
    children: React.ReactNode;
    className?: string;
}

export function ScrollMaskContent({ children, className = '' }: ScrollMaskContentProps) {
    const scrollRef = useScrollMask();

    return (
        <div
            ref={scrollRef}
            className={`
                relative
                overflow-y-auto
                text-left
                text-justify
                mask-container
                overview-scroll
                ten-mincho
                auto-ovo
                scroll-mask
                ${className}
            `}
        >
            {children}
        </div>
    );
} 