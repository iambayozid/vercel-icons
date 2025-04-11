import * as React from "react";
const SvgLogoNext = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-next_svg__a)">
      <mask
        id="logo-next_svg__b"
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
      <g mask="url(#logo-next_svg__b)">
        <path
          fill="#000"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 15.4A7.4 7.4 0 1 0 8 .6a7.4 7.4 0 0 0 0 14.8"
        />
        <path fill="#000" d="M10.63 11V5z" />
        <path
          stroke="url(#logo-next_svg__c)"
          strokeLinejoin="round"
          strokeMiterlimit={1.4}
          d="M10.63 11V5"
        />
        <path
          fill="url(#logo-next_svg__d)"
          fillRule="evenodd"
          d="M5.995 5h-1.25v6h1.25V6.968l6.366 7.74a8 8 0 0 0 .992-.763z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="logo-next_svg__c"
        x1="-nan"
        x2="-nan"
        y1="-nan"
        y2="-nan"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.6} stopColor="#fff" stopOpacity={0.6} />
        <stop offset={0.8} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="logo-next_svg__d"
        x1={9.9}
        x2={13.6}
        y1={9.1}
        y2={13.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <clipPath id="logo-next_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoNext;
