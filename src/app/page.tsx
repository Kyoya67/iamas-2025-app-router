import Image from "next/image";

export default function Home() {
  return (
    <div className="isolate">
      <Image
        src="/mobile/circle.webp"
        alt="円"
        fill
        className="sm:hidden h-screen w-full object-cover object-right mix-blend-darken z-10"
      />
      <Image
        src="/circle.webp"
        alt="円"
        fill
        className="hidden sm:block h-screen w-full object-cover object-right"
      />
    </div>
  );
}

