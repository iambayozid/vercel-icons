import * as React from "react";
const SvgMenuAltUnread = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="#52A8FF" d="M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M9.531 2H1v1.5h8.626A4 4 0 0 1 9.531 2M1.75 12H1v1.5h14V12zM1 7h14v1.5H1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenuAltUnread;
