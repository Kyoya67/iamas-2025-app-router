import Image from "next/image";

type Props = {
    path: string;
    isHovered: boolean;
    index: number;
}

const DEFAULT_WIDTH = 80;
const WIDTH_MAP: Record<number, number> = {
    1: 90,
    2: 140,
    4: 70,
}

export default function HoverImage({ path, isHovered, index }: Props) {
    return (
        <Image
            src={path}
            alt="hover image"
            width={WIDTH_MAP[index] || DEFAULT_WIDTH}
            height={WIDTH_MAP[index] || DEFAULT_WIDTH}
            style={{
                position: 'fixed',
                top: `calc(10.7rem + ${index * 1.15}rem)`,
                left: '0.75rem',
                transition: 'all 300ms ease-out',
                transform: isHovered ? 'scale(1)' : 'scale(0.95)',
                opacity: isHovered ? 1 : 0,
                pointerEvents: 'none',
                zIndex: 50
            }}
        />
    );
} 