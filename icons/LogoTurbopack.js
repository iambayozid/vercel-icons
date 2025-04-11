import * as React from "react";
const SvgLogoTurbopack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-turbopack_svg__a)">
      <mask
        id="logo-turbopack_svg__b"
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
      <g mask="url(#logo-turbopack_svg__b)">
        <path
          fill="url(#logo-turbopack_svg__c)"
          fillRule="evenodd"
          d="M0 2.993V13c0 .648.205 1.248.555 1.738l1.479-1.479A1 1 0 0 1 2 13V8H0zM8 2h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8.5v2H13a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H8zm-.5 14v-2H3q-.135 0-.259-.034l-1.48 1.48A3 3 0 0 0 3 16z"
          clipRule="evenodd"
        />
        <mask
          id="logo-turbopack_svg__d"
          width={10}
          height={10}
          x={3}
          y={3}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path
            fill="#fff"
            d="M12 3.5H4a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5"
          />
        </mask>
        <g mask="url(#logo-turbopack_svg__d)">
          <path
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M12 3.5H4a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="logo-turbopack_svg__c"
        x1={8.7}
        x2={1.8}
        y1={2}
        y2={8.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset={1} stopColor="#FF1E56" />
      </linearGradient>
      <clipPath id="logo-turbopack_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoTurbopack;
