'use client'

import { useEffect } from 'react'

export default function DisableZoom() {
    useEffect(() => {
        // PCでのCtrl+ホイールによるズーム防止
        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        };

        // スマホでのピンチズーム防止
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        };

        // イベントリスナーを追加
        document.addEventListener('wheel', handleWheel, { passive: false });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });

        // クリーンアップ関数
        return () => {
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return null;
} 