import * as React from "react";
const SvgTerminalWindow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#terminal-window_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm4 10.134.442-.442 2.073-2.073a.875.875 0 0 0 0-1.238L4.442 5.308 4 4.866l-.884.884.442.442L5.366 8 3.558 9.808l-.442.442zm4-1.38h4.373V11H8V9.754"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="terminal-window_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTerminalWindow;
