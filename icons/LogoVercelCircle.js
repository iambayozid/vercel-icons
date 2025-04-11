import * as React from "react";
const SvgLogoVercelCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-vercel-circle_svg__a)">
      <mask
        id="logo-vercel-circle_svg__b"
        width={16}
        height={16}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M0 0h16v16H0z" />
      </mask>
      <g mask="url(#logo-vercel-circle_svg__b)">
        <path
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 15.3A7.3 7.3 0 1 0 8 .7a7.3 7.3 0 0 0 0 14.6"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="m8 4.5 3.5 6.125h-7z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="logo-vercel-circle_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoVercelCircle;
