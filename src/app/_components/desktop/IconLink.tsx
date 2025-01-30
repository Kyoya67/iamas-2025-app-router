import Image from "next/image";
import Link from "next/link";

export function IconLink() {
    return (
        <Link href="/">
            <Image
                src="/desktop/iconAndMenu.webp"
                alt="アイコンとメニュー"
                width={180}
                height={400}
            />
        </Link>
    );
} 