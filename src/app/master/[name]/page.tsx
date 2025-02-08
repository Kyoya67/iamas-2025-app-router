import { StudentContent } from "@/app/_components/master/StudentContent";
import { MASTER_INFO } from "@/app/_lib/masterInfo";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        name: string;
    }>;
}

export default async function MasterPage({ params }: Props) {
    const { name } = await params;
    const currentIndex = MASTER_INFO.findIndex(
        s => s.authorEnglishName.split(' ').join('') === name
    );

    if (currentIndex === -1) notFound();

    return (
        <div className="
            absolute inset-0 flex justify-center 
            max-w-2xl mx-auto
        ">
            <div className="
                w-[50vw] min-w-[20rem] max-w-[80rem] 
                h-[60vh] md:h-[65vh] 
                mt-[18vh] xs:mt-[17vh] md:mt-[10vh] pr-6">
                <StudentContent name={name} />
            </div>
        </div>
    );
}