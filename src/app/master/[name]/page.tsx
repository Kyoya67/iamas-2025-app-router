import { fetchGASData } from "../../_lib/api";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        name: string;
    }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { name } = await params;
    return {
        title: `IAMAS 2025 - ${name}`,
    };
}

export default async function MasterPage({ params }: Props) {
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
        <div className="absolute inset-0 w-full min-h-screen p-8">
            <div className="max-w-5xl mx-auto mt-[6.5rem]">
                <h1 className="text-[#000f9f] text-fluid-xl mb-4">
                    {student.authorJapaneseName}
                </h1>
                {/* 他の学生情報を表示 */}
            </div>
        </div>
    );
}