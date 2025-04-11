import * as React from "react";
const SvgSunAlternate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#sun-alternate_svg__a)">
      <mask
        id="sun-alternate_svg__b"
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
      <g mask="url(#sun-alternate_svg__b)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M13.81 13.5a8 8 0 0 0 1.12-1.5H1.07c.314.542.69 1.045 1.12 1.5zM15.938 9a8 8 0 0 1-.52 2H.582a8 8 0 0 1-.52-2zM16 8A8 8 0 0 0 0 8zM3.335 14.5A7.96 7.96 0 0 0 8 16c1.74 0 3.352-.556 4.665-1.5z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="sun-alternate_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunAlternate;
