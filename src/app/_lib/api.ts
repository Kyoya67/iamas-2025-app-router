// GAS APIのレスポンス型定義
export interface GASResponse {
  authorJapaneseName: string;
  authorEnglishName: string;
  profileJapanese: string;
  profileEnglish: string;
  X_URL: string;
  instagram_URL: string;
  other_URL: string;
  workTitleJapanese: string;
  workTitleEnglish: string;
  workDescriptionJapanese: string;
  workDescriptionEnglish: string;
}

const GAS_API_URL = 'https://script.google.com/a/macros/iamas.ac.jp/s/AKfycbzqk-BCklfMLWL6JiDGmnbqEp9vgbhaDRhOedx2N9Urb_Iort0W0ZmThtqPi1gLLs3hVA/exec';

// サーバーサイドでビルド時に実行される関数
export async function fetchGASData(): Promise<GASResponse[]> {
  try {
    // フェッチオプションでキャッシュ戦略を設定
    const response = await fetch(GAS_API_URL, {
      next: {
        revalidate: 3600, // 1時間ごとに再検証
        tags: ['gas-data'], // キャッシュのタグ付け
      },
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GAS API:', error);
    throw error;
  }
}

// キャッシュを手動で更新する関数
export async function revalidateGASData() {
  try {
    // 作成したRoute Handlerを呼び出す
    await fetch('/api/revalidate', {
      method: 'POST',
      body: JSON.stringify({ tag: 'gas-data' })
    });
  } catch (error) {
    console.error('Error revalidating:', error);
  }
} 