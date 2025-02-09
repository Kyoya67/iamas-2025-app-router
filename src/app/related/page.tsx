import Image from "next/image";
import { ScrollMaskContent } from "../_components/ScrollMaskContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IAMAS 2025 修士研究発表会",
    description: "IAMAS 2025 修士研究発表会",
};

export default function Related() {
    return (
        <div className="
            absolute inset-0
            mt-[18vh] lg:mt-[10vh]
            ten-mincho
        ">
            <ScrollMaskContent className="
                mx-auto
                w-[70vw] md:w-[50vw]
                h-[60vh] lg:h-[70vh]
                pr-4
                ">
                <div className="pb-[2rem]">
                    <div className="
                    ten-mincho
                    text-left
                    mb-2
                    text-2xl
                    md:flex md:flex-row
                ">
                        <div>Kioskを用いた展示型</div>
                        <div className="md:ml-1">IAMAS広報</div>
                    </div>
                    <Image
                        className="w-full"
                        src="/related/RCIC.webp"
                        alt="Kiosk"
                        width={500}
                        height={500}
                    />
                    <div className="
                    flex flex-col
                    lg:text-xl
                    ten-mincho
                    font-bold
                    mt-2
                    mb-4
                ">
                        <div>
                            ワークショップ24
                        </div>
                        <div>
                            5F Rcafe W501
                        </div>
                    </div>
                    <div className="
                    ten-mincho
                ">
                        空間デザインシステム「Kiosk」を使用して、IAMASの学校紹介とRCICの連携活動報告展示を行います。ポスター展示だけでなく、IAMAS School Guideや大学院紀要など、各種印刷物の配布も行います。
                    </div>
                    <div className="flex items-end">
                        <Image
                            className="mt-5 w-20 h-20 border-[0.1rem] border-grey"
                            src="/related/RcicIcon.webp"
                            alt="Kiosk"
                            width={500}
                            height={500}
                        />
                        <div className="
                        text-sm sm:text-base
                        ml-3
                        ten-mincho
                        ">
                            産業文化研究センター[RCIC]
                        </div>
                    </div>
                    <div className="mt-2 text-sm ten-mincho">
                        産業文化研究センター（通称RCIC）は2011年度より開設されたIAMASの附置研究機関です。産業文化に関する学際的・総合的な研究を行うとともに、学外の諸機関との連携を図りつつ、本学の社会的機能を維持・発展させることを目的とし、「地域連携・産学官連携活動」「広報・情報アーカイブ活動」「文化活動」の3つを軸として活動しています。
                    </div>
                </div>



                <div className="mb-[2rem] border-t border-[#000f9f]">
                    <div className="
                    ten-mincho
                    mt-8
                    mb-2
                    text-2xl
                ">
                        進学相談会
                    </div>
                    <Image
                        className="w-full border-[0.15rem] border-grey"
                        src="/related/CourseConsultation.webp"
                        alt="Kiosk"
                        width={500}
                        height={500}
                    />
                    <div className="
                    flex flex-col
                    lg:text-xl
                    ten-mincho
                    font-bold
                    mt-2
                    mb-4
                ">
                        <div>
                            ワークショップ24
                        </div>
                        <div>
                            5F Rcafe W501
                        </div>
                    </div>
                    <div className="
                    ten-mincho
                ">
                        本学への進学を考えている方のために、本学教員が、受験、制作・研究の進め方、学校生活などの相談に応じます。直接希望する教員に相談・質問することができますので、ご希望の方は会場受付にてお申し出ください。
                    </div>
                    <div className="flex items-end">
                        <Image
                            className="mt-5 w-20 h-20 border-[0.1rem] border-grey"
                            src="/related/CourseConsultation.webp"
                            alt="Kiosk"
                            width={500}
                            height={500}
                        />
                        <div className="
                        text-sm sm:text-base
                        ml-3
                        ten-mincho
                        ">
                            進学相談会
                        </div>
                    </div>
                    <div className="mt-2 text-sm ten-mincho">
                        問い合わせ先：
                    </div>
                    <div className="text-xs ten-mincho">
                        情報科学芸術大学院大学 事務局教務課
                    </div>
                    <div className="mt-2 text-sm ten-mincho">
                        TEL：0584-75-6641
                    </div>
                    <div className="mt-2 text-sm ten-mincho">
                        Mail：jimukyoku@ml.iamas.ac.jp
                    </div>
                </div>
            </ScrollMaskContent>
        </div>
    );
}