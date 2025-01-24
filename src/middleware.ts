import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // User-Agentからデバイス情報を取得
    const userAgent = request.headers.get('user-agent') || ''
    const isMobile = /Mobile|Android|iPhone/i.test(userAgent)

    // モーダルパターンのURLかチェック
    const isModalPattern = request.nextUrl.pathname.startsWith('/@modal/master/')

    if (isModalPattern && !isMobile) {
        // モバイル以外の場合は通常のページにリダイレクト
        const name = request.nextUrl.pathname.split('/').pop()
        return NextResponse.redirect(new URL(`/master/${name}`, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/@modal/master/:path*',
} 