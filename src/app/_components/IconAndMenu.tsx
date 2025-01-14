import Image from "next/image";

export default function IconAndMenu() {
    return (
        <div>
            <Image
                src="/iconAndMenu.webp"
                alt="アイコンとメニュー"
                width={170}
                height={280}
                className="object-contain fixed top-3 left-3"
                style={{
                    zIndex: 2,
                    width: 'clamp(170px, 5vw, 200px)'
                }}
            />
        </div>
    );
}