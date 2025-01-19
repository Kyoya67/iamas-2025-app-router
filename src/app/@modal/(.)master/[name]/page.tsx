import { notFound } from "next/navigation";
import { Metadata } from "next";
import Modal from "../../_components/Master";
import { StudentContent } from "../../_components/StudentContent";
import { getStudentByName } from "../../../_lib/api";
import { STUDENT_NAMES } from "@/app/_lib/constants";

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

export default async function MasterModal({ params }: Props) {
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
        <Modal nextPath={nextPath} previousPath={previousPath}>
            <StudentContent name={student.authorJapaneseName} />
        </Modal>
    );
}