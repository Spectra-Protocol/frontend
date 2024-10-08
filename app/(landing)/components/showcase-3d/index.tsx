"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function Showcase3d() {
  const { theme } = useTheme();
  const [src, setSrc] = React.useState<string>("");
  
  React.useEffect(() => {
    theme === "dark"
      ? setSrc("/assets/showcase-dark.png")
      : setSrc("/assets/showcase-light.png");
  }, [theme]);

  return (
    <div className="w-ful h-fit">
      <Image
        src={src}
        alt="Showcases"
        width={1920}
        height={1080}
        loading="lazy"
      />
    </div>

  );
}
