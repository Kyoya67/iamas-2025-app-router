"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Modal() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

    return (
        <div className="overflow-hidden">
            <Image
                src="/webP_mobile/menu.webp"
                alt="メニュー"
                width={140}
                height={100}
                objectFit="cover"
                className="absolute top-0 right-0 mt-4 mr-3 cursor-pointer"
                onClick={toggleMenu}
                style={{
                    zIndex: 2,
                    width: "clamp(40px, 10vw + 20px, 80px)"
                }}
            />
            <div
                className={`
                    fixed top-0 right-0 
                    bg-[#f5f8f9] 
                    shadow-lg 
                    p-4 z-10 w-3/5 h-full 
                    transition-transform 
                    duration-300 
                    transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}
                style={{ transform: isMenuOpen ? "translateX(0)" : "translateX(100%)" }}
            >
                <button onClick={toggleMenu} className="absolute top-2 right-2">
                    <Image
                        src="/webP_mobile/close.webp"
                        alt="閉じる"
                        width={100}
                        height={100}
                        objectFit="cover"
                        style={{
                            zIndex: 2,
                            width: "clamp(40px, 10vw + 20px, 80px)"
                        }}
                    />
                    <span className="text-[#000f9f] absolute mt-[-0.5rem] right-2.5">Close</span>
                </button>

                <div
                    className="text-[#000f9f] text-left absolute top-32"
                    style={{ left: 'clamp(1.25rem, 8vw + 0.5rem, 2rem)' }}
                >
                    <div style={{ fontSize: 'clamp(0.875rem, 0.3vw + 1rem, 1.5rem)' }}>
                        情報科学芸術大学院大学<br></br>
                        23期生修了研究発表会・<br></br>
                        プロジェクト研究発表会<br></br>
                    </div>

                    <div className="mt-10 text-xs">
                        2/21 (Fri) - 2/24 (Mon)<br></br>
                        10:00 - 17:00<br></br>
                        <br></br>
                        ソフトピアジャパン・センタービル
                    </div>

                    <div className="mt-5 border-b border-[#000f9f]"></div>

                    <ul className="mt-10">
                        <li><Link href="/overview" onClick={closeMenu}>開催概要</Link></li>
                        <li><Link href="/master" onClick={closeMenu}>修士研究発表会</Link></li>
                        <li><Link href="/exhibition" onClick={closeMenu}>関連展示</Link></li>
                        <li><Link href="/event" onClick={closeMenu}>イベント</Link></li>
                        <li><Link href="/access" onClick={closeMenu}>交通アクセス</Link></li>
                        <li><Link href="/contact" onClick={closeMenu}>お問い合わせ</Link></li>
                    </ul>

                    <div className="mt-10 border-b border-[#000f9f]"></div>

                    <ul className="mt-10">
                        <li><Link target="_blank" href="https://x.com/iamas_exhibit">X (旧Twitter)</Link></li>
                        <li><Link target="_blank" href="https://www.youtube.com/@iamas-exhibit">YouTube</Link></li>
                        <li><Link target="_blank" href="https://note.com/iamas_exhibit">note</Link></li>
                        <li><Link target="_blank" href="https://www.instagram.com/iamas_exhibit/">Instagram</Link></li>
                        <li><Link target="_blank" href="https://www.facebook.com/IAMAS.GraduationExhibition/">Facebook</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}