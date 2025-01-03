import Image from "next/image";
import Link from "next/link";

export default function Icon() {
    return (
        <Link href="/">
            <Image
                src="/mobile/icon.webp"
                alt="アイコン"
                layout="intrinsic"
                width={140}
                height={280}
                objectFit="cover"
                className="absolute top-3 left-3"
                style={{
                    zIndex: 2,
                    width: "clamp(6rem, 5.273rem + 3.64vw, 8rem)"
                }}
            />
        </Link>
    );
}