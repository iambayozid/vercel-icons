import * as React from "react";
const SvgWindowAdvanced = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M.75 1H0v10.5A2.5 2.5 0 0 0 2.5 14H6v-1.5H2.5a1 1 0 0 1-1-1v-9h13V7H16V1zm3 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <mask
      id="window-advanced_svg__a"
      width={9}
      height={9}
      x={7}
      y={7}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M7 7h9v9H7z" />
    </mask>
    <g mask="url(#window-advanced_svg__a)">
      <path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        d="M9 12.5 12.5 7v3.5H15L11.5 16v-3.5z"
      />
    </g>
  </svg>
);
export default SvgWindowAdvanced;
