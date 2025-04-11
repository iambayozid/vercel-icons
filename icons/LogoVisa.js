import * as React from "react";
const SvgLogoVisa = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-visa_svg__a)">
      <mask
        id="logo-visa_svg__b"
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
      <g mask="url(#logo-visa_svg__b)">
        <path fill="#1434CB" d="M0 0h16v16H0z" />
        <path
          fill="url(#logo-visa_svg__c)"
          d="M9.708 4.444 7.86 9.22l-.77-4.063c-.103-.457-.462-.712-.821-.712H3.607l-.051.204c.616.152 1.079.304 1.49.508.127.064.234.177.299.66l1.334 5.74h1.899l2.978-7.112H9.708z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="logo-visa_svg__c"
        x1={68.2}
        x2={69.6}
        y1={96.4}
        y2={40.9}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <clipPath id="logo-visa_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoVisa;
