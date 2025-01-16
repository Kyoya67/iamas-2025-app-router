import Image from "next/image";
export default function MobileBase() {
    return (
        <div className="relative z-0">
            <Image
                src="/mobile/base/rightMiddle.webp"
                alt="右中"
                width={35}
                height={70}
                className="
                    object-contain 
                    fixed bottom-12 right-0 w-fit h-fit"
            />
            <Image
                src="/mobile/base/rightBottom.webp"
                alt="右下"
                width={192.5}
                height={100}
                className=" 
                    fixed bottom-0 right-0 w-fit h-fit"
                style={{
                    width: 'clamp(200px, 500vw, 250px)'
                }}
            />
            <Image
                src="/mobile/base/leftBottom.webp"
                alt="左下"
                width={120}
                height={100}
                className="
                    object-contain
                    fixed bottom-0 left-0 flex items-end gap-0"
            />
        </div>
    );
}