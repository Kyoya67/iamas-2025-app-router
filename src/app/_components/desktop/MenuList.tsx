'use client';

import { useState } from "react";
import Link from "next/link";
import HoverImage from "./HoverImage";

type MenuItem = {
    href: string;
    text: string;
    image: string;
    index: number;
}

export function MenuList({ items }: { items: readonly MenuItem[] }) {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <>
            <ul className="fixed top-[10.85rem] left-[0.75rem] text-[#000f9f]">
                {items.map((item) => (
                    <li
                        key={item.href}
                        className={`leading-[1.15] ${item.index === 2 ? 'text-sm' : ''}`}
                        onMouseEnter={() => setHoveredItem(item.image)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{ textShadow: '0.3px 0.3px 0 #E8EEFA' }}
                    >
                        <Link href={item.href}>{item.text}</Link>
                    </li>
                ))}
            </ul>
            {items.map((item) => (
                <HoverImage
                    key={item.image}
                    path={item.image}
                    isHovered={hoveredItem === item.image}
                    index={item.index}
                />
            ))}
        </>
    );
} 