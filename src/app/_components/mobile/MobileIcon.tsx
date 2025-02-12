'use client';
import Image from "next/image";
import Link from "next/link";
import { getClientImagePath } from '@/app/_lib/imagePath';

export default function MobileIcon() {
    return (
        <Link href="/">
            <Image
                src={getClientImagePath("/mobile/icon.webp")}
                alt="モバイルアイコン"
                width={110}
                height={100}
                className="
                    absolute top-2 left-2 object-cover
                    w-[115px]
                    z-[110]
                "
            />
        </Link>
    );
}