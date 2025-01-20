'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Overlay } from './Overlay';

interface ModalProps {
    children: React.ReactNode;
    nextPath?: string | null;
    previousPath?: string | null;
}

export default function Modal({ children, nextPath, previousPath }: ModalProps) {
    const router = useRouter();

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowRight':
                if (nextPath) router.replace(nextPath);
                break;
            case 'ArrowLeft':
                if (previousPath) router.replace(previousPath);
                break;
            case 'Escape':
                router.back();
                break;
        }
    }, [nextPath, previousPath, router]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
        <>
            <Overlay isVisible={true} />
            <div className="
                fixed z-[120] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-[80%] max-w-[30rem] h-[80vh] texture-bg rounded-md
                p-8
                overflow-y-auto
                text-left text-[#000f9f]
                mask-container
                overview-scroll
            ">
                {children}
            </div>
        </>
    );
}
