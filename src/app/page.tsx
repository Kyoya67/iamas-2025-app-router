import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/mobile/circle.webp"
        alt="円"
        fill
        className="sm:hidden h-screen w-full object-cover object-right"
      />
      <Image
        src="/circle.webp"
        alt="円"
        fill
        className="hidden sm:block h-screen w-full object-cover object-right"
      />
    </>
  );
}

