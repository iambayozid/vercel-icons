import * as React from "react";
const SvgLogoVite = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-vite_svg__a)">
      <mask
        id="logo-vite_svg__b"
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
      <g mask="url(#logo-vite_svg__b)">
        <path
          fill="url(#logo-vite_svg__c)"
          d="m15.596 2.323-7.18 12.84a.39.39 0 0 1-.68.003L.413 2.324a.39.39 0 0 1 .408-.577l7.188 1.285a.4.4 0 0 0 .138 0l7.038-1.283a.39.39 0 0 1 .411.574"
        />
        <path
          fill="url(#logo-vite_svg__d)"
          d="M11.433.061 6.119 1.103a.195.195 0 0 0-.157.18l-.327 5.52a.196.196 0 0 0 .239.202l1.479-.342a.195.195 0 0 1 .235.23l-.44 2.152a.195.195 0 0 0 .248.226l.914-.278a.195.195 0 0 1 .248.226L7.859 12.6c-.043.212.238.327.355.146l.079-.122 4.33-8.64a.195.195 0 0 0-.212-.28l-1.523.294a.195.195 0 0 1-.224-.245l.994-3.446a.195.195 0 0 0-.225-.246"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="logo-vite_svg__c"
        x1={0.2}
        x2={9.2}
        y1={1.3}
        y2={13.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#41D1FF" />
        <stop offset={1} stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient
        id="logo-vite_svg__d"
        x1={7.6}
        x2={9.2}
        y1={0.3}
        y2={11.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA83" />
        <stop offset={0.1} stopColor="#FFDD35" />
        <stop offset={1} stopColor="#FFA800" />
      </linearGradient>
      <clipPath id="logo-vite_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoVite;
