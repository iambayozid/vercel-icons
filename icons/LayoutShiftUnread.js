import * as React from "react";
const SvgLayoutShiftUnread = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#layout-shift-unread_svg__a)">
      <mask
        id="layout-shift-unread_svg__b"
        width={16}
        height={16}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M0 16V0h16v16z" />
      </mask>
      <g mask="url(#layout-shift-unread_svg__b)">
        <path fill="#52A8FF" d="M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M3 14.5h-.75a.75.75 0 0 1-.75-.75V12.5H0v1.25A2.25 2.25 0 0 0 2.25 16H3zm3 0H4V16h2zM4 0h2v1.5H4zM1.5 3.5V2.25a.75.75 0 0 1 .75-.75H3V0h-.75A2.25 2.25 0 0 0 0 2.25V3.5zm0 5v3H0v-3zm0-1v-3H0v3zM8.75 16a2.25 2.25 0 0 1-2.25-2.25V2.25A2.25 2.25 0 0 1 8.75 0h1.627c-.354.441-.61.952-.751 1.5H8.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75V6.374a4 4 0 0 0 1.5-.751v8.127A2.25 2.25 0 0 1 13.75 16z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="layout-shift-unread_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLayoutShiftUnread;
