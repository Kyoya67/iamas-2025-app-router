"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Modal() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

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
                    />
                    <span className="text-[#000f9f] absolute mt-[-0.5rem] right-2.5">Close</span>
                </button>

                <div className="text-[#000f9f] text-left text-lg mt-20">
                    情報科学芸術大学院大学<br></br>
                    第23期生修了研究発表会・<br></br>
                    プロジェクト研究発表会<br></br>
                </div>
                <ul>
                    <li>メニュー項目1</li>
                    <li>メニュー項目2</li>
                    <li>メニュー項目3</li>
                </ul>
            </div>
        </div>
    );
}