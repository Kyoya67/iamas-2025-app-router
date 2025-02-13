import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { ProjectSlider } from "./ProjectSlider";
import { PROJECT_INFO } from "@/app/_lib/projectInfo";

type ProjectDetailsProps = {
    project: typeof PROJECT_INFO[0];
    directoryName: string;
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
    pictureNum: number;
    isModal: boolean;
};

export function ProjectDetails({
    project,
    directoryName,
    currentImageIndex,
    setCurrentImageIndex,
    pictureNum,
    isModal
}: ProjectDetailsProps) {
    const sharerText = project.assistant
        ? `${project.sharer}、${project.assistant}`
        : project.sharer;

    const captions = [
        project.caption0,
        project.caption1,
        project.caption2,
        project.caption3,
        project.caption4,
    ];

    const activities = Array.from({ length: 10 }, (_, i) => i + 1)
        .map(i => ({
            name: project[`activityName${i}` as keyof typeof project],
            subtitle: project[`activityName${i}Subtitle` as keyof typeof project],
            content: project[`activityContent${i}` as keyof typeof project]
        }));

    const renderActivityName = (name: string, subtitle: string) => {
        const urlRegex = /(.*?)\((https?:\/\/[^\s)]+)\)(.*)/;
        const match = name.match(urlRegex);

        if (match) {
            //eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [_, beforeUrl, url, afterUrl] = match;
            return (
                <div className="font-bold text-[0.75rem] min-[500px]:text-base mb-2 text-left ten-mincho">
                    {beforeUrl}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#000f9f] hover:opacity-70"
                    >
                        ({url})
                    </a>
                    {afterUrl}
                </div>
            );
        }

        return (
            <div className="
                mb-2
                font-bold ten-mincho
                text-[0.75rem] min-[500px]:text-base text-left
                whitespace-pre-wrap
                min-[500px]:whitespace-normal
                leading-tight
                ">
                <div>
                    {name}
                </div>
                <span>
                    {subtitle}
                </span>
            </div>
        );
    };

    return (
        <>
            <div className="text-lg min-[500px]:text-2xl mb-1 text-[#000f9f] ten-mincho-texttext-left">{project.projectName}</div>
            <div className={`
                lg:flex
                justify-between border-b border-[#000f9f] mb-3 pb-1
            `}>
                <div className={`
                    flex
                    items-end w-[3/4]
                `}>
                    <div className="relative bottom-[-0.05rem] text-sm min-[500px]:text-base mr-3 ten-mincho">{project.representative}</div>
                    <div className="text-xs min-[500px]:text-sm ten-mincho">{sharerText}</div>
                </div>
                <div className="relative bottom-[-0.24rem]">
                    <div className="flex text-[#000f9f] text-xs min-[500px]:text-sm">
                        <div className="mr-2">センタービル12F</div>
                        <div>レセプションルーム</div>
                    </div>
                </div>
            </div>
            <div className="ten-mincho">
                <ScrollMaskContent className={`text-black text-sm mb-4 ${isModal ? 'h-[72vh]' : 'h-[50vh]'} mb-4 pr-5 pb-4 flex-1 overflow-y-auto`}>
                    <ProjectSlider
                        directoryName={directoryName}
                        currentImageIndex={currentImageIndex}
                        setCurrentImageIndex={setCurrentImageIndex}
                        totalImages={pictureNum}
                        projectName={project.projectName}
                        captions={captions}
                    />
                    <div className="font-bold text-base min-[500px]:text-xl mb-2 ten-mincho-texttext-[#000f9f]">研究概要</div>
                    <div className={`text-xs min-[500px]:text-sm mb-4 whitespace-pre-wrap ten-mincho-text${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                        {project.projectConcept}
                    </div>

                    <div className="font-bold text-base min-[500px]:text-xl mb-2 ten-mincho-texttext-[#000f9f]">本年度の活動内容</div>
                    {project.wholeActivityContent1 && (
                        <div>
                            <div className={`text-xs min-[500px]:text-sm mb-3 whitespace-pre-wrap ten-mincho-text${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                {project.wholeActivityContent1}
                            </div>
                            {project.wholeActivityContent2 &&
                                <div className={`text-xs min-[500px]:text-sm mb-3 whitespace-pre-wrap ten-mincho-text${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                    {project.wholeActivityContent2}
                                </div>
                            }
                            {project.wholeActivityContent3 &&
                                <div className={`text-xs min-[500px]:text-sm mb-3 whitespace-pre-wrap ten-mincho-text${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                    {project.wholeActivityContent3}
                                </div>
                            }
                        </div>
                    )}

                    {activities.length > 0 && (
                        <div>
                            {activities.map((activity, index) => (
                                <div key={index} className="mb-4">
                                    {activity.name && renderActivityName(activity.name, activity.subtitle || '')}
                                    {activity.content && (
                                        <div className={`text-xs min-[500px]:text-sm ten-mincho-text${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                            {activity.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </ScrollMaskContent>
            </div>
        </>
    );
} 