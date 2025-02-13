import { Metadata } from "next";
import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";

export const metadata: Metadata = {
    title: "IAMAS 2025 開催概要",
};

export default function Overview() {
    return (
        <div className="
            absolute inset-0 left-[-0.7rem]
            p-fluid-padding-sm min-[500px]:p-0
            relative h-fit w-fit mx-auto
            flex flex-col items-center
            text-[#000f9f]
        ">
            <div className="
                w-[clamp(18rem,60vw,23rem)]
                min-[500px]:w-[80vw]
                md:w-[clamp(24rem,50vw,40rem)]
                px-8 pr-6
            ">
                <div className="
                    relative
                    mt-[17vh] 
                    text-xl min-[500px]:text-2xl 
                    text-black
                    border-b-[0.1rem] border-black
                ">
                    ごあいさつ
                </div>
            </div>

            <ScrollMaskContent className="
                h-[60vh] xs:h-[60vh] min-[500px]:h-[55vh]
                mt-2 pb-[2rem]
                w-[clamp(18rem,60vw,23rem)]
                min-[500px]:w-[80vw]
                md:w-[clamp(24rem,50vw,40rem)]
            ">
                <div className="
                    px-8 pr-6
                    text-sm
                    min-[500px]:text-base
                    tracking-[-0.25px]
                    leading-[17px]
                    min-[500px]:leading-[1.8]
                    text-justify
                    ten-mincho-text
                ">
                    <span className="ten-mincho-text">
                        情報科学芸術大学院大学 [IAMAS] は、科学的知性と芸術的感性の融合を目指して研究活動を行う大学院大学です。
                        本学では、芸術、デザイン、工学、社会学など、多様な分野を背景に持つ</span>
                    <span className="ovo">23</span>
                    <span className="ten-mincho-text">期生が、それぞれの専門性や視点を活かしながら、制作や研究に取り組んできました。
                        その集大成を発表する場として、このたび「IAMAS </span>
                    <span className="ovo">2025</span>
                    <span className="ten-mincho-text">」と題した成果展を開催いたします。</span>
                    <br /><br />
                    <span className="ten-mincho-text">
                        今年度のテーマは「苦悩と誠実」です。</span>
                    <span className="ovo">23</span>
                    <span className="ten-mincho-text">期生は、個々の研究活動において、一筋縄ではいかない困難に直面し、何度も悩み、苦しむ場面がありました。
                        それでも、自身と研究に深く向き合い、誠実に取り組む姿勢を貫き、作品・研究を強固なものへと形作りました。
                        このプロセスは、ときに滑らかで、ときに粗い軌跡を残しながら、円環を描くように内省と挑戦を重ねていくものとして捉えられます。
                        苦悩の中で誠実に研究と向き合い続けた</span>
                    <span className="ovo">23</span>
                    <span className="ten-mincho-text">期生の成果を、ぜひご高覧ください。</span>
                    <br /><br />
                    <span className="ten-mincho-text">IAMAS</span>
                    <span className="ovo">2025</span>
                    <span className="ten-mincho-text">実行委員長</span>
                    <br />
                    <span className="ten-mincho-text">成瀬陽太</span>
                    <br /><br />
                    <span className="ten-mincho-text">IAMASとは</span>
                    <br />
                    <span className="ten-mincho-text">IAMAS（情報科学芸術大学院大学）は、岐阜県の情報産業拠点ソフトピアジャパンプロジェクトの一環として、</span>
                    <span className="ovo">1996</span>
                    <span className="ten-mincho-text">年に岐阜県立国際情報科学芸術アカデミーとして開学し、</span>
                    <span className="ovo">2001</span>
                    <span className="ten-mincho-text">年に修士課程のみの大学院大学として設立された学校です。充実した講師陣による少数定員の大学院大学として海外にも広く知られ、英文名称 Institute of Advanced
                        Media Arts and Sciences からIAMAS（イアマス）と呼ばれています。芸術と科学の融合を建学の理念に掲げてスタートしたIAMASは、最新の科学技術や文化を吸収しながら、
                        新しいものづくりやデザイン、先端的な芸術表現などを社会に還元する高度な表現者の育成を目指しています。IAMASの教育の先端性は、工学、デザイン、芸術、人文学など、様々
                        な異なる分野の学生たちによるユニークな研究を生み出します。専門性を習得し、様々な知を統合し、それを新たな領域まで拡張することによって、修了後は表現者として社会にお
                        ける新しい領域で活動し、それを展開する能力を身につけます。</span>
                </div>
            </ScrollMaskContent>
        </div>
    );
}
