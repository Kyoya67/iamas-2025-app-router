import { Metadata, Viewport } from 'next';

// metadata設定
export const metadata: Metadata = {
    title: 'IAMAS 2025 イベント',
    // 他のメタデータ設定...
};

// viewportを別途設定
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    // 他のviewport設定...
};

export default function EventPage() {
    return (
        <div className="absolute inset-0 mx-auto w-[10vw] z-[100] cursor-pointer">
            <h1>Event Page</h1>
        </div>
    );
}