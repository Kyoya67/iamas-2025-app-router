"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HoverImage from "./HoverImage";

type MenuItemProps = {
    href: string;
    text: string | React.ReactNode;
    image: string;
    index: number;
    small?: boolean;
}

export default function IconAndMenu() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const menuItems: MenuItemProps[] = [
        { href: "/overview", text: "開催概要", image: "/desktop/hoverCircles/overview.webp", index: 0 },
        { href: "/master", text: "修士研究発表", image: "/desktop/hoverCircles/master.webp", index: 1 },
        {
            href: "/project",
            text: (
                <div className="-ml-[0.1rem]">
                    <span>プ</span>
                    <span className="-ml-[1.5px]">ロ</span>
                    <span className="-ml-[2.8px]">ジ</span>
                    <span className="-ml-[3px]">ェ</span>
                    <span className="-ml-[3px]">ク</span>
                    <span className="-ml-[5px]">ト</span>
                    <span className="-ml-[0.15em]">研究発表</span>
                </div>
            ),
            image: "/desktop/hoverCircles/project.webp",
            index: 2
        },
        { href: "/related", text: "関連展示", image: "/desktop/hoverCircles/related.webp", index: 3 },
        { href: "/event", text: "イベント", image: "/desktop/hoverCircles/event.webp", index: 4 },
        { href: "/access", text: "交通アクセス", image: "/desktop/hoverCircles/access.webp", index: 5 },
        { href: "/contact", text: "お問い合わせ", image: "/desktop/hoverCircles/contact.webp", index: 6 }
    ];

    return (
        <div className="fixed top-3 left-3"
            style={{
                zIndex: 2,
            }}>
            <Link href="/">
                <Image
                    src="/desktop/iconAndMenu.webp"
                    alt="アイコンとメニュー"
                    width={180}
                    height={400}
                />
            </Link>
            <ul className="fixed top-[10.65rem] left-[0.75rem] text-[#000f9f]">
                {menuItems.map((item) => (
                    <li
                        key={item.href}
                        className="leading-[1.15]"
                        onMouseEnter={() => setHoveredItem(item.image)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                            textShadow: '0.3px 0.3px 0 #E8EEFA'
                        }}
                    >
                        <Link href={item.href}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
            {menuItems.map((item) => (
                <HoverImage
                    key={item.image}
                    path={item.image}
                    isHovered={hoveredItem === item.image}
                    index={item.index}
                />
            ))}
        </div>
    );
}