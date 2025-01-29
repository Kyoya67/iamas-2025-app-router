'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { NavigationArrows } from '../../_components/NavigationArrows';
import { Overlay } from '../../_components/ModalSet/Overlay';

interface ModalProps {
    children: React.ReactNode;
    nextPath?: string | null;
    previousPath?: string | null;
}

export default function Modal({ children, nextPath, previousPath }: ModalProps) {
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.push('/project');
    }, [router]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowRight':
                if (nextPath) router.replace(nextPath);
                break;
            case 'ArrowLeft':
                if (previousPath) router.replace(previousPath);
                break;
            case 'Escape':
                handleBack();
                break;
        }
    }, [nextPath, previousPath, handleBack]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
        <>
            <Overlay isVisible={true} onClick={handleBack} />
            <div className="fixed inset-0 pointer-events-none z-[130] text-justify">
                <div className="relative w-full h-full">
                    <div className="
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[80%] max-w-[40rem] h-[80vh] sm:h-[90vh] texture-bg rounded-md
                        text-left
                        p-8
                        pointer-events-auto
                        overflow-hidden
                        ten-mincho
                    ">
                        {children}
                    </div>
                    <NavigationArrows nextPath={nextPath} previousPath={previousPath} />
                </div>
            </div>
        </>
    );
}
