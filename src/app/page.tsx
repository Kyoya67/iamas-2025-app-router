'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`h-screen fixed top-0 right-0 overflow-hidden ${isSmallScreen ? 'aspect-[9/16] max-w-[100vw]' : 'w-screen'
      }`}>
      <Image
        src={isSmallScreen ? "/mobile/circle.webp" : "/circle.webp"}
        alt="円"
        fill
        className="absolute top-0 right-0 h-screen w-full object-cover object-right"
        style={{
          zIndex: 2,
          maskImage: 'url(/scan.webp)',
          WebkitMaskImage: 'url(/scan.webp)',
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'right',
          WebkitMaskPosition: 'right'
        }}
      />
    </div>
  );
}

