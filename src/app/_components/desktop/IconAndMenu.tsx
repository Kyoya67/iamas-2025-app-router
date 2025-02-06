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
    small?: boolean;
}

export default function IconAndMenu() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const menuItems: MenuItemProps[] = [
        { href: "/overview", text: "開催概要", image: "/desktop/hoverCircles/overview.webp", index: 0 },
        { href: "/master", text: "修士研究発表", image: "/desktop/hoverCircles/master.webp", index: 1 },
        { href: "/project", text: "プロジェクト研究展示", image: "/desktop/hoverCircles/project.webp", index: 2 },
        { href: "/related", text: "関連展示", image: "/desktop/hoverCircles/related.webp", index: 3 },
        { href: "/event", text: "イベント", image: "/desktop/hoverCircles/event.webp", index: 4 },
        { href: "/access", text: "交通アクセス", image: "/desktop/hoverCircles/access.webp", index: 5 },
        { href: "/contact", text: "お問い合わせ", image: "/desktop/hoverCircles/contact.webp", index: 6 }
    ];

    const handlePDFOpen = () => {
        window.open('/pdf/document.pdf', '_blank');
    };

    return (
        <div className="fixed top-3 left-3"
            style={{
                zIndex: 2,
            }}>
            <button onClick={handlePDFOpen} className="hover:opacity-70 transition-opacity">
                <Image
                    src="/desktop/iconAndMenu.webp"
                    alt="アイコンとメニュー"
                    width={180}
                    height={400}
                />
            </button>
            <ul className="fixed top-[10.85rem] left-[0.75rem] text-[#000f9f]">
                {menuItems.map((item) => (
                    <li
                        key={item.href}
                        className={`leading-[1.15] ${item.index === 2 ? 'text-sm' : ''}`}
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