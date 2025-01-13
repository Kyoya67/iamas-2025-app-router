import type { Metadata } from "next";
import { fetchGASData } from "../_lib/api";
import Link from "next/link";

export const metadata: Metadata = {
    title: "IAMAS 2025 修士研究発表会",
}

export const revalidate = 3600;

export default async function Master() {
    const data = await fetchGASData();

    const midPoint = Math.ceil(data.length / 2);
    const leftColumn = data.slice(0, midPoint);
    const rightColumn = data.slice(midPoint);

    return (
        <div className="absolute inset-0 w-full min-h-screen p-8" style={{ zIndex: 0 }}>
            <div className="grid grid-cols-2 gap-y-fluid-lg max-w-5xl mx-auto mt-[6.5rem]">
                <div className="flex flex-col gap-y-fluid-lg">
                    {leftColumn.map((item) => (
                        <div key={`left-${item.authorEnglishName}`} className="px-fluid-xs flex justify-center items-center">
                            <Link
                                href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                                className="text-[#000f9f] text-fluid-lg text-center hover:opacity-70 transition-opacity"
                                prefetch={false}
                            >
                                {item.authorJapaneseName}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-y-fluid-lg">
                    {rightColumn.map((item, i) => (
                        <div key={`right-${item.authorEnglishName}`} className="px-fluid-xs flex justify-center items-center">
                            <Link
                                href={`/master/${item.authorEnglishName.split(' ').join('')}`}
                                className="text-[#000f9f] text-fluid-lg text-center hover:opacity-70 transition-opacity"
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
    );
}
