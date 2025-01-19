import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "IAMAS 2025 アクセス",
}

export default function Access() {
    return (
        <div className="
            absolute inset-0 w-full min-h-screen p-8
            xs:max-w-[25rem]
            sm:w-full sm:max-w-[40rem]
            md:w-[70%] md:max-w-[40rem]
            mx-auto
        ">
            <div className="
                relative
                h-[60vh]
                mt-[15vh]
                ml-6
                sm:ml-12
                overflow-y-auto
                mask-container
                overview-scroll
            ">
                <div className="pr-6">
                    <h1 className="text-[#000f9f] text-2xl">
                        ACCESS
                    </h1>
                    <Image
                        src="/access.webp"
                        alt="アクセス"
                        layout="responsive"
                        width={90}
                        height={180}
                        objectFit="cover"
                        className="mt-4 border-[0.1rem] border-[#000f9f] w-[90%] mx-auto"
                    />
                    <div className="mt-4">
                        <div className="text-[#000f9f] text-xl">
                            大垣駅より
                        </div>
                        <div className="mt-2 text-[0.6rem] sm:text-fluid-sm">
                            <div>
                                タクシー：JR大垣駅南口より約5分
                            </div>
                            <div>
                                バス：大垣駅南口から３番乗り場<br />
                                &emsp;&emsp;&emsp;ソフトピア線・羽島線「ソフトピアジャパン」行き<br />
                                &emsp;&emsp;&emsp;約10分（1時間に2~3便程度）<br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}