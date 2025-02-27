import type { Metadata } from "next";
import Image from "next/image";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { getImagePath } from '@/app/_lib/imagePath';

export const metadata: Metadata = {
    title: "IAMAS 2025 アクセス",
}

export default function Access() {
    return (
        <div className="
            absolute inset-0 w-[81%] min-h-screen
            sm:w-[80%] sm:max-w-[32rem]
            md:max-w-[70vw]
            mx-auto 
            ten-mincho-text
        ">
            <h1 className="
                mt-[17vh] sm:mt-[15vh] md:mt-[10vh] 
                md:ml-[5rem]
                pr-4
                text-[#000f9f] text-xl sm:text-2xl ten-mincho border-b border-black">
                ACCESS
            </h1>
            <ScrollMaskContent className="
                h-[60vh]
                md:ml-[5rem]
                pr-3 sm:pr-6
            ">
                <div>
                    <div className="flex flex-col">
                        <div className="lg:flex lg:gap-4 lg:items-start">
                            <div className="mt-4 lg:w-[55%]">
                                <a
                                    href="https://maps.app.goo.gl/EGepxgaumVZwXdD18"
                                    target="_blank"
                                    className="
                                    relative 
                                    group
                                    cursor-pointer
                                "
                                >
                                    <Image
                                        src={getImagePath("/access/0.webp")}
                                        alt="アクセス0"
                                        layout="responsive"
                                        width={100}
                                        height={200}
                                        objectFit="cover"
                                    />
                                    <div className="
                                    absolute inset-0 
                                    bg-black/50 
                                    opacity-0 
                                    group-hover:opacity-100 
                                    transition-opacity 
                                    duration-300 
                                    flex 
                                    items-center 
                                    justify-center
                                ">
                                        <p className="text-white text-sm sm:text-base">
                                            Googleマップで見る
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 lg:mt-4 lg:w-[45%]">
                                <div className="flex items-center gap-2">
                                    <div className="text-[#000f9f] text-base sm:text-xl ten-mincho">
                                        大垣駅より
                                    </div>
                                    <div className="h-[1px] bg-[#000f9f] flex-grow"></div>
                                </div>
                                <div className="text-[0.7rem] sm:text-sm ten-mincho-text text-black">
                                    <div>
                                        タクシー：JR大垣駅南口から約5分
                                    </div>
                                    <div>
                                        バス：大垣駅南口から３番乗り場<br />
                                        &emsp;&emsp;&emsp;ソフトピア線・羽島線「ソフトピアジャパン」行き<br />
                                        &emsp;&emsp;&emsp;約10分（1時間に2~3便程度）<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex lg:gap-4 lg:items-start mt-0 sm:mt-4">
                            <div className="lg:w-[55%]">
                                <Image
                                    src={getImagePath("/access/1.webp")}
                                    alt="アクセス1"
                                    layout="responsive"
                                    width={100}
                                    height={200}
                                    objectFit="cover"
                                    className="mt-8"
                                />
                            </div>
                            <div className="mt-3 lg:mt-7 lg:w-[45%]">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-[#000f9f] text-base sm:text-xl ten-mincho">
                                        東京方面より
                                    </h2>
                                    <div className="h-[1px] bg-[#000f9f] flex-grow"></div>
                                </div>
                                <div className="text-[0.73rem] sm:text-sm ten-mincho-text text-black">
                                    <div>
                                        JR 東京駅からJR 名古屋駅：新幹線1時間40分<br />
                                        JR 名古屋駅からJR 大垣駅：東海道本線・新快速30分<br />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-[#000f9f] text-base sm:text-xl ten-mincho mt-3">
                                        大阪方面より
                                    </h2>
                                    <div className="h-[1px] bg-[#000f9f] flex-grow"></div>
                                </div>
                                <div className="text-[0.73rem] sm:text-sm ten-mincho-text text-black">
                                    <div>
                                        JR 新大阪駅からJR 米原駅：新幹線40分<br />
                                        JR 米原駅からJR 大垣駅：東海道本線・普通列車30分<br />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-[#000f9f] text-base sm:text-xl ten-mincho mt-3">
                                        中部国際空港セントレアより
                                    </h2>
                                    <div className="h-[1px] bg-[#000f9f] flex-grow"></div>
                                </div>
                                <div className="text-[0.66rem] sm:text-[0.85rem] ten-mincho-text text-black">
                                    <div>
                                        セントレア空港からJR 金山駅：名古屋鉄道ミュースカイ30分<br />
                                        JR 金山駅からJR 大垣駅：JR 東海道本線・新快速40分
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex lg:gap-4 lg:items-start mt-8 sm:mt-12 mb-[3rem]">
                            <div className="lg:w-[55%]">
                                <Image
                                    src={getImagePath("/access/2.webp")}
                                    alt="アクセス2"
                                    layout="responsive"
                                    width={100}
                                    height={200}
                                    objectFit="cover"
                                    className="mx-auto"
                                />
                            </div>
                            <div className="mt-2 lg:-mt-2 lg:w-[45%] lg:text-[0.95rem]">
                                <div className="text-[0.854rem] md:text-base lg:text-[0.95rem]">
                                    ソフトピアジャパンでは、<br />
                                    <span className="sm:hidden">
                                        センタービル地下に地下駐車場(有料)を<br />
                                        ご用意しております。
                                    </span>
                                    <span className="hidden sm:inline">
                                        センタービル地下に地下駐車場(有料)をご用意しております。
                                    </span>
                                </div>
                                <div className="mt-2 text-black text-xs sm:text-[0.85rem]">
                                    <div>
                                        時間：8:30~21:30
                                    </div>
                                    <div className="mt-2">
                                        <div>料金：1台につき入庫後20分まで...無料</div>
                                        <div className="mt-1.5">&emsp;&emsp;&emsp;20分を越え3時間まで...110円</div>
                                        <div className="mt-1.5">&emsp;&emsp;&emsp;以降30分ごとに110円加算</div>
                                        <div className="mt-1.5">&emsp;&emsp;&emsp;ただし、7時間超え24時間以内は1,100円</div>
                                        <div className="mt-1.5">&emsp;&emsp;&emsp;24時間超えは以降30分ごとに110円加算</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollMaskContent >
        </div >
    );
}