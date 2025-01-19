import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IAMAS 2025 お問い合わせ",
}

export default function Contact() {
    return (
        <div className="
            absolute inset-0 flex justify-center
            p-fluid-padding-sm sm:p-0
            relative h-full w-full
            flex justify-center
        ">
            <div className="
                    relative
                    h-[60vh]
                    mt-[30vh]
                    overflow-y-auto
                    mask-container
                    overview-scroll
                    ">
                <ul className="
                    text-fluid-base text-[#000f9f]
                    flex flex-col gap-y-2
                ">
                    <li>
                        <div className="flex flex-col gap-y-1">
                            <span>住所：岐阜県大垣市加賀野町4丁目1番地7</span>
                            <span className="ml-[3em]">ソフトピアジャパン・センタービル</span>
                        </div>
                    </li>
                    <li>TEL：0584-75-6600</li>
                    <li>FAX：0584-75-6637</li>
                    <li>Mail：iamas25@ml.iamas.ac.jp</li>
                    <li>
                        WEB：
                        <a
                            href="https://www.iamas.ac.jp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                hover:opacity-20 
                                transition-opacity 
                                duration-200
                                inline-flex 
                                items-center
                            "
                        >
                            <span className="ml-1">https://www.iamas.ac.jp/</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}   