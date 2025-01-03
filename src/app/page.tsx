import Image from "next/image";

// サーバーコンポーネントとしてビルド時にデータを取得
export default async function Home() {
  return (
    <Image
      src="/mobile/circle.webp"
      alt="円"
      layout="responsive"
      width={100}
      height={200}
      objectFit="cover"
      className="absolute top-0 left-0"
      style={{ zIndex: 1 }}
    />
  );
}

