import Image from "next/image";
import Link from "next/link";

export default function MobileIcon() {
    return (
        <Link href="/">
            <Image
                src="/icon.webp"
                alt="アイコン"
                width={100}
                height={100}
                className="absolute top-3 left-3 object-cover"
                style={{ zIndex: 2 }}
            />
        </Link>
    );
}