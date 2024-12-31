import Image from "next/image";
import AdobeFontLoader from "./_components/AdobeFontLoader";
import "./globals.css";
import Modal from "./_components/Modal";
export const metadata = {
  title: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
  description: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
  icons: {
    icon: "/Favicon_img.webp",
  },
  openGraph: {
    title: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
    description: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
    url: "https://www.iamas.ac.jp/exhibit25/",
    type: "website",
    images: [
      {
        url: "/OGP.webp",
        width: 1200,
        height: 630,
        alt: "OGP画像説明",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
    images: ["/OGP.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AdobeFontLoader />
        <div className="overflow-y-auto relative">
          <div className="relative w-full" style={{ height: "auto" }}>
            <Image
              src="/webP_mobile/base.webp"
              alt="下地"
              layout="responsive"
              width={100}
              height={200}
              objectFit="cover"
            />
            <Image
              src="/webP_mobile/scan.webp"
              alt="スキャン"
              layout="responsive"
              width={100}
              height={200}
              objectFit="cover"
              className="absolute top-0 left-0"
            />
            <Image
              src="/webP_mobile/icon.webp"
              alt="アイコン"
              layout="intrinsic"
              width={140}
              height={280}
              objectFit="cover"
              className="absolute top-2 left-2"
              style={{ zIndex: 2 }}
            />
          </div>
          {children}
          <Modal />
        </div>
      </body>
    </html>
  );
}
