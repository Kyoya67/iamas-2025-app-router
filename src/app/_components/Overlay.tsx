'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

interface OverlayProps {
    isVisible: boolean;
    onClick?: () => void;
}

export const Overlay = ({ isVisible, onClick }: OverlayProps) => {
    const overlay = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        if (e.target === overlay.current) {
            router.back();
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <div
            ref={overlay}
            onClick={handleClick}
            className={`
                fixed inset-0 w-full h-screen 
                bg-black/75
                flex items-center justify-center 
                cursor-pointer
                z-[125]
                ${isVisible ? 'block' : 'hidden'}
            `}
        />
    );
}; 