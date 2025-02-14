// 開発環境かどうかを判定
const isDevelopment = process.env.NODE_ENV === 'development';

export function getImagePath(path: string): string {
    return isDevelopment ? path : `/exhibit25${path}`;
}