import Image from "next/image";
import Link from "next/link";

export default function MobileIcon() {
    return (
        <Link href="/">
            <Image
                src="/mobile/icon.webp"
                alt="アイコン"
                width={110}
                height={100}
                className="absolute top-3 left-3 object-cover"
                style={{ zIndex: 2 }}
            />
        </Link>
    );
}