import * as React from "react";
const SvgLogoVue = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-vue_svg__a)">
      <mask
        id="logo-vue_svg__b"
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
      <g mask="url(#logo-vue_svg__b)">
        <path
          fill="#41B883"
          d="m9.72.917-1.848 3.2-1.848-3.2H-.128l8 13.856 8-13.856z"
        />
        <path
          fill="#34495E"
          d="m9.72.917-1.848 3.2-1.848-3.2H3.072l4.8 8.313 4.8-8.313z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="logo-vue_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoVue;
