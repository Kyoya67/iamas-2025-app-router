import { StudentContent } from "@/app/_components/master/StudentContent";
import { STUDENT_NAMES } from "@/app/_lib/constants";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
    params: {
        name: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `IAMAS 2025 - ${params.name}`,
    };
}

export default function MasterPage({ params }: Props) {
    const currentIndex = STUDENT_NAMES.findIndex(
        s => s.authorEnglishName.split(' ').join('') === params.name
    );

    if (currentIndex === -1) notFound();

    return (
        <div className="
            absolute inset-0 flex justify-center 
            max-w-2xl mx-auto
        ">
            <div className="
                w-[50vw] min-w-[20rem] max-w-[35rem] 
                h-[60vh] md:h-[65vh] 
                mt-[18vh] xs:mt-[17vh] md:mt-[10vh] pr-6">
                <StudentContent name={params.name} />
            </div>
        </div>
    );
}