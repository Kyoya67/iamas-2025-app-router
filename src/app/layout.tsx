import * as React from 'react'
import Image from "next/image";
import "./globals.css";
import MobileMenu from "./_components/MobileMenu";
import MobileIcon from "./_components/MobileIcon";
import PageTransition from "./_components/PageTransition";
import { Metadata } from 'next';
import DesktopBase from "./_components/base/DesktopBase";
import MobileBase from "./_components/base/MobileBase";
import IconAndMenu from "./_components/IconAndMenu";
import TypekitLoader from './_components/TypekitLoader'
import DisableZoom from './_components/DisableZoom';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iamas.ac.jp/exhibit25/'),
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: 'no'
  }
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <TypekitLoader />
        <DisableZoom />
      </head>
      <body className="text-[#000f9f] ten-mincho">
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
            <div className="hidden sm:block z-0">
              <DesktopBase />
            </div>
            <div className='z-10'>
              <Image
                src="/mobile/iPadScan.webp"
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
                src="/desktop/scan.webp"
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
            {modal}
          </div>
        </div>
      </body>
    </html>
  );
}
