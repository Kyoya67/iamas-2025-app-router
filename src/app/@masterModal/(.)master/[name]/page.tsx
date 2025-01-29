import { StudentContent } from "@/app/_components/master/StudentContent";
import { MASTER_INFO } from "@/app/_lib/masterInfo";
import Modal from "@/app/_components/modalSet/Modal";

interface Props {
    params: Promise<{
        name: string;
    }>;
}

export default async function MasterModal({ params }: Props) {
    const { name } = await params;
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
        <Modal
            nextPath={nextPath}
            previousPath={previousPath}
            backPath="/master"
            modalType="master"
        >
            <StudentContent name={name} />
        </Modal>
    );
}
