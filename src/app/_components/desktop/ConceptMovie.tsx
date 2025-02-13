import Image from "next/image";
import Link from "next/link";
import { getImagePath } from '@/app/_lib/imagePath';

export default function ConceptMovie() {
    return (
        <Link
            href="https://www.youtube.com/watch?v=joTQYufTBe0"
            target="_blank"
            rel="noopener noreferrer"
            className="
                hidden md:block 
                fixed 
                top-[-50px] 
                right-0 
                cursor-pointer 
                z-20 
                flex 
                items-start
            "
        >
            <div className="
                w-[18vh]
            ">
                <Image
                    src={getImagePath("/desktop/conceptMovie.webp")}
                    alt="コンセプトムービー"
                    width={500}
                    height={500}
                />
            </div>
        </Link>
    );
}
