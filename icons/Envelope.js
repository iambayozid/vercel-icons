import * as React from "react";
const SvgEnvelope = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#envelope_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.264 3.5H2.736L8 8.012zM1.5 4.416V11.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4.416L8.488 9.57 8 9.988l-.488-.419zM0 2h16v9.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="envelope_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEnvelope;
