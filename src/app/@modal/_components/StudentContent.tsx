import Image from "next/image";

interface StudentContentProps {
    japaneseName: string;
    englishName: string;
    profileJapanese: string;
    profileEnglish: string;
    X_URL?: string;
    instagram_URL?: string;
    other_URL?: string;
    workTitleJapanese: string;
    workTitleEnglish: string;
    workDescriptionJapanese: string;
    workDescriptionEnglish: string;
}

export function StudentContent({
    japaneseName, englishName,
    profileJapanese, profileEnglish,
    X_URL, instagram_URL, other_URL,
    workTitleJapanese, workTitleEnglish,
    workDescriptionJapanese, workDescriptionEnglish
}: StudentContentProps) {
    return (
        <div className="pr-3 text-black">
            <div className="flex mb-4 border-b border-[#000f9f] pb-4">
                <Image src={`/profile/${englishName.split(' ').join('')}.webp`}
                    alt={englishName}
                    width={100}
                    height={100}
                    className="mr-3"
                />
                <div>
                    <h1 className="text-fluid-xl">
                        {japaneseName}
                    </h1>
                    <h2 className="text-[#000f9f] text-fluid-lg">
                        {englishName}
                    </h2>
                </div>
            </div>

            <div className="mb-4">
                <p className="text-fluid-sm">
                    {workTitleJapanese}
                </p>
                <p className="text-fluid-sm text-[#000f9f] mb-2">
                    {workTitleEnglish}
                </p>

                <Image src={`/work/${englishName.split(' ').join('')}.webp`}
                    alt={workTitleEnglish}
                    width={300}
                    height={300}
                />
            </div>
            <p className="text-fluid-sm mb-4">
                {workDescriptionJapanese}
            </p>
            <p className="text-fluid-sm mb-4">
                {workDescriptionEnglish}
            </p>
            <div className="flex flex-row gap-4">
                <a href={X_URL} target="_blank" rel="noopener noreferrer">
                    X
                </a>
                <a href={instagram_URL} target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href={other_URL} target="_blank" rel="noopener noreferrer">
                    Other
                </a>
            </div>
        </div>
    );
} 