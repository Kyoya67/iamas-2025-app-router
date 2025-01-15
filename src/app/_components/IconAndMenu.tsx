import Image from "next/image";
import Link from "next/link";
export default function IconAndMenu() {
    return (
        <div className="fixed top-3 left-3"
            style={{
                zIndex: 2,
            }}>
            <Link href="/">
                <Image
                    src="/iconAndMenu.webp"
                    alt="アイコンとメニュー"
                    width={200}
                    height={400}
                    style={{
                        width: 'clamp(170px, 5vw, 200px)'
                    }}
                />
            </Link>
            <ul className="fixed top-[10.2rem] left-3 text-[#000f9f]">
                <li className="leading-[1.15]"
                    style={{
                        textShadow: '1px 1px 0 rgba(255, 255, 255, 0.8)'
                    }}>
                    <Link href="/overview">
                        開催概要
                    </Link>
                </li>
                <li className="leading-[1.15]"
                    style={{
                        textShadow: '1px 1px 0 rgba(255, 255, 255, 0.8)'
                    }}>
                    <Link href="/master">
                        修士研究発表
                    </Link>
                </li>
                <li className="leading-[1.15]"
                    style={{
                        textShadow: '1px 1px 0 rgba(255, 255, 255, 0.8)'
                    }}>
                    <Link href="/exhibition">
                        関連展示
                    </Link>
                </li>
                <li className="leading-[1.15]"
                    style={{
                        textShadow: '1px 1px 0 rgba(255, 255, 255, 0.8)'
                    }}>
                    <Link href="/event">
                        イベント
                    </Link>
                </li>
                <li className="leading-[1.15]"
                    style={{
                        textShadow: '1px 1px 0 rgba(255, 255, 255, 0.8)'
                    }}>
                    <Link href="/access">
                        交通アクセス
                    </Link>
                </li>
                <li className="leading-[1.15]"
                    style={{
                        textShadow: '1px 1px 0 rgba(255, 255, 255, 0.8)'
                    }}>
                    <Link href="/contact">
                        お問い合わせ
                    </Link>
                </li>
            </ul>
        </div>
    );
}