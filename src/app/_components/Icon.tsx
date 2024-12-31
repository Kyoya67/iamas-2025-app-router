import Image from "next/image";
import Link from "next/link";

export default function Icon() {
    return (
        <Link href="/">
            <Image
                src="/webP_mobile/icon.webp"
                alt="アイコン"
                layout="intrinsic"
                width={140}
                height={280}
                objectFit="cover"
                className="absolute top-3 left-3"
                style={{
                    zIndex: 2,
                    width: "clamp(100px, 12vw + 80px, 140px)"
                }}
            />
        </Link>
    );
}