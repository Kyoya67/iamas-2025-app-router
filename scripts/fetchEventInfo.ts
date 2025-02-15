import fs from 'fs';
import path from 'path';

async function fetchEventInfo() {
    try {
        const response = await fetch('https://script.google.com/a/macros/iamas.ac.jp/s/AKfycbwsRYECRiQTEb23dOZEtaU1m3aI84ODe47axEoJCtCPM1iDgrexQtUvCJ3i_tDsCzrPcA/exec');
        const data = await response.json();

        // データを直接文字列化して保存
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