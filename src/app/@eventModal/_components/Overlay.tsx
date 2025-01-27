'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

interface OverlayProps {
    isVisible: boolean;
}

export function Overlay({ isVisible }: OverlayProps) {
    const overlay = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onClick = (e: React.MouseEvent) => {
        if (e.target === overlay.current) {
            router.back();
        }
    };

    return (
        <div
            ref={overlay}
            onClick={onClick}
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
} 