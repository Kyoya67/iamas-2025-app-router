import { StudentContent } from "@/app/_components/master/StudentContent";
import { STUDENT_NAMES } from "@/app/_lib/constants";
import type { Metadata } from "next";
import Modal from "../../_components/Modal";

interface Props {
    params: {
        name: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const name = params.name;
    return {
        title: `IAMAS 2025 - ${name}`,
    };
}

export default async function MasterModal({ params }: Props) {
    const name = params.name;
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
        <Modal nextPath={nextPath} previousPath={previousPath} name={name}>
            <StudentContent name={name} />
        </Modal>
    );
}