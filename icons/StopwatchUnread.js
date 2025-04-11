import * as React from "react";
const SvgStopwatchUnread = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#stopwatch-unread_svg__a)">
      <mask
        id="stopwatch-unread_svg__b"
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
      <g mask="url(#stopwatch-unread_svg__b)">
        <path fill="#52A8FF" d="M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M10 .562V-.25H6v1.5h1.25v.79a6.97 6.97 0 0 0-3.641 1.508l-.58-.578-.529-.53L1.44 3.5l.53.53.578.579A7 7 0 1 0 14.49 6.376a4 4 0 0 1-1.616.075 5.5 5.5 0 1 1-3.17-2.682 4 4 0 0 1-.191-1.605 7 7 0 0 0-.764-.124v-.79h.95q.118-.36.3-.688M8.75 6v3.75h-1.5V6z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="stopwatch-unread_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStopwatchUnread;
