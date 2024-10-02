"use client";


export default function Showcase3d() {
  return (
    <div className="w-ful h-fit">
      <video
        className="w-full h-full object-cover"
        loop
        autoPlay
        muted
      >
        <source src="./assets/showcase-3d.webm" type="video/webm" />
      </video>
    </div>

  );
}
