import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/webP_mobile/circle.webp"
      alt="円"
      layout="responsive"
      width={100}
      height={200}
      objectFit="cover"
      className="absolute top-0 left-0"
      style={{ zIndex: 1 }}
    />
  );
}

