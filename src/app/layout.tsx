import Image from "next/image";
import AdobeFontLoader from "./_components/AdobeFontLoader";
import "./globals.css";
import Modal from "./_components/Modal";
import Icon from "./_components/Icon";
import { ModalProvider } from "./_contexts/ModalContext";
import PageTransition from "./_components/PageTransition";

export const metadata = {
  title: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
  description: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
  icons: {
    icon: "/favicon.webp",
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
    <ModalProvider>
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
              <Icon />
            </div>
            <PageTransition>
              {children}
            </PageTransition>
            <Modal />
          </div>
        </body>
      </html>
    </ModalProvider>
  );
}
