import * as React from "react";
const SvgRobot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#robot_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.75 2.8a1.5 1.5 0 1 0-1.5 0V5H7a6 6 0 0 0-5.917 5H0v3h1v3h14v-3h1v-3h-1.083A6 6 0 0 0 9 5h-.25zM7 6.5A4.5 4.5 0 0 0 2.5 11v3.5h11V11A4.5 4.5 0 0 0 9 6.5zm.25 4.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M10.5 13a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="robot_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRobot;
