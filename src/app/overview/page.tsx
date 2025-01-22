import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IAMAS 2025 開催概要",
}

export default function Overview() {
    return (
        <div className="
            absolute inset-0 
            p-fluid-padding-sm sm:p-0
            relative h-full w-full
            flex flex-col items-center
            sm:ml-[0.5rem]
        ">
            <div className="
                w-[clamp(18rem,60vw,23rem)]
                md:w-[clamp(24rem,50vw,40rem)]
                px-8 pr-6
            ">
                <div className="
                    ten-mincho
                    relative
                    mt-[17vh] 
                    text-xl sm:text-2xl 
                    text-black
                    border-b-[0.1rem] border-black
                ">
                    ごあいさつ
                </div>
            </div>
            <div className="
                relative
                h-[60vh] sm:h-[55vh]
                mt-3
                overflow-y-auto
                text-left text-[#000f9f]
                text-justify
                w-[clamp(18rem,60vw,23rem)]
                md:w-[clamp(24rem,50vw,40rem)]
                mask-container
                overview-scroll
                ten-mincho
                auto-ovo
            ">
                <div className="
                    px-8 pr-6
                    sm:text-base
                    text-xs
                    tracking-[-0.25px]
                    leading-[17px]
                    sm:leading-[1.8]
                    text-justify
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
            </div>
        </div>
    );
}
