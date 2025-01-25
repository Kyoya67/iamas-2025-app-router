import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const response = await fetch('https://script.google.com/a/macros/iamas.ac.jp/s/AKfycbxZyk_vNV03xA7kvq-oFNtmOgGahl5cJugJoB4ZjM1pipPoCQpm65cy-UHhUI1_ConX9w/exec', {
            next: { revalidate: 3600 } // 1時間ごとにキャッシュを更新
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed to fetch events:', error);
        return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    }
} 