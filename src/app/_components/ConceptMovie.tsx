"use client"
import Image from "next/image";
import Link from "next/link";

export default function ConceptMovie() {
    return (
        <Link
            href="https://www.youtube.com/watch?v=joTQYufTBe0"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block fixed top-[-50px] right-0 cursor-pointer z-20"
        >
            <Image
                src="/conceptMovie.webp"
                alt="コンセプト"
                width={1000}
                height={1000}
                className="object-contain"
                style={{
                    width: 'clamp(300px, 60vw, 310px)'
                }}
            />
        </Link>
    );
}
