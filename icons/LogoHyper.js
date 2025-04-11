import * as React from "react";
const SvgLogoHyper = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-hyper_svg__a)">
      <mask
        id="logo-hyper_svg__b"
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
      <g mask="url(#logo-hyper_svg__b)">
        <path
          fill="#000"
          stroke="url(#logo-hyper_svg__c)"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 .8H4.1A3.3 3.3 0 0 0 .8 4.1V12a3.3 3.3 0 0 0 3.3 3.3H12a3.3 3.3 0 0 0 3.3-3.3V4.1A3.3 3.3 0 0 0 12 .8Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M7.494 6.804a.1.1 0 0 1-.029.036v-.003L4.691 8.976c-.086.064-.215-.01-.172-.101l.804-1.744a.08.08 0 0 0 .003-.061.1.1 0 0 0-.043-.05L4.05 6.31a.1.1 0 0 1-.034-.03.08.08 0 0 1-.006-.082.1.1 0 0 1 .029-.035L6.82 4.025c.083-.064.212.012.172.1l-.882 1.87a.08.08 0 0 0-.002.067q.015.032.052.05l1.281.58q.024.01.04.028a.08.08 0 0 1 .014.085zm2.129.954a.623.623 0 0 0 0 1.244h1.755a.622.622 0 1 0 0-1.245H9.622z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="logo-hyper_svg__c"
        x1={8.3}
        x2={8.3}
        y1={0.8}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F743B6" />
        <stop offset={1} stopColor="#FCC043" />
      </linearGradient>
      <clipPath id="logo-hyper_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoHyper;
