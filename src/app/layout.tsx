import "./globals.css";
import Image from "next/image";
import type { Metadata } from 'next';
import DisableZoom from './_components/DisableZoom';
import IconAndMenu from "./_components/desktop/IconAndMenu";
import MobileIcon from "./_components/mobile/MobileIcon";
import MobileMenu from "./_components/mobile/MobileMenu";
import PageTransition from "./_components/PageTransition";
import TypekitScript from './_components/TypekitScript'
import DesktopBase from "./_components/base/DesktopBase";
import MobileBase from "./_components/base/MobileBase";
import { EventProvider } from "@/app/_contexts/EventContext";
import { getImagePath } from '@/app/_lib/imagePath';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iamas.ac.jp/exhibit25/'),
  title: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
  description: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
  icons: {
    icon: getImagePath("/favicon.webp"),
  },
  openGraph: {
    title: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
    description: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
    url: "https://www.iamas.ac.jp/exhibit25/",
    type: "website",
    images: [
      {
        url: getImagePath("/ogp.webp"),
        width: 1200,
        height: 630,
        alt: "IAMAS 2025 ogp画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
    description: "IAMAS 2025 情報科学芸術大学院大学 第23期生修了研究発表会",
    site: "@IAMAS_JP",
    creator: "@IAMAS_JP",
    images: [
      {
        url: getImagePath("/ogp.webp"),
        alt: "IAMAS 2025 ogp画像",
        width: 1200,
        height: 630,
      }
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <TypekitScript />
        <DisableZoom />
        <meta name="format-detection" content="telephone=no,email=no,address=no" />
      </head>
      <body className="text-[#000f9f] ten-mincho-text">
        <EventProvider>
          <div className="scroll-container">
            <div className="relative w-full h-screen">
              <div className="md:hidden z-10">
                <MobileIcon />
                <MobileMenu />
              </div>
              <div className="hidden md:block z-10">
                <IconAndMenu />
              </div>
              <div className="sm:hidden z-0">
                <MobileBase />
              </div>
              <div className="sm:block hidden z-0">
                <DesktopBase />
              </div>
              <div className='z-10'>
                <Image
                  src={getImagePath("/mobile/iPadScan.webp")}
                  alt="スキャン"
                  fill
                  priority
                  loading="eager"
                  className="
                      md:hidden 
                      absolute top-0 right-0 
                      h-screen w-full 
                      object-cover object-right
                      pointer-events-none"
                />
                <Image
                  src={getImagePath("/desktop/scan.webp")}
                  alt="スキャン"
                  fill
                  className="
                      hidden md:block 
                      absolute top-0 right-0 
                      h-screen w-full 
                      object-cover object-right
                      pointer-events-none"
                />
              </div>
              <PageTransition>
                {children}
              </PageTransition>
            </div>
          </div>
        </EventProvider>
      </body>
    </html>
  );
}
