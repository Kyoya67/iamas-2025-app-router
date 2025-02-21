"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, memo, useEffect } from "react";
import { getImagePath } from '@/app/_lib/imagePath';
import { SOCIAL_LINKS } from "@/app/_lib/socialLinks";

const MENU_LINKS = [
    { href: "/overview", label: "開催概要" },
    { href: "/master", label: "修士研究発表" },
    { href: "/project", label: "プロジェクト研究発表" },
    { href: "/related", label: "関連展示" },
    { href: "/event", label: "イベント" },
    { href: "/access", label: "交通アクセス" },
    { href: "/contact", label: "お問い合わせ" },
] as const;

const MOBILE_ICON_STYLE = {
    width: "clamp(2rem, 1.545rem + 7vw, 5rem)",
    objectFit: "cover" as const
} as const;

const MenuLink = memo(function MenuLink({
    href,
    children,
    external = false,
    onClick
}: {
    href: string;
    children: React.ReactNode;
    external?: boolean;
    onClick: () => void;
}) {
    return (
        <li>
            <Link
                href={href}
                onClick={onClick}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
            >
                {children}
            </Link>
        </li>
    );
});

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    return (
        <div className="overflow-hidden pointer-events-auto">
            <button
                onClick={toggleMenu}
                aria-label="メニューを開く"
                aria-expanded={isOpen}
                className="absolute top-0 right-0 mt-2 mr-2 z-[110]"
            >
                <Image
                    src={getImagePath("/mobile/menu.webp")}
                    alt="メニュー"
                    width={130}
                    height={130}
                    style={MOBILE_ICON_STYLE}
                />
            </button>
            <div
                className={`
                    fixed inset-0 
                    bg-[#000f9f]/40
                    transition-opacity duration-300 ease-in-out
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    z-[100]
                `}
                onClick={closeMenu}
                aria-hidden="true"
            />
            <div
                role="dialog"
                aria-label="メニュー"
                className={`
                    fixed top-0 right-0 
                    bg-[#f5f8f9] 
                    shadow-lg 
                    p-4 z-[110] w-3/5 h-full 
                    transition-transform 
                    duration-300 ease-in-out
                    transform ${isOpen ? "translate-x-0" : "translate-x-full"}
                    overflow-y-auto
                    overscroll-none
                `}
            >
                <button
                    onClick={closeMenu}
                    className="absolute top-2 right-2 z-[110]"
                    aria-label="メニューを閉じる"
                >
                    <Image
                        src={getImagePath("/mobile/close.webp")}
                        alt=""
                        width={100}
                        height={100}
                        style={MOBILE_ICON_STYLE}
                    />
                    <span className="
                        absolute right-1 
                        text-[#000f9f] text-fluid-sm">
                        Close
                    </span>
                </button>

                <nav className="text-[#000f9f] text-left relative pt-[4rem] pl-5 sm:pl-8 pb-8">
                    <div className="text-sm sm:text-lg">
                        情報科学芸術大学院大学<br></br>
                        23期生修了研究発表会・<br></br>
                        プロジェクト研究発表会<br></br>
                    </div>

                    <div className="mt-4 text-sm sm:text-lg">
                        2/21 (Fri) - 2/24 (Mon)<br></br>
                        10:00 - 18:00<span className="ml-2 text-xxs sm:text-sm">(初日のみ13:00-)</span><br></br>
                    </div>
                    <span className="block mt-4 text-xxs sm:text-sm">
                        ソフトピアジャパン・センタービル
                    </span>

                    <div className="mt-4 sm:mt-7 border-b border-[#000f9f]"></div>

                    <ul className="mt-4 sm:mt-7 text-base sm:text-lg">
                        <div className="mb-3 mr-2">
                            <MenuLink href="/" onClick={closeMenu}>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-[#000f9f]"></div>
                                    <span className="ml-2">ホームへ戻る</span>
                                </div>
                            </MenuLink>
                        </div>
                        {MENU_LINKS.map(({ href, label }) => (
                            <MenuLink key={href} href={href} onClick={closeMenu}>
                                &gt; {label}
                            </MenuLink>
                        ))}
                    </ul>

                    <div className="mt-4 sm:mt-7 border-b border-[#000f9f]"></div>

                    <ul className="mt-4 sm:mt-7 text-sm sm:text-lg">
                        {SOCIAL_LINKS.map(({ href, label }) => (
                            <MenuLink key={href} href={href} onClick={closeMenu} external>
                                {label}
                            </MenuLink>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
