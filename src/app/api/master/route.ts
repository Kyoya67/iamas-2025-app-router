import { NextResponse } from "next/server";

export const dynamic = 'force-static';
export const revalidate = 3600;

const GAS_API_URL = 'https://script.google.com/a/macros/iamas.ac.jp/s/AKfycbzqk-BCklfMLWL6JiDGmnbqEp9vgbhaDRhOedx2N9Urb_Iort0W0ZmThtqPi1gLLs3hVA/exec';

export async function GET() {
    try {
        const response = await fetch(GAS_API_URL, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        console.error('Failed to fetch master data:', error);
        return NextResponse.json({ error: 'Failed to fetch master data' }, { status: 500 });
    }
} 