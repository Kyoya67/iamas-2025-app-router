import Image from "next/image";

type Props = {
    path: string;
    isHovered: boolean;
    index: number;
}

export default function HoverImage({ path, isHovered, index }: Props) {
    return (
        <Image
            src={path}
            alt="hover image"
            width={80}
            height={80}
            style={{
                position: 'fixed',
                top: `calc(10.2rem + ${index * 1.13}rem)`,
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