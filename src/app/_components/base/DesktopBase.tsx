'use client';
import Image from "next/image";
import ConceptMovie from "../desktop/ConceptMovie";
import { getClientImagePath } from '@/app/_lib/imagePath';

export default function DesktopBase() {
    return (
        <div className="
            absolute inset-0 
            z-0
        ">
            <Image
                src={getClientImagePath("/desktop/base/rightTop.webp")}
                alt="右上"
                width={70}
                height={20}
                className="object-contain fixed top-0 right-0 w-fit h-fit"
                style={{
                    width: 'clamp(70px, 5vw, 75px)'
                }}
            />
            <Image
                src={getClientImagePath("/desktop/base/rightBottom.webp")}
                alt="右下"
                width={600}
                height={300}
                className="object-contain fixed bottom-0 right-0 w-fit h-fit
                    opacity-0 translate-y-10 pointer-events-none
                    md:opacity-100 md:translate-y-0 md:pointer-events-auto
                    transition-opacity duration-500 ease-in-out"
                style={{
                    width: 'clamp(600px, 60vw + 100px, 800px)'
                }}
            />
            <ConceptMovie />
            <div className="fixed bottom-0 left-0 flex items-end gap-0">
                <Image
                    src={getClientImagePath("/desktop/base/leftBottom.webp")}
                    alt="左下"
                    width={600}
                    height={100}
                    className="object-contain"
                />
            </div>
        </div>
    );
}