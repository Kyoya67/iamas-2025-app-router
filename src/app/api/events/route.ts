import { NextResponse } from "next/server";

// キャッシュの設定
export const dynamic = 'force-static';  // ビルド時に生成
export const revalidate = 3600;         // 1時間ごとに再検証

const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbx4p1hCCiJtRevb60SB430E8obp8qubHk1TyD1KLjLIZdAO592pxdAE8rQoQZTWt5FCxg/exec';

export async function GET() {
    try {
        const response = await fetch(GAS_API_URL, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // キャッシュヘッダーを設定
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        console.error('Failed to fetch events:', error);
        return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    }
}
