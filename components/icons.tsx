import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 10V23M16 23L8 19M16 23L24 19" stroke="#006FEE" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 23V15M16 15L8 11M16 15L24 11" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" className="stroke-primary dark:stroke-white"/>
    </svg>
  </svg>
);

export const Favicon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path d="M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z" fill="#006FEE" />
    <g filter="url(#filter0_d_4421_305)">
      <path d="M16 24V16M16 16L8 12M16 16L24 12" stroke="#99C7FB" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 11V24M16 24L8 20M16 24L24 20" stroke="#99C7FB" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 23V15M16 15L8 11M16 15L24 11" stroke="#E6F1FE" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 10V23M16 23L8 19M16 23L24 19" stroke="#E6F1FE" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <filter id="filter0_d_4421_305" x="3.33276" y="7.33331" width="25.3345" height="23.3334" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.292843 0 0 0 0 0.627897 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4421_305" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4421_305" result="shape" />
      </filter>
    </defs>
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);


