import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen absolute inset-0">
      <Image
        src="/mobile/circle.webp"
        alt="円"
        fill
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

