import type { Metadata } from "next";
import { fetchGASData } from "../_lib/api";

export const metadata: Metadata = {
    title: "IAMAS 2025 修士研究発表会",
}

export default async function Master() {
    const data = await fetchGASData();

    return (
        <div className="absolute inset-0 w-full min-h-screen p-8">
            <div className="grid grid-cols-2 gap-y-fluid-lg max-w-5xl mx-auto mt-[6.5rem]">
                {data.map((item, index) => (
                    <div key={index} className="px-fluid-xs">
                        <div className="text-[#000f9f] text-fluid-lg text-center">
                            {item.authorJapaneseName}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
