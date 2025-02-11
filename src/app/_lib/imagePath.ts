// 開発環境かどうかを判定
const isDevelopment = process.env.NODE_ENV === 'development';

// サーバーサイド用
export function getImagePath(path: string): string {
    return isDevelopment ? path : `/exhibit25${path}`;
}

// クライアントサイド用
export function getClientImagePath(path: string): string {
    // 開発環境では通常のパス、本番環境では/exhibit25付きのパス
    return isDevelopment ? path : `/exhibit25${path}`;
} 