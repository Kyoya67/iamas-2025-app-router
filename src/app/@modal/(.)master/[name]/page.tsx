import { fetchGASData } from "../../../_lib/api";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Modal from "../../_components/Master";

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
    const [data, { name }] = await Promise.all([
        fetchGASData(),
        params
    ]);

    const student = data.find(item =>
        item.authorEnglishName.split(' ').join('') === name
    );

    if (!student) {
        notFound();
    }

    return (
        <Modal>
            <h1 className="text-[#000f9f] text-fluid-xl mb-4">
                {student.authorJapaneseName}
            </h1>
            InterCepted!!!!!!!
        </Modal>
    );
}