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
                h-[60vh] min-[500px]:h-[55vh]
                mt-[15vh] md:ml-[6rem]
                scroll-x-hidden
            ">
                <div className="
                    w-full 
                    max-[500px]:px-4 
                    min-[500px]:w-[80%] 
                    mx-auto 
                    mt-[5vh]
                ">
                    <div className="flex flex-col gap-y-fluid-lg ten-mincho">
                        {formattedData.map((item) => (
                            <div
                                key={`${item.urlName}`}
                                className="
                                    w-[73vw] max-w-[28rem]
                                    pr-5
                                "
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
                                    <div className="text-left text-base min-[500px]:text-xl">
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