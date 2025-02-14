import { MASTER_INFO } from "@/app/_lib/masterInfo";
import Image from "next/image";
import { getImagePath } from '@/app/_lib/imagePath';

export const StudentSection = ({ name }: { name: string }) => {
    const student = MASTER_INFO.find(
        student => student.authorEnglishName === name ||
            student.authorJapaneseName === name
    );

    if (!student) return null;

    return (
        <div className="mb-5">
            <div className="flex items-end w-full mt-3 mb-2 relative">
                <Image
                    src={getImagePath(`/master/profile/${student.authorEnglishName.split(' ').join('')}.webp`)}
                    alt={student.authorEnglishName}
                    width={85}
                    height={85}
                    className="object-contain sm:w-[100px] sm:h-[100px]"
                />
                <div className="flex flex-col text-base sm:text-xl text-black absolute bottom-[-0.3rem] ml-[6rem] sm:ml-[7rem]">
                    <div className="text-sm">IAMAS修士2年</div>
                    <div>{student.authorJapaneseName}</div>
                </div>
            </div>
            <div className="text-xs sm:text-sm text-black">{student.profileJapanese}</div>
        </div>
    );
}; 