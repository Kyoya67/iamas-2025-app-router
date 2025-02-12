import { StudentLink } from "./StudentLink";

export function MasterContent({
    leftColumn,
    rightColumn
}: {
    leftColumn: { authorJapaneseName: string, authorEnglishName: string }[],
    rightColumn: { authorJapaneseName: string, authorEnglishName: string }[]
}) {
    return (
        <div className="grid grid-cols-2 gap-x-[3rem] min-[500px]:gap-x-[6rem] lg:gap-x-[1rem] pr-6">
            <div className="flex flex-col gap-y-[1.5rem] lg:gap-y-[0.6rem]">
                {leftColumn.map((item) => (
                    <div
                        key={`left-${item.authorEnglishName}`}
                        className="px-fluid-padding-xs flex justify-center items-center"
                    >
                        <StudentLink
                            href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                            className="
                                peer
                                text-[#000f9f] text-fluid-base text-center 
                                hover:opacity-70 transition-opacity ten-mincho
                            "
                            name={item.authorJapaneseName}
                            englishName={item.authorEnglishName}
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-y-[1.5rem] lg:gap-y-[0.5rem]">
                {rightColumn.map((item, i) => (
                    <div
                        key={`right-${item.authorEnglishName}`}
                        className="px-fluid-padding-xs flex justify-center items-center group/name"
                    >
                        <StudentLink
                            href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                            className={`
                                text-[#000f9f] text-fluid-base text-center hover:opacity-70 transition-opacity
                                ${(i === 1 || i === 5 || i === 9) ? 'ovo' : 'ten-mincho'}
                            `}
                            name={(i === 1 || i === 5 || i === 9)
                                ? item.authorEnglishName
                                : item.authorJapaneseName
                            }
                            englishName={item.authorEnglishName}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
} 