import * as React from 'react'
import Image from "next/image";
import AdobeFontLoader from "./_components/AdobeFontLoader";
import "./globals.css";
import Modal from "./_components/Menu";
import Icon from "./_components/Icon";
import { ModalProvider } from "./_contexts/ModalContext";
import PageTransition from "./_components/PageTransition";
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iamas.ac.jp/exhibit25/'),
  title: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
  description: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
  icons: {
    icon: "/favico.png",
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
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <html lang="en">
        <body>
          <AdobeFontLoader />
          <div className="scroll-container">
            <div className="relative w-full h-screen">
              <Image
                src="/mobile/base.webp"
                alt="下地"
                fill
                className="!h-screen w-full object-fill"
              />
              <Image
                src="/mobile/scan.webp"
                alt="スキャン"
                fill
                className="absolute top-0 left-0 !h-screen w-full object-fill"
              />
              <Icon />
            </div>
            <PageTransition>
              {children}
              {modal}
            </PageTransition>
            <Modal />
          </div>
        </body>
      </html>
    </ModalProvider>
  );
}
