const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 100KB以上の画像を全て最適化
const targetImages = [
    // 1MB超の画像
    './public/favicon.webp',                       // 1.6M
    './public/project/ExtremeBiologies/1.webp',   // 1.0M
    './public/master/work/JUNGJieyun.webp',       // 880K

    // 300KB-1MB の画像
    './public/mobile/iPadScan.webp',              // 500K
    './public/master/work/MasaruTainaka.webp',    // 480K
    './public/project/ExperienceExtension/2.webp', // 472K
    './public/project/TheArtOfListening/5.webp',  // 460K
    './public/project/TheArtOfListening/4.webp',  // 460K
    './public/desktop/iPadCircle.webp',           // 420K
    './public/master/work/RintaroUEDA.webp',      // 412K
    './public/project/ExtremeBiologies/3.webp',   // 396K
    './public/mobile/scan.webp',                  // 388K
    './public/event/iamasonic.webp',              // 380K
    './public/event/IAMASONIC2025-pitin.webp',    // 380K
    './public/master/work/YoshieKikuta.webp',     // 372K
    './public/master/work/MutsushiAsai.webp',     // 372K
    './public/related/RCIC.webp',                 // 352K
    './public/master/work/MioMatsui.webp',        // 336K
    './public/mobile/circle.webp',                // 332K
    './public/desktop/base/leftBottom.webp',      // 316K
    './public/project/CollaborativeDesignResearchProject/2.webp', // 312K
    './public/event/ガムラン演奏.webp',            // 308K
    './public/event/profile/IAMASガムラン部.webp',  // 308K
    './public/master/work/aonaminami.webp',       // 304K
    './public/master/work/AzumiShima.webp',       // 304K

    // 100KB-300KB の画像
    './public/desktop/scan.webp',                 // 276K
    './public/project/CollaborativeDesignResearchProject/1.webp', // 268K
    './public/project/CollaborativeDesignResearchProject/0.webp', // 264K
    './public/project/TheArtOfListening/0.webp',  // 260K
    './public/event/NxPC.Livevol.72唵楽と影像.webp', // 252K
    './public/desktop/circle.webp',               // 252K
    './public/desktop/base/mixed.webp',           // 252K
    './public/project/WelfareTechnology/0.webp',  // 248K
    './public/project/ExtremeBiologies/4.webp',   // 248K
    './public/project/TechnologyHermeneutics/3.webp', // 240K
    './public/project/TechnologyHermeneutics/2.webp', // 240K
    './public/project/TheArtOfListening/3.webp',  // 236K
    './public/event/なぜ私たちは自らの校舎をディストピアと呼ぶのか：サイクリングツアー.webp', // 236K
    './public/event/なぜ私たちは自らの校舎をディストピアと呼ぶのか：トーク.webp', // 232K
    './public/event/profile/ニチウシオーハシ.webp',  // 224K
    './public/event/ポスト言語学：「言葉とは何か」とは何か.webp', // 216K
    './public/event/IAMASJUNCTION2.webp',         // 216K
    './public/master/work/YuikoYamaguchi.webp',   // 208K
    './public/event/IAMASJUNCTION6.webp',         // 208K
    './public/event/IAMASJUNCTION1.webp',         // 200K
    './public/project/TheArtOfListening/1.webp',  // 196K
    './public/iamas-official-logo.webp',          // 196K
    './public/event/IAMASJUNCTION3.webp',         // 192K
    './public/event/技術手法の実験の積み重ねから生まれる視覚表現を紐解く.webp', // 188K
    './public/event/IAMASJUNCTION0.webp',         // 188K
    './public/project/ExperienceExtension/1.webp', // 180K
    './public/master/work/ShotaShimura.webp',     // 180K
    './public/project/TheArtOfListening/2.webp',  // 172K
    './public/project/ExperienceExtension/0.webp', // 172K
    './public/master/work/KoseiIzaki.webp',       // 172K
    './public/event/IAMASJUNCTION5.webp',         // 172K
    './public/event/IAMASJUNCTION4.webp',         // 168K
    './public/mobile/icon.webp',                  // 164K
    './public/project/TechnologyHermeneutics/0.webp', // 160K
    './public/project/ExtremeBiologies/0.webp',   // 152K
    './public/project/ExperienceExtension/4.webp', // 152K
    './public/master/work/NanakoMiyazaki.webp',   // 148K
    './public/master/work/JoannaLYU.webp',        // 144K
    './public/event/profile/小林史佳.webp',        // 144K
    './public/project/ExperienceExtension/3.webp', // 136K
    './public/desktop/iconAndMenu.webp',          // 136K
    './public/OGP.webp',                          // 136K
    './public/project/ExtremeBiologies/2.webp',   // 132K
    './public/desktop/base/rightBottom.webp',     // 132K
    './public/project/WelfareTechnology/1.webp',  // 128K
    './public/master/profile/TomomiGoto.webp',    // 124K
    './public/project/WelfareTechnology/2.webp',  // 116K
    './public/desktop/base/rightTop.webp',        // 112K
    './public/mobile/base/rightMiddle.webp',      // 104K
    './public/event/ジェンダーじゃない話をしよう！.webp' // 104K
];

// thumbnailディレクトリの画像を対象に追加
const thumbnailImages = [
    './public/master/thumbnail/BAKSomin.webp',
    './public/master/thumbnail/HarutoTokubo.webp',
    './public/master/thumbnail/JUNGJieyun.webp',
    './public/master/thumbnail/KAWAITakeshi.webp',
    './public/master/thumbnail/KoseiIzaki.webp',
    './public/master/thumbnail/MasaruTainaka.webp',
    './public/master/thumbnail/MasatakaHashimoto.webp',
    './public/master/thumbnail/MutsushiAsai.webp',
    './public/master/thumbnail/NanakoMiyazaki.webp',
    './public/master/thumbnail/RintaroUEDA.webp',
    './public/master/thumbnail/SantaNARUSE.webp',
    './public/master/thumbnail/YoshieKikuta.webp',
    './public/master/thumbnail/YuikoYamaguchi.webp',
    './public/master/thumbnail/aonaminami.webp'
];

// 画像の種類によって最適化設定を変える
function getOptimizationSettings(filepath) {
    const isProfile = filepath.includes('profile');
    const fileSize = fs.statSync(filepath).size / 1024; // サイズをKB単位で取得

    // サイズに応じて品質と最大幅を調整
    let quality, maxWidth;

    if (filepath.includes('favicon')) {
        quality = 5;  // faviconは強めの圧縮
        maxWidth = 512;  // faviconのサイズを制限
    } else if (isProfile) {
        quality = 15;  // プロフィール画像
        maxWidth = 400;
    } else if (fileSize > 1000) {  // 1MB超
        quality = 20;
        maxWidth = 1600;
    } else if (fileSize > 500) {   // 500KB超
        quality = 30;
        maxWidth = 1400;
    } else {                       // その他
        quality = 40;
        maxWidth = 1200;
    }

    return {
        quality,
        effort: 6,
        resize: {
            width: maxWidth,
            withoutEnlargement: true,
            fit: 'inside'
        },
        // 追加: より効果的な圧縮オプション
        nearLossless: true,
        reductionEffort: 6
    };
}

// thumbnail用の最適化設定
function getThumbnailOptimizationSettings() {
    return {
        quality: 50,        // 品質を50%に設定
        effort: 6,
        resize: {
            width: 800,     // 幅を800pxに制限
            withoutEnlargement: true,
            fit: 'inside'
        },
        nearLossless: true,
        reductionEffort: 6
    };
}

async function optimizeImage(inputPath) {
    try {
        const info = await sharp(inputPath).metadata();
        const originalSize = fs.statSync(inputPath).size / (1024 * 1024);
        const tempOutputPath = inputPath + '.temp';

        // 最適化を試みる
        await sharp(inputPath)
            .webp(getOptimizationSettings(inputPath))
            .toFile(tempOutputPath);

        const newSize = fs.statSync(tempOutputPath).size / (1024 * 1024);

        // 新しいサイズが元のサイズより大きい場合は、さらに圧縮を強める
        if (newSize > originalSize) {
            const harderSettings = {
                ...getOptimizationSettings(inputPath),
                quality: Math.max(10, getOptimizationSettings(inputPath).quality - 10),
                nearLossless: false
            };

            await sharp(inputPath)
                .webp(harderSettings)
                .toFile(tempOutputPath);
        }

        // 最終的なサイズをチェック
        const finalSize = fs.statSync(tempOutputPath).size / (1024 * 1024);

        // 最適化が成功した場合のみファイルを置き換え
        if (finalSize < originalSize) {
            fs.unlinkSync(inputPath);
            fs.renameSync(tempOutputPath, inputPath);
        } else {
            // 最適化が失敗した場合は一時ファイルを削除
            fs.unlinkSync(tempOutputPath);
            console.log(`⚠️ Optimization skipped for ${path.basename(inputPath)} (would increase size)`);
            return;
        }

        console.log(`✅ ${path.basename(inputPath)}:`);
        console.log(`   Before: ${originalSize.toFixed(2)}MB`);
        console.log(`   After:  ${finalSize.toFixed(2)}MB`);
        console.log(`   Saved:  ${(originalSize - finalSize).toFixed(2)}MB (${((1 - finalSize / originalSize) * 100).toFixed(1)}%)\n`);

    } catch (error) {
        console.error(`❌ Error processing ${inputPath}:`, error.message);
    }
}

async function optimizeThumbnail(inputPath) {
    try {
        const info = await sharp(inputPath).metadata();
        const originalSize = fs.statSync(inputPath).size / 1024; // KBで取得
        const tempOutputPath = inputPath + '.temp';

        // 最適化を実行
        await sharp(inputPath)
            .webp(getThumbnailOptimizationSettings())
            .toFile(tempOutputPath);

        const newSize = fs.statSync(tempOutputPath).size / 1024;

        // 目標サイズ（100KB）より大きい場合は、さらに圧縮を強める
        if (newSize > 100) {
            const harderSettings = {
                ...getThumbnailOptimizationSettings(),
                quality: 30,  // より強い圧縮
                nearLossless: false
            };

            await sharp(inputPath)
                .webp(harderSettings)
                .toFile(tempOutputPath);
        }

        // 最終的なサイズをチェック
        const finalSize = fs.statSync(tempOutputPath).size / 1024;

        // ファイルを置き換え
        fs.unlinkSync(inputPath);
        fs.renameSync(tempOutputPath, inputPath);

        console.log(`✅ ${path.basename(inputPath)}:`);
        console.log(`   Before: ${originalSize.toFixed(2)}KB`);
        console.log(`   After:  ${finalSize.toFixed(2)}KB`);
        console.log(`   Saved:  ${(originalSize - finalSize).toFixed(2)}KB (${((1 - finalSize / originalSize) * 100).toFixed(1)}%)\n`);

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

async function processThumbnails() {
    console.log('🚀 Starting thumbnail optimization...\n');

    for (const imagePath of thumbnailImages) {
        await optimizeThumbnail(imagePath);
    }

    console.log('✨ Thumbnail optimization complete!');
}

processAllImages().catch(console.error);
processThumbnails().catch(console.error); 