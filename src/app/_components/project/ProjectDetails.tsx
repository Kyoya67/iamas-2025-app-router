import { ScrollMaskContent } from "@/app/_components/ScrollMaskContent";
import { ProjectSlider } from "./ProjectSlider";
import { PROJECT_INFO } from "@/app/_lib/projectInfo";

type ProjectDetailsProps = {
    project: typeof PROJECT_INFO[0];
    directoryName: string;
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
    pictureNum: number;
};

export function ProjectDetails({
    project,
    directoryName,
    currentImageIndex,
    setCurrentImageIndex,
    pictureNum
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
                <div className="font-bold text-[0.75rem] sm:text-base mb-2 text-left">
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
                font-bold
                text-[0.75rem] sm:text-base text-left
                whitespace-pre-wrap
                sm:whitespace-normal
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
            <div className="text-lg sm:text-2xl mb-1 text-[#000f9f] ten-mincho text-left">{project.projectName}</div>
            <div className={`
                ${directoryName === 'ExtremeBiologies' ? 'mmd:flex' : 'md:flex'}
                justify-between border-b border-[#000f9f] mb-3 pb-1
            `}>
                <div className={`
                    ${directoryName === 'ExtremeBiologies' ? 'md:flex' : 'flex'} 
                    items-end w-[3/4]
                `}>
                    <div className="relative bottom-[-0.05rem] text-sm sm:text-base mr-3 ten-mincho">{project.representative}</div>
                    <div className="text-xs sm:text-sm ten-mincho">{sharerText}</div>
                </div>
                <div className="relative bottom-[-0.24rem]">
                    <div className="flex text-[#000f9f] text-xs sm:text-sm">
                        <div className="mr-2">センタービル12F</div>
                        <div>レセプションルーム</div>
                    </div>
                </div>
            </div>
            <ScrollMaskContent className="text-black text-sm mb-4 h-[70vh] mb-4 pr-5 pb-4 flex-1 overflow-y-auto">
                <ProjectSlider
                    directoryName={directoryName}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                    totalImages={pictureNum}
                    projectName={project.projectName}
                    captions={captions}
                />
                <div className="font-bold text-base sm:text-xl mb-2 ten-mincho text-[#000f9f]">研究概要</div>
                <div className={`text-xs sm:text-sm mb-4 whitespace-pre-wrap ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'} ten-mincho`}>
                    {project.projectConcept}
                </div>

                <div className="font-bold text-base sm:text-xl mb-2 ten-mincho text-[#000f9f]">本年度の活動内容</div>
                {project.wholeActivityContent1 && (
                    <div className="ten-mincho">
                        <div className={`text-xs sm:text-sm mb-3 whitespace-pre-wrap ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                            {project.wholeActivityContent1}
                        </div>
                        {project.wholeActivityContent2 &&
                            <div className={`text-xs sm:text-sm mb-3 whitespace-pre-wrap ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                {project.wholeActivityContent2}
                            </div>
                        }
                        {project.wholeActivityContent3 &&
                            <div className={`text-xs sm:text-sm mb-3 whitespace-pre-wrap ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                {project.wholeActivityContent3}
                            </div>
                        }
                    </div>
                )}

                {activities.length > 0 && (
                    <div className="ten-mincho">
                        {activities.map((activity, index) => (
                            <div key={index} className="mb-4">
                                {activity.name && renderActivityName(activity.name, activity.subtitle || '')}
                                {activity.content && (
                                    <div className={`text-xs sm:text-sm ${directoryName === 'ExtremeBiologies' ? 'text-left' : 'text-justify'}`}>
                                        {activity.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </ScrollMaskContent>
        </>
    );
} 