import * as React from "react";
const SvgLogoTurborepo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-turborepo_svg__a)">
      <mask
        id="logo-turborepo_svg__b"
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
      <g mask="url(#logo-turborepo_svg__b)">
        <path
          fill="url(#logo-turborepo_svg__c)"
          fillRule="evenodd"
          d="M8 0v2a6 6 0 0 1 .5 11.98v2.005A8 8 0 0 0 8 0m-.5 15.985V13.98a5.97 5.97 0 0 1-3.374-1.399L2.708 14A7.97 7.97 0 0 0 7.5 15.985M2 13.292A7.97 7.97 0 0 1 0 8h2c0 1.477.534 2.83 1.418 3.874z"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.5 8a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="logo-turborepo_svg__c"
        x1={8.7}
        x2={1.8}
        y1={2}
        y2={8.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset={1} stopColor="#FF1E56" />
      </linearGradient>
      <clipPath id="logo-turborepo_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoTurborepo;
