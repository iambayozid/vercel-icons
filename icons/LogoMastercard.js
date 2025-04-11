import * as React from "react";
const SvgLogoMastercard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-mastercard_svg__a)">
      <mask
        id="logo-mastercard_svg__b"
        width={16}
        height={16}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2"
        />
      </mask>
      <g mask="url(#logo-mastercard_svg__b)">
        <path fill="#000" d="M0 0h16v16H0z" />
        <path
          fill="#EB001B"
          d="M6.045 10.933a2.934 2.934 0 1 0 .108-5.867 2.934 2.934 0 0 0-.108 5.867"
        />
        <path
          fill="#F79E1B"
          d="M9.956 10.933a2.934 2.934 0 1 0 0-5.868 2.934 2.934 0 0 0 0 5.868"
        />
        <path
          fill="#FF5F00"
          d="M8 10.187A2.93 2.93 0 0 0 8.978 8 2.93 2.93 0 0 0 8 5.813 2.93 2.93 0 0 0 7.022 8 2.92 2.92 0 0 0 8 10.187"
        />
      </g>
    </g>
    <defs>
      <clipPath id="logo-mastercard_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoMastercard;
