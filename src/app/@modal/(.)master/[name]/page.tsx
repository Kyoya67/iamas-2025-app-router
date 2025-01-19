import { notFound } from "next/navigation";
import { Metadata } from "next";
import Modal from "../../_components/Master";
import { getStudentByName } from "../../../_lib/api";

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

    return (
        <Modal>
            <h1 className="text-[#000f9f] text-fluid-xl mb-4">
                {student.authorJapaneseName}
            </h1>
        </Modal>
    );
}