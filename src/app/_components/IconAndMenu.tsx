import Image from "next/image";

export default function IconAndMenu() {
    return (
        <div>
            <Image
                // src="/iconAndMenu.webp"
                src="/menu_bar3.png"
                alt="アイコンとメニュー"
                width={200}
                height={400}
                className="fixed top-3 left-3"
                style={{
                    zIndex: 2,
                    width: 'clamp(170px, 5vw, 200px)'
                }}
            />
        </div>
    );
}