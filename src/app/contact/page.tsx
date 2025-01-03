import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IAMAS 2025 お問い合わせ",
}

export default function Contact() {
    return (
        <div className="absolute inset-0 w-full min-h-screen p-8">
            <div className="max-w-5xl mx-auto mt-[8.5rem]">
                <ul className="text-fluid-xl text-[#000f9f] flex flex-col gap-y-3">
                    <li>
                        <div className="flex flex-col gap-y-2">
                            <span>住所：岐阜県大垣市加賀野町4丁目1-7</span>
                            <span className="ml-[3em]">ソフトピアジャパン・センタービル</span>
                        </div>
                    </li>
                    <li>TEL：0584-75-6600</li>
                    <li>FAX：0584-75-6637</li>
                    <li>Mail：iamas25@ml.iamas.ac.jp</li>
                    <li>WEB：<a href="https://www.iamas.ac.jp/">https://www.iamas.ac.jp/</a></li>
                </ul>
            </div>
        </div>
    );
}   