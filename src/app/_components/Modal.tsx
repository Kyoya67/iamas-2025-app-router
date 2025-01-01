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
                    style={{ zIndex: 1 }}
                    objectFit="cover"
                    className="absolute top-0 right-0 mt-4 mr-3 cursor-pointer"
                    onClick={toggleMenu}
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
                        />
                        <span className="text-[#000f9f] absolute mt-[-0.5rem] right-2.5">Close</span>
                    </button>

                    <div className="text-[#000f9f] text-left text-lg absolute top-32 left-10">
                        情報科学芸術大学院大学<br></br>
                        23期生修了研究発表会・<br></br>
                        プロジェクト研究発表会<br></br>

                        <div className="mt-10 text-sm">
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
                            <li><Link target="_blank" href="https://x.com/iamas_exhibit" onClick={closeMenu}>X (旧Twitter)</Link></li>
                            <li><Link target="_blank" href="https://www.youtube.com/@iamas-exhibit" onClick={closeMenu}>YouTube</Link></li>
                            <li><Link target="_blank" href="https://note.com/iamas_exhibit" onClick={closeMenu}>note</Link></li>
                            <li><Link target="_blank" href="https://www.instagram.com/iamas_exhibit/" onClick={closeMenu}>Instagram</Link></li>
                            <li><Link target="_blank" href="https://www.facebook.com/IAMAS.GraduationExhibition/" onClick={closeMenu}>Facebook</Link></li>
                        </ul>
                        <li className="mt-5"><Link href="/" onClick={closeMenu}>ホームへ戻る</Link></li>
                    </div>
                </div>
            </div>
        </>
    );
}
