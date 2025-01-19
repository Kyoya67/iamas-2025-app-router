"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HoverImage from "./HoverImage";

type MenuItemProps = {
    href: string;
    text: string;
    image: string;
    index: number;
}

export default function IconAndMenu() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const menuItems: MenuItemProps[] = [
        { href: "/overview", text: "開催概要", image: "/desktop/hoverCircles/overview.webp", index: 0 },
        { href: "/master", text: "修士研究発表", image: "/desktop/hoverCircles/master.webp", index: 1 },
        { href: "/exhibition", text: "プロジェクト展示", image: "/desktop/hoverCircles/exhibition.webp", index: 2 },
        { href: "/event", text: "イベント", image: "/desktop/hoverCircles/event.webp", index: 3 },
        { href: "/access", text: "交通アクセス", image: "/desktop/hoverCircles/access.webp", index: 4 },
        { href: "/contact", text: "お問い合わせ", image: "/desktop/hoverCircles/contact.webp", index: 5 }
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
                    width={300}
                    height={400}
                    style={{
                        width: 'clamp(170px, 5vw, 200px)'
                    }}
                />
            </Link>
            <ul className="fixed top-[10.2rem] left-3 text-[#000f9f]">
                {menuItems.map((item) => (
                    <li
                        key={item.href}
                        className="leading-[1.15]"
                        onMouseEnter={() => setHoveredItem(item.image)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                            textShadow: '1px 1px 0 rgba(255, 255, 255, 0.8)'
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