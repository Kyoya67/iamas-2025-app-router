import Image from "next/image";

export default function Base() {
    return (
        <div className="relative z-0 isolation-auto">
            <Image
                src="/base/rightTop.webp"
                alt="右上"
                width={70}
                height={20}
                className="object-contain fixed top-0 right-0 w-fit h-fit mix-blend-normal"
                style={{
                    width: 'clamp(70px, 5vw, 75px)'
                }}
            />
            <Image
                src="/base/rightBottom.webp"
                alt="右下"
                width={600}
                height={300}
                className="object-contain fixed bottom-0 right-0 w-fit h-fit
                    opacity-0 translate-y-10 pointer-events-none
                    md:opacity-100 md:translate-y-0 md:pointer-events-auto
                    transition-opacity duration-500 ease-in-out"
                style={{
                    width: 'clamp(600px, 60vw + 100px, 900px)'
                }}
            />
            <div className="fixed bottom-0 left-0 flex items-end gap-0">
                <Image
                    src="/base/leftBottom.webp"
                    alt="左下"
                    width={150}
                    height={100}
                    className="object-contain"
                />
                <Image
                    src="/base/mixed.webp"
                    alt="ミックス"
                    width={500}
                    height={100}
                    className="object-contain"
                />
            </div>
        </div>
    );
}