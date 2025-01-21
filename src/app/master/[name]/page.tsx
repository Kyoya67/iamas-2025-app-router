import { notFound } from "next/navigation";
import { Metadata } from "next";
import { StudentContent } from "@/app/_components/master/StudentContent";
import { getStudentByName } from "../../_lib/api";
import { STUDENT_NAMES } from "@/app/_lib/constants";
import { LanguageProvider } from '@/app/_contexts/LanguageContext';

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

    const currentIndex = STUDENT_NAMES.findIndex(
        s => s.authorEnglishName.split(' ').join('') === name
    );

    const nextPath = currentIndex < STUDENT_NAMES.length - 1
        ? `/master/${STUDENT_NAMES[currentIndex + 1].authorEnglishName.split(' ').join('')}`
        : null;

    const previousPath = currentIndex > 0
        ? `/master/${STUDENT_NAMES[currentIndex - 1].authorEnglishName.split(' ').join('')}`
        : null;

    return (
        <div className="
            absolute inset-0 flex justify-center 
            max-w-2xl mx-auto
        ">
            <div className="
                h-[60vh]
                mt-[10vh]
                ml-6
                overflow-y-auto
                text-left text-[#000f9f]
                mask-container
                overview-scroll
            ">
                <div className="pr-6">
                    <LanguageProvider>
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
                            nextPath={nextPath}
                            previousPath={previousPath}
                        />
                    </LanguageProvider>
                </div>
            </div>
        </div>
    );
}