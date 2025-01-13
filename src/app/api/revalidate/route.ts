import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// POSTリクエストを処理するRoute Handler
export async function POST(request: NextRequest) {
    try {
        const { tag } = await request.json();
        revalidateTag(tag);
        return NextResponse.json({ revalidated: true });
    } catch {
        return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 });
    }
} 