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
                className="
                    absolute top-2 left-2 object-cover
                    w-[110px]
                    sm:w-[120px]
                    z-[110]
                "
            />
        </Link>
    );
}