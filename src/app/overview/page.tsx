import { Metadata } from "next";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";

export const metadata: Metadata = {
    title: "IAMAS 2025 開催概要",
};

export default function Overview() {
    return (
        <div className="
            absolute inset-0 left-[-0.7rem]
            p-fluid-padding-sm sm:p-0
            relative h-full w-full
            flex flex-col items-center
            text-[#000f9f]
        ">
            <div className="
                w-[clamp(18rem,60vw,23rem)]
                sm:w-[80vw]
                md:w-[clamp(24rem,50vw,40rem)]
                px-8 pr-6
            ">
                <div className="
                    relative
                    mt-[17vh] 
                    text-xl sm:text-2xl 
                    text-black
                    border-b-[0.1rem] border-black
                ">
                    ごあいさつ
                </div>
            </div>

            <ScrollMaskContent className="
                h-[60vh] xs:h-[60vh] sm:h-[55vh]
                mt-2 pb-[2rem]
                w-[clamp(18rem,60vw,23rem)]
                sm:w-[80vw]
                md:w-[clamp(24rem,50vw,40rem)]
            ">
                <div className="
                    px-8 pr-6
                    text-sm
                    sm:text-base
                    tracking-[-0.25px]
                    leading-[17px]
                    sm:leading-[1.8]
                    text-justify
                    ten-mincho
                ">
                    情報科学芸術大学院大学 [IAMAS] は、科学的知性と芸術的感性の融合を目指して研究活動を行う大学院大学です。
                    本学では、芸術、デザイン、工学、社会学など、多様な分野を背景に持つ23期生が、それぞれの専門性や視点を活かしながら、制作や研究に取り組んできました。
                    その集大成を発表する場として、このたび「IAMAS 2025」と題した成果展を開催いたします。<br />
                    <br />
                    今年度のテーマは「苦悩と誠実」です。23期生は、個々の研究活動において、一筋縄ではいかない困難に直面し、何度も悩み、苦しむ場面がありました。
                    それでも、自身と研究に深く向き合い、誠実に取り組む姿勢を貫き、作品・研究を強固なものへと形作りました。
                    このプロセスは、ときに滑らかで、ときに粗い軌跡を残しながら、円環を描くように内省と挑戦を重ねていくものとして捉えられます。
                    苦悩の中で誠実に研究と向き合い続けた23期生の成果を、ぜひご高覧ください。<br />
                    <br />
                    IAMAS2025 実行委員長 <br />
                    成瀬陽太
                </div>
            </ScrollMaskContent>
        </div>
    );
}
