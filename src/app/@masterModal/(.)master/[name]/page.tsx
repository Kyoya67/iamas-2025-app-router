import { StudentContent } from "@/app/_components/master/StudentContent";
import { MASTER_INFO } from "@/app/_lib/masterInfo";
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
    const currentIndex = MASTER_INFO.findIndex(
        s => s.authorEnglishName.split(' ').join('') === name
    );

    const nextPath = currentIndex < MASTER_INFO.length - 1
        ? `/master/${MASTER_INFO[currentIndex + 1].authorEnglishName.split(' ').join('')}`
        : null;

    const previousPath = currentIndex > 0
        ? `/master/${MASTER_INFO[currentIndex - 1].authorEnglishName.split(' ').join('')}`
        : null;

    return (
        <Modal nextPath={nextPath} previousPath={previousPath} name={name}>
            <StudentContent name={name} />
        </Modal>
    );
}