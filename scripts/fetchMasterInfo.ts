import fs from 'fs';
import path from 'path';

async function fetchMasterInfo() {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyghS8Mb6r2D_Km5ih6XVwUfpM2dOTvjyHlbDv9FuaRxE2MEtO6UYpPxs7kmWnLRPHaYg/exec');
        const data = await response.json();

        // 整形されたTypeScriptコードを生成
        const fileContent = `export const MASTER_INFO = ${JSON.stringify(data, null, 4)};`;

        // ファイルパスを設定
        const filePath = path.join(process.cwd(), 'src', 'app', '_lib', 'masterInfo.ts');

        // ファイルに書き込み
        fs.writeFileSync(filePath, fileContent);
        console.log('Successfully updated masterInfo.ts');
    } catch (error) {
        console.error('Error fetching master info:', error);
        process.exit(1);
    }
}

fetchMasterInfo(); 