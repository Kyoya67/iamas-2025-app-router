import fs from 'fs';
import path from 'path';

async function fetchEventInfo() {
    try {
        const response = await fetch('https://script.google.com/a/macros/iamas.ac.jp/s/AKfycbwsRYECRiQTEb23dOZEtaU1m3aI84ODe47axEoJCtCPM1iDgrexQtUvCJ3i_tDsCzrPcA/exec', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        // レスポンスのヘッダーを確認
        console.log('Response headers:', response.headers);

        // レスポンスの生データを確認
        const rawText = await response.text();
        console.log('Raw response:', rawText);

        const data = JSON.parse(rawText);

        // レスポンスデータの検証
        if (!Array.isArray(data)) {
            throw new Error('Fetched data is not an array');
        }

        // 最初のイベントをログ出力して確認
        console.log('First event from API:', data[0]);

        // dayフィールドが存在することを確認
        const hasDay = data.every(event => 'day' in event);
        if (!hasDay) {
            throw new Error('Some events are missing the day field');
        }

        // データを文字列化して保存
        const fileContent = `export const EVENTS = ${JSON.stringify(data, null, 4)};`;
        const filePath = path.join(process.cwd(), 'src', 'app', '_lib', 'eventInfo.ts');

        fs.writeFileSync(filePath, fileContent, 'utf8');
        console.log('Successfully updated eventInfo.ts');
    } catch (error) {
        console.error('Error fetching event info:', error);
        process.exit(1);
    }
}

fetchEventInfo(); 