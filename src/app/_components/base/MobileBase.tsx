'use client';
import Image from "next/image";
import { getClientImagePath } from '@/app/_lib/imagePath';

export default function MobileBase() {
    return (
        <div className="relative z-0">
            <Image
                src={getClientImagePath("/mobile/base/rightMiddle.webp")}
                alt="右中"
                width={80}
                height={100}
                className="
                    fixed bottom-[5rem] right-0"
            />
            <Image
                src={getClientImagePath("/mobile/base/rightBottom.webp")}
                alt="右下"
                width={350}
                height={100}
                className=" 
                    fixed bottom-0 right-0"
            />
            <Image
                src={getClientImagePath("/mobile/base/leftBottom.webp")}
                alt="左下"
                width={120}
                height={100}
                className="
                    object-contain
                    fixed bottom-0 left-0 flex items-end gap-0"
            />
        </div>
    );
}