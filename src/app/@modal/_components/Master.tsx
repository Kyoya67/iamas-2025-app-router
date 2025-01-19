'use client';

import { useCallback, useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissing, setIsDismissing] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const onDismiss = useCallback(() => {
        if (isDismissing) return;

        setIsDismissing(true);
        setIsVisible(false);
        router.back();
    }, [router, isDismissing]);

    const onClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === overlay.current) {
                onDismiss();
            }
        },
        [onDismiss, overlay]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className={`
                fixed inset-0 w-full h-screen 
                bg-black/60 backdrop-blur-sm z-50 
                flex items-center justify-center transition-opacity duration-300 
                ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            onClick={onClick}
        >
            <div
                className={`
                    w-[80%] h-[80vh] texture-bg rounded-md transition-all 
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
            >
                {children}
            </div>
        </div>
    );
}
