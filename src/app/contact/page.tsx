import type { Metadata } from "next";
import { getImagePath } from '@/app/_lib/imagePath';
import Image from "next/image";
import { SOCIAL_LINKS } from "@/app/_lib/socialLinks";
import { FaXTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";
import { getClientImagePath } from "@/app/_lib/imagePath";

export const metadata: Metadata = {
    title: "IAMAS 2025 お問い合わせ",
}

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'x':
            return <FaXTwitter size={25} />;
        case 'instagram':
            return <FaInstagram size={28} />;
        case 'youtube':
            return <FaYoutube size={32} />;
        case 'note':
            return <Image src={getImagePath("/note.svg")} alt="note" width={25} height={25} />;
        case 'facebook':
            return <FaFacebook size={28} />;
        default:
            return null;
    }
};

export default function Contact() {
    return (
        <div className="
            absolute inset-0 w-fit h-fit m-auto 
            flex justify-center items-centers
        ">
            <div className="
                ten-mincho
                mx-auto
                flex flex-col gap-y-8 items-center
            ">
                <Image
                    src={getImagePath("/iamas-official-logo.webp")}
                    className="
                            min-[500px]:min-w-[23rem] min-[500px]:w-[45vw] md:max-w-[35rem]
                        "
                    alt="IAMAS 2025 ロゴ"
                    width={300}
                    height={300}
                />
                <div className="flex flex-col gap-y-2">
                    <ul className="
                        text-[#000f9f]
                        flex flex-col
                        auto-ovo ten-mincho
                        md:border-b border-[#000f9f] pb-2
                        ">
                        <li>
                            <div className="flex flex-col gap-y-1 ten-mincho">
                                <span>住所：岐阜県大垣市加賀野町4丁目1番地7</span>
                                <span className="ml-[3em]">ソフトピアジャパン・センタービル</span>
                            </div>
                        </li>
                        <li className="ten-mincho"><span>TEL：</span><span className="ovo prevent-link">0584-75-6600</span></li>
                        <li className="ten-mincho"><span>FAX：</span><span className="ovo prevent-link">0584-75-6637</span></li>
                        <li className="ten-mincho">
                            <span>Mail：</span>
                            <span className="ovo prevent-link">iamas25@ml.iamas.ac.jp</span>
                        </li>
                        <li className="ten-mincho">
                            <span>WEB：</span>
                            <a
                                href="https://www.iamas.ac.jp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                ovo
                                hover:opacity-40 
                                transition-opacity 
                                duration-200
                                inline-flex 
                                items-center
                            "
                            >
                                <span>https://www.iamas.ac.jp/</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href={getClientImagePath("/press.pdf")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                ovo
                                hover:opacity-40 
                                transition-opacity 
                                duration-200
                                inline-flex 
                                items-center
                            "
                            >
                                <span className="ten-mincho">プレスリリースはこちら</span>
                            </a>
                        </li>
                    </ul>
                    <div className="flex gap-6 mt-4 w-full items-center justify-between hidden md:inline-flex">
                        {SOCIAL_LINKS.map(({ href, label, icon }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                        text-[#000f9f]
                                        hover:opacity-40 
                                        transition-opacity 
                                        duration-200
                                    "
                                aria-label={label}
                            >
                                {getIcon(icon)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}   