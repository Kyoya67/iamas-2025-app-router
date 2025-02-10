import type { Metadata } from "next";
import Image from "next/image";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
export const metadata: Metadata = {
    title: "IAMAS 2025 アクセス",
}

export default function Access() {
    return (
        <div className="
            absolute inset-0 w-full min-h-screen p-8
            xs:max-w-[30rem]
            sm:w-full sm:max-w-[40rem]
            md:w-[70%] md:max-w-[40rem]
            mx-auto
            ten-mincho
        ">
            <ScrollMaskContent className="
                h-[60vh]
                mt-[15vh] md:mt-[13vh] 
                ml-[1rem] md:ml-[3rem]
            ">
                <div className="pr-6">
                    <h1 className="text-[#000f9f] text-2xl ten-mincho">
                        ACCESS
                    </h1>
                    <a href="https://maps.app.goo.gl/EGepxgaumVZwXdD18" target="_blank">
                        <Image
                            src="/access.webp"
                            alt="アクセス"
                            layout="responsive"
                            width={100}
                            height={200}
                            objectFit="cover"
                            className="mt-4 border-[0.1rem] border-[#000f9f] mx-auto"
                        />
                    </a>
                    <div className="mt-4">
                        <div className="mt-2 text-fluid-xs sm:text-fluid-sm ten-mincho">
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
            </ScrollMaskContent>
        </div >
    );
}