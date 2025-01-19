import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "IAMAS 2025 修士研究発表会",
}

export default async function Master() {
    // const data = await fetchStudentNames();
    const data = [
        { authorJapaneseName: '嶋 晏澄', authorEnglishName: 'Azumi Shima' },
        { authorJapaneseName: '竹本誠', authorEnglishName: 'Makoto Takemoto' },
        { authorJapaneseName: '宮﨑那奈子', authorEnglishName: 'Nanako Miyazaki' },
        { authorJapaneseName: '後藤朋美', authorEnglishName: 'Tomomi Goto' },
        { authorJapaneseName: '浅井睦', authorEnglishName: 'Mutsushi Asai' },
        { authorJapaneseName: '猪﨑康世', authorEnglishName: 'Kosei Izaki' },
        { authorJapaneseName: '上田麟太朗', authorEnglishName: 'Rintaro UEDA' },
        { authorJapaneseName: '璃月ゆあ', authorEnglishName: 'Yua Riduki' },
        { authorJapaneseName: 'カワイタケシ', authorEnglishName: 'KAWAI Takeshi' },
        { authorJapaneseName: '菊田佳恵', authorEnglishName: 'Yoshie Kikuta' },
        { authorJapaneseName: '三波蒼菜', authorEnglishName: 'aona minami' },
        { authorJapaneseName: '志村翔太', authorEnglishName: 'Shota Shimura' },
        { authorJapaneseName: 'ジョン ジユン', authorEnglishName: 'JUNG Jieyun' },
        { authorJapaneseName: '對中優', authorEnglishName: 'Masaru Tainaka' },
        { authorJapaneseName: '徳保晴人', authorEnglishName: 'Tokubo Haruto' },
        { authorJapaneseName: '成瀬陽太', authorEnglishName: 'Santa NARUSE' },
        { authorJapaneseName: 'バク ソミン', authorEnglishName: 'BAK Somin' },
        { authorJapaneseName: '橋本正隆', authorEnglishName: 'Masataka Hashimoto' },
        { authorJapaneseName: '松井美緒', authorEnglishName: 'Mio Matsui' },
        { authorJapaneseName: '山口結子', authorEnglishName: 'Yuiko Yamaguchi' },
        { authorJapaneseName: 'ジョアンナ　リュ', authorEnglishName: 'Joanna LYU' }]

    const midPoint = Math.ceil(data.length / 2);
    const leftColumn = data.slice(0, midPoint);
    const rightColumn = data.slice(midPoint);

    return (
        <div className="
            absolute inset-0 flex justify-center 
            p-fluid-padding-sm sm:p-0
            mt-5
        ">
            <div className="
                relative
                h-[60vh]
                mt-[15vh]
                overflow-y-auto
                text-left text-[#000f9f]
                w-[clamp(18rem,80vw,50rem)]
                mask-container
                overview-scroll
            ">
                <div className="grid grid-cols-2 gap-y-fluid-lg mx-auto">
                    <div className="flex flex-col gap-y-fluid-lg">
                        {leftColumn.map((item) => (
                            <div key={`left-${item.authorEnglishName}`} className="px-fluid-padding-sm flex justify-center items-center">
                                <Link
                                    href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                                    className="text-[#000f9f] text-fluid-base text-center hover:opacity-70 transition-opacity"
                                    prefetch={false}
                                >
                                    {item.authorJapaneseName}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-fluid-lg">
                        {rightColumn.map((item, i) => (
                            <div key={`right-${item.authorEnglishName}`} className="px-fluid-padding-sm flex justify-center items-center">
                                <Link
                                    href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                                    className="text-[#000f9f] text-fluid-base text-center hover:opacity-70 transition-opacity"
                                    prefetch={false}
                                >
                                    {(i === 1 || i === 5 || i === 9)
                                        ? item.authorEnglishName
                                        : item.authorJapaneseName
                                    }
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
