import Image from "next/image";
import { getImagePath } from '@/app/_lib/imagePath';

export default async function Home() {
  return (
    <div className="isolate">
      <Image
        src={getImagePath("/mobile/circle.webp")}
        alt="円"
        fill
        className="
                sm:hidden 
                absolute top-0 right-0 
                h-screen w-full 
                object-cover object-right 
                mix-blend-darken z-10"
      />
      <Image
        src={getImagePath("/desktop/iPadCircle.webp")}
        alt="円"
        fill
        className="
                hidden sm:block md:hidden
                absolute top-0 right-0 
                h-screen w-full 
                object-cover object-right
                pointer-events-none"
      />
      <Image
        src={getImagePath("/desktop/circle.webp")}
        alt="円"
        fill
        className="
                hidden md:block 
                absolute top-0 right-0 
                h-screen w-full 
                object-cover object-right
                pointer-events-none"
      />
    </div>
  );
}

