import * as React from "react";
const SvgFunctionMiddleware = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#function-middleware_svg__a)">
      <mask
        id="function-middleware_svg__b"
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
      <g mask="url(#function-middleware_svg__b)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M2.25 0A2.25 2.25 0 0 0 0 2.25v11.5A2.25 2.25 0 0 0 2.25 16h11.5A2.25 2.25 0 0 0 16 13.75V2.25A2.25 2.25 0 0 0 13.75 0zM1.5 2.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75zm4 7.75V7.125a.875.875 0 1 1 1.75 0v4.125h1.5V7.125a.875.875 0 0 1 1.75 0v4.125H12V7.125a2.375 2.375 0 0 0-4-1.732 2.37 2.37 0 0 0-2.5-.477V4.75H4v6.5h1.5z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="function-middleware_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFunctionMiddleware;
