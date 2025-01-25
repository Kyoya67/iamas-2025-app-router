import { notFound } from "next/navigation";
import { Metadata } from "next";
import { StudentContent } from "@/app/_components/master/StudentContent";
import { getStudentByName } from "../../_lib/api";

interface Props {
    params: Promise<{
        name: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { name } = await params;
    return {
        title: `IAMAS 2025 - ${name}`,
    };
}

export default async function MasterPage({ params }: Props) {
    const { name } = await params;
    const student = await getStudentByName(name);
    if (!student) notFound();

    return (
        <div className="
            absolute inset-0 flex justify-center 
            max-w-2xl mx-auto
        ">
            <div className="
                w-[50vw] min-w-[20rem] max-w-[35rem] 
                h-[60vh] md:h-[65vh] 
                mt-[18vh] xs:mt-[17vh] md:mt-[10vh] pr-6">
                <StudentContent
                    japaneseName={student.authorJapaneseName}
                    englishName={student.authorEnglishName}
                    profileJapanese={student.profileJapanese}
                    profileEnglish={student.profileEnglish}
                    X_URL={student.X_URL}
                    instagram_URL={student.instagram_URL}
                    other_URL={student.other_URL}
                    workTitleJapanese={student.workTitleJapanese}
                    workTitleEnglish={student.workTitleEnglish}
                    workDescriptionJapanese={student.workDescriptionJapanese}
                    workDescriptionEnglish={student.workDescriptionEnglish}
                />
            </div>
        </div>
    );
}