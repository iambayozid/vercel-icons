import * as React from "react";
const SvgInboxUnread = (props) => (
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
      d="m15.29 6.078.604 1.21a1 1 0 0 1 .106.448V12a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12V7.736a1 1 0 0 1 .106-.447L3 1.5h6.626c-.126.49-.158.998-.095 1.5H3.927l-2.25 4.5H6.75v.75a1.25 1.25 0 0 0 2.5 0V7.5h5.073l-.506-1.012a4 4 0 0 0 1.472-.41zM1.5 12V9h3.854a2.75 2.75 0 0 0 5.292 0H14.5v3a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInboxUnread;
