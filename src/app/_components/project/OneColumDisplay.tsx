import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import Image from "next/image";
import Link from "next/link";
import { ProjectDisplayProps } from "@/app/_types/project";
import { getImagePath } from '@/app/_lib/imagePath';

export default function OneColumDisplay({ formattedData }: ProjectDisplayProps) {
    return (
        <div className="
            absolute inset-0 
            flex justify-center
            mt-[17vh] sm:mt-[15vh] lg:hidden
        ">
            <div className="
                w-[80vw] md:w-[45vw]
                max-w-[800px]
            ">
                <div className="flex justify-between border-b border-black items-end">
                    <h1 className="
                        text-black
                        text-base sm:text-xl md:text-[1.2rem]
                        ten-mincho
                    ">
                        プロジェクト研究展示
                    </h1>
                    <div className="
                        text-[#000f9f]
                        text-[0.8rem] sm:text-[0.9rem]
                        ten-mincho mb-0 sm:mb-[0.1rem]
                    ">
                        22-24日 / 13:00 ~ 14:00
                    </div>
                </div>

                <ScrollMaskContent className="h-[55vh] pt-3">
                    <div className="pr-3 sm:pr-6">
                        <div className="flex flex-col gap-y-[1.5rem] ten-mincho">
                            {formattedData.map((item) => (
                                <div
                                    key={`${item.urlName}`}
                                    className="w-full"
                                >
                                    <Link href={`/project/${item.urlName}`}>
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
        </div>
    );
}