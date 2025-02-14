function separateDakuten(str: string): string {
    return str
        // 濁点付きの文字を基底文字と濁点に分解
        .replace(/\u{3099}/gu, '\u{3099}')  // 濁点
        .replace(/\u{309A}/gu, '\u{309A}')  // 半濁点
        // 特定の文字を直接置換
        .replace(/が/g, 'か\u{3099}')
        .replace(/ぎ/g, 'き\u{3099}')
        .replace(/ぐ/g, 'く\u{3099}')
        .replace(/げ/g, 'け\u{3099}')
        .replace(/ご/g, 'こ\u{3099}')
        .replace(/ざ/g, 'さ\u{3099}')
        .replace(/じ/g, 'し\u{3099}')
        .replace(/ず/g, 'す\u{3099}')
        .replace(/ぜ/g, 'せ\u{3099}')
        .replace(/ぞ/g, 'そ\u{3099}')
        .replace(/だ/g, 'た\u{3099}')
        .replace(/ぢ/g, 'ち\u{3099}')
        .replace(/づ/g, 'つ\u{3099}')
        .replace(/で/g, 'て\u{3099}')
        .replace(/ど/g, 'と\u{3099}')
        .replace(/ば/g, 'は\u{3099}')
        .replace(/び/g, 'ひ\u{3099}')
        .replace(/ぶ/g, 'ふ\u{3099}')
        .replace(/べ/g, 'へ\u{3099}')
        .replace(/ぼ/g, 'ほ\u{3099}')
        .replace(/ぱ/g, 'は\u{309A}')
        .replace(/ぴ/g, 'ひ\u{309A}')
        .replace(/ぷ/g, 'ふ\u{309A}')
        .replace(/ぺ/g, 'へ\u{309A}')
        .replace(/ぽ/g, 'ほ\u{309A}')
        // カタカナも同様に
        .replace(/ガ/g, 'カ\u{3099}')
        .replace(/ギ/g, 'キ\u{3099}')
        .replace(/グ/g, 'ク\u{3099}')
        .replace(/ゲ/g, 'ケ\u{3099}')
        .replace(/ゴ/g, 'コ\u{3099}')
        .replace(/ザ/g, 'サ\u{3099}')
        .replace(/ジ/g, 'シ\u{3099}')
        .replace(/ズ/g, 'ス\u{3099}')
        .replace(/ゼ/g, 'セ\u{3099}')
        .replace(/ゾ/g, 'ソ\u{3099}')
        .replace(/ダ/g, 'タ\u{3099}')
        .replace(/ヂ/g, 'チ\u{3099}')
        .replace(/ヅ/g, 'ツ\u{3099}')
        .replace(/デ/g, 'テ\u{3099}')
        .replace(/ド/g, 'ト\u{3099}')
        .replace(/バ/g, 'ハ\u{3099}')
        .replace(/ビ/g, 'ヒ\u{3099}')
        .replace(/ブ/g, 'フ\u{3099}')
        .replace(/ベ/g, 'ヘ\u{3099}')
        .replace(/ボ/g, 'ホ\u{3099}')
        .replace(/パ/g, 'ハ\u{309A}')
        .replace(/ピ/g, 'ヒ\u{309A}')
        .replace(/プ/g, 'フ\u{309A}')
        .replace(/ペ/g, 'ヘ\u{309A}')
        .replace(/ポ/g, 'ホ\u{309A}');
}

// 特別な処理が必要なファイル名のリスト
const specialEncodingFiles = [
    'クリティカルサイクリング.webp',
    'ガムラン演奏.webp',
    'ジェンダーじゃない話をしよう！.webp'
];

export function getImagePath(path: string): string {
    // 特別な処理が必要なファイル名かチェック
    const filename = path.split('/').pop();
    if (filename && specialEncodingFiles.includes(filename)) {
        return `https://d3jxpylbfj8spt.cloudfront.net${path}`;
    } else if (path.includes('profile')) {
        return `https://d3jxpylbfj8spt.cloudfront.net${path}`;
    }

    // 通常のエンコード
    const separatedPath = separateDakuten(path);
    return `https://d3jxpylbfj8spt.cloudfront.net${separatedPath}`;
}