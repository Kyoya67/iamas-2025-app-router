import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IAMAS 2025 お問い合わせ",
}

export default function Contact() {
    return (
        <div className="
            absolute inset-0 w-full min-h-screen
            flex justify-center items-center
            ten-mincho
        ">
            <div className="
                max-w-5xl
                mt-[-3rem]
                mx-auto
            ">
                <ul className="
                    text-fluid-base text-[#000f9f]
                    flex flex-col gap-y-2
                    auto-ovo ten-mincho
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
                                hover:opacity-20 
                                transition-opacity 
                                duration-200
                                inline-flex 
                                items-center
                            "
                        >
                            <span>https://www.iamas.ac.jp/</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}   