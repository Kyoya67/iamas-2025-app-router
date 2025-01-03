import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "IAMAS 2025 アクセス",
}

export default function Access() {
    return (
        <div className="absolute inset-0 w-full min-h-screen p-8 text-left">
            <h1 className="text-[#000f9f] text-2xl mt-[6.5rem]">
                ACCESS
            </h1>
            <Image
                src="/mobile/access.webp"
                alt="アクセス"
                layout="responsive"
                width={100}
                height={200}
                objectFit="cover"
                className="mt-4 border-[0.1rem] border-[#000f9f]"
            />
            <div className="mt-4">
                <div className="text-[#000f9f] text-2xl">
                    大垣駅より
                </div>
                <div className="mt-2 text-1xl">
                    タクシー：JR大垣駅南口より約5分
                </div>
                <div className="mt-2 text-1xl">
                    バス：大垣駅南口から３番乗り場<br />
                    ソフトピア線・羽島線「ソフトピアジャパン」行き約10分<br />
                </div>
            </div>
        </div>
    );
}