import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import Image from "next/image";
import Link from "next/link";
import { ProjectDisplayProps } from "@/app/_types/project";
import { getImagePath } from '@/app/_lib/imagePath';

export default function OneColumDisplay({ formattedData }: ProjectDisplayProps) {
    return (
        <div className="
            absolute inset-0 flex justify-center
            mt-5 md:mt-0 lg:hidden
        ">
            <ScrollMaskContent className="
                h-[60vh] sm:h-[55vh]
                mt-[15vh] md:ml-[6rem]
            ">
                <div className="mx-auto pr-3 sm:pr-6 sm:ml-6">
                    <div className="flex flex-col gap-y-[1.5rem] ten-mincho">
                        {formattedData.map((item) => (
                            <div
                                key={`${item.urlName}`}
                                className="w-[73vw] max-w-[28rem]"
                            >
                                <Link
                                    href={`/project/${item.urlName}`}
                                >
                                    <Image
                                        src={getImagePath(`/project/${item.directory}/0.webp`)}
                                        alt={item.projectName}
                                        width={500}
                                        height={169}
                                        className="object-cover aspect-[16/9] w-full"
                                        quality={100}
                                    />
                                    <div className="text-left text-base sm:text-xl">
                                        {item.projectName}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollMaskContent>
        </div>
    );
}