import * as React from "react";
const SvgLogoVercelApi = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-vercel-api_svg__a)">
      <mask
        id="logo-vercel-api_svg__b"
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
      <g mask="url(#logo-vercel-api_svg__b)">
        <path
          stroke="#fff"
          strokeDasharray="1.25 1.25"
          strokeLinejoin="round"
          strokeWidth={1.3}
          d="m8 2 7 12.5H1z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="logo-vercel-api_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoVercelApi;
