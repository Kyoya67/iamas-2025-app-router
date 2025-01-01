"use client";

import { useEffect } from "react";
import { useModal } from "../_contexts/ModalContext";
import Link from "next/link";
import Image from "next/image";

export default function Modal() {
    const { isOpen, openModal, closeModal } = useModal();

    const toggleMenu = () => {
        if (isOpen) {
            closeModal();
        } else {
            openModal();
        }
    };

    const closeMenu = () => {
        closeModal();
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <>
            <div
                className={`
                    fixed inset-0 bg-[#000f9f44] z-10
                    transition-opacity duration-300
                    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
            ></div>
            <div className="overflow-hidden">
                <Image
                    src="/webP_mobile/menu.webp"
                    alt="メニュー"
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="absolute top-0 right-0 mt-4 mr-3 cursor-pointer"
                    onClick={toggleMenu}
                    style={{ zIndex: 1, width: "clamp(3rem, 1.545rem + 7.27vw, 7rem)" }}
                />
                <div
                    className={`
                        fixed top-0 right-0 
                        bg-[#f5f8f9] 
                        shadow-lg 
                        p-4 z-20 w-3/5 h-full 
                        transition-transform 
                        duration-300 
                        transform ${isOpen ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    <button onClick={toggleMenu} className="absolute top-2 right-2">
                        <Image
                            src="/webP_mobile/close.webp"
                            alt="閉じる"
                            width={100}
                            height={100}
                            objectFit="cover"
                            style={{
                                width: "clamp(3rem, 1.545rem + 7.27vw, 7rem)"
                            }}
                        />
                        <span className="text-[#000f9f] absolute right-1" style={{
                            fontSize: 'clamp(0.75rem, 0.5rem + 1vw, 1rem)'
                        }}>Close</span>
                    </button>

                    <div className="text-[#000f9f] text-left absolute top-[6rem]"
                        style={{
                            left: 'clamp(1.25rem, 5vw, 2rem)',
                        }}
                    >
                        情報科学芸術大学院大学<br></br>
                        23期生修了研究発表会・<br></br>
                        プロジェクト研究発表会<br></br>

                        <div style={{
                            marginTop: 'clamp(1.25rem, 5vw, 2.5rem)',
                            fontSize: 'clamp(0.875rem, 0.75rem + 1vw, 1.125rem)'
                        }}>
                            2/21 (Fri) - 2/24 (Mon)<br></br>
                            10:00 - 17:00<br></br>
                        </div>
                        <span className="text-sm"
                            style={{
                                marginTop: 'clamp(1.25rem, 7vw, 2.5rem)',
                                fontSize: 'clamp(0.75rem, 0.5rem + 1vw, 1rem)'
                            }}
                        >
                            ソフトピアジャパン・センタービル
                        </span>

                        <div style={{ marginTop: 'clamp(1.25rem, 5vw, 2.5rem)' }} className="border-b border-[#000f9f]"></div>

                        <ul style={{
                            marginTop: 'clamp(1.25rem, 5vw, 2.5rem)',
                            fontSize: 'clamp(0.875rem, 0.75rem + 1vw, 1.125rem)'
                        }}>
                            <div className="mb-3 mr-2">
                                <Link href="/" className="flex items-center" onClick={closeMenu}>
                                    <div className="w-3 h-3 bg-[#000f9f]"></div>
                                    <span className="ml-2">ホームへ戻る</span>
                                </Link>
                            </div>
                            <li><Link href="/overview" onClick={closeMenu}>開催概要</Link></li>
                            <li><Link href="/master" onClick={closeMenu}>修士研究発表会</Link></li>
                            <li><Link href="/exhibition" onClick={closeMenu}>関連展示</Link></li>
                            <li><Link href="/event" onClick={closeMenu}>イベント</Link></li>
                            <li><Link href="/access" onClick={closeMenu}>交通アクセス</Link></li>
                            <li><Link href="/contact" onClick={closeMenu}>お問い合わせ</Link></li>
                        </ul>

                        <div style={{ marginTop: 'clamp(1.25rem, 5vw, 2.5rem)' }} className="border-b border-[#000f9f]"></div>

                        <ul style={{
                            marginTop: 'clamp(1.25rem, 5vw, 2.5rem)',
                            fontSize: 'clamp(0.875rem, 0.75rem + 1vw, 1.125rem)'
                        }}>
                            <li><Link target="_blank" href="https://x.com/iamas_exhibit" onClick={closeMenu}>X (旧Twitter)</Link></li>
                            <li><Link target="_blank" href="https://www.youtube.com/@iamas-exhibit" onClick={closeMenu}>YouTube</Link></li>
                            <li><Link target="_blank" href="https://note.com/iamas_exhibit" onClick={closeMenu}>note</Link></li>
                            <li><Link target="_blank" href="https://www.instagram.com/iamas_exhibit/" onClick={closeMenu}>Instagram</Link></li>
                            <li><Link target="_blank" href="https://www.facebook.com/IAMAS.GraduationExhibition/" onClick={closeMenu}>Facebook</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
