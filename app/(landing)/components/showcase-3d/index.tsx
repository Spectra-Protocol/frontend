"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function Showcase3d() {
  return (
    <Spline
      scene="https://prod.spline.design/paCWnxAkcoKfP8e4/scene.splinecode"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
