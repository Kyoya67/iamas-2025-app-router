const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 最適化したい大きな画像のリスト（推奨サイズを超えているもの）
const targetImages = [
    // プロフィール画像で100KB超のもの
    './public/event/profile/ニチウシオーハシ.webp',  // 828K
    './public/master/profile/RintaroUEDA.webp',    // 500K
    './public/event/profile/松井茂.webp',          // 476K
    './public/master/profile/TomomiGoto.webp',     // 400K
    './public/master/profile/SantaNARUSE.webp',    // 388K
    './public/master/profile/MutsushiAsai.webp',   // 236K
    './public/master/profile/BAKSomin.webp',       // 224K
    './public/master/profile/ShotaShimura.webp',   // 144K
    './public/master/profile/MioMatsui.webp',      // 128K
    './public/master/profile/NanakoMiyazaki.webp', // 104K

    // メイン表示用の大きな画像で500KB超のもの
    './public/favicon.webp',                       // 1.5M
    './public/mobile/iPadScan.webp',              // 964K
    './public/master/work/ShotaShimura.webp',     // 952K
    './public/event/NxPC.Livevol.72唵楽と影像.webp', // 872K
    './public/master/work/JoannaLYU.webp',        // 868K
    './public/master/work/KAWAITakeshi.webp',     // 856K
    './public/project/ExtremeBiologies/3.webp',   // 848K
    './public/project/CollaborativeDesignResearchProject/2.webp', // 764K
    './public/project/TheArtOfListening/5.webp',  // 716K
    './public/project/TheArtOfListening/4.webp',  // 716K
    './public/project/ExtremeBiologies/1.webp',   // 672K
    './public/master/work/BAKSomin.webp',         // 668K
    './public/mobile/scan.webp',                  // 648K
    './public/event/defaultIAMAS.webp',           // 632K
    './public/defaultIAMAS.webp',                 // 632K
    './public/project/ExtremeBiologies/4.webp',   // 624K
    './public/master/work/JUNGJieyun.webp',       // 612K
    './public/master/work/HarutoTokubo.webp',     // 580K
    './public/master/work/MasatakaHashimoto.webp' // 576K
];

// 画像の種類によって最適化設定を変える
function getOptimizationSettings(filepath) {
    const isProfile = filepath.includes('profile');

    return {
        quality: isProfile ? 15 : 60,  // プロフィール画像はより圧縮
        effort: 6,
        resize: {
            width: isProfile ? 400 : 1920,  // プロフィール画像は小さくリサイズ
            withoutEnlargement: true,
            fit: 'inside'
        }
    };
}

async function optimizeImage(inputPath) {
    try {
        const info = await sharp(inputPath).metadata();
        const originalSize = fs.statSync(inputPath).size / (1024 * 1024);
        const tempOutputPath = inputPath + '.temp';

        await sharp(inputPath)
            .webp(getOptimizationSettings(inputPath))
            .toFile(tempOutputPath);

        const newSize = fs.statSync(tempOutputPath).size / (1024 * 1024);

        // 元のファイルを最適化されたファイルで置き換え
        fs.unlinkSync(inputPath);  // 元のファイルを削除
        fs.renameSync(tempOutputPath, inputPath);  // 最適化されたファイルを元の名前にリネーム

        console.log(`✅ ${path.basename(inputPath)}:`);
        console.log(`   Before: ${originalSize.toFixed(2)}MB`);
        console.log(`   After:  ${newSize.toFixed(2)}MB`);
        console.log(`   Saved:  ${(originalSize - newSize).toFixed(2)}MB (${((1 - newSize / originalSize) * 100).toFixed(1)}%)\n`);

    } catch (error) {
        console.error(`❌ Error processing ${inputPath}:`, error.message);
    }
}

async function processAllImages() {
    console.log('🚀 Starting image optimization...\n');

    for (const imagePath of targetImages) {
        await optimizeImage(imagePath);
    }

    console.log('✨ Optimization complete!');
}

processAllImages().catch(console.error); 